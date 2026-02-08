'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


export function HeroSection9() {
  const sectionRef = useRef<HTMLElement>(null);
  const [heroHeight, setHeroHeight] = useState('100dvh');

  useEffect(() => {
    const calculateHeight = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const topFromViewport = rect.top + window.scrollY;
        setHeroHeight(`calc(100dvh - ${topFromViewport}px)`);
      }
    };

    const timer = setTimeout(calculateHeight, 100);

    window.addEventListener('resize', calculateHeight);
    const observer = new MutationObserver(() => {
      setTimeout(calculateHeight, 50);
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: heroHeight }}
      className="relative min-h-[500px] bg-charcoal overflow-hidden"
    >
      {/* Full-width hero image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-main.png"
          alt="Beautiful floral arrangement"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Layered gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Animated grain/noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
      }} />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 px-5 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-[family-name:var(--font-lato)] text-[10px] tracking-[0.5em] uppercase text-white/50"
        >
          Est. 2010
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden sm:flex items-center gap-3"
        >
          <div className="w-10 md:w-16 h-[1px] bg-white/20" />
          <span className="font-[family-name:var(--font-lato)] text-[10px] tracking-[0.4em] uppercase text-white/40">
            Artisan Florist
          </span>
          <div className="w-10 md:w-16 h-[1px] bg-white/20" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-[family-name:var(--font-lato)] text-[10px] tracking-[0.5em] uppercase text-white/50"
        >
          Bloom &amp; Petal
        </motion.span>
      </div>

      {/* Left vertical text - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 z-10"
      >
        <span
          className="font-[family-name:var(--font-lato)] text-[10px] tracking-[0.5em] uppercase text-white/30 block"
          style={{ writingMode: 'vertical-lr' }}
        >
          Bloom &amp; Petal
        </span>
      </motion.div>

      {/* Bottom content strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Thin decorative line with glow */}
        <div className="mx-5 sm:mx-10 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="px-5 sm:px-10 py-6 sm:py-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-4 backdrop-blur-[2px]">
          {/* Left: Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-[family-name:var(--font-lato)] text-[10px] tracking-[0.5em] uppercase text-white/40 mb-3 sm:mb-4"
            >
              Handcrafted with Love
            </motion.p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-3 sm:mb-4">
              Where Nature Meets
              <br />
              <span className="relative inline-block italic text-blush-light">
                {/* Butterfly 1 - vibrant rose-pink */}
                <motion.svg
                  className="absolute w-5 h-5 sm:w-6 sm:h-6 z-20"
                  viewBox="0 0 100 100"
                  fill="none"
                  initial={{ x: -20, y: -25 }}
                  animate={{
                    x: ["-20px", "120px", "80px", "10px", "-20px"],
                    y: ["-25px", "-5px", "10px", "-20px", "-25px"],
                    rotate: [0, 15, -10, 10, 0],
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ellipse cx="50" cy="50" rx="3" ry="11" fill="#2D2D2D" />
                  <circle cx="50" cy="37" r="4" fill="#2D2D2D" />
                  <path d="M48 34 Q43 26 40 22" stroke="#2D2D2D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M52 34 Q57 26 60 22" stroke="#2D2D2D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <circle cx="40" cy="22" r="2" fill="#2D2D2D" />
                  <circle cx="60" cy="22" r="2" fill="#2D2D2D" />
                  <motion.path d="M47 43 Q24 34 26 52 Q28 63 47 55" fill="#d65d6a" animate={{ d: ["M47 43 Q24 34 26 52 Q28 63 47 55", "M47 43 Q34 38 35 52 Q36 59 47 55", "M47 43 Q24 34 26 52 Q28 63 47 55"] }} transition={{ duration: 0.25, repeat: Infinity }} />
                  <motion.path d="M47 55 Q30 63 32 72 Q38 76 47 62" fill="#e8889a" animate={{ d: ["M47 55 Q30 63 32 72 Q38 76 47 62", "M47 55 Q37 66 38 71 Q41 75 47 62", "M47 55 Q30 63 32 72 Q38 76 47 62"] }} transition={{ duration: 0.25, repeat: Infinity }} />
                  <motion.path d="M53 43 Q76 34 74 52 Q72 63 53 55" fill="#d65d6a" animate={{ d: ["M53 43 Q76 34 74 52 Q72 63 53 55", "M53 43 Q66 38 65 52 Q64 59 53 55", "M53 43 Q76 34 74 52 Q72 63 53 55"] }} transition={{ duration: 0.25, repeat: Infinity }} />
                  <motion.path d="M53 55 Q70 63 68 72 Q62 76 53 62" fill="#e8889a" animate={{ d: ["M53 55 Q70 63 68 72 Q62 76 53 62", "M53 55 Q63 66 62 71 Q59 75 53 62", "M53 55 Q70 63 68 72 Q62 76 53 62"] }} transition={{ duration: 0.25, repeat: Infinity }} />
                  <circle cx="36" cy="50" r="4" fill="#fff" opacity="0.4" />
                  <circle cx="64" cy="50" r="4" fill="#fff" opacity="0.4" />
                </motion.svg>

                {/* Butterfly 2 - warm orange/gold */}
                <motion.svg
                  className="absolute w-4 h-4 sm:w-5 sm:h-5 z-20"
                  viewBox="0 0 100 100"
                  fill="none"
                  initial={{ x: 100, y: -15 }}
                  animate={{
                    x: ["100px", "-10px", "50px", "130px", "100px"],
                    y: ["-15px", "8px", "-22px", "2px", "-15px"],
                    rotate: [0, -20, 15, -5, 0],
                  }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <ellipse cx="50" cy="50" rx="3" ry="11" fill="#2a2a2a" />
                  <circle cx="50" cy="37" r="4" fill="#2a2a2a" />
                  <path d="M48 34 Q43 26 40 22" stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M52 34 Q57 26 60 22" stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <circle cx="40" cy="22" r="2" fill="#2a2a2a" />
                  <circle cx="60" cy="22" r="2" fill="#2a2a2a" />
                  <motion.path d="M47 43 Q24 34 26 52 Q28 63 47 55" fill="#e8a84c" animate={{ d: ["M47 43 Q24 34 26 52 Q28 63 47 55", "M47 43 Q34 38 35 52 Q36 59 47 55", "M47 43 Q24 34 26 52 Q28 63 47 55"] }} transition={{ duration: 0.22, repeat: Infinity }} />
                  <motion.path d="M47 55 Q30 63 32 72 Q38 76 47 62" fill="#f0c078" animate={{ d: ["M47 55 Q30 63 32 72 Q38 76 47 62", "M47 55 Q37 66 38 71 Q41 75 47 62", "M47 55 Q30 63 32 72 Q38 76 47 62"] }} transition={{ duration: 0.22, repeat: Infinity }} />
                  <motion.path d="M53 43 Q76 34 74 52 Q72 63 53 55" fill="#e8a84c" animate={{ d: ["M53 43 Q76 34 74 52 Q72 63 53 55", "M53 43 Q66 38 65 52 Q64 59 53 55", "M53 43 Q76 34 74 52 Q72 63 53 55"] }} transition={{ duration: 0.22, repeat: Infinity }} />
                  <motion.path d="M53 55 Q70 63 68 72 Q62 76 53 62" fill="#f0c078" animate={{ d: ["M53 55 Q70 63 68 72 Q62 76 53 62", "M53 55 Q63 66 62 71 Q59 75 53 62", "M53 55 Q70 63 68 72 Q62 76 53 62"] }} transition={{ duration: 0.22, repeat: Infinity }} />
                  <circle cx="36" cy="50" r="3" fill="#fff" opacity="0.5" />
                  <circle cx="64" cy="50" r="3" fill="#fff" opacity="0.5" />
                </motion.svg>

                Artistry
              </span>
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-xs sm:text-sm text-white/50 max-w-sm leading-relaxed">
              From intimate bouquets to grand celebrations &mdash; every petal placed with intention, every arrangement a story.
            </p>
          </motion.div>

          {/* Right: CTA + Stats in one row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 sm:gap-4 px-5 sm:px-10 py-2.5 sm:py-4 bg-white text-charcoal rounded-full font-[family-name:var(--font-lato)] text-[10px] sm:text-sm font-semibold tracking-wider uppercase overflow-hidden shrink-0"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="absolute inset-0 bg-burgundy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </motion.button>

            {/* Divider */}
            <div className="w-[1px] h-6 sm:h-8 bg-white/20 shrink-0" />

            {/* Mini stats */}
            <div className="flex items-center gap-4 sm:gap-8">
              {[
                { value: '500+', label: 'Arrangements' },
                { value: '15+', label: 'Years' },
                { value: '4.9', label: 'Rating' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center"
                >
                  <span className="font-[family-name:var(--font-playfair)] text-sm sm:text-lg font-bold text-white">{stat.value}</span>
                  <p className="font-[family-name:var(--font-lato)] text-[7px] sm:text-[9px] text-white/35 tracking-[0.15em] sm:tracking-[0.2em] uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
