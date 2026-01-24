'use client';

import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import { getActiveFestival } from '@/lib/sanity';

export function AnnouncementBar() {

  const { data: festival } = useQuery({
    queryKey: ['active-festival'],
    queryFn: getActiveFestival,
    staleTime: 60 * 1000,
  });

  if (!festival?.announcementText) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-burgundy text-white text-center overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-8 py-1 sm:py-2">
          <span className="font-[family-name:var(--font-lato)] text-xs sm:text-sm font-medium tracking-wide">
            {festival.announcementText}
          </span>
          {festival.ctaLink && (
            <Link
              href={festival.ctaLink}
              className="font-[family-name:var(--font-lato)] text-xs sm:text-sm font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {festival.ctaText || 'Shop Now'}
            </Link>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
