"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const images = [
  { image: "/insta_section/insta-1.png", gradient: "linear-gradient(135deg, #E8C4C4 0%, #D4A5A5 100%)" },
  { image: "/insta_section/insta-2.png", gradient: "linear-gradient(135deg, #B8C9A9 0%, #9CAF88 100%)" },
  { image: "/insta_section/insta-3.png", gradient: "linear-gradient(135deg, #F5E1E1 0%, #EAB8A1 100%)" },
  { image: "/insta_section/insta-4.png", gradient: "linear-gradient(135deg, #B8A9C9 0%, #9683A9 100%)" },
  { image: "/insta_section/insta-5.png", gradient: "linear-gradient(135deg, #F4C2C2 0%, #E8C4C4 100%)" },
  { image: "/insta_section/insta-6.png", gradient: "linear-gradient(135deg, #A8D8B9 0%, #7A9568 100%)" },
];

export function InstagramSection() {
  return (
    <section className="py-16 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4"
        >
          Follow Our Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal"
        >
          @bloomandpetal
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="relative aspect-square overflow-hidden cursor-pointer group"
          >
            <ImagePlaceholder
              src={item.image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full"
              gradient={item.gradient}
            />
            <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/40 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-[family-name:var(--font-lato)]">
                View Post
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
