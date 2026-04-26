"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FestivalBadge } from "@/components/ui/FestivalBadge";
import { FestivalCountdown } from "@/components/ui/FestivalCountdown";
import { scaleIn } from "@/lib/animations";
import { type Product, type Festival, getProductPrice } from "@/lib/sanity";

interface ProductCardProps {
  product: Product;
  imageUrl?: string;
  activeFestivals?: Festival[];
  buttonText?: string;
  priority?: boolean;
}

export function ProductCard({
  product,
  imageUrl,
  activeFestivals = [],
  buttonText = "Quick View",
  priority = false,
}: ProductCardProps) {
  const priceInfo = getProductPrice(product, activeFestivals);
  const productHref = `/shop/${product.slug.current}`;

  return (
    <motion.div
      key={product._id}
      variants={scaleIn}
      layout
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link href={productHref} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 rounded-2xl">
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
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
          {product.tag && (
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-charcoal z-10">
              {product.tag}
            </span>
          )}
          {priceInfo.isAdjusted && priceInfo.activeFestival && (
            <div className="absolute top-4 right-4 z-10">
              <FestivalBadge festival={priceInfo.activeFestival} />
            </div>
          )}
          {/* Quick-view CTA: persistent on touch (sm and below), hover-reveal on desktop */}
          <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end sm:items-center justify-center p-4">
            <span className="bg-white text-charcoal px-5 py-2.5 rounded-full text-sm font-medium">
              {buttonText}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
            {product.name}
          </h3>
          {priceInfo.isAdjusted ? (
            <div className="flex items-center gap-2 mt-1 tabular-nums">
              <span className="text-sage-dark text-lg font-semibold">
                ${priceInfo.currentPrice.toFixed(2)}
              </span>
              <span className="text-sm line-through text-charcoal-light">
                ${priceInfo.originalPrice.toFixed(2)}
              </span>
            </div>
          ) : (
            <p className="text-sage-dark text-lg tabular-nums">
              ${priceInfo.originalPrice.toFixed(2)}
            </p>
          )}
          {priceInfo.isAdjusted && priceInfo.activeFestival && (
            <FestivalCountdown endDate={priceInfo.activeFestival.endDate} />
          )}
        </div>
      </Link>
    </motion.div>
  );
}
