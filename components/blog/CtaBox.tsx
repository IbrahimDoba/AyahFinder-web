import { ReactNode } from "react";
import Link from "next/link";

interface CtaBoxProps {
  children?: ReactNode;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "primary" | "secondary";
}

export function CtaBox({
  children,
  title = "Download Ayahfinder Today",
  buttonText = "Get the App",
  buttonHref = "#",
  variant = "primary",
}: CtaBoxProps) {
  const variants = {
    primary: {
      bg: "bg-gradient-to-br from-primary-green to-primary-light",
      button:
        "bg-white text-primary-green hover:bg-gray-100",
    },
    secondary: {
      bg: "bg-gradient-to-br from-gray-dark to-gray-medium",
      button:
        "bg-primary-green text-white hover:bg-primary-light",
    },
  };

  const style = variants[variant];

  return (
    <div className={`${style.bg} rounded-2xl p-8 my-8 text-center`}>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h3>
      {children && (
        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
          {children}
        </p>
      )}
      <Link
        href={buttonHref}
        className={`inline-flex items-center justify-center gap-2 ${style.button} font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
        </svg>
        {buttonText}
      </Link>
    </div>
  );
}
