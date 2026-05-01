import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Contact Us",
  "Get in touch with Bloom & Petal. Visit our Nashville studio, call us, or send a message for custom orders, weddings, and event florals.",
  "/contact",
  ["contact Nashville florist", "custom flower order", "wedding flower consultation", "Bloom & Petal Nashville"]
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
