"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { categoryToSlug, type ShopCategory } from "../hooks/useShopHandler";

interface CategoryFilterProps {
  categories: readonly ShopCategory[];
  activeCategory: ShopCategory;
}

export function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  return (
    <section className="px-6 pb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.div key={category} variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/shop/${categoryToSlug(category)}`}
                  scroll={false}
                  className={`inline-block px-6 py-2 rounded-full transition-all ${
                    isActive
                      ? "bg-burgundy text-white"
                      : "bg-white text-charcoal hover:bg-blush-light"
                  }`}
                >
                  {category}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
