"use client";

import { useEffect, useState } from "react";

export function OrganizationSchema() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://getayahfinder.com/#organization",
    name: "Ayahfinder",
    url: "https://getayahfinder.com",
    logo: {
      "@type": "ImageObject",
      url: "https://getayahfinder.com/logo.png",
      width: 512,
      height: 512,
    },
    description:
      "Instantly identify Quran recitations and find the exact Surah and Ayah. Get translations, tafsir, and deepen your connection with the Holy Quran.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@getayahfinder.com",
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    founder: {
      "@type": "Person",
      name: "Ayahfinder Team",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
    },
    applicationCategory: "IslamicApplication",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://getayahfinder.com/#website",
    name: "Ayahfinder",
    url: "https://getayahfinder.com",
    description:
      "Instantly identify Quran recitations and find the exact Surah and Ayah. Get translations, tafsir, and deepen your connection with the Holy Quran.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://getayahfinder.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en",
  };

  if (!mounted) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Ayahfinder",
    applicationCategory: "IslamicApplication",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
    downloadUrl: [
      "https://apps.apple.com/app/ayahfinder",
      "https://play.google.com/store/apps/details?id=com.ayahfinder",
    ],
    screenshot: {
      "@type": "ImageObject",
      url: "https://getayahfinder.com/app-screenshot.png",
    },
    description:
      "Instantly identify Quran recitations and find the exact Surah and Ayah. Get translations, tafsir, and deepen your connection with the Holy Quran.",
    author: {
      "@type": "Organization",
      name: "Ayahfinder",
      url: "https://getayahfinder.com",
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
