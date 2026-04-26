import {
  ServicesSection,
  FeaturedSection,
  StorySection,
  TestimonialsSection,
  InstagramSection,
  CTASection,
  HeroSectionFloralHaven,
} from "@/components/home-page-sections";

export default function Home() {
  return (
    <div className="relative">
      <HeroSectionFloralHaven />
      <ServicesSection />
      <FeaturedSection />
      <StorySection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
    </div>
  );
}
