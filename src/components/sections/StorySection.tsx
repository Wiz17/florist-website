"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function StorySection() {
  return (
    <section className="py-24 px-6 bg-blush-light" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Crafted with Love,
              <br />
              <span className="text-burgundy italic">
                Delivered with Care
              </span>
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-charcoal-light text-lg mb-6 leading-relaxed">
              Founded in 2010, Bloom & Petal began as a small passion project in
              a tiny studio. Today, we&apos;ve grown into a beloved local
              florist, but our commitment remains unchanged: creating stunning
              floral arrangements that bring joy to every occasion.
            </p>
            <p className="font-[family-name:var(--font-lato)] text-charcoal-light text-lg mb-8 leading-relaxed">
              Every bouquet we create tells a story. We source our flowers from
              local growers and sustainable farms, ensuring that each bloom is
              as fresh as it is beautiful.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sage text-white px-8 py-4 rounded-full font-[family-name:var(--font-lato)] text-lg hover:bg-sage-dark transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Main story image */}
            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImagePlaceholder
                src="/story/story-main.png"
                alt="Florist arranging flowers"
                className="h-[500px] w-full"
                gradient="linear-gradient(135deg, #E8C4C4 0%, #B8C9A9 100%)"
              />
            </motion.div>

            {/* Secondary smaller image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20"
            >
              <ImagePlaceholder
                src="/story/story-small.png"
                alt="Fresh flowers close-up"
                className="w-full h-full"
                gradient="linear-gradient(135deg, #F5E1E1 0%, #E8C4C4 100%)"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 right-12 w-48 h-48 bg-sage rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-burgundy rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
