export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-bg to-green-50 py-20 min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark mb-6 leading-tight">
              Discover Any Quran Recitation Instantly
            </h1>
            <p className="text-xl text-gray-medium mb-8">
              Like Shazam, but for the Holy Quran. Simply listen, and find the
              exact Surah and Ayah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-primary-green hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Download on App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-gray-dark hover:bg-gray-medium text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-dark to-gray-medium rounded-[2.5rem] p-4 shadow-2xl max-w-[280px] mx-auto">
                <div className="bg-gradient-to-br from-primary-green to-primary-light rounded-[2rem] p-8 min-h-[500px] flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 animate-pulse">
                    <svg
                      className="w-12 h-12 text-primary-green"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-medium">
                    Tap to identify
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
