import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getProducts, getProductsByCategory, getActiveFestivals } from "@/lib/sanity";
import { slugToCategory, categoryToSlug, SHOP_CATEGORIES } from "../hooks/useShopHandler";
import { ShopClient } from "./ShopClient";

// Pre-render all category routes at build time
export function generateStaticParams() {
  return SHOP_CATEGORIES.map((c) => ({ category: categoryToSlug(c) }));
}

// ISR — revalidate the cached HTML + data at most once per minute
export const revalidate = 60;

// Per-category SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = slugToCategory[slug];
  if (!category) return { title: "Shop" };

  const titleSuffix = category === "All" ? "All Flowers" : category;
  return {
    title: `${titleSuffix} | Floral Haven`,
    description: `Shop our ${category.toLowerCase()} collection — handcrafted floral arrangements made with the freshest blooms.`,
    alternates: { canonical: `/shop/${slug}` },
    openGraph: {
      title: `${titleSuffix} | Floral Haven`,
      description: `Handcrafted ${category.toLowerCase()} arrangements.`,
      type: "website",
    },
  };
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const activeCategory = slugToCategory[slug];
  if (!activeCategory) notFound();

  // Server-side prefetch — products + festivals — then hand the cache to the client
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["products", activeCategory],
      queryFn: () =>
        activeCategory === "All"
          ? getProducts()
          : getProductsByCategory(activeCategory),
    }),
    queryClient.prefetchQuery({
      queryKey: ["active-festivals"],
      queryFn: getActiveFestivals,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ShopClient activeCategory={activeCategory} />
    </HydrationBoundary>
  );
}
