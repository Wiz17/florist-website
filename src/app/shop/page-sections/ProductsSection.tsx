"use client";

import { motion } from "framer-motion";
import { FloatingPetalsLoader } from "@/components/ui/FloatingPetalsLoader";
import { staggerContainer } from "@/lib/animations";
import { urlFor } from "@/lib/sanity";
import { ProductCard } from "../components/ProductCard";
import { ProductsError } from "../components/ProductsError";
import { ProductsEmpty } from "../components/ProductsEmpty";
import type { Product } from "@/lib/sanity";

interface ProductsSectionProps {
  products: Product[];
  isLoading: boolean;
  isRefetching: boolean;
  isError: boolean;
  error: Error | unknown;
  onRetry: () => void;
}

export function ProductsSection({
  products,
  isLoading,
  isRefetching,
  isError,
  error,
  onRetry,
}: ProductsSectionProps) {
  // Early return pattern - Option 1
  if (isLoading || isRefetching) {
    return (
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <FloatingPetalsLoader message="Loading flowers..." />
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <ProductsError
            error={error}
            onRetry={onRetry}
            isRefetching={isRefetching}
          />
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <ProductsEmpty />
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
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
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
