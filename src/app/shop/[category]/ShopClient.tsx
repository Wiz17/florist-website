"use client";

import { useShopHandler, type ShopCategory } from "../hooks/useShopHandler";
import { ShopHeroBanner } from "../page-sections/ShopHeroBanner";
import { CategoryFilter } from "../page-sections/CategoryFilter";
import { ProductsSection } from "../page-sections/ProductsSection";

export function ShopClient({ activeCategory }: { activeCategory: ShopCategory }) {
  const {
    categories,
    products,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    activeFestivals,
  } = useShopHandler(activeCategory);

  return (
    <div className="relative min-h-screen bg-cream">
      <ShopHeroBanner />
      <CategoryFilter categories={categories} activeCategory={activeCategory} />
      <ProductsSection
        products={products}
        isLoading={isLoading}
        isRefetching={isRefetching}
        isError={isError}
        error={error}
        onRetry={() => refetch()}
        activeFestivals={activeFestivals}
      />
    </div>
  );
}
