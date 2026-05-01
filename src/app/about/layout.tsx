import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "About Us",
  "Meet the team behind Bloom & Petal — Nashville's premier artisan florist. Sustainably sourced flowers, handcrafted arrangements, and over a decade of floral artistry.",
  "/about",
  ["about Bloom & Petal", "Nashville florist team", "artisan florist story", "sustainable flowers Nashville"]
);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
