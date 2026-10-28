import type { Character, Elements, WeaponType } from '@/sanity/types';

/**
 * A character document with its references resolved by the
 * `GET_ALL_CHARACTERS` GROQ query.
 */
export type CharacterWithExpandedRefs = Omit<
  Character,
  'element' | 'weapon' | 'vision' | 'gnosis' | 'authority'
> & {
  element?: Elements | null;
  weapon?: WeaponType | null;
  vision?: Elements | null;
  gnosis?: Elements | null;
  authority?: Elements | null;
};

/** URL prefix used by `/home/characters?query=filter_<value>`. */
export const CHARACTER_FILTER_PREFIX = 'filter_';

export type CharacterFilter =
  | { kind: 'element'; value: string }
  | { kind: 'weapon'; value: string }
  | { kind: 'rarity'; value: number };

type NameOrId = { name?: string; id?: string; _id?: string } | null | undefined;

function normalize(value: string | number | null | undefined): string {
  return String(value ?? '')
    .trim()
    .toLowerCase();
}

function matchesNameOrId(entity: NameOrId, value: string): boolean {
  if (!entity) return false;

  return (
    normalize(entity.name) === value ||
    normalize(entity.id) === value ||
    normalize(entity._id) === value
  );
}

export function isCharacterFilterQuery(
  rawQuery: string | null | undefined
): boolean {
  return (
    typeof rawQuery === 'string' && rawQuery.startsWith(CHARACTER_FILTER_PREFIX)
  );
}

/**
 * Turns a raw `?query=` value into a typed filter.
 *
 * The kind is inferred from the character documents because the URL only
 * carries the filter value (e.g. `filter_pyro`, `filter_sword`, `filter_5`).
 * Returns `null` for empty, unknown, or non-filter queries.
 */
export function resolveCharacterFilter(
  characters: readonly CharacterWithExpandedRefs[],
  rawQuery: string | null | undefined
): CharacterFilter | null {
  if (!isCharacterFilterQuery(rawQuery)) return null;

  const value = (rawQuery as string)
    .slice(CHARACTER_FILTER_PREFIX.length)
    .trim()
    .toLowerCase();

  if (!value) return null;

  const rarity = Number(value);
  if (Number.isInteger(rarity) && rarity > 0) {
    return { kind: 'rarity', value: rarity };
  }

  if (
    characters.some((character) => matchesNameOrId(character.element, value))
  ) {
    return { kind: 'element', value };
  }

  if (
    characters.some((character) => matchesNameOrId(character.weapon, value))
  ) {
    return { kind: 'weapon', value };
  }

  return null;
}

export function filterCharactersByQuery(
  characters: readonly CharacterWithExpandedRefs[],
  rawQuery: string | null | undefined
): CharacterWithExpandedRefs[] {
  const filter = resolveCharacterFilter(characters, rawQuery);

  if (!filter) return [...characters];

  return characters.filter((character) => {
    switch (filter.kind) {
      case 'element':
        return matchesNameOrId(character.element, filter.value);
      case 'weapon':
        return matchesNameOrId(character.weapon, filter.value);
      case 'rarity':
        return character.rarity === filter.value;
      default:
        return true;
    }
  });
}

/**
 * Resolves the character shown in the detail panel: an explicit `?query=<id>`
 * selection wins, otherwise the first character matching the active filter.
 */
export function selectCharacter(
  characters: readonly CharacterWithExpandedRefs[],
  rawQuery: string | null | undefined
): CharacterWithExpandedRefs | null {
  if (characters.length === 0) return null;

  if (!isCharacterFilterQuery(rawQuery)) {
    const requestedId = normalize(rawQuery);
    const requested = requestedId
      ? characters.find((character) => normalize(character.id) === requestedId)
      : undefined;

    if (requested) return requested;
  }

  return filterCharactersByQuery(characters, rawQuery)[0] ?? characters[0];
}
