import type { Metadata } from "next";
import { getAllPosts, getFeaturedPosts, paginatePosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";

export const metadata: Metadata = {
  title: "Blog - Ayahfinder | Quran Recitation Tips & Islamic Knowledge",
  description:
    "Explore articles about Quran recitation, Islamic knowledge, and how to make the most of Ayahfinder. Learn about tajweed, surah meanings, and more.",
  keywords: [
    "Quran blog",
    "Islamic articles",
    "Quran recitation tips",
    "tajweed",
    "surah meanings",
    "Ayahfinder blog",
  ],
  openGraph: {
    title: "Blog - Ayahfinder | Quran Recitation Tips & Islamic Knowledge",
    description:
      "Explore articles about Quran recitation, Islamic knowledge, and how to make the most of Ayahfinder.",
    type: "website",
    url: "https://getayahfinder.com/blog",
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const featuredPost = featuredPosts.length > 0 ? featuredPosts[0] : allPosts[0];
  const regularPosts = allPosts.filter((post) => post.slug !== featuredPost?.slug);
  
  const { posts, totalPages, currentPage } = paginatePosts(regularPosts, 1, 9);

  return (
    <div className="min-h-screen bg-gray-bg">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-green to-primary-light py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ayahfinder Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover insights about Quran recitation, Islamic knowledge, and tips
            to deepen your connection with the Holy Quran.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-dark mb-6">
            Featured Article
          </h2>
          <BlogCard post={featuredPost} featured />
        </section>
      )}

      {/* All Posts */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-dark mb-6">
          Latest Articles
        </h2>
        {posts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-medium text-lg">
              No articles yet. Check back soon for new content!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
