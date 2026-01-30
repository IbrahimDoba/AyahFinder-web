import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full min-h-[300px]">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-green to-primary-light flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">🕌</span>
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className="bg-primary-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-light mb-4">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4 group-hover:text-primary-green transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-medium mb-6 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center gap-3">
                {post.authorImage ? (
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-green font-semibold">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-dark">{post.author}</p>
                  {post.authorTitle && (
                    <p className="text-sm text-gray-light">{post.authorTitle}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-green/20 to-primary-light/20 flex items-center justify-center">
              <span className="text-4xl">🕌</span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-primary-green px-2 py-1 rounded text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-xs text-gray-light mb-3">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-dark mb-2 group-hover:text-primary-green transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-medium text-sm line-clamp-2 mb-4 flex-grow">
            {post.description}
          </p>
          <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
            <div className="w-6 h-6 bg-primary-green/10 rounded-full flex items-center justify-center">
              <span className="text-xs text-primary-green font-semibold">
                {post.author.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-gray-medium">{post.author}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
