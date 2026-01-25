import {
  HeroSection,
  ServicesSection,
  FeaturedSection,
  StorySection,
  TestimonialsSection,
  InstagramSection,
  CTASection,
} from "@/components/home-page-sections";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ServicesSection />
      <FeaturedSection />
      <StorySection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
    </div>
  );
}
