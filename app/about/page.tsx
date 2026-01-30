import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Ayahfinder",
  description: "Learn about Ayahfinder, the innovative app that helps you identify Quran recitations instantly.",
  keywords: ["about ayahfinder", "quran app", "islamic technology", "ibrahim doba"],
  alternates: {
    canonical: "https://getayahfinder.com/about",
  },
  openGraph: {
    title: "About - Ayahfinder",
    description: "Learn about Ayahfinder, the innovative app that helps you identify Quran recitations instantly.",
    type: "website",
    url: "https://getayahfinder.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-dark mb-6">
          About Ayahfinder
        </h1>
        <p className="text-gray-medium text-lg mb-8">
          Last updated: January 26, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              Our Mission
            </h2>
            <p className="text-gray-medium leading-relaxed mb-4">
              Ayahfinder was created with a simple yet powerful mission: to make
              the Holy Quran more accessible to everyone. We understand that
              many times, you might hear a beautiful recitation of the Quran and
              wonder which Surah or Ayah is being recited. That moment of
              curiosity inspired us to create this app.
            </p>
            <p className="text-gray-medium leading-relaxed">
              Ayahfinder brings innovative audio recognition technology to
              Quranic recitations, helping Muslims around the world deepen their
              connection with the Holy Quran.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              How It Works
            </h2>
            <p className="text-gray-medium leading-relaxed mb-4">
              Our advanced audio recognition technology listens to Quran
              recitations and matches them against our comprehensive database.
              Within seconds, you&apos;ll know exactly which Surah and Ayah is being
              recited, along with the complete text, translation, and tafsir.
            </p>
            <p className="text-gray-medium leading-relaxed">
              The app works with various reciters and recitation styles, making
              it a versatile tool for both students and scholars of the Quran.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              Features
            </h2>
            <ul className="space-y-3 text-gray-medium">
              <li className="flex items-start">
                <span className="text-primary-green mr-2">✓</span>
                <span>
                  Instant recognition of Quran recitations from multiple reciters
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">✓</span>
                <span>
                  Complete Quran text with translations in multiple languages
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">✓</span>
                <span>Bookmark and save your favorite Ayahs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">✓</span>
                <span>Offline access after initial download</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">✓</span>
                <span>Beautiful, intuitive interface respecting Islamic design</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-medium leading-relaxed mb-4">
              We are committed to providing an accurate, respectful, and
              user-friendly experience. The app is continuously updated to
              improve accuracy and add new features based on user feedback.
            </p>
            <p className="text-gray-medium leading-relaxed">
              We respect the sanctity of the Holy Quran and ensure that all
              content within the app is verified and handled with the utmost
              care and reverence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              Contact Us
            </h2>
            <p className="text-gray-medium leading-relaxed mb-4">
              We&apos;d love to hear from you! Whether you have questions,
              suggestions, or feedback, please don&apos;t hesitate to reach out.
            </p>
            <div className="bg-gray-bg p-6 rounded-lg">
              <p className="text-gray-dark mb-2">
                <strong>Email:</strong> support@getayahfinder.com
              </p>
              <p className="text-gray-dark mb-2">
                <strong>Developer:</strong> Ayahfinder Team
              </p>
              <p className="text-gray-dark">
                <strong>Location:</strong> Nigeria
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
