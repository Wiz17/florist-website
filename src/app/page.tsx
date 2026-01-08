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
    <main className="relative">
      <FloatingPetals />
      <HeroSection />
      <ServicesSection />
      <FeaturedSection />
      <StorySection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
    </main>
  );
}
