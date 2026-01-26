# Ayahfinder Website

Official website for Ayahfinder - Shazam for the Holy Quran. This website contains all necessary pages for Google Play Store and Apple App Store submission.

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
│   ├── privacy/           # Privacy Policy page
│   ├── support/           # Support page
│   ├── terms/             # Terms & Conditions page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   └── ui/                # UI components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/                # Static files
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
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

## SEO Optimization

The website includes:
- Meta tags for better SEO
- Open Graph tags for social sharing
- Proper heading hierarchy
- Semantic HTML structure
- Mobile-responsive design

### Adding a Sitemap

To add a sitemap, create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ayahfinder.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ayahfinder.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more pages...
  ]
}
```

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

Copyright © 2024 Ibrahim Doba. All rights reserved.

## Contact

**Developer:** Ibrahim Doba
**Email:** ibrahimdoba55@gmail.com
**Location:** Nigeria

---

Built with ❤️ for the Muslim community
