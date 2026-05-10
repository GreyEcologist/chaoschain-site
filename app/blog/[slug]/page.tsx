import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllPosts, getPostBySlug, siteUrl } from "@/lib/blog";

export const revalidate = 3600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    const canonical = post.canonicalUrl ?? `/blog/${post.slug}`;
    const images = post.image ? [post.image] : undefined;
    return {
      title: `${post.title} | ChaosChain Blog`,
      description: post.description,
      alternates: { canonical },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${siteUrl}/blog/${post.slug}`,
        siteName: "ChaosChain",
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.updated,
        authors: post.author ? [post.author] : undefined,
        tags: post.tags,
        images,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <div className="page-grid pointer-events-none absolute inset-0 -z-10" />
      <section className="relative bg-[linear-gradient(180deg,rgba(14,15,19,0.98),rgba(9,10,14,1))] pt-6 md:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.06),transparent_34%),linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px] opacity-70" />
        <SiteHeader theme="dark" />
        <article className="section-shell relative z-10 pt-14 pb-14 md:pt-20 md:pb-20">
          <Link href="/blog" className="text-sm font-medium text-cyan-200/80 transition-colors hover:text-cyan-100">
            Back to blog
          </Link>
          <div className="mt-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <time dateTime={post.date}>
                {new Intl.DateTimeFormat("en", {
                  month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
                }).format(new Date(post.date))}
              </time>
              <span aria-hidden="true">/</span>
              <span>{post.readingTime}</span>
              {post.author ? (
                <>
                  <span aria-hidden="true">/</span>
                  <span>{post.author}</span>
                </>
              ) : null}
            </div>
            <h1 className="mt-5 text-4xl leading-tight font-semibold text-white md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{post.description}</p>
          </div>
        </article>
      </section>

      <article className="section-shell py-12 md:py-16">
        <div className="max-w-3xl">
          {/* Ghost HTML rendered via Tailwind Typography */}
          <div
            className="prose prose-invert prose-cyan max-w-none
              prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12
              prose-h3:text-xl prose-h3:mt-9
              prose-p:text-zinc-300 prose-p:leading-8
              prose-a:text-cyan-200 prose-a:no-underline hover:prose-a:text-cyan-100
              prose-strong:text-white
              prose-blockquote:border-cyan-300/50 prose-blockquote:text-zinc-300
              prose-code:text-cyan-100 prose-code:bg-zinc-950 prose-code:border prose-code:border-zinc-800 prose-code:rounded
              prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800
              prose-table:text-sm
              prose-th:text-zinc-100 prose-th:bg-zinc-900/70
              prose-td:text-zinc-300
              prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Cross-posting note */}
          <div className="mt-14 rounded-lg border border-zinc-800 bg-zinc-950/65 p-5 md:p-6">
            <p className="text-sm font-medium tracking-[0.18em] text-cyan-200/70 uppercase">
              Cross-posting note
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              When this article is syndicated to Medium, use{" "}
              <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 font-mono text-cyan-100">
                {post.url}
              </code>{" "}
              as the canonical URL.
            </p>
          </div>

          {post.mediumUrl ? (
            <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950/65 p-5 md:p-6">
              <p className="text-sm font-medium tracking-[0.18em] text-cyan-200/70 uppercase">
                Also on Medium
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                This article is syndicated on{" "}
                <a href={post.mediumUrl} className="font-medium text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-100" target="_blank" rel="noopener noreferrer">
                  Medium
                </a>
                . The ChaosChain version is canonical.
              </p>
            </div>
          ) : null}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}