"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function ShopHeroBanner() {
  return (
    <section className="pt-32 pb-16 px-6 bg-cream relative overflow-hidden">
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sage-light opacity-30 blur-3xl"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4"
        >
          Our Collection
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-charcoal mb-6"
        >
          Shop Flowers
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="font-[family-name:var(--font-lato)] text-lg text-charcoal-light max-w-2xl mx-auto"
        >
          Discover our handcrafted floral arrangements, perfect for every occasion.
          Each bouquet is made with love and the freshest blooms.
        </motion.p>
      </div>
    </section>
  );
}
