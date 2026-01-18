"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FestivalBadge } from "@/components/ui/FestivalBadge";
import { FestivalCountdown } from "@/components/ui/FestivalCountdown";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { getFeaturedProducts, getActiveFestivals, getProductPrice, urlFor, type Product } from "@/lib/sanity";
import Link from "next/link";

export function FeaturedSection() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
    select: (data) => data.slice(0, 6), // Limit to 6 products for the featured section
  });

  const { data: activeFestivals = [] } = useQuery({
    queryKey: ['active-festivals'],
    queryFn: getActiveFestivals,
    refetchInterval: 60 * 1000, // Refetch every minute
    staleTime: 0,
  });
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
          <Link href="/shop">
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
          </Link>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="font-[family-name:var(--font-lato)] text-charcoal-light">
              Loading featured products...
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-[family-name:var(--font-lato)] text-charcoal-light">
              No featured products available. Mark products as "Featured" in Sanity Studio.
            </p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => {
              const imageUrl = product.images && product.images[0]
                ? urlFor(product.images[0]).width(800).height(800).url()
                : undefined;

              const priceInfo = getProductPrice(product, activeFestivals);

              return (
                <motion.div
                  key={product._id}
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
                        Quick View
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
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
