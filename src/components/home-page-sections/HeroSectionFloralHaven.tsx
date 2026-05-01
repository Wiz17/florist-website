'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BloomTitle } from '@/components/ui/BloomTitle';

export function HeroSectionFloralHaven() {
  return (
    <section className="relative h-[520px] sm:h-[560px] lg:h-[600px] overflow-hidden">
      {/* Full-width hero image — fills entire section */}
      <Image
        src="/hero-image.png"
        alt="Fresh floral arrangement"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Global subtle dark layer to deepen the whole image */}
      <div aria-hidden className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Stronger dark gradient on the left so white text reads cleanly */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(15,7,12,0.92) 0%, rgba(15,7,12,0.75) 25%, rgba(15,7,12,0.4) 50%, rgba(15,7,12,0) 70%)',
        }}
      />

      {/* Subtle film grain over everything */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Text overlay — left side over the image */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          {/* Eyebrow with left bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="block w-[3px] h-6 bg-cream/80" />
            <span className="text-base tracking-wide text-cream/90">
              Hot Flower
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-semibold text-cream leading-[1.05] tracking-[-0.01em] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Fresh <BloomTitle className="text-blush-dark">Flowers</BloomTitle>
            <br />
            For Any Occasion
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-cream/75 leading-relaxed mt-7 max-w-lg"
          >
            Hand-tied bouquets and bespoke arrangements crafted from the
            season&apos;s most beautiful stems &mdash; for the moments that
            deserve more than a card.
          </motion.p>

          {/* Pink pill CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9"
          >
            <Link
              href="/shop/all"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-10 sm:py-4 rounded-md bg-blush text-charcoal text-sm sm:text-base font-medium hover:bg-blush-light transition-colors"
            >
              Start Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
