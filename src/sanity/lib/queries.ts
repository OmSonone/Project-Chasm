import { defineQuery } from 'next-sanity';

export const GET_ALL_ELEMENTS = defineQuery(
  `*[_type == "elements"] | order(name asc)`
);

export const GET_ALL_WEAPON_TYPES = defineQuery(
  `*[_type == "weaponType"] | order(name asc)`
);

export const GET_ALL_CHARACTERS = defineQuery(
  `*[_type == "character"] | order(name asc) {
    _id,
    _type,
    id,
    name,
    description,
    image,
    splash,
    title,
    rarity,
    birthday,
    constellation,
    region,
    special_dish,
    affiliation,
    "weapon": weapon->{_id, name, description, image},
    "element": element->{_id, name, description, image},
    "vision": vision->{_id, name, description, image},
    "gnosis": gnosis->{_id, name, description, image},
    "authority": authority->{_id, name, description, image}
  }`
);