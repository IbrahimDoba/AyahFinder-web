import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-dark mb-8">
        Related Articles
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-green/20 to-primary-light/20 flex items-center justify-center">
                  <span className="text-3xl">🕌</span>
                </div>
              )}
            </div>
            <h3 className="font-semibold text-gray-dark group-hover:text-primary-green transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-light mt-2">
              {formatDate(post.date)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
