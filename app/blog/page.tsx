import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllPosts, siteUrl } from "@/lib/blog";

export const revalidate = 3600; // re-fetch Ghost content every hour

export const metadata: Metadata = {
  title: "ChaosChain Blog | Worldline for AI Coding Agents",
  description:
    "Field notes on AI coding-agent trust, Proof of Agency, evaluation, and the Worldline decision layer.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "ChaosChain Blog",
    description:
      "Field notes on AI coding-agent trust, Proof of Agency, evaluation, and the Worldline decision layer.",
    url: `${siteUrl}/blog`,
    siteName: "ChaosChain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaosChain Blog",
    description:
      "Field notes on AI coding-agent trust, Proof of Agency, evaluation, and the Worldline decision layer.",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <div className="page-grid pointer-events-none absolute inset-0 -z-10" />
      <section className="relative bg-[linear-gradient(180deg,rgba(14,15,19,0.98),rgba(9,10,14,1))] pt-6 md:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.06),transparent_34%),linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px] opacity-70" />
        <SiteHeader theme="dark" />

        <div className="section-shell relative z-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.24em] text-cyan-200/70 uppercase">
              ChaosChain Blog
            </p>
            <h1 className="text-4xl leading-tight font-semibold text-white md:text-6xl">
              Field notes for teams putting AI agents to work.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
              Practical writing on coding-agent reliability, Proof of Agency,
              Worldline scoring, and the operational patterns behind trusted
              autonomous software work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <div className="grid gap-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-lg border border-zinc-800/90 bg-zinc-950/55 p-5 transition-colors duration-200 hover:border-cyan-400/35 md:p-7"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                  <time dateTime={post.date}>
                    {new Intl.DateTimeFormat("en", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    }).format(new Date(post.date))}
                  </time>
                  <span aria-hidden="true">/</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-zinc-100 transition-colors duration-200 group-hover:text-cyan-100 md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-400">
                  {post.description}
                </p>
                {post.tags?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 text-xs font-medium text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
