"use client";

import { useState, useEffect, useCallback } from "react";
import { Mail, ArrowRight, CheckCircle, Loader2, PartyPopper, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistFormData, ApiResponse } from "@/lib/types";

// Confetti particle type
interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
  speedX: number;
  speedY: number;
}

// Confetti colors
const CONFETTI_COLORS = [
  "#2d5f3f", // primary green
  "#4a9d6d", // primary light
  "#6bc491", // primary accent
  "#f59e0b", // amber
  "#10b981", // emerald
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#ec4899", // pink
];

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Generate confetti particles
  const generateConfetti = useCallback(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      newParticles.push({
        id: i,
        x: 50 + (Math.random() - 0.5) * 20, // Start from center
        y: 40 + (Math.random() - 0.5) * 10,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.8,
        speedX: (Math.random() - 0.5) * 30,
        speedY: -10 - Math.random() * 20,
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate confetti
  useEffect(() => {
    if (!showModal || particles.length === 0) return;

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.speedX * 0.1,
          y: p.y + p.speedY * 0.1,
          speedY: p.speedY + 0.8, // gravity
          rotation: p.rotation + 5,
        }))
      );
    };

    const interval = setInterval(animate, 16);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setParticles([]);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [showModal, particles.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setShowModal(true);
        generateConfetti();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ email: "" });
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} id="waitlist-form" className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Email Input */}
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-light" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              placeholder="Enter your email"
              required
              disabled={isSubmitted}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 outline-none transition-all bg-white text-gray-dark text-base disabled:bg-gray-50 disabled:text-gray-medium"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading || isSubmitted}
            className="bg-primary-green hover:bg-primary-light text-white px-8 py-4 h-auto rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary-green/25 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="hidden sm:inline">Joining...</span>
              </span>
            ) : isSubmitted ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Joined!</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            )}
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        <p className="text-xs text-gray-light text-center mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />
          
          {/* Confetti Container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-3 h-3 rounded-sm"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  backgroundColor: particle.color,
                  transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
                  transition: "none",
                }}
              />
            ))}
          </div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center transform transition-all animate-in fade-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-gray-light hover:text-gray-dark hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-green to-primary-light rounded-full mb-6 shadow-lg shadow-primary-green/25">
              <PartyPopper className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-dark mb-3">
              Thank You for Joining! 🎉
            </h3>

            {/* Message */}
            <p className="text-gray-medium mb-2">
              You're officially on the Ayahfinder waitlist.
            </p>
            <p className="text-sm text-gray-light mb-6">
              We've sent a confirmation to <span className="font-medium text-gray-dark">{formData.email}</span>
            </p>

            {/* Benefits */}
            <div className="bg-gray-bg/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm font-medium text-gray-dark mb-2">What happens next?</p>
              <ul className="space-y-2 text-sm text-gray-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-green flex-shrink-0" />
                  <span>You'll be the first to know when we launch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-green flex-shrink-0" />
                  <span>Exclusive early access to the app</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-green flex-shrink-0" />
                  <span>Special lifetime discount unlocked</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Button
              onClick={closeModal}
              className="w-full bg-primary-green hover:bg-primary-light text-white py-3 rounded-xl font-semibold"
            >
              Got it!
            </Button>

            {/* Share hint */}
            <p className="text-xs text-gray-light mt-4">
              Know someone who'd love this? Share the waitlist with them!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
