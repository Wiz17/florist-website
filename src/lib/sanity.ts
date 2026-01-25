import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Image URL builder for optimized images
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Type definitions
export interface PriceAdjustment {
  enabled: boolean;
  adjustmentType: 'fixed' | 'percentage';
  adjustmentValue: number;
  adjustmentDirection: 'increase' | 'decrease';
  applicableTo: 'all' | 'categories' | 'tags';
  categories?: string[];
  tags?: string[];
}

export interface Festival {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  priceAdjustment?: PriceAdjustment;
  bannerImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title?: string;
  description?: string;
  offerText?: string;
  ctaText?: string;
  ctaLink?: string;
  textColor?: string;
  announcementText?: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  images?: Array<{
    asset: {
      _ref: string;
      _type: string;
    };
  }>;
  category?: string;
  tag?: string;
  description?: string;
  featured?: boolean;
  inStock?: boolean;
}

// Helper to get local date in YYYY-MM-DD format
function getLocalDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Festival queries
export async function getActiveFestival(): Promise<Festival | null> {
  const today = getLocalDateString(); // Use local date, not UTC

  try {
    // Get active festival within date range only
    const festival = await client.fetch<Festival>(
      `*[_type == "festival" && isActive == true && startDate <= $today && endDate >= $today][0]`,
      { today }
    );

    return festival || null;
  } catch (error) {
    console.error('Error fetching active festival:', error);
    return null;
  }
}

export async function getActiveFestivals(): Promise<Festival[]> {
  const today = getLocalDateString(); // Use local date, not UTC

  try {
    return await client.fetch<Festival[]>(
      `*[_type == "festival" && isActive == true && startDate <= $today && endDate >= $today] | order(startDate desc)`,
      { today }
    );
  } catch (error) {
    console.error('Error fetching active festivals:', error);
    return [];
  }
}

export async function getAllFestivals(): Promise<Festival[]> {
  try {
    return await client.fetch<Festival[]>(
      `*[_type == "festival"] | order(startDate desc)`
    );
  } catch (error) {
    console.error('Error fetching festivals:', error);
    return [];
  }
}

// Product queries
export async function getProducts(): Promise<Product[]> {
  try {
    return await client.fetch<Product[]>(
      `*[_type == "product"] | order(_createdAt desc)`
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch<Product>(
      `*[_type == "product" && slug.current == $slug][0]`,
      { slug }
    );
    return product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    return await client.fetch<Product[]>(
      `*[_type == "product" && featured == true] | order(_createdAt desc)`
    );
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    return await client.fetch<Product[]>(
      `*[_type == "product" && category == $category] | order(_createdAt desc)`,
      { category }
    );
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}

// Price calculation helper
export function getProductPrice(
  product: Product, 
  activeFestivals: Festival[]
): { currentPrice: number; originalPrice: number; activeFestival: Festival | null; isAdjusted: boolean } {
  const originalPrice = product.price;
  
  // If no active festivals, return regular price
  if (!activeFestivals || activeFestivals.length === 0) {
    return {
      currentPrice: originalPrice,
      originalPrice: originalPrice,
      activeFestival: null,
      isAdjusted: false,
    };
  }

  // Find first active festival with price adjustment enabled
  const festivalWithAdjustment = activeFestivals.find(
    f => f.priceAdjustment?.enabled === true
  );

  if (!festivalWithAdjustment || !festivalWithAdjustment.priceAdjustment) {
    return {
      currentPrice: originalPrice,
      originalPrice: originalPrice,
      activeFestival: null,
      isAdjusted: false,
    };
  }

  const adjustment = festivalWithAdjustment.priceAdjustment;

  // Check if adjustment applies to this product
  const appliesToProduct = 
    adjustment.applicableTo === 'all' ||
    (adjustment.applicableTo === 'categories' && 
     product.category && 
     adjustment.categories?.includes(product.category)) ||
    (adjustment.applicableTo === 'tags' && 
     product.tag && 
     adjustment.tags?.includes(product.tag));

  if (!appliesToProduct) {
    return {
      currentPrice: originalPrice,
      originalPrice: originalPrice,
      activeFestival: null,
      isAdjusted: false,
    };
  }

  // Calculate adjusted price
  let adjustedPrice = originalPrice;

  if (adjustment.adjustmentType === 'fixed') {
    // Fixed amount adjustment
    if (adjustment.adjustmentDirection === 'increase') {
      adjustedPrice = originalPrice + adjustment.adjustmentValue;
    } else {
      adjustedPrice = Math.max(0, originalPrice - adjustment.adjustmentValue);
    }
  } else {
    // Percentage adjustment
    const percentage = adjustment.adjustmentValue / 100;
    if (adjustment.adjustmentDirection === 'increase') {
      adjustedPrice = originalPrice * (1 + percentage);
    } else {
      adjustedPrice = originalPrice * (1 - percentage);
    }
    adjustedPrice = Math.max(0, adjustedPrice);
  }

  // Round to 2 decimal places
  adjustedPrice = Math.round(adjustedPrice * 100) / 100;

  // Only show adjustment if discounted price is less than original
  const isDiscount = adjustedPrice < originalPrice;

  return {
    currentPrice: adjustedPrice,
    originalPrice: originalPrice,
    activeFestival: festivalWithAdjustment,
    isAdjusted: isDiscount,
  };
}
