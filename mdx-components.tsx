import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/blog/Alert";
import { Tip } from "@/components/blog/Tip";
import { Warning } from "@/components/blog/Warning";
import { CtaBox } from "@/components/blog/CtaBox";
import { CodeBlock } from "@/components/blog/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default elements with custom styling
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4 mt-10 pt-4 border-t border-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-gray-dark mb-3 mt-8">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-dark mb-2 mt-6">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-gray-medium leading-relaxed mb-5 text-base md:text-lg">
        {children}
      </p>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green hover:text-primary-light underline decoration-2 underline-offset-2 transition-colors"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || "#"}
          className="text-primary-green hover:text-primary-light underline decoration-2 underline-offset-2 transition-colors"
        >
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-gray-medium marker:text-primary-green">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-gray-medium marker:text-primary-green marker:font-semibold">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-green bg-gray-bg pl-6 pr-4 py-4 my-6 italic text-gray-dark rounded-r-lg">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-gray-200" />,
    img: ({ src, alt }) => (
      <div className="my-8">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={450}
          className="rounded-xl shadow-lg w-full h-auto"
        />
        {alt && (
          <p className="text-center text-sm text-gray-light mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    ),
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-gray-100 text-primary-green px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      return <CodeBlock className={className}>{children}</CodeBlock>;
    },
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-gray-200 bg-gray-bg px-4 py-3 text-left font-semibold text-gray-dark">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-200 px-4 py-3 text-gray-medium">
        {children}
      </td>
    ),
    // Custom components for MDX
    Alert,
    Tip,
    Warning,
    CtaBox,
    CodeBlock,
    ...components,
  };
}
