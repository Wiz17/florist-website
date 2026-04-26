"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream px-6">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-4">
          Something went wrong
        </h2>
        <p className="text-charcoal-light mb-8">
          We&apos;re sorry, an unexpected error occurred. Please try again.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-burgundy text-cream text-sm font-medium hover:bg-burgundy-light transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-charcoal/30 text-charcoal text-sm font-medium hover:bg-charcoal hover:text-cream transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
