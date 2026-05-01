import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getFeaturedProducts, getActiveFestivals } from "@/lib/sanity";
import {
  ServicesSection,
  FeaturedSection,
  StorySection,
  TestimonialsSection,
  InstagramSection,
  CTASection,
  HeroSectionFloralHaven,
} from "@/components/home-page-sections";

// ISR — revalidate the cached HTML + data once per minute
export const revalidate = 60;

export default async function Home() {
  // Prefetch data used by FeaturedSection so it renders with content already hydrated.
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["featured-products"],
      queryFn: getFeaturedProducts,
    }),
    queryClient.prefetchQuery({
      queryKey: ["active-festivals"],
      queryFn: getActiveFestivals,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="relative">
        <HeroSectionFloralHaven />
        <ServicesSection />
        <FeaturedSection />
        <StorySection />
        <TestimonialsSection />
        <InstagramSection />
        <CTASection />
      </div>
    </HydrationBoundary>
  );
}
