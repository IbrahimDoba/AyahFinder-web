import type { Metadata } from "next";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { Sparkles, Zap, Gift, Users, Bell, Shield, ArrowRight } from "lucide-react";

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
      icon: Zap,
      title: "Early Access",
      description: "Be the first to try Ayahfinder before the public launch.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Gift,
      title: "Lifetime Deal",
      description: "Exclusive pricing for waitlist members only.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Bell,
      title: "Insider Updates",
      description: "Behind-the-scenes looks at our development journey.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "VIP Support",
      description: "Direct line to our team during beta testing.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-gray-bg to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-radial from-primary-green/15 via-primary-light/5 to-transparent blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-accent/15 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 pt-20 pb-16">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-green/10 rounded-full border border-primary-green/20">
              <Sparkles className="w-4 h-4 text-primary-green" />
              <span className="text-sm font-medium text-primary-green">
                Launching Soon
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-dark tracking-tight mb-6">
              Never miss a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-light">
                Quranic verse
              </span>{" "}
              again
            </h1>
            <p className="text-lg md:text-xl text-gray-medium max-w-2xl mx-auto leading-relaxed">
              Ayahfinder uses AI to instantly identify any Quran recitation. 
              Join 100+ Muslims on the waitlist for early access.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto mb-16">
            <WaitlistForm />
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-green" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-green" />
              <span>100+ joined</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary-green" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 border-y border-gray-100 bg-gray-bg/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-medium mb-6">
            Trusted by Muslims from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {["USA", "UK", "Canada", "Nigeria", "UAE", "Malaysia"].map((country) => (
              <span
                key={country}
                className="text-lg font-semibold text-gray-dark"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Bento Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-green/[0.02] to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Why join the waitlist?
            </h2>
            <p className="text-gray-medium max-w-xl mx-auto">
              Get exclusive perks when you sign up today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" 
                       style={{ background: `linear-gradient(135deg, ${benefit.gradient.includes('amber') ? '#f59e0b' : benefit.gradient.includes('emerald') ? '#10b981' : benefit.gradient.includes('blue') ? '#3b82f6' : '#8b5cf6'}, transparent)` }} 
                  />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-medium">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-bg/50 via-primary-green/[0.03] to-gray-bg/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
                How Ayahfinder works
              </h2>
              <p className="text-gray-medium">
                Three simple steps to identify any Quran recitation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Record or Upload",
                  description: "Record audio playing around you or upload a clip from your device.",
                },
                {
                  step: "02",
                  title: "AI Analysis",
                  description: "Our AI instantly matches the recitation against the entire Quran.",
                },
                {
                  step: "03",
                  title: "Get Results",
                  description: "Receive the exact Surah, Ayah, translation, and tafsir in seconds.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-bold text-primary-green/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-medium">
                    {item.description}
                  </p>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-primary-light rounded-3xl" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to find any Ayah?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of Muslims who are excited to deepen their connection with the Quran.
              </p>
              <a
                href="#waitlist-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-green font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-white/60 text-sm mt-4">
                Free to join • Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-bg/30 via-primary-green/[0.02] to-gray-bg/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "When will Ayahfinder launch?",
                  a: "We're in the final stages of development. Waitlist members will be the first to know when we set an official launch date.",
                },
                {
                  q: "Will the app be free?",
                  a: "Ayahfinder will have a free tier with core features. Premium features will be available through a subscription, but waitlist members will receive exclusive lifetime discounts.",
                },
                {
                  q: "What platforms will be supported?",
                  a: "We're launching on both iOS and Android simultaneously. You'll be able to download from the App Store and Google Play Store.",
                },
                {
                  q: "How does the AI identification work?",
                  a: "Our AI has been trained on thousands of Quran recitations. It analyzes audio patterns and matches them against the complete Quran text to identify the exact Surah and Ayah.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-dark mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-medium text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
