import type { Metadata } from "next";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { CheckCircle, Star, Bell, LifeBuoy, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Waitlist - Ayahfinder",
  description: "Be among the first to experience Ayahfinder. Join our waitlist and get early access to the Quran recitation identifier app.",
  keywords: ["ayahfinder waitlist", "early access", "quran app", "beta access"],
  alternates: {
    canonical: "https://getayahfinder.com/waitlist",
  },
  openGraph: {
    title: "Join the Waitlist - Ayahfinder",
    description: "Be among the first to experience Ayahfinder. Join our waitlist and get early access.",
    type: "website",
    url: "https://getayahfinder.com/waitlist",
  },
};

export default function WaitlistPage() {
  const benefits = [
    {
      icon: Star,
      title: "Early Access",
      description: "Be the first to try Ayahfinder when we launch. Get ahead of the general release.",
    },
    {
      icon: Bell,
      title: "Exclusive Updates",
      description: "Receive behind-the-scenes updates about our development progress and new features.",
    },
    {
      icon: LifeBuoy,
      title: "Priority Support",
      description: "Get priority access to our support team during the beta phase.",
    },
    {
      icon: Gift,
      title: "Special Launch Offers",
      description: "Access exclusive launch promotions and lifetime deals available only to waitlist members.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-bg to-green-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Join the Ayahfinder Waitlist
          </h1>
          <p className="text-lg md:text-xl text-gray-medium max-w-2xl mx-auto">
            Be among the first to experience the revolutionary Quran recitation identifier.
            Sign up now and we'll notify you when we launch!
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="mb-12 max-w-2xl mx-auto">
          <WaitlistForm />
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-dark mb-8 text-center">
            What You'll Get as a Waitlist Member
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-green" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-dark mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Info */}
        <div className="mb-12 bg-gradient-to-r from-primary-green to-primary-light text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Coming Soon to iOS & Android
          </h3>
          <p className="text-white/90 mb-4 text-lg">
            We're working hard to bring Ayahfinder to both App Store and Google Play.
            Join the waitlist to be notified the moment we launch!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <CheckCircle className="w-5 h-5" />
            <span>No spam, just important updates</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-dark mb-2">
                When will Ayahfinder launch?
              </h3>
              <p className="text-gray-medium">
                We're in the final stages of development and testing. Waitlist members will be
                notified first when we have an official launch date!
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-dark mb-2">
                Will the app be free?
              </h3>
              <p className="text-gray-medium">
                Ayahfinder will be free to download with basic features. We'll offer premium
                features through in-app purchases for users who want advanced functionality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-dark mb-2">
                Can I unsubscribe from waitlist emails?
              </h3>
              <p className="text-gray-medium">
                Absolutely! Every email we send includes an easy unsubscribe link. You can
                opt out at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
