import { defineField, defineType } from 'sanity'

export const characterStory = defineType({
  name: 'characterStory',
  title: 'Character Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        list: [
          { title: 'Character Story 1', value: 'Character Story 1' },
          { title: 'Character Story 2', value: 'Character Story 2' },
          { title: 'Character Story 3', value: 'Character Story 3' },
          { title: 'Character Story 4', value: 'Character Story 4' },
          { title: 'Character Story 5', value: 'Character Story 5' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'}
            ]
          }
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'character',
      type: 'reference',
      to: [{ type: 'character' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      character: 'character.name',
    },
    prepare(selection) {
      const {title, character} = selection
      return {
        title: title,
        subtitle: character ? `Character: ${character}` : ''
      }
    }
  }
}) 