import { defineField, defineType } from 'sanity';

export const elements = defineType({
  name: 'elements',
  title: 'Elements',
  type: 'document',
  icon: 'string',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot functionality for better image cropping
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
  ],
});
