"use client";

import { FloatingPetals } from "@/components/ui/FloatingPetals";
import {
  HeroSection,
  ServicesSection,
  FeaturedSection,
  StorySection,
  TestimonialsSection,
  InstagramSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative">
      <FloatingPetals />
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
