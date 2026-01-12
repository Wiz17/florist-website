"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FloatingPetals } from "@/components/ui/FloatingPetals";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const categories = ["All", "Bouquets", "Arrangements", "Wedding", "Seasonal"];

const products = [
  {
    name: "Rose Garden",
    price: "$65",
    image: "/product/product-rose.jpg",
    gradient: "linear-gradient(135deg, #E8C4C4 0%, #D4A5A5 100%)",
    tag: "Bestseller",
    category: "Bouquets",
  },
  {
    name: "Lavender Dreams",
    price: "$55",
    image: "/product/product-lavender.png",
    gradient: "linear-gradient(135deg, #B8A9C9 0%, #9683A9 100%)",
    tag: "New",
    category: "Bouquets",
  },
  {
    name: "Sunset Peony",
    price: "$85",
    image: "/product/product-peony.png",
    gradient: "linear-gradient(135deg, #F5E1E1 0%, #EAB8A1 100%)",
    tag: "Premium",
    category: "Arrangements",
  },
  {
    name: "Meadow Mix",
    price: "$45",
    image: "/product/product-meadow.png",
    gradient: "linear-gradient(135deg, #B8C9A9 0%, #9CAF88 100%)",
    tag: "Popular",
    category: "Seasonal",
  },
  {
    name: "Blush Elegance",
    price: "$75",
    image: "/product/product-blush.png",
    gradient: "linear-gradient(135deg, #F4C2C2 0%, #E8C4C4 100%)",
    tag: "Romantic",
    category: "Wedding",
  },
  {
    name: "Wild Garden",
    price: "$50",
    image: "/product/product-wild.jpg",
    gradient: "linear-gradient(135deg, #A8D8B9 0%, #7A9568 100%)",
    tag: "Organic",
    category: "Seasonal",
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-cream">
      <FloatingPetals />

      {/* Hero Banner */}
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

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={fadeInUp}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-[family-name:var(--font-lato)] transition-all ${
                  activeCategory === category
                    ? "bg-burgundy text-white"
                    : "bg-white text-charcoal hover:bg-blush-light"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                variants={scaleIn}
                layout
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
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full"
                      gradient={product.gradient}
                    />
                  </motion.div>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-[family-name:var(--font-lato)] text-charcoal">
                    {product.tag}
                  </span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-charcoal px-6 py-3 rounded-full font-[family-name:var(--font-lato)]"
                    >
                      Add to Cart
                    </motion.button>
                  </motion.div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-[family-name:var(--font-lato)] text-sm text-charcoal-light">
                      {product.category}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-burgundy">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
