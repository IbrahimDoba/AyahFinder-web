import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import Link from "next/link";
import PhoneShowcase from "@/components/PhoneShowcase";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-bg to-green-50 py-16 md:py-24 min-h-[600px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark mb-6 leading-tight">
              Discover Any Quran Recitation{" "}
              <span className="text-primary-green">Instantly</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-medium mb-8 max-w-lg mx-auto md:mx-0">
              Instantly identify Quran recitations. Simply listen, and find the exact Surah and Ayah in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-primary-green hover:bg-primary-green/90 text-white px-6 w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </Button>
              </Link>
              <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-green text-primary-green hover:bg-primary-green/10 px-6 w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-medium">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-primary-green" />
                <span>Free Forever</span>
              </div>
            </div>
          </div>

          {/* 3D Phone Showcase */}
          <div className="flex justify-center md:justify-end">
            <PhoneShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
