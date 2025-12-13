import { defineField, defineType } from 'sanity'

const blockContent = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'H1', value: 'h1' },
    { title: 'H2', value: 'h2' },
    { title: 'H3', value: 'h3' },
    { title: 'Quote', value: 'blockquote' },
  ],
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Emphasis', value: 'em' },
      { title: 'Code', value: 'code' },
      { title: 'Underline', value: 'underline' },
      { title: 'Strike', value: 'strike-through' },
    ],
  },
}

const audioField = {
  name: 'audio',
  title: 'Audio Narration',
  type: 'file',
  options: {
    accept: 'audio/*',
  },
  description: 'Upload an audio file for narration',
}

export const character = defineType({
  name: 'character',
  title: 'Character',
  type: 'document',
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },

  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[a-z]+(?:_[a-z]+)*$/)
          .error(
            'ID must be lowercase letters separated by underscores (e.g., "yae_miko")'
          ),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
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
    defineField({
      name: 'splash',
      title: 'Splash',
      type: 'image',
      options: {
        hotspot: true,
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
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'rarity',
      type: 'number',
      title: 'Rarity',
      validation: (Rule) => Rule.required().min(4).max(5),
    }),
    defineField({
      name: 'weapon',
      type: 'reference',
      to: [{ type: 'weaponType' }],
      validation: (Rule) => Rule.required(),
      title: 'Weapon',
    }),
    defineField({
      name: 'element',
      type: 'reference',
      to: [{ type: 'elements' }],
      validation: (Rule) => Rule.required(),
      title: 'Element',
    }),
    defineField({
      name: 'birthday',
      type: 'string',
      title: 'Birthday',
    }),
    defineField({
      name: 'constellation',
      type: 'string',
      title: 'Constellation',
    }),
    defineField({
      name: 'region',
      type: 'string',
      title: 'Region',
    }),
    defineField({
      name: 'special_dish',
      title: 'Special Dish',
      type: 'string',
    }),
    defineField({
      name: 'affiliation',
      type: 'string',
      title: 'Affiliation',
    }),
    defineField({
      name: 'vision',
      type: 'reference',
      to: [{ type: 'elements' }],
      title: 'Vision',
    }),
    defineField({
      name: 'gnosis',
      type: 'reference',
      title: 'Gnosis',
      to: [{ type: 'elements' }],
    }),
    defineField({
      name: 'authority',
      type: 'reference',
      to: [{ type: 'elements' }],
      title: "Ancient Dragon's Authority",
    }),
    defineField({
      name: 'character_details',
      type: 'object',
      title: 'Character Details',
      fields: [
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
    defineField({
      name: 'character_story_1',
      type: 'object',
      title: 'Character Story 1',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
    defineField({
      name: 'character_story_2',
      type: 'object',
      title: 'Character Story 2',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
    defineField({
      name: 'character_story_3',
      type: 'object',
      title: 'Character Story 3',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
    defineField({
      name: 'character_story_4',
      type: 'object',
      title: 'Character Story 4',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
    defineField({
      name: 'character_story_5',
      type: 'object',
      title: 'Character Story 5',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
    defineField({
      name: 'extra_story',
      type: 'object',
      title: 'Extra Story',
      fields: [
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
    defineField({
      name: 'vision_story',
      type: 'object',
      title: 'Vision Story',
      fields: [
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [blockContent],
          validation: (Rule) => Rule.required(),
        },
        audioField,
      ],
    }),
  ],
})
