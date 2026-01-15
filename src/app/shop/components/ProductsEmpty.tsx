"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ProductsEmpty() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16 px-6"
    >
      <div className="max-w-md mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-6"
        >
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 bg-sage-light/20 rounded-full blur-xl" />
            <svg
              className="relative w-24 h-24 text-sage-dark/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-3"
        >
          No Products Found
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-[family-name:var(--font-lato)] text-charcoal-light mb-8 leading-relaxed"
        >
          We couldn&apos;t find any products in this category. Try exploring other collections or check back soon for new arrivals.
        </motion.p>

        
      </div>
    </motion.div>
  );
}
