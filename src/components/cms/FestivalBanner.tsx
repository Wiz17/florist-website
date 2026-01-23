'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { getActiveFestival, urlFor, type Festival } from '@/lib/sanity';

export function FestivalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Show banner only after user scrolls 150px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { data: festival, isLoading } = useQuery({
    queryKey: ['active-festival'],
    queryFn: getActiveFestival,
    refetchInterval: 60 * 1000, // Refetch every minute to check if date has passed
    staleTime: 0, // Always consider data stale to ensure fresh date checks
  });

  // Measure banner height for spacer
  useEffect(() => {
    if (bannerRef.current && isVisible && festival) {
      setBannerHeight(bannerRef.current.clientHeight);
    }
  }, [isVisible, festival]);

  // Client-side date validation as safety check
  const isWithinDateRange = (festival: Festival | null): boolean => {
    if (!festival) return false;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const startDate = new Date(festival.startDate);
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date(festival.endDate);
    endDate.setHours(23, 59, 59, 999);
    
    return today >= startDate && today <= endDate;
  };

  if (isLoading) {
    return null; // Still loading
  }

  if (!festival) {
    return null; // No active festival found
  }

  // Double-check date range on client side (handles caching issues)
  if (!isWithinDateRange(festival)) {
    return null; // Festival is outside date range
  }

  // Ensure we have at least some content to show
  if (!festival.title && !festival.description && !festival.offerText) {
    console.warn('Festival found but has no content (title, description, or offerText)');
    return null;
  }

  const imageUrl = festival.bannerImage
    ? urlFor(festival.bannerImage).width(1920).height(200).url()
    : null;

  const textColor = festival.textColor || '#FFFFFF';

  return (
    <>
      <AnimatePresence>
        {isVisible && hasScrolled && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-3xl z-40 shadow-2xl rounded-xl sm:rounded-xl md:rounded-2xl overflow-hidden mx-auto"
            ref={bannerRef}
          >
              <div className="relative max-w-7xl mx-auto">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={imageUrl!}
                  alt={festival.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="relative px-4 py-3.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4">
                <div className="flex flex-row items-center justify-between gap-3 sm:gap-3 md:gap-4 lg:gap-5">
                  {/* Left Section - Content */}
                  <div className="flex items-center gap-3 sm:gap-3 md:gap-4 flex-1 min-w-0">
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      {festival.offerText && (
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="inline-block mb-1.5 sm:mb-1.5 px-2.5 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1 lg:px-3.5 lg:py-1.5 rounded-full font-[family-name:var(--font-lato)] font-bold text-xs sm:text-xs md:text-sm lg:text-sm bg-white/25 backdrop-blur-md border border-white/30 shadow-lg"
                          style={{ color: textColor }}
                        >
                          {festival.offerText}
                        </motion.div>
                      )}

                      {festival.title && (
                        <motion.h3
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="font-[family-name:var(--font-playfair)] text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-1 leading-tight truncate"
                          style={{ color: textColor }}
                        >
                          {festival.title}
                        </motion.h3>
                      )}

                      {festival.description && (
                        <motion.p
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="hidden sm:block font-[family-name:var(--font-lato)] text-xs md:text-sm lg:text-base opacity-95 leading-snug line-clamp-1"
                          style={{ color: textColor }}
                        >
                          {festival.description}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Right Section - CTA & Close */}
                  <div className="flex items-center gap-2.5 sm:gap-2.5 md:gap-3 lg:gap-4 flex-shrink-0">
                    {/* CTA Button */}
                    {festival.ctaText && festival.ctaLink && (
                      <Link href={festival.ctaLink} className="flex-shrink-0">
                        <motion.button
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative px-4 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full font-[family-name:var(--font-lato)] font-semibold text-xs sm:text-xs md:text-sm lg:text-base bg-white text-burgundy hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-1.5 sm:gap-1.5 md:gap-2 group overflow-hidden whitespace-nowrap"
                        >
                          <span className="relative z-10">{festival.ctaText}</span>
                          <motion.span
                            className="relative z-10"
                            animate={{ x: [0, 2, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            →
                          </motion.span>
                          {/* Hover effect background */}
                          <span className="absolute inset-0 bg-gradient-to-r from-cream to-blush-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                        </motion.button>
                      </Link>
                    )}

                    {/* Close Button */}
                    <motion.button
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVisible(false)}
                      className="flex-shrink-0 p-2 sm:p-2 md:p-2.5 lg:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
                      aria-label="Close banner"
                    >
                      <svg
                        className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"
                        style={{ color: textColor }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
