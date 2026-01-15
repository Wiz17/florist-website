import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsByCategory } from "@/lib/sanity";

const categories = ["All", "Bouquets", "Arrangements", "Wedding", "Seasonal"];

export function useShopHandler() {
  const [activeCategory, setActiveCategory] = useState("All");

  const {
    data: products = [],
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["products", activeCategory],
    queryFn: () =>
      activeCategory === "All"
        ? getProducts()
        : getProductsByCategory(activeCategory),
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  return {
    // Category state
    activeCategory,
    setActiveCategory,
    categories,
    // Products state
    products,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  };
}
