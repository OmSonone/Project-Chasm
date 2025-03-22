import { type SchemaTypeDefinition } from 'sanity';
import { elements } from '@/sanity/schemaTypes/elements';
import { weaponType } from '@/sanity/schemaTypes/weaponType';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [elements, weaponType],
};
