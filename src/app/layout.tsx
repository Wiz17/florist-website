import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Bloom & Petal",
  description:
    "Artisan florist creating beautiful, sustainable floral arrangements for all of life's moments.",
  url: "https://bloomandpetal.com",
  email: "hello@bloomandpetal.com",
  telephone: "+1-555-123-4567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Flower Street",
    addressLocality: "Garden City",
    postalCode: "12345",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${urbanist.variable} antialiased overflow-x-hidden`}>
        <QueryProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
