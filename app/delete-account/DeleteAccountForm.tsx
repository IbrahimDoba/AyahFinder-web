"use client";

import { useState } from "react";
import { AlertTriangle, Mail, CheckCircle, X } from "lucide-react";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setShowModal(true);
    }
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setShowModal(false);
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-green/10 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-primary-green" />
            </div>
            <h1 className="text-4xl font-bold text-gray-dark mb-4">
              Request Submitted
            </h1>
            <p className="text-gray-medium text-lg mb-6">
              Your account deletion request has been received.
            </p>
            <div className="bg-gray-bg p-6 rounded-xl mb-8">
              <p className="text-gray-dark mb-4">
                Your account and all corresponding data will be deleted within{" "}
                <strong className="text-primary-green">24-48 hours</strong>.
              </p>
              <p className="text-gray-medium text-sm">
                You will receive a confirmation email at{" "}
                <span className="font-semibold">{email}</span> once the
                deletion process is complete.
              </p>
            </div>
            <a
              href="/"
              className="inline-block bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-dark mb-4">
            Delete Your Account
          </h1>
          <p className="text-gray-medium text-lg">
            We&apos;re sorry to see you go. Please enter your email to request
            account deletion.
          </p>
        </div>

        <div className="bg-gray-bg p-8 rounded-xl">
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <h3 className="font-semibold text-red-700 mb-2">
              What happens when you delete your account:
            </h3>
            <ul className="text-red-600 text-sm space-y-1 list-disc list-inside">
              <li>All your personal data will be permanently deleted</li>
              <li>Your bookmarks and favorites will be removed</li>
              <li>Your account settings will be erased</li>
              <li>This action cannot be undone</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-dark mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-light" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your account email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white text-gray-dark"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Request Account Deletion
            </button>
          </form>

          <p className="text-center text-gray-medium text-sm mt-6">
            Changed your mind?{" "}
            <a
              href="/support"
              className="text-primary-green hover:underline font-medium"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-light hover:text-gray-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-4">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-dark mb-2">
                Are You Sure?
              </h2>
              <p className="text-gray-medium mb-6">
                This will permanently delete your account and all corresponding
                data. This action <strong>cannot be undone</strong>.
              </p>

              <div className="bg-gray-bg p-4 rounded-lg mb-6 text-left">
                <p className="text-sm text-gray-dark">
                  <strong>Email:</strong> {email}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 py-3 px-4 rounded-lg border border-gray-200 text-gray-dark font-semibold hover:bg-gray-bg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isLoading}
                  className="flex-1 py-3 px-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Yes, Delete My Account"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
