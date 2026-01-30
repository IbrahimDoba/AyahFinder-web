import type { MetadataRoute } from "next";
import { getAllPosts, paginatePosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getayahfinder.com";
  const currentDate = new Date();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];

  // Dynamic blog posts
  const posts = getAllPosts();
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog pagination pages
  const { totalPages } = paginatePosts(posts, 1, 9);
  const blogPages = Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${baseUrl}/blog/page/${i + 2}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...blogPosts, ...blogPages];
}
