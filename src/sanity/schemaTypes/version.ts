import { defineField, defineType } from 'sanity'

export const version = defineType({
  name: 'version',
  title: 'Version',
  type: 'document',
  fields: [
    defineField({
      name: 'version',
      title: 'Version Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Semantic version number (e.g., 1.0.0)',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Set to true when this version is live on the site',
      initialValue: false,
    }),
    defineField({
      name: 'changes',
      title: 'Changes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Feature', value: 'feature' },
                  { title: 'Bug Fix', value: 'bugfix' },
                  { title: 'Improvement', value: 'improvement' },
                  { title: 'Breaking Change', value: 'breaking' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'version',
      subtitle: 'releaseDate',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Version ${title}`,
        subtitle: new Date(subtitle).toLocaleDateString(),
      }
    },
  },
}) 