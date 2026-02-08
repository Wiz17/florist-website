import {
  HeroSection,
  ServicesSection,
  FeaturedSection,
  StorySection,
  TestimonialsSection,
  InstagramSection,
  CTASection,
  HeroSection4,
  HeroSection6,
  HeroSection8,
  HeroSection9,
} from "@/components/home-page-sections";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection9 />
      <ServicesSection />
      <FeaturedSection />
      <StorySection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
    </div>
  );
}
