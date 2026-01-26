"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Ayahfinder"
              width={200}
              height={200}
              className="w-auto h-20"
              priority
            />
            <span className="text-2xl font-bold italic text-primary-green">
              Ayahfinder
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-dark hover:text-primary-green transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-dark hover:text-primary-green transition-colors font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-gray-dark hover:text-primary-green transition-colors font-medium"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-gray-dark hover:text-primary-green transition-colors font-medium"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-dark hover:text-primary-green transition-colors font-medium"
              >
                Terms
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            <li>
              <Link
                href="/"
                className="block py-2 text-gray-dark hover:text-primary-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 text-gray-dark hover:text-primary-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="block py-2 text-gray-dark hover:text-primary-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="block py-2 text-gray-dark hover:text-primary-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="block py-2 text-gray-dark hover:text-primary-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
