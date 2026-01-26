import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Ayahfinder - Identify Quran Recitations Instantly",
  description:
    "Like Shazam, but for the Holy Quran. Identify any Quran recitation and find the exact Surah and Ayah instantly.",
  keywords: [
    "Quran",
    "Ayah finder",
    "Islamic app",
    "Quran recognition",
    "recitation identifier",
  ],
  authors: [{ name: "Ibrahim Doba" }],
  creator: "Ibrahim Doba",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayahfinder.com",
    siteName: "Ayahfinder",
    title: "Ayahfinder - Identify Quran Recitations Instantly",
    description:
      "Like Shazam, but for the Holy Quran. Identify any Quran recitation instantly.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
