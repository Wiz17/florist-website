import type { Metadata } from "next";

const siteConfig = {
  name: "Bloom & Petal",
  description: "Nashville's premier artisan florist offering handcrafted floral arrangements, wedding flowers, and same-day delivery. Fresh, locally-sourced blooms for every occasion.",
  url: "https://bloomandpetal.com", // Update with your actual domain
  ogImage: "/og-image.jpg",
  phone: "(615) 555-4567",
  email: "hello@bloomandpetal.com",
  address: {
    street: "123 Flower Street",
    city: "Nashville",
    state: "TN",
    zip: "37201",
    country: "US",
  },
  social: {
    instagram: "https://instagram.com/bloomandpetal",
    facebook: "https://facebook.com/bloomandpetal",
    pinterest: "https://pinterest.com/bloomandpetal",
  },
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Bloom & Petal | Nashville's Premier Artisan Florist",
    template: "%s | Bloom & Petal Nashville",
  },
  description: siteConfig.description,
  keywords: [
    "Nashville florist",
    "Nashville flower delivery",
    "wedding flowers Nashville",
    "Nashville flower shop",
    "same day flower delivery Nashville TN",
    "custom bouquets Nashville",
    "event flowers Nashville",
    "funeral flowers Nashville",
    "roses Nashville",
    "florist near me Nashville",
    "best florist Nashville",
    "local florist Nashville Tennessee",
    "bridal bouquet Nashville",
    "anniversary flowers Nashville",
    "birthday flowers Nashville",
  ],
  authors: [{ name: "Bloom & Petal" }],
  creator: "Bloom & Petal",
  publisher: "Bloom & Petal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Bloom & Petal | Nashville's Premier Artisan Florist",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Bloom & Petal - Nashville Florist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom & Petal | Nashville's Premier Artisan Florist",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// Page-specific metadata generators
export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    keywords: keywords || baseMetadata.keywords,
    openGraph: {
      title: `${title} | Bloom & Petal Nashville`,
      description,
      url,
    },
    twitter: {
      title: `${title} | Bloom & Petal Nashville`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export { siteConfig };
