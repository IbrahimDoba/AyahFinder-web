import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Ayahfinder",
  description: "Get help with Ayahfinder. FAQs, troubleshooting, and contact information.",
  keywords: ["ayahfinder support", "help", "faq", "troubleshooting", "contact"],
  alternates: {
    canonical: "https://getayahfinder.com/support",
  },
  openGraph: {
    title: "Support - Ayahfinder",
    description: "Get help with Ayahfinder. FAQs, troubleshooting, and contact information.",
    type: "website",
    url: "https://getayahfinder.com/support",
  },
};

export default function Support() {
  const faqs = [
    {
      question: "How accurate is Ayahfinder?",
      answer:
        "Ayahfinder uses advanced audio recognition technology and has a high accuracy rate. However, accuracy can vary depending on audio quality, background noise, and recitation style. We continuously work on improving our recognition system.",
    },
    {
      question: "Does the app work offline?",
      answer:
        "Yes! After the initial download of the Quran text, you can use the app offline to read and browse the Quran. However, audio recognition features require an internet connection to identify recitations.",
    },
    {
      question: "Which reciters does Ayahfinder support?",
      answer:
        "Ayahfinder supports a wide range of popular reciters including Sheikh Mishary Rashid, Abdul Basit, Sudais, and many others. We're constantly expanding our database to include more reciters.",
    },
    {
      question: "Is Ayahfinder free to use?",
      answer:
        "Ayahfinder is free to download and use with basic features. We offer premium features through in-app purchases that unlock additional functionality such as advanced search, more translations, and an ad-free experience.",
    },
    {
      question: "What languages are supported?",
      answer:
        "The app interface is available in English, with plans to add more languages. Quran translations are available in multiple languages including English, Urdu, French, Turkish, Indonesian, and more.",
    },
    {
      question: "How do I report incorrect results?",
      answer:
        "If you encounter incorrect recognition results, please contact us at support@getayahfinder.com with details about the recitation and the incorrect result. Your feedback helps us improve the app.",
    },
    {
      question: "Can I use Ayahfinder during prayer?",
      answer:
        "While the app can help you learn and identify Quranic verses, we recommend consulting with your local religious authority regarding the use of electronic devices during formal prayer times.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "You can request account deletion by emailing us at support@getayahfinder.com. We will process your request within 7 business days and permanently delete all your personal data from our servers.",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-dark mb-6">
          Support Center
        </h1>
        <p className="text-gray-medium text-lg mb-12">
          Find answers to common questions and learn how to get the most out of
          Ayahfinder
        </p>

        {/* Contact Section */}
        <section className="mb-16 bg-gradient-to-r from-primary-green to-primary-light text-white p-8 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
          <p className="text-lg mb-6">
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> support@getayahfinder.com
            </p>
            <p>
              <strong>Response Time:</strong> We typically respond within 24-48
              hours
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-4xl font-bold text-gray-dark mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-bg p-6 rounded-lg border-l-4 border-primary-green"
              >
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-medium leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-gray-dark mb-8">
            Troubleshooting
          </h2>
          <div className="bg-gray-bg p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-primary-green mb-4">
              Recognition Not Working?
            </h3>
            <ul className="space-y-3 text-gray-medium">
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Ensure you have a stable internet connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Check that microphone permissions are enabled</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Try to minimize background noise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Make sure the recitation is clear and audible</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Update the app to the latest version</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-primary-green mb-4 mt-8">
              App Crashing or Freezing?
            </h3>
            <ul className="space-y-3 text-gray-medium">
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Restart the app</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Check for app updates in your app store</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Clear the app cache in your device settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>Ensure your device has enough storage space</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2 mt-1">•</span>
                <span>
                  If issues persist, uninstall and reinstall the app
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
