'use client'
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    subtitle: 'Spring Collection',
    title: 'Fresh Blooms for a New Season',
    description: 'Vibrant tulips, daffodils, and cherry blossoms to welcome the warmth.',
    cta: 'Shop Spring',
    image: '/hero-main.png',
    accentColor: '#722F37',
  },
  {
    id: 2,
    subtitle: 'Wedding Florals',
    title: 'Your Dream Day, In Full Bloom',
    description: 'Bespoke bridal bouquets and ceremony arrangements crafted with love.',
    cta: 'Explore Weddings',
    image: '/hero-secondary.png',
    accentColor: '#2D2D2D',
  },
  {
    id: 3,
    subtitle: 'Luxury Arrangements',
    title: 'Elegance Delivered to Your Door',
    description: 'Premium roses, orchids, and exotic florals for unforgettable moments.',
    cta: 'View Luxury',
    image: '/about/about-hero.png',
    accentColor: '#722F37',
  },
];

export function HeroSection4() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[700px] bg-cream overflow-hidden">
      {/* Background slides */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Split layout: left content, right image placeholder */}
          <div className="h-full flex">
            {/* Left side - content */}
            <div className="w-[55%] flex items-center pl-24 pr-16 bg-cream relative z-10">
              {/* Decorative vertical line */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-burgundy/30 to-transparent" />

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-[family-name:var(--font-lato)] tracking-[0.4em] uppercase text-xs mb-6"
                  style={{ color: slide.accentColor }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-[family-name:var(--font-playfair)] text-6xl font-bold text-charcoal leading-[1.1] mb-6 max-w-lg"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="font-[family-name:var(--font-lato)] text-lg text-charcoal-light max-w-md mb-10 leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-4 font-[family-name:var(--font-lato)] text-lg font-semibold text-charcoal"
                >
                  <span className="relative">
                    {slide.cta}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-burgundy group-hover:w-full transition-all duration-300" />
                  </span>
                  <span className="w-12 h-[1px] bg-charcoal group-hover:w-20 transition-all duration-300" />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Right side - image */}
            <div className="w-[45%] relative">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.subtitle}
                  fill
                  className="object-cover"
                  sizes="45vw"
                  priority
                />
              </div>

              {/* Decorative diagonal overlay */}
              <div className="absolute top-0 left-0 w-24 h-full bg-cream" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide controls */}
      <div className="absolute bottom-12 left-24 z-20 flex items-center gap-8">
        {/* Prev/Next arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="relative w-10 h-[3px] rounded-full bg-charcoal/15 overflow-hidden"
            >
              {i === current && (
                <motion.div
                  className="absolute inset-0 bg-burgundy rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: 'linear' }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Counter */}
        <span className="font-[family-name:var(--font-lato)] text-sm text-charcoal-light tracking-wider">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
