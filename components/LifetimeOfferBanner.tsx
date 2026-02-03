"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import LifetimeOfferModal from "./LifetimeOfferModal";

export default function LifetimeOfferBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check localStorage to see if banner was dismissed
    const isDismissed = localStorage.getItem("lifetimeOfferDismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("lifetimeOfferDismissed", "true");
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-primary-green via-primary-light to-primary-accent text-white py-3 px-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-1">
            <Sparkles className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm md:text-base font-semibold">
              <span className="hidden sm:inline">Limited Time: </span>
              <strong>$20 Lifetime Access</strong>
              <span className="hidden md:inline"> - Priority support + All upcoming features</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenModal}
              className="bg-white text-primary-green px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-bg transition-all whitespace-nowrap"
            >
              Get Lifetime Access
            </button>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {showModal && <LifetimeOfferModal onClose={() => setShowModal(false)} />}
    </>
  );
}
