"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const phoneScreens = [
  "/1000971491.jpg",
  "/1000971492.jpg",
  "/1000971493.jpg",
];

export default function PhoneShowcase() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto" style={{ perspective: '1000px' }}>
      {/* Main Phone Container */}
      <motion.div
        className="relative"
        initial={{ rotateY: -15, rotateX: 5 }}
        animate={{ rotateY: [-15, 15, -15], rotateX: [5, -5, 5] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Phone Frame */}
        <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
          {/* Screen Bezel */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
            
            {/* Screen Content */}
            <div className="relative aspect-[9/19] w-full">
              {/* Animated Screens */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [1, 0, 0, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.3, 0.6, 1],
                }}
              >
                <Image
                  src={phoneScreens[0]}
                  alt="AyahFinder App Screen 1"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0, 1, 0, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.3, 0.6, 1],
                }}
              >
                <Image
                  src={phoneScreens[1]}
                  alt="AyahFinder App Screen 2"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0, 0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.3, 0.6, 1],
                }}
              >
                <Image
                  src={phoneScreens[2]}
                  alt="AyahFinder App Screen 3"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Side Button */}
          <div className="absolute -right-1 top-24 w-1 h-12 bg-gray-700 rounded-r-lg" />
          <div className="absolute -right-1 top-40 w-1 h-16 bg-gray-700 rounded-r-lg" />
          <div className="absolute -left-1 top-28 w-1 h-8 bg-gray-700 rounded-l-lg" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -right-4 bg-primary-green text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg z-30"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Instant ID
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -left-6 bg-white text-primary-green px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg z-30 flex items-center gap-1.5"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          94% Accuracy
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-10 bg-white/90 backdrop-blur-sm text-gray-dark px-2.5 py-1.5 rounded-lg text-[10px] font-medium shadow-lg z-30"
          animate={{
            x: [0, 5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span className="text-primary-green font-bold">3</span> sec
        </motion.div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-green rounded-full" />
      </div>

      {/* Shadow */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-36 h-6 bg-black/20 rounded-full blur-xl"
        animate={{
          scale: [1, 0.9, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
