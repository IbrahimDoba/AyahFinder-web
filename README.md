# Ayahfinder Website

Official website for Ayahfinder - Instantly identify Quran recitations and find the exact Surah and Ayah. This website contains all necessary pages for Google Play Store and Apple App Store submission.

## Features

- 🏠 Landing page with app features and download links
- 📖 About page explaining the app
- 🆘 Support page with FAQs and troubleshooting
- 🔒 Privacy Policy (compliant with app store requirements)
- 📜 Terms & Conditions (compliant with app store requirements)
- 📱 Responsive design for mobile and desktop
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd ayahfinderWeb
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

Build the production-ready website:

```bash
pnpm build
```

### Start Production Server

After building, start the production server:

```bash
pnpm start
```

## Project Structure

```
ayahfinderWeb/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing page
│   │   └── [slug]/        # Individual blog posts
│   ├── privacy/           # Privacy Policy page
│   ├── support/           # Support page
│   ├── terms/             # Terms & Conditions page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── blog/              # Blog components
│   │   ├── Alert.tsx      # Alert callout box
│   │   ├── BlogCard.tsx   # Blog post card
│   │   ├── CodeBlock.tsx  # Code block with copy
│   │   ├── CtaBox.tsx     # CTA box component
│   │   ├── Pagination.tsx # Pagination component
│   │   ├── RelatedPosts.tsx # Related articles
│   │   ├── TableOfContents.tsx # TOC sidebar
│   │   ├── Tip.tsx        # Tip callout box
│   │   └── Warning.tsx    # Warning callout box
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   └── ui/                # UI components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── content/               # MDX content
│   └── blog/              # Blog posts (MDX files)
├── lib/                   # Utility functions
│   ├── blog.ts            # Blog data functions
│   └── utils.ts           # General utilities
├── public/                # Static files
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.ts         # Next.js configuration
├── mdx-components.tsx     # MDX component mappings
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Other Platforms

You can also deploy to:
- **Netlify:** Use the Next.js build plugin
- **AWS Amplify:** Configure build settings for Next.js
- **DigitalOcean App Platform:** Select Next.js as the framework
- **Self-hosted:** Build the project and run it with Node.js

### Environment Variables

If you need to add environment variables (e.g., analytics keys), create a `.env.local` file:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Customization

### Update App Store Links

Edit the download button links in:
- `components/sections/Hero.tsx`
- `components/sections/CTA.tsx`

Replace `#` with your actual App Store and Google Play Store URLs.

### Update Contact Information

Contact details are in:
- `components/ui/Footer.tsx`
- `app/about/page.tsx`
- `app/support/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

### Color Scheme

The color scheme is defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    green: '#2d5f3f',    // Main green
    light: '#4a9d6d',    // Light green
    accent: '#6bc491',   // Accent green
  },
  gray: {
    dark: '#2c3e50',     // Dark gray
    medium: '#5a6c7d',   // Medium gray
    light: '#95a5a6',    // Light gray
    bg: '#f4f6f8',       // Background gray
  },
}
```

## Blog System (MDX)

The website includes a complete MDX-powered blog system with SEO optimization:

### Features

- **MDX Support**: Write articles in Markdown with embedded React components
- **SEO Optimized**: Automatic meta tags, Open Graph, Twitter Cards, Schema.org structured data
- **Table of Contents**: Automatic TOC generation from headings
- **Related Posts**: Smart post recommendations based on tags and categories
- **Custom Components**: Alert boxes, tips, warnings, CTA boxes, code blocks
- **Pagination**: Clean pagination for blog listing
- **Sitemap**: Automatic sitemap generation including all blog posts

### Creating a New Blog Post

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter metadata:

```mdx
---
title: "Your Article Title"
description: "Brief description for SEO (150-160 chars)"
date: "2024-01-20"
author: "Author Name"
authorTitle: "Author Title"
tags: ["quran", "tajweed", "islam"]
category: "Category Name"
featured: true  # Set true for featured post
coverImage: "/images/your-image.jpg"  # Optional
---

## Your Content

Write in Markdown...

<Tip title="Pro Tip">
Use custom components in your MDX!
</Tip>
```

### Available MDX Components

- `<Alert type="info|success|warning|error" title="...">` - Callout boxes
- `<Tip title="...">` - Pro tip boxes with lightbulb icon
- `<Warning title="...">` - Warning boxes
- `<CtaBox title="..." buttonText="..." buttonHref="...">` - Call-to-action boxes
- `<CodeBlock>` - Code blocks with syntax highlighting and copy button

### Customizing Code Styling

Code blocks are styled with a dark theme and include:
- Language indicator
- Copy to clipboard button
- Horizontal scroll for long lines

## SEO Optimization

The website includes comprehensive SEO features:

### Technical SEO
- ✅ Meta tags (Title: 50-60 chars, Description: 150-160 chars)
- ✅ Semantic HTML with proper H1-H6 hierarchy
- ✅ Open Graph tags for social sharing
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt
- ✅ Schema.org structured data:
  - Organization schema
  - Website schema
  - Article schema (for blog posts)
  - Breadcrumb schema

### Content SEO
- ✅ Keyword-optimized blog posts
- ✅ Internal linking
- ✅ Image alt text
- ✅ Reading time estimation
- ✅ Related posts

### Adding a Sitemap

The sitemap is automatically generated at `app/sitemap.ts` and includes:
- All static pages
- All blog posts with last modified dates
- Proper priorities and change frequencies

## App Store Submission

This website includes all pages required for app store submissions:

### Google Play Store Requirements
✅ Privacy Policy (app/privacy/page.tsx)
✅ Terms & Conditions (app/terms/page.tsx)
✅ Contact Information (Footer, About page)
✅ App Description (Home, About pages)

### Apple App Store Requirements
✅ Privacy Policy URL
✅ Terms of Use URL
✅ Support URL (app/support/page.tsx)
✅ Marketing URL (Home page)

## License

Copyright © 2024 Ayahfinder Team. All rights reserved.

## Contact

**Developer:** Ayahfinder Team
**Email:** support@getayahfinder.com
**Location:** Nigeria

---

Built with ❤️ for the Muslim community
