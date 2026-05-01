import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsByCategory, getActiveFestivals } from "@/lib/sanity";

export const SHOP_CATEGORIES = ["All", "Bouquets", "Arrangements", "Wedding", "Seasonal"] as const;
export type ShopCategory = (typeof SHOP_CATEGORIES)[number];

// URL slug ⇄ display label
export const slugToCategory: Record<string, ShopCategory> = {
  all: "All",
  bouquets: "Bouquets",
  arrangements: "Arrangements",
  wedding: "Wedding",
  seasonal: "Seasonal",
};

export const categoryToSlug = (c: ShopCategory): string => c.toLowerCase();

export function useShopHandler(activeCategory: ShopCategory) {
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
    staleTime: 5 * 60 * 1000, // 5 min — categories already fetched stay fresh
    gcTime: 30 * 60 * 1000,   // keep in cache for 30 min
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  const { data: activeFestivals = [] } = useQuery({
    queryKey: ['active-festivals'],
    queryFn: getActiveFestivals,
    refetchInterval: 60 * 1000,
    staleTime: 0,
  });

  return {
    activeCategory,
    categories: SHOP_CATEGORIES as readonly ShopCategory[],
    products,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    activeFestivals,
  };
}
