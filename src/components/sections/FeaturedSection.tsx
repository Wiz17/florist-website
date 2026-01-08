"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const flowers = [
  {
    name: "Rose Garden",
    price: "$65",
    image: "/product/product-rose.jpg",
    gradient: "linear-gradient(135deg, #E8C4C4 0%, #D4A5A5 100%)",
    tag: "Bestseller",
  },
  {
    name: "Lavender Dreams",
    price: "$55",
    image: "/product/product-lavender.png",
    gradient: "linear-gradient(135deg, #B8A9C9 0%, #9683A9 100%)",
    tag: "New",
  },
  {
    name: "Sunset Peony",
    price: "$85",
    image: "/product/product-peony.png",
    gradient: "linear-gradient(135deg, #F5E1E1 0%, #EAB8A1 100%)",
    tag: "Premium",
  },
  {
    name: "Meadow Mix",
    price: "$45",
    image: "/product/product-meadow.png",
    gradient: "linear-gradient(135deg, #B8C9A9 0%, #9CAF88 100%)",
    tag: "Popular",
  },
  {
    name: "Blush Elegance",
    price: "$75",
    image: "/product/product-blush.png",
    gradient: "linear-gradient(135deg, #F4C2C2 0%, #E8C4C4 100%)",
    tag: "Romantic",
  },
  {
    name: "Wild Garden",
    price: "$50",
    image: "/product/product-wild.jpg",
    gradient: "linear-gradient(135deg, #A8D8B9 0%, #7A9568 100%)",
    tag: "Organic",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-24 px-6 bg-cream" id="shop">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-center mb-16"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4"
            >
              Curated Collections
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal"
            >
              Featured Arrangements
            </motion.h2>
          </div>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 5 }}
            className="mt-6 md:mt-0 font-[family-name:var(--font-lato)] text-burgundy flex items-center gap-2 group"
          >
            View All Collections
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {flowers.map((flower) => (
            <motion.div
              key={flower.name}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="h-80 w-full relative"
                >
                  <ImagePlaceholder
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-full"
                    gradient={flower.gradient}
                  />
                </motion.div>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-[family-name:var(--font-lato)] text-charcoal">
                  {flower.tag}
                </span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-charcoal px-6 py-3 rounded-full font-[family-name:var(--font-lato)]"
                  >
                    Quick View
                  </motion.button>
                </motion.div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                {flower.name}
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-sage-dark text-lg">
                {flower.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
