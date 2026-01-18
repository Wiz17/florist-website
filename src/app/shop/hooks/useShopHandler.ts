import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsByCategory, getActiveFestivals } from "@/lib/sanity";

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

  const { data: activeFestivals = [] } = useQuery({
    queryKey: ['active-festivals'],
    queryFn: getActiveFestivals,
    refetchInterval: 60 * 1000, // Refetch every minute
    staleTime: 0,
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
    // Festival state
    activeFestivals,
  };
}
