"use client";

import { useEffect } from "react";

export default function ShopError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Shop route error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 bg-cream">
      <div className="max-w-md text-center">
        <p className="text-sage-dark tracking-[0.3em] uppercase text-sm mb-4">
          Something wilted
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
          We couldn&apos;t load the shop
        </h2>
        <p className="text-charcoal-light mb-8">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-burgundy text-white font-medium hover:bg-burgundy-light transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
