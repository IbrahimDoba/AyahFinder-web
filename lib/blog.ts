import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: string;
  authorTitle?: string;
  authorImage?: string;
  coverImage?: string;
  tags: string[];
  category: string;
  readingTime: string;
  content: string;
  excerpt: string;
  canonicalUrl?: string;
  featured?: boolean;
}

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const readingTimeResult = readingTime(content);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        updatedDate: data.updatedDate,
        author: data.author || "Ayahfinder Team",
        authorTitle: data.authorTitle,
        authorImage: data.authorImage,
        coverImage: data.coverImage,
        tags: data.tags || [],
        category: data.category || "General",
        readingTime: readingTimeResult.text,
        content,
        excerpt: data.excerpt || content.slice(0, 200).replace(/#/g, "") + "...",
        canonicalUrl: data.canonicalUrl,
        featured: data.featured || false,
      };
    });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Try .mdx first, then .md
    let fileContents: string;
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, "utf8");
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);
    const readingTimeResult = readingTime(content);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      updatedDate: data.updatedDate,
      author: data.author || "Ayahfinder Team",
      authorTitle: data.authorTitle,
      authorImage: data.authorImage,
      coverImage: data.coverImage,
      tags: data.tags || [],
      category: data.category || "General",
      readingTime: readingTimeResult.text,
      content,
      excerpt: data.excerpt || content.slice(0, 200).replace(/#/g, "") + "...",
      canonicalUrl: data.canonicalUrl,
      featured: data.featured || false,
    };
  } catch (error) {
    return null;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.(mdx|md)$/, ""));
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags).sort();
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  
  // Score posts based on shared tags and category
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      if (post.category === currentPost.category) score += 2;
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length;
      return { post, score };
    });

  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

// Pagination helper
export function paginatePosts(
  posts: BlogPost[],
  page: number,
  postsPerPage: number = 9
): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return {
    posts: posts.slice(startIndex, endIndex),
    totalPages,
    currentPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}
