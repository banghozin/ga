import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/income-tax`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/vat`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const guidePosts: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/guide/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const policyPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...corePages, ...guidePosts, ...policyPages];
}
