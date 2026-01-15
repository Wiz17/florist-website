"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
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
              onClick={() => onCategoryChange(category)}
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
  );
}
