"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-burgundy relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <ImagePlaceholder
          src="/cta-background.png"
          alt="Floral pattern background"
          className="w-full h-full"
          gradient="linear-gradient(135deg, #722F37 0%, #8B4049 100%)"
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-64 h-64 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-48 -left-48 w-96 h-96 border border-white/10 rounded-full"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={fadeInUp}
            className="font-[family-name:var(--font-lato)] text-blush-light tracking-[0.3em] uppercase text-sm mb-4"
          >
            Ready to Order?
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let&apos;s Create Something Beautiful Together
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-[family-name:var(--font-lato)] text-blush-light text-lg mb-10 max-w-2xl mx-auto"
          >
            Whether it&apos;s a special occasion or just because, our team is
            ready to craft the perfect arrangement for you.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-burgundy px-10 py-4 rounded-full font-[family-name:var(--font-lato)] text-lg hover:bg-cream transition-colors"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-[family-name:var(--font-lato)] text-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
