import { type SchemaTypeDefinition } from 'sanity';
import { elements } from '@/sanity/schemaTypes/elements';
import { weaponType } from '@/sanity/schemaTypes/weaponType';
import { character } from '@/sanity/schemaTypes/character';
import { characterStory } from '@/sanity/schemaTypes/characterStory';
import { artifact } from '@/sanity/schemaTypes/artifact';
import { book } from '@/sanity/schemaTypes/book';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [elements, weaponType, character, characterStory, artifact, book],
};
