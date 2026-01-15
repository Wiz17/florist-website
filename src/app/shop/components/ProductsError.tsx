"use client";

import { motion } from "framer-motion";

interface ProductsErrorProps {
  error: Error | unknown;
  onRetry: () => void;
  isRefetching: boolean;
}

export function ProductsError({ error, onRetry, isRefetching }: ProductsErrorProps) {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-burgundy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-2">
          Failed to Load Products
        </h3>
        <p className="font-[family-name:var(--font-lato)] text-charcoal-light mb-6">
          {error instanceof Error
            ? error.message
            : "Something went wrong while fetching products. Please try again."}
        </p>
        <motion.button
          onClick={onRetry}
          disabled={isRefetching}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full font-[family-name:var(--font-lato)] font-semibold bg-burgundy text-white hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRefetching ? "Retrying..." : "Try Again"}
        </motion.button>
      </div>
    </div>
  );
}
