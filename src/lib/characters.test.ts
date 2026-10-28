import { describe, expect, it } from 'vitest';
import type { Elements, WeaponType } from '@/sanity/types';
import {
  filterCharactersByQuery,
  isCharacterFilterQuery,
  resolveCharacterFilter,
  selectCharacter,
  type CharacterWithExpandedRefs,
} from './characters';

const auditFields = { _createdAt: '', _updatedAt: '', _rev: '' };

function element(name: string): Elements {
  return {
    ...auditFields,
    _id: `element-${name.toLowerCase()}`,
    _type: 'elements',
    id: name.toLowerCase(),
    name,
  };
}

function weaponType(name: string): WeaponType {
  return {
    ...auditFields,
    _id: `weapon-${name.toLowerCase()}`,
    _type: 'weaponType',
    id: name.toLowerCase(),
    name,
  };
}

function character(
  id: string,
  rarity: number,
  elementName?: string,
  weaponName?: string
): CharacterWithExpandedRefs {
  return {
    ...auditFields,
    _id: `character-${id}`,
    _type: 'character',
    id,
    name: id,
    rarity,
    element: elementName ? element(elementName) : null,
    weapon: weaponName ? weaponType(weaponName) : null,
  };
}

const raiden = character('raiden-shogun', 5, 'Electro', 'Polearm');
const ayaka = character('kamisato-ayaka', 5, 'Cryo', 'Sword');
const xiangling = character('xiangling', 4, 'Pyro', 'Polearm');

const characters = [raiden, ayaka, xiangling];

describe('isCharacterFilterQuery', () => {
  it('recognises the filter prefix', () => {
    expect(isCharacterFilterQuery('filter_pyro')).toBe(true);
    expect(isCharacterFilterQuery('filter_')).toBe(true);
  });

  it('rejects character ids, empty values, and missing input', () => {
    expect(isCharacterFilterQuery('raiden-shogun')).toBe(false);
    expect(isCharacterFilterQuery('')).toBe(false);
    expect(isCharacterFilterQuery(undefined)).toBe(false);
    expect(isCharacterFilterQuery(null)).toBe(false);
  });
});

describe('resolveCharacterFilter', () => {
  it('resolves element filters case-insensitively', () => {
    expect(resolveCharacterFilter(characters, 'filter_Pyro')).toEqual({
      kind: 'element',
      value: 'pyro',
    });
  });

  it('resolves weapon filters', () => {
    expect(resolveCharacterFilter(characters, 'filter_sword')).toEqual({
      kind: 'weapon',
      value: 'sword',
    });
  });

  it('resolves rarity filters', () => {
    expect(resolveCharacterFilter(characters, 'filter_5')).toEqual({
      kind: 'rarity',
      value: 5,
    });
  });

  it('returns null for unknown, empty, or non-filter queries', () => {
    expect(resolveCharacterFilter(characters, 'filter_zap')).toBeNull();
    expect(resolveCharacterFilter(characters, 'filter_')).toBeNull();
    expect(resolveCharacterFilter(characters, 'raiden-shogun')).toBeNull();
    expect(resolveCharacterFilter(characters, '')).toBeNull();
  });

  it('matches documents by their Sanity _id when no slug exists', () => {
    const withoutSlug: CharacterWithExpandedRefs = {
      ...character('unknown', 5),
      element: { ...element('Pyro'), id: undefined },
    };

    expect(
      resolveCharacterFilter([withoutSlug], 'filter_element-pyro')
    ).toEqual({ kind: 'element', value: 'element-pyro' });
  });
});

describe('filterCharactersByQuery', () => {
  it('returns every character when there is no filter', () => {
    expect(filterCharactersByQuery(characters, '')).toEqual(characters);
    expect(filterCharactersByQuery(characters, 'raiden-shogun')).toEqual(
      characters
    );
  });

  it('filters by element', () => {
    expect(filterCharactersByQuery(characters, 'filter_pyro')).toEqual([
      xiangling,
    ]);
  });

  it('filters by weapon type', () => {
    expect(filterCharactersByQuery(characters, 'filter_sword')).toEqual([
      ayaka,
    ]);
  });

  it('filters by rarity', () => {
    expect(filterCharactersByQuery(characters, 'filter_4')).toEqual([
      xiangling,
    ]);
    expect(filterCharactersByQuery(characters, 'filter_5')).toEqual([
      raiden,
      ayaka,
    ]);
  });

  it('returns an empty list when the resolved filter matches nobody', () => {
    expect(filterCharactersByQuery(characters, 'filter_3')).toEqual([]);
  });

  it('ignores unknown filters instead of hiding every character', () => {
    expect(filterCharactersByQuery(characters, 'filter_zap')).toEqual(
      characters
    );
  });
});

describe('selectCharacter', () => {
  it('prefers an explicit character id', () => {
    expect(selectCharacter(characters, 'kamisato-ayaka')).toBe(ayaka);
  });

  it('picks the first character that matches the active filter', () => {
    expect(selectCharacter(characters, 'filter_5')).toBe(raiden);
    expect(selectCharacter(characters, 'filter_4')).toBe(xiangling);
  });

  it('falls back to the first character for empty or unknown selections', () => {
    expect(selectCharacter(characters, '')).toBe(raiden);
    expect(selectCharacter(characters, 'does-not-exist')).toBe(raiden);
  });

  it('returns null when there are no characters', () => {
    expect(selectCharacter([], 'filter_pyro')).toBeNull();
  });
});
