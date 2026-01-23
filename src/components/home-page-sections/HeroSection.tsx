"use client";

import { motion } from "framer-motion";
import { BloomTitle } from "@/components/ui/BloomTitle";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { fadeInUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream px-6">
      <div className="max-w-7xl mx-auto w-full pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text content */}
        <motion.div className="relative z-10">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-3"
          >
            Artisan Florist Since 2010
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] mb-1 md:mb-2"
          >
            Where Every
            <br />
            <BloomTitle /> Tells
            <br />a Story
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="font-[family-name:var(--font-lato)] text-lg md:text-xl text-charcoal-light max-w-lg mb-2 md:mb-3"
          >
            Handcrafted floral arrangements that capture the essence of
            nature&apos;s beauty. From intimate bouquets to grand celebrations.
          </motion.p>

          {/* Desktop buttons - hidden on mobile */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="hidden md:flex flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-full font-[family-name:var(--font-lato)] text-lg font-semibold border-2 border-[#2D2D2D] bg-transparent overflow-hidden group"
            >
              <span className="relative z-10 text-[#2D2D2D] group-hover:text-white transition-colors duration-300">Explore Collections</span>
              <span className="absolute inset-0 bg-[#2D2D2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-full font-[family-name:var(--font-lato)] text-lg font-semibold border-2 border-[#2D2D2D] bg-transparent overflow-hidden group"
            >
              <span className="relative z-10 text-[#2D2D2D] group-hover:text-white transition-colors duration-300">Book Consultation</span>
              <span className="absolute inset-0 bg-[#2D2D2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right rounded-full" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Images Grid - Stacked Cards Layout */}
        <div className="relative h-[380px] md:h-[520px] lg:h-[580px]">
          {/* Main hero image - large card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute top-0 right-0 w-[88%] md:w-[85%] h-[65%] md:h-[70%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImagePlaceholder
              src="/hero-main.png"
              alt="Beautiful floral arrangement"
              className="w-full h-full"
              gradient="linear-gradient(135deg, #E8C4C4 0%, #D4A5A5 100%)"
            />
          </motion.div>

          {/* Bottom left card - overlapping */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-[8%] md:bottom-[5%] left-0 w-[55%] md:w-[50%] h-[45%] md:h-[48%] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-[3px] border-white z-10"
          >
            <ImagePlaceholder
              src="/hero-secondary.png"
              alt="Fresh flower bouquet"
              className="w-full h-full"
              gradient="linear-gradient(135deg, #B8C9A9 0%, #9CAF88 100%)"
            />
          </motion.div>

          {/* Top left small card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute top-[5%] left-0 w-[35%] md:w-[32%] h-[28%] md:h-[30%] rounded-xl md:rounded-2xl overflow-hidden shadow-lg border-[3px] border-white"
          >
            <ImagePlaceholder
              src="/hero-small.png"
              alt="Elegant bouquet"
              className="w-full h-full"
              gradient="linear-gradient(135deg, #F5E1E1 0%, #EAB8A1 100%)"
            />
          </motion.div>

          {/* Bottom right accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-0 right-[5%] md:right-[8%] w-[30%] md:w-[28%] h-[25%] md:h-[28%] rounded-xl md:rounded-2xl overflow-hidden shadow-lg border-[3px] border-white"
          >
            <ImagePlaceholder
              src="/hero-small.png"
              alt="Floating flower"
              className="w-full h-full"
              gradient="linear-gradient(135deg, #B8A9C9 0%, #9683A9 100%)"
            />
          </motion.div>

          {/* Decorative sage shape behind */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-4 right-[15%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-sage/20 -z-10"
          />
        </div>

        {/* Mobile buttons - shown only on mobile, below image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="flex md:hidden flex-col sm:flex-row gap-3 w-full lg:col-span-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex-1 px-6 py-3 rounded-full font-[family-name:var(--font-lato)] text-base font-semibold border-2 border-[#2D2D2D] bg-transparent overflow-hidden group"
          >
            <span className="relative z-10 text-[#2D2D2D] group-hover:text-white transition-colors duration-300">Explore Collections</span>
            <span className="absolute inset-0 bg-[#2D2D2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex-1 px-6 py-3 rounded-full font-[family-name:var(--font-lato)] text-base font-semibold border-2 border-[#2D2D2D] bg-transparent overflow-hidden group"
          >
            <span className="relative z-10 text-[#2D2D2D] group-hover:text-white transition-colors duration-300">Book Consultation</span>
            <span className="absolute inset-0 bg-[#2D2D2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right rounded-full" />
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
}
