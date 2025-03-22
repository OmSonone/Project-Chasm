import { defineQuery } from 'next-sanity';

export const GET_ALL_ELEMENTS = defineQuery(
  `*[_type == "elements"] | order(name asc)`
);

export const GET_ALL_WEAPON_TYPES = defineQuery(
  `*[_type == "weaponType"] | order(name asc)`
);
