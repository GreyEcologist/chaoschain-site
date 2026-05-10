import GhostContentAPI from "@tryghost/content-api";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://chaoscha.in";

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL ?? "https://chaoschain.ghost.io",
  key: process.env.GHOST_CONTENT_API_KEY ?? "",
  version: "v5.0",
});

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author?: string;
  tags?: string[];
  image?: string;
  canonicalUrl?: string;
  mediumUrl?: string;
  content: string; // Ghost HTML
  readingTime: string;
  url: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapPost(post: any): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.custom_excerpt ?? "",
    date: (post.published_at as string)?.split("T")[0] ?? "",
    updated: (post.updated_at as string)?.split("T")[0],
    author: post.authors?.[0]?.name,
    tags: post.tags?.map((t: { name: string }) => t.name) ?? [],
    image: post.feature_image ?? undefined,
    canonicalUrl: post.canonical_url || `${siteUrl}/blog/${post.slug}`,
    content: post.html ?? "",
    readingTime: `${post.reading_time ?? 1} min read`,
    url: `${siteUrl}/blog/${post.slug}`,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await api.posts.browse({
    limit: "all",
    include: ["authors", "tags"],
  });
  return posts.map(mapPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const post = await api.posts.read({ slug }, { include: ["authors", "tags"] });
  return mapPost(post);
}