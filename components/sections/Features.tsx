export default function Features() {
  const features = [
    {
      icon: "🎤",
      title: "Listen",
      description: "Press the microphone button when you hear a Quran recitation",
    },
    {
      icon: "🔍",
      title: "Identify",
      description: "Our advanced technology identifies the exact Surah and Ayah",
    },
    {
      icon: "📖",
      title: "Read",
      description: "Instantly access the full text with translation and tafsir",
    },
  ];

  const detailedFeatures = [
    {
      icon: "🎯",
      title: "Accurate Recognition",
      description:
        "Advanced audio recognition technology identifies Quran recitations with high accuracy across different reciters and styles.",
    },
    {
      icon: "📚",
      title: "Complete Quran",
      description:
        "Full Quran text included in the app. No internet connection required after initial download.",
    },
    {
      icon: "🌙",
      title: "Beautiful Interface",
      description:
        "Clean, intuitive design that respects Islamic aesthetics and provides a peaceful user experience.",
    },
    {
      icon: "🔖",
      title: "Save Favorites",
      description:
        "Bookmark your favorite Ayahs and build your personal collection for easy access.",
    },
  ];

  return (
    <>
      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-dark mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-bg p-8 rounded-xl text-center hover:transform hover:-translate-y-2 transition-all hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-primary-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features */}
      <section className="py-20 bg-gray-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-dark mb-12">
            Powerful Features
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {detailedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-l-4 border-primary-green shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-dark mb-2">
                  <span className="mr-2">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
