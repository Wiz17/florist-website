'use client';

import { motion } from 'framer-motion';
import { type Festival } from '@/lib/sanity';

interface FestivalBadgeProps {
  festival: Festival;
}

export function FestivalBadge({ festival }: FestivalBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-burgundy via-burgundy/90 to-burgundy shadow-lg overflow-hidden"
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{ translateX: ['-100%', '200%'] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
          ease: 'easeInOut',
        }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
      </motion.div>

      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/10"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Star icon */}
      <svg
        className="relative w-3 h-3 text-white/90"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z" />
      </svg>

      <span className="relative font-[family-name:var(--font-lato)] text-xs font-bold text-white tracking-wide">
        Festive Offer
      </span>
    </motion.div>
  );
}
