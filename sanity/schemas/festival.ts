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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'bannerImage',
    },
  },
};
