import { type SchemaTypeDefinition } from 'sanity';
// Relative imports: the Sanity CLI loads these files without the `@/` alias.
import { elements } from './elements';
import { weaponType } from './weaponType';
import { character } from './character';
import { artifact } from './artifact';
import { book } from './book';
import { weapon } from './weapon';
import { version } from './version';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [elements, weaponType, character, artifact, book, weapon, version],
};
