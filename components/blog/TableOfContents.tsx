"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Get all h2 and h3 headings from the article
    const articleHeadings = document.querySelectorAll("article h2, article h3");
    const headingData: Heading[] = [];

    articleHeadings.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      headingData.push({
        id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(headingData);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    articleHeadings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="max-h-[calc(100vh-12rem)] overflow-y-auto pb-4">
      <h3 className="text-sm font-semibold text-gray-dark uppercase tracking-wider mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-2 border-l-2 border-gray-200">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${heading.level === 3 ? "ml-4" : ""}`}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`text-left text-sm transition-colors hover:text-primary-green pl-4 border-l-2 -ml-[2px] ${
                activeId === heading.id
                  ? "text-primary-green border-primary-green font-medium"
                  : "text-gray-medium border-transparent"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
