import { type SchemaTypeDefinition } from 'sanity';
import { elements } from '@/sanity/schemaTypes/elements';
import { weaponType } from '@/sanity/schemaTypes/weaponType';
import { character } from '@/sanity/schemaTypes/character';
import { artifact } from '@/sanity/schemaTypes/artifact';
import { book } from '@/sanity/schemaTypes/book';
import { weapon } from '@/sanity/schemaTypes/weapon';
import { version } from '@/sanity/schemaTypes/version';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [elements, weaponType, character, artifact, book, weapon, version],
};
