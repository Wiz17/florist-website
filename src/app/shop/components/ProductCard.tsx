"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FestivalBadge } from "@/components/ui/FestivalBadge";
import { FestivalCountdown } from "@/components/ui/FestivalCountdown";
import { scaleIn } from "@/lib/animations";
import { type Product, getProductPrice } from "@/lib/sanity";

interface ProductCardProps {
  product: Product;
  imageUrl?: string;
  activeFestivals?: any[];
  buttonText?: string;
}

export function ProductCard({
  product,
  imageUrl,
  activeFestivals = [],
  buttonText = "Quick View",
}: ProductCardProps) {
  const priceInfo = getProductPrice(product, activeFestivals);

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
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-[family-name:var(--font-lato)] text-charcoal z-10">
            {product.tag}
          </span>
        )}
        {priceInfo.isAdjusted && priceInfo.activeFestival && (
          <div className="absolute top-4 right-4 z-10">
            <FestivalBadge festival={priceInfo.activeFestival} />
          </div>
        )}
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
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
      <div>
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
          {product.name}
        </h3>
        {priceInfo.isAdjusted ? (
          <div className="flex items-center gap-2 mt-1">
            <span className="font-[family-name:var(--font-lato)] text-sage-dark text-lg font-semibold">
              ${priceInfo.currentPrice.toFixed(2)}
            </span>
            <span className="font-[family-name:var(--font-lato)] text-sm line-through text-charcoal-light">
              ${priceInfo.originalPrice.toFixed(2)}
            </span>
          </div>
        ) : (
          <p className="font-[family-name:var(--font-lato)] text-sage-dark text-lg">
            ${priceInfo.originalPrice.toFixed(2)}
          </p>
        )}
        {priceInfo.isAdjusted && priceInfo.activeFestival && (
          <FestivalCountdown endDate={priceInfo.activeFestival.endDate} />
        )}
      </div>
    </motion.div>
  );
}
