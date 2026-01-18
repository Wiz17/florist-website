export default {
  name: 'festival',
  title: 'Festival Banner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Festival Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Manually enable/disable this banner',
      initialValue: true,
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string',
      description: 'Main heading text for the banner',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Subtitle or description text',
    },
    {
      name: 'offerText',
      title: 'Offer Text',
      type: 'string',
      description: 'e.g., "20% OFF" or "Special Offer"',
    },
    {
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
      initialValue: 'Shop Now',
    },
    {
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL where the button should link to',
      initialValue: '/shop',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex color code (e.g., #FF6B6B)',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Hex color code for text',
    },
    {
      name: 'priceAdjustment',
      title: 'Price Adjustment',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Price Adjustment',
          type: 'boolean',
          description: 'Apply price adjustments during this festival',
          initialValue: false,
        },
        {
          name: 'adjustmentType',
          title: 'Adjustment Type',
          type: 'string',
          options: {
            list: [
              { title: 'Fixed Amount', value: 'fixed' },
              { title: 'Percentage', value: 'percentage' },
            ],
            layout: 'radio',
          },
          hidden: ({ parent }: any) => !parent?.enabled,
        },
        {
          name: 'adjustmentValue',
          title: 'Adjustment Value',
          type: 'number',
          description: 'Fixed amount (e.g., 10 for $10) or percentage (e.g., 20 for 20%)',
          validation: (Rule: any) => Rule.positive(),
          hidden: ({ parent }: any) => !parent?.enabled,
        },
        {
          name: 'adjustmentDirection',
          title: 'Direction',
          type: 'string',
          options: {
            list: [
              { title: 'Increase', value: 'increase' },
              { title: 'Decrease', value: 'decrease' },
            ],
            layout: 'radio',
          },
          initialValue: 'increase',
          hidden: ({ parent }: any) => !parent?.enabled,
        },
        {
          name: 'applicableTo',
          title: 'Apply To',
          type: 'string',
          options: {
            list: [
              { title: 'All Products', value: 'all' },
              { title: 'Specific Categories', value: 'categories' },
              { title: 'Specific Tags', value: 'tags' },
            ],
            layout: 'radio',
          },
          initialValue: 'all',
          hidden: ({ parent }: any) => !parent?.enabled,
        },
        {
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: 'Bouquets', value: 'Bouquets' },
              { title: 'Arrangements', value: 'Arrangements' },
              { title: 'Wedding', value: 'Wedding' },
              { title: 'Seasonal', value: 'Seasonal' },
            ],
          },
          hidden: ({ parent }: any) => !parent?.enabled || parent?.applicableTo !== 'categories',
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{ type: 'string' }],
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
          hidden: ({ parent }: any) => !parent?.enabled || parent?.applicableTo !== 'tags',
        },
      ],
      description: 'Configure price adjustments that apply during this festival. Prices revert to normal after festival ends. Only discounts (decreased prices) will be displayed to customers.',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'bannerImage',
    },
  },
};
