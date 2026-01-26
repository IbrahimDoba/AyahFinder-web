import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/logo.png"
                alt="Ayahfinder"
                width={120}
                height={40}
                className="w-auto h-20 brightness-0 invert"
              />
              <span className="text-2xl font-bold italic text-white">
                Ayahfinder
              </span>
            </Link>
            <p className="text-gray-light">
              Making the Quran accessible to everyone
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-accent font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-light hover:text-primary-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-light hover:text-primary-accent transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-light hover:text-primary-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-light hover:text-primary-accent transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-accent font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-light">
              <li>Email: ibrahimdoba55@gmail.com</li>
              <li>Developer: Ibrahim Doba</li>
              <li>Location: Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-medium pt-6 text-center text-gray-light">
          <p>&copy; {currentYear} Ayahfinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
