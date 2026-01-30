import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/OrganizationSchema";

// Define metadataBase for resolving relative URLs
export const metadataBase = new URL("https://getayahfinder.com");

export const metadata: Metadata = {
  title: {
    default: "Ayahfinder - Identify Quran Recitations Instantly",
    template: "%s | Ayahfinder",
  },
  description:
    "Instantly identify Quran recitations and find the exact Surah and Ayah. Get translations, tafsir, and deepen your connection with the Holy Quran.",
  keywords: [
    "Quran",
    "Ayah finder",
    "Islamic app",
    "Quran recognition",
    "recitation identifier",
    "Quran search",
    "Surah finder",
    "Islamic technology",
    "Muslim app",
    "Quran audio",
  ],
  authors: [{ name: "Ayahfinder Team" }],
  creator: "Ayahfinder Team",
  publisher: "Ayahfinder",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getayahfinder.com",
    siteName: "Ayahfinder",
    title: "Ayahfinder - Identify Quran Recitations Instantly",
    description:
      "Instantly identify Quran recitations and find the exact Surah and Ayah with translations and tafsir.",
    images: [
      {
        url: "/og-image.png",
        width: 1120,
        height: 896,
        alt: "Ayahfinder - Quran Recitation Identifier App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayahfinder - Identify Quran Recitations Instantly",
    description:
      "Instantly identify Quran recitations and find the exact Surah and Ayah with translations and tafsir.",
    images: ["/og-image.png"],
    creator: "@ayahfinder",
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
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2d5f3f",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Islamic Technology, Quran App",
  referrer: "origin-when-cross-origin",
  verification: {
    // Add your verification codes here:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
    // other: {
    //   "ahrefs-site-verification": "your-ahrefs-code",
    // },
  },
  appleWebApp: {
    capable: true,
    title: "Ayahfinder",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#2d5f3f",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#2d5f3f",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
