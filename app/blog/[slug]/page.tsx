import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { formatDate, formatDateISO } from "@/lib/utils";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Alert } from "@/components/blog/Alert";
import { Tip } from "@/components/blog/Tip";
import { Warning } from "@/components/blog/Warning";
import { CtaBox } from "@/components/blog/CtaBox";
import { CodeBlock } from "@/components/blog/CodeBlock";

// Lazy loaded image component - simplified to avoid hydration issues
function LazyImage({ src, alt }: { src: string; alt: string }) {
  // Use a simple img tag with lazy loading - no state to avoid hydration mismatch
  return (
    <div className="my-8">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    metadataBase: new URL("https://getayahfinder.com"),
    title: `${post.title} | Ayahfinder Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    alternates: {
      canonical: post.canonicalUrl || `https://getayahfinder.com/blog/${post.slug}`,
    },
  };
}

// Article JSON-LD Schema
function ArticleSchema({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: formatDateISO(post.date),
    dateModified: post.updatedDate ? formatDateISO(post.updatedDate) : formatDateISO(post.date),
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
    },
    publisher: {
      "@type": "Organization",
      name: "Ayahfinder",
      logo: {
        "@type": "ImageObject",
        url: "https://getayahfinder.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://getayahfinder.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
function BreadcrumbSchema({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://getayahfinder.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://getayahfinder.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://getayahfinder.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  // Read MDX file and extract content without frontmatter
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  // Create a temporary MDX file without frontmatter for rendering
  // We'll render the content directly using a wrapper component
  return (
    <>
      {/* Schema.org Structured Data */}
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-bg border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 max-w-7xl">
            <nav className="flex items-center gap-2 text-sm text-gray-medium">
              <Link href="/" className="hover:text-primary-green transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link href="/blog" className="hover:text-primary-green transition-colors">
                Blog
              </Link>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-dark truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-gray-bg pt-12 pb-8">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary-green text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-white text-gray-medium px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-dark mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-medium mb-8">{post.description}</p>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-medium">
              <div className="flex items-center gap-3">
                {post.authorImage ? (
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-green font-semibold text-lg">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-dark">{post.author}</p>
                  {post.authorTitle && <p className="text-gray-light">{post.authorTitle}</p>}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content -- Cover image removed from article body, only used for SEO/social sharing */}
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none">
              {/* Render MDX content without frontmatter */}
              <MDXContent content={content} />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-dark uppercase tracking-wider mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-bg text-gray-medium px-4 py-2 rounded-full text-sm hover:bg-primary-green hover:text-white transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} />
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <TableOfContents />
                </div>

                {/* Newsletter Box */}
                <div className="bg-primary-green/5 rounded-xl p-6">
                  <h3 className="font-bold text-gray-dark mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-gray-medium mb-4">
                    Get the latest Quran recitation tips and app updates.
                  </p>
                  <Link
                    href="#"
                    className="block w-full text-center bg-primary-green text-white font-medium py-3 rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Download App
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

// Renders inline markdown: **bold**, *italic*, `code`
function renderInlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`)/);
  return (
    <>
      {parts.map((part, i) => {
        if (/^\*\*[^*]+\*\*$/.test(part)) {
          return <strong key={i} className="font-semibold text-gray-dark">{part.slice(2, -2)}</strong>;
        }
        if (/^\*[^*]+\*$/.test(part)) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        if (/^`[^`]+`$/.test(part)) {
          return <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-primary-green">{part.slice(1, -1)}</code>;
        }
        return part;
      })}
    </>
  );
}

// MDX Content renderer component
function MDXContent({ content }: { content: string }) {
  // Clean the content - remove any remaining frontmatter artifacts
  const cleanContent = content.trim();
  
  // Split content by lines to process it
  const lines = cleanContent.split('\n');
  const elements: React.ReactNode[] = [];
  let inComponent = false;
  let componentContent: string[] = [];
  let currentComponent = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines at the start
    if (elements.length === 0 && !trimmed) continue;

    // Handle JSX components
    if (trimmed.startsWith('<Alert') && !inComponent) {
      inComponent = true;
      currentComponent = 'Alert';
      componentContent = [line];
      continue;
    }
    
    if (trimmed.startsWith('<Tip') && !inComponent) {
      inComponent = true;
      currentComponent = 'Tip';
      componentContent = [line];
      continue;
    }
    
    if (trimmed.startsWith('<Warning') && !inComponent) {
      inComponent = true;
      currentComponent = 'Warning';
      componentContent = [line];
      continue;
    }
    
    if (trimmed.startsWith('<CtaBox') && !inComponent) {
      inComponent = true;
      currentComponent = 'CtaBox';
      componentContent = [line];
      continue;
    }

    if (inComponent) {
      componentContent.push(line);
      if (trimmed === `</${currentComponent}>`) {
        // Render the component with stable key based on line index
        const stableKey = `comp-${i}`;
        if (currentComponent === 'Alert') {
          elements.push(
            <Alert key={stableKey} type="info" title="Featured Article">
              This is one of our most popular guides for getting started with AyahFinder. Perfect for new users!
            </Alert>
          );
        } else if (currentComponent === 'CtaBox') {
          elements.push(
            <CtaBox key={stableKey} title="Experience AyahFinder Today" buttonText="Download Free" buttonHref="/waitlist">
              Join millions of Muslims worldwide who use AyahFinder to instantly identify Quran recitations. Available on iOS and Android.
            </CtaBox>
          );
        }
        inComponent = false;
        currentComponent = '';
        componentContent = [];
      }
      continue;
    }

    // Skip import statements
    if (trimmed.startsWith('import ')) continue;

    // Render headers with stable keys
    if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={`h3-${i}`} className="text-xl font-bold text-gray-dark mt-8 mb-4">{renderInlineMarkdown(trimmed.slice(4))}</h3>);
      continue;
    }

    if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={`h2-${i}`} className="text-2xl font-bold text-gray-dark mt-10 mb-4 pt-4 border-t border-gray-200">{renderInlineMarkdown(trimmed.slice(3))}</h2>);
      continue;
    }

    // Render bullet points
    if (trimmed.startsWith('• ') || (trimmed.startsWith('- ') && !trimmed.startsWith('---'))) {
      elements.push(<li key={`li-${i}`} className="ml-6 text-gray-medium list-disc">{renderInlineMarkdown(trimmed.slice(2))}</li>);
      continue;
    }

    // Skip horizontal rules
    if (trimmed === '---') continue;

    // Handle images with lazy loading
    if (trimmed.startsWith('![')) {
      const imgMatch = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
      if (imgMatch) {
        const alt = imgMatch[1];
        const src = imgMatch[2];
        elements.push(
          <LazyImage key={`img-${i}`} src={src} alt={alt} />
        );
      }
      continue;
    }
    
    // Handle image captions (italic lines like *Photo source: ...* or *Image: ...*)
    if ((trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) ||
        trimmed.startsWith('_Image:') || trimmed.startsWith('*Image:')) {
      const caption = trimmed.replace(/^[*_]|[_*]$/g, '');
      elements.push(<p key={`cap-${i}`} className="text-center text-sm text-gray-light italic -mt-6 mb-8">{caption}</p>);
      continue;
    }

    // Default paragraph
    if (trimmed) {
      elements.push(<p key={`p-${i}`} className="text-gray-medium leading-relaxed mb-4">{renderInlineMarkdown(trimmed)}</p>);
    }
  }

  return <>{elements}</>;
}
