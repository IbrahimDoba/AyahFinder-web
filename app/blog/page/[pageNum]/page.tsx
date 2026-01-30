import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, paginatePosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ pageNum: string }>;
}): Promise<Metadata> {
  const { pageNum } = await params;
  const page = parseInt(pageNum, 10);
  
  if (isNaN(page) || page < 2) {
    return {
      metadataBase: new URL("https://getayahfinder.com"),
      title: "Blog - Ayahfinder | Quran Recitation Tips & Islamic Knowledge",
      description:
        "Explore articles about Quran recitation, Islamic knowledge, and how to make the most of Ayahfinder. Learn about tajweed, surah meanings, and more.",
    };
  }

  return {
    metadataBase: new URL("https://getayahfinder.com"),
    title: `Blog - Page ${page} | Ayahfinder`,
    description: `Browse page ${page} of our Quran recitation articles. Discover insights about Islamic knowledge, tajweed, and surah meanings.`,
    keywords: [
      "Quran blog",
      "Islamic articles",
      "Quran recitation tips",
      "tajweed",
      "surah meanings",
      "Ayahfinder blog",
    ],
    openGraph: {
      title: `Blog - Page ${page} | Ayahfinder`,
      description: `Browse page ${page} of our Quran recitation articles and Islamic knowledge content.`,
      type: "website",
      url: `https://getayahfinder.com/blog/page/${page}`,
    },
    alternates: {
      canonical: `https://getayahfinder.com/blog/page/${page}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate static params for all pages
export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const postsPerPage = 9;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  
  // Generate params for pages 2 and beyond (page 1 is handled by /blog)
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    pageNum: String(i + 2),
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ pageNum: string }>;
}) {
  const { pageNum } = await params;
  const page = parseInt(pageNum, 10);

  // Validate page number
  if (isNaN(page) || page < 2) {
    notFound();
  }

  const allPosts = getAllPosts();
  const { posts, totalPages, currentPage, hasNextPage, hasPrevPage } = paginatePosts(
    allPosts,
    page,
    9
  );

  // If page exceeds total pages, 404
  if (page > totalPages) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-bg">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-green to-primary-light py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ayahfinder Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Page {currentPage} of {totalPages} - Discover insights about Quran recitation and Islamic knowledge.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog"
        />
      </section>
    </div>
  );
}
