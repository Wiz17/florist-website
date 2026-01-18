'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { getActiveFestival, urlFor, type Festival } from '@/lib/sanity';

export function FestivalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

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

  // Enhanced color scheme with gradients
  const backgroundColor = festival.backgroundColor || '#722F37'; // burgundy
  const textColor = festival.textColor || '#FFFFFF';
  
  // Create gradient background if no custom color
  const backgroundStyle = festival.backgroundColor
    ? { backgroundColor }
    : {
        background: 'linear-gradient(135deg, #722F37 0%, #8B4049 50%, #9CAF88 100%)',
      };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-3xl z-40 shadow-2xl rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mx-auto"
            style={backgroundStyle}
            ref={bannerRef}
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
              <div className="relative max-w-7xl mx-auto">
              {/* Background Image Overlay */}
              {imageUrl && (
                <div className="absolute inset-0 opacity-20 md:opacity-25">
                  <Image
                    src={imageUrl}
                    alt={festival.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />
                </div>
              )}
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl" />
              </div>

              <div className="relative px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
                <div className="flex flex-row items-center justify-between gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                  {/* Left Section - Content */}
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 flex-1 min-w-0">
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      {festival.offerText && (
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="inline-block mb-0.5 sm:mb-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1 rounded-full font-[family-name:var(--font-lato)] font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm bg-white/25 backdrop-blur-md border border-white/30 shadow-lg"
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
                          className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-0.5 sm:mb-0.5 md:mb-1 leading-tight truncate"
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
                          className="font-[family-name:var(--font-lato)] text-[9px] sm:text-[10px] md:text-xs lg:text-sm opacity-95 leading-snug line-clamp-1"
                          style={{ color: textColor }}
                        >
                          {festival.description}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Right Section - CTA & Close */}
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 flex-shrink-0">
                    {/* CTA Button */}
                    {festival.ctaText && festival.ctaLink && (
                      <Link href={festival.ctaLink} className="flex-shrink-0">
                        <motion.button
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-6 xl:py-2.5 rounded-full font-[family-name:var(--font-lato)] font-semibold text-[9px] sm:text-[10px] md:text-xs lg:text-sm bg-white text-burgundy hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-0.5 sm:gap-1 md:gap-1.5 group overflow-hidden whitespace-nowrap"
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
                      className="flex-shrink-0 p-0.5 sm:p-1 md:p-1.5 lg:p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
                      aria-label="Close banner"
                    >
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5"
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
