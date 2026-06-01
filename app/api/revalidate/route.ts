import crypto from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Ghost webhook → revalidate Next.js ISR cache.
 *
 * Configure in Ghost: Settings → Integrations → Add custom integration →
 *   Add webhook. Set:
 *     Target URL: https://chaoscha.in/api/revalidate
 *     Secret:     <REVALIDATE_SECRET value>
 *   Event: "Post published" and "Post updated" and "Post deleted".
 *
 * Ghost signs the payload with HMAC-SHA256 using the webhook secret and sends
 * the signature in the `X-Ghost-Signature` header as:
 *   sha256=<hex>, t=<timestamp>
 *
 * This route verifies the HMAC signature for Ghost webhooks. It also still
 * accepts `?secret=...` or `x-revalidate-secret` header for manual/curl use.
 *
 * Ghost POSTs a JSON payload like:
 *   { post: { current: { slug, status, ... }, previous: { ... } } }
 *
 * We revalidate the index (/blog) plus the specific /blog/<slug> page when we
 * can determine it. Slug changes between current and previous both get
 * invalidated so renamed posts don't leave stale URLs cached.
 */

type GhostPost = {
  slug?: string;
  status?: string;
};

type GhostWebhookBody = {
  post?: {
    current?: GhostPost;
    previous?: GhostPost;
  };
};

/**
 * Verify the Ghost HMAC-SHA256 signature.
 * Header format: "sha256=<hex>, t=<timestamp>"
 */
function verifyGhostSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
): boolean {
  try {
    // Parse "sha256=<hex>, t=<timestamp>"
    const parts = signatureHeader.split(", ");
    const sigPart = parts.find((p) => p.startsWith("sha256="));
    const tsPart = parts.find((p) => p.startsWith("t="));

    if (!sigPart) return false;

    const providedSig = sigPart.replace("sha256=", "");
    const timestamp = tsPart?.replace("t=", "") ?? "";

    // Ghost signs: body + timestamp
    const payload = rawBody + timestamp;
    const computedSig = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    return crypto.timingSafeEqual(
      Buffer.from(providedSig, "hex"),
      Buffer.from(computedSig, "hex"),
    );
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Server missing REVALIDATE_SECRET." },
      { status: 500 },
    );
  }

  // Read the raw body once for both HMAC verification and JSON parsing
  const rawBody = await request.text();

  // Auth: try Ghost HMAC signature first, then fall back to query/header secret
  const ghostSignature = request.headers.get("x-ghost-signature");
  const url = new URL(request.url);
  const querySecret = url.searchParams.get("secret");
  const headerSecret = request.headers.get("x-revalidate-secret");

  const isAuthed =
    (ghostSignature && verifyGhostSignature(rawBody, ghostSignature, secret)) ||
    querySecret === secret ||
    headerSecret === secret;

  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: GhostWebhookBody = {};
  try {
    body = JSON.parse(rawBody) as GhostWebhookBody;
  } catch {
    // Empty/non-JSON body is allowed — we'll still revalidate /blog.
  }

  const slugs = new Set<string>();
  const currentSlug = body.post?.current?.slug;
  const previousSlug = body.post?.previous?.slug;
  if (currentSlug) slugs.add(currentSlug);
  if (previousSlug && previousSlug !== currentSlug) slugs.add(previousSlug);

  revalidatePath("/blog");
  for (const slug of slugs) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    paths: ["/blog", ...Array.from(slugs).map((s) => `/blog/${s}`)],
  });
}

// Manual trigger from the browser/curl: hit the same URL with a GET to
// revalidate just /blog. Useful for "I just published, refresh now" without
// waiting for a webhook.
export async function GET(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Server missing REVALIDATE_SECRET." },
      { status: 500 },
    );
  }

  const url = new URL(request.url);
  const providedSecret = url.searchParams.get("secret") ?? "";
  if (providedSecret !== secret) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const slug = url.searchParams.get("slug");
  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);

  return NextResponse.json({
    revalidated: true,
    paths: slug ? ["/blog", `/blog/${slug}`] : ["/blog"],
  });
}
