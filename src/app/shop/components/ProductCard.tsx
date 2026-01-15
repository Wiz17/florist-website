"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { scaleIn } from "@/lib/animations";
import { type Product } from "@/lib/sanity";

interface ProductCardProps {
  product: Product;
  imageUrl?: string;
}

export function ProductCard({ product, imageUrl }: ProductCardProps) {
  return (
    <motion.div
      key={product._id}
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
            src={imageUrl}
            alt={product.name}
            className="w-full h-full"
          />
        </motion.div>
        {product.tag && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-[family-name:var(--font-lato)] text-charcoal">
            {product.tag}
          </span>
        )}
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
          {product.category && (
            <p className="font-[family-name:var(--font-lato)] text-sm text-charcoal-light">
              {product.category}
            </p>
          )}
        </div>
        <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-burgundy">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
}
