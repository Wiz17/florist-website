import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Image URL builder for optimized images
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Type definitions
export interface Festival {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
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
  backgroundColor?: string;
  textColor?: string;
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
}

// Festival queries
export async function getActiveFestival(): Promise<Festival | null> {
  const today = new Date().toISOString().split('T')[0];
  
  try {
    // First try to get active festival within date range
    let festival = await client.fetch<Festival>(
      `*[_type == "festival" && isActive == true && startDate <= $today && endDate >= $today][0]`,
      { today }
    );
    
    // If no festival found, try to get any active festival (for testing)
    if (!festival) {
      festival = await client.fetch<Festival>(
        `*[_type == "festival" && isActive == true][0]`
      );
    }
    
    return festival || null;
  } catch (error) {
    console.error('Error fetching active festival:', error);
    return null;
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
