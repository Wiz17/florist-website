"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/app/shop/components/ProductCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { getFeaturedProducts, getActiveFestivals, urlFor } from "@/lib/sanity";
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

              return (
                <ProductCard
                  key={product._id}
                  product={product}
                  imageUrl={imageUrl}
                  activeFestivals={activeFestivals}
                  buttonText="Quick View"
                />
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
