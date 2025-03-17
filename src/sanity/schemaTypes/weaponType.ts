import { defineField, defineType } from 'sanity'

export const weaponType = defineType({
    name: 'weaponType',
    title: 'Weapon Type',
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
})
