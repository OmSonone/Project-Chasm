import { Artifact } from '@/components/item-artifact/artifact-card';

export const artifactSets = [
  {
    id: 'emblem',
    name: 'Emblem of Severed Fate',
    bonus2pc: 'Energy Recharge +20%',
    bonus4pc:
      'Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.',
    lore: 'A collection of artifacts that record the hidden fate of a bygone era. The mask of the one who rules over the transience of life.',
  },
  {
    id: 'crimson',
    name: 'Crimson Witch of Flames',
    bonus2pc: 'Pyro DMG Bonus +15%',
    bonus4pc:
      'Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.',
    lore: "The Crimson Witch of Flames was once a maiden of noble birth who spent her days teaching people to be kind and charitable. But after her lover died in a cataclysm, she became the 'Crimson Witch of Flames'.",
  },
  {
    id: 'blizzard',
    name: 'Blizzard Strayer',
    bonus2pc: 'Cryo DMG Bonus +15%',
    bonus4pc:
      'When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.',
    lore: 'A collection of artifacts that once belonged to a hunter who roamed the blizzards. They carry the lingering warmth of a bygone hero.',
  },
];

export const artifacts: Artifact[] = [
  {
    id: 'emblem-flower',
    name: 'Magnificent Tsuba',
    rarity: 5,
    type: 'flower',
    set: 'Emblem of Severed Fate',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description:
      'A handguard inlaid with a beautiful ornament. The golden waves that adorn it symbolize the transience of life.',
  },
  {
    id: 'emblem-plume',
    name: 'Sundered Feather',
    rarity: 5,
    type: 'plume',
    set: 'Emblem of Severed Fate',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description:
      "A feather from a tengu's wing. Its vibrant purple color represents the lightning that heralds the coming of the Shogun.",
  },
  {
    id: 'emblem-sands',
    name: 'Storm Cage',
    rarity: 5,
    type: 'sands',
    set: 'Emblem of Severed Fate',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description:
      "An hourglass that can hold lightning itself. The purple lightning trapped within symbolizes the Shogun's authority.",
  },
  {
    id: 'emblem-goblet',
    name: 'Scarlet Vessel',
    rarity: 5,
    type: 'goblet',
    set: 'Emblem of Severed Fate',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description:
      'A vessel that once contained sacred wine. The crimson liquid within is said to represent the blood of the fallen.',
  },
  {
    id: 'emblem-circlet',
    name: 'Ornate Kabuto',
    rarity: 5,
    type: 'circlet',
    set: 'Emblem of Severed Fate',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description:
      "A helmet worn by a mighty general. The ornate design speaks of its wearer's noble status and fearsome reputation.",
  },
  {
    id: 'crimson-flower',
    name: "Witch's Flower of Blaze",
    rarity: 5,
    type: 'flower',
    set: 'Crimson Witch of Flames',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description:
      "A flower touched by the witch who once dreamt of burning away all the world's impurities.",
  },
  {
    id: 'crimson-plume',
    name: "Witch's Ever-Burning Plume",
    rarity: 5,
    type: 'plume',
    set: 'Crimson Witch of Flames',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description:
      'A feather that burns eternally with a flame that can purify all evil.',
  },
  {
    id: 'blizzard-flower',
    name: 'Snowswept Memory',
    rarity: 5,
    type: 'flower',
    set: 'Blizzard Strayer',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description: 'A flower that never wilts preserved in everlasting ice.',
  },
  {
    id: 'blizzard-plume',
    name: "Icebreaker's Resolve",
    rarity: 5,
    type: 'plume',
    set: 'Blizzard Strayer',
    image: '/static/images/placeholder.svg?height=200&width=200',
    description: 'A feather as light as the snow but as sharp as the frost.',
  },
];
