import { defineField, defineType } from 'sanity'

const artifactPieceFields = [
  defineField({
    name: 'shortDescription',
    title: 'Short Description',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'longDescription',
    title: 'Long Description',
    type: 'array',
    of: [
      {
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
      },
    ],
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
    validation: (Rule) => Rule.required(),
  }),
]

export const artifact = defineType({
  name: 'artifact',
  title: 'Artifact',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[a-z]+(?:_[a-z]+)*$/)
          .error(
            'ID must be lowercase letters separated by underscores (e.g., "obsidian_codex")'
          ),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    } ),
    defineField({
      name: 'rarity',
      title: 'Rarity',
      type: 'number',
      validation: (Rule) => Rule.required().min(4).max(5),
    }),
    defineField({
      name: 'twoSetBonus',
      title: '2-Set Bonus',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fourSetBonus',
      title: '4-Set Bonus',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'flowerOfLife',
      title: 'Flower of Life',
      type: 'object',
      fields: artifactPieceFields,
    }),
    defineField({
      name: 'sandsOfEon',
      title: 'Sands of Eon',
      type: 'object',
      fields: artifactPieceFields,
    }),
    defineField({
      name: 'plumeOfDeath',
      title: 'Plume of Death',
      type: 'object',
      fields: artifactPieceFields,
    }),
    defineField({
      name: 'circletOfLogos',
      title: 'Circlet of Logos',
      type: 'object',
      fields: artifactPieceFields,
    }),
    defineField({
      name: 'gobletOfEonothem',
      title: 'Goblet of Eonothem',
      type: 'object',
      fields: artifactPieceFields,
    }),
  ],
})
