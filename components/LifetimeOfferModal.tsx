"use client";

import { useState } from "react";
import { X, Mail, CheckCircle, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LifetimeOfferFormData, ApiResponse } from "@/lib/types";

interface LifetimeOfferModalProps {
  onClose: () => void;
}

export default function LifetimeOfferModal({ onClose }: LifetimeOfferModalProps) {
  const [formData, setFormData] = useState<LifetimeOfferFormData>({
    email: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/lifetime-offer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-light hover:text-gray-dark transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green/10 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-primary-green" />
            </div>
            <h2 className="text-2xl font-bold text-gray-dark mb-2">
              You're All Set! 🎉
            </h2>
            <p className="text-gray-medium mb-6">
              We'll send you an exclusive link to claim your $20 lifetime offer when we launch!
            </p>
            <Button onClick={onClose} className="bg-primary-green hover:bg-primary-light">
              Got it!
            </Button>
          </div>
        ) : (
          // Form State
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-green to-primary-light rounded-full mb-3">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-2">
                $20 Lifetime Access
              </h2>
              <p className="text-gray-medium">
                Limited early bird offer - Lock in this price forever!
              </p>
            </div>

            <div className="bg-gray-bg p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-dark mb-2">What's Included:</h3>
              <ul className="text-sm text-gray-medium space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary-green mt-0.5">✓</span>
                  <span>Lifetime access to Ayahfinder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-green mt-0.5">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-green mt-0.5">✓</span>
                  <span>Access to all upcoming features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-green mt-0.5">✓</span>
                  <span>No recurring fees, ever!</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-dark mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-light" />
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white text-gray-dark"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-dark mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white text-gray-dark"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-green hover:bg-primary-light text-white"
                size="lg"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Claim My Lifetime Offer"
                )}
              </Button>

              <p className="text-xs text-gray-medium text-center">
                No payment required now. We'll send you a link when ready!
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
