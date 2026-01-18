"use client";

import { FloatingPetals } from "@/components/ui/FloatingPetals";
import { useShopHandler } from "./hooks/useShopHandler";
import { ShopHeroBanner } from "./page-sections/ShopHeroBanner";
import { CategoryFilter } from "./page-sections/CategoryFilter";
import { ProductsSection } from "./page-sections/ProductsSection";

export default function ShopPage() {
  const {
    activeCategory,
    setActiveCategory,
    categories,
    products,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    activeFestivals,
  } = useShopHandler();

  return (
    <div className="relative min-h-screen bg-cream">
      <FloatingPetals />
      <ShopHeroBanner />
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
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
