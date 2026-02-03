"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistFormData, ApiResponse } from "@/lib/types";

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: "",
    source: "",
    interest: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

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
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="text-center bg-white p-8 rounded-xl shadow-lg w-full">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green/10 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-primary-green" />
        </div>
        <h3 className="text-2xl font-bold text-gray-dark mb-2">
          You're on the list! 🎉
        </h3>
        <p className="text-gray-medium mb-4">
          Check your email for confirmation. We'll notify you when we launch!
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          size="sm"
        >
          Join another email
        </Button>
      </div>
    );
  }

  // Form state
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full">
      <h3 className="text-xl font-bold text-gray-dark mb-4">
        Join the Waitlist
      </h3>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-dark mb-2">
          Email Address *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-light" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white text-gray-dark"
          />
        </div>
      </div>

      {/* Source Dropdown */}
      <div className="mb-4">
        <label htmlFor="source" className="block text-sm font-semibold text-gray-dark mb-2">
          How did you hear about us? *
        </label>
        <select
          id="source"
          name="source"
          value={formData.source}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white text-gray-dark"
        >
          <option value="">Select an option</option>
          <option value="social-media">Social Media</option>
          <option value="friend">Friend or Family</option>
          <option value="search-engine">Search Engine</option>
          <option value="blog">Blog/Article</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Interest Text Area */}
      <div className="mb-4">
        <label htmlFor="interest" className="block text-sm font-semibold text-gray-dark mb-2">
          What interests you most? *
        </label>
        <textarea
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleInputChange}
          placeholder="Tell us what features you're most excited about..."
          required
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white text-gray-dark resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary-green hover:bg-primary-light text-white"
        size="lg"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Joining...
          </span>
        ) : (
          "Join Waitlist"
        )}
      </Button>

      <p className="text-xs text-gray-medium text-center mt-3">
        By joining, you agree to receive updates about Ayahfinder. Unsubscribe anytime.
      </p>
    </form>
  );
}
