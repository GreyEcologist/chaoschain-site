import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Ghost webhook → revalidate Next.js ISR cache.
 *
 * Configure in Ghost: Settings → Integrations → Add custom integration →
 *   Add webhook. Point it at:
 *     https://chaoscha.in/api/revalidate?secret=<REVALIDATE_SECRET>
 *   Event: "Post published" and "Post updated" and "Post deleted".
 *
 * Ghost POSTs a JSON payload like:
 *   { post: { current: { slug, status, ... }, previous: { ... } } }
 *
 * We revalidate the index (/blog) plus the specific /blog/<slug> page when we
 * can determine it. Slug changes between current and previous both get
 * invalidated so renamed posts don't leave stale URLs cached.
 *
 * Secret can be provided either as ?secret=... or an `x-revalidate-secret`
 * header. Auth is required; without REVALIDATE_SECRET configured the route
 * refuses to run (fail closed).
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

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Server missing REVALIDATE_SECRET." },
      { status: 500 },
    );
  }

  const url = new URL(request.url);
  const providedSecret =
    url.searchParams.get("secret") ??
    request.headers.get("x-revalidate-secret") ??
    "";

  if (providedSecret !== secret) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: GhostWebhookBody = {};
  try {
    body = (await request.json()) as GhostWebhookBody;
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
