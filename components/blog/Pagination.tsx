import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}/page/${page}`;
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  return (
    <nav className="flex justify-center items-center gap-2 mt-12">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 text-gray-medium hover:text-primary-green transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </Link>
      )}

      {/* Page Numbers */}
      <div className="flex gap-1">
        {getVisiblePages().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-light">
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={getPageUrl(page as number)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? "bg-primary-green text-white"
                  : "text-gray-medium hover:bg-gray-bg hover:text-gray-dark"
              }`}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 text-gray-medium hover:text-primary-green transition-colors"
        >
          Next
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </nav>
  );
}
