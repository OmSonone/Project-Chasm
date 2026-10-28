import { CharacterFilter } from './character-filter';
import { client } from '@/sanity/lib/client';
import { GET_ALL_ELEMENTS, GET_ALL_WEAPON_TYPES } from '@/sanity/lib/queries';
import type { Elements, WeaponType } from '@/sanity/types';

export async function CharacterFilterWrapper({ query }: { query: string }) {
  const [elements, weaponTypes] = await Promise.all([
    client.fetch<Elements[]>(GET_ALL_ELEMENTS),
    client.fetch<WeaponType[]>(GET_ALL_WEAPON_TYPES),
  ]);

  return (
    <CharacterFilter
      elements={elements ?? []}
      weaponTypes={weaponTypes ?? []}
      query={query}
    />
  );
}
