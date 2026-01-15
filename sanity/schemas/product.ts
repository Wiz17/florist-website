export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule: any) => Rule.required().min(1).error('At least one image is required for the product'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Bouquets', value: 'Bouquets' },
          { title: 'Arrangements', value: 'Arrangements' },
          { title: 'Wedding', value: 'Wedding' },
          { title: 'Seasonal', value: 'Seasonal' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Bestseller', value: 'Bestseller' },
          { title: 'New', value: 'New' },
          { title: 'Premium', value: 'Premium' },
          { title: 'Popular', value: 'Popular' },
          { title: 'Romantic', value: 'Romantic' },
          { title: 'Organic', value: 'Organic' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Product description',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show in featured section on homepage',
      initialValue: false,
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      description: 'Is this product currently available?',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
};
