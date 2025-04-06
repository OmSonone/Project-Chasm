import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'
import { Character, Elements, WeaponType } from '@/sanity/types'
export type CharacterWithExpandedRefs = Omit<
  Character,
  'element' | 'weapon' | 'vision' | 'gnosis' | 'authority'
> & {
  element?: Elements
  weapon?: WeaponType
  vision?: Elements
  gnosis?: Elements
  authority?: Elements
}

const elementColors = {
  pyro: 'bg-red-500/50 text-red-500',
  hydro: 'bg-blue-500/20 text-blue-500',
  anemo: 'bg-emerald-500/20 text-emerald-500',
  electro: 'bg-purple-500/20 text-purple-500',
  dendro: 'bg-green-500/20 text-green-500',
  cryo: 'bg-cyan-500/20 text-cyan-500',
  geo: 'bg-amber-500/20 text-amber-500',
}

export function CharacterCard({
  characters,
  query,
}: {
  characters: CharacterWithExpandedRefs[]
  query: string
}) {
  const filterType = query?.split('_')[1]

  const filteredCharacters = characters.filter((character) => {
    if (!filterType) return true

    if (filterType === 'element' && character.element?.name) {
      return (
        character.element.name.toLowerCase() ===
        query.split('_')[0].toLowerCase()
      )
    }

    if (filterType === 'weapon' && character.weapon?.name) {
      return (
        character.weapon.name.toLowerCase() ===
        query.split('_')[0].toLowerCase()
      )
    }

    if (filterType === 'rarity' && character.rarity) {
      return (
        character.rarity.toString().toLowerCase() ===
        query.split('_')[0].toLowerCase()
      )
    }

    return true
  })

  return (
    <div className='lg:w-1/3 xl:w-1/3'>
      <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-3'>
        {filteredCharacters.map((character: CharacterWithExpandedRefs) => {
          return (
            <Link
              key={character.id}
              href={`/home/characters?query=${character.id}`}
              className='group relative bg-card hover:shadow-md border rounded-lg overflow-hidden hover:scale-105 transition-all cursor-pointer'
              tabIndex={0}
              role='button'
              aria-label={`Select ${character.name}`}
              scroll={false}
            >
              <div
                className={cn(
                  'aspect-square overflow-hidden',
                  character.rarity === 5 ? 'bg-amber-100/50'
                  : character.rarity === 4 ? 'bg-purple-100/30'
                  : ''
                )}
              >
                <Image
                  src={
                    character.image ?
                      urlFor(character.image).url()
                    : '/static/images/placeholder.svg?height=100&width=200'
                  }
                  alt={character.name || 'Character Image'}
                  width={200}
                  height={200}
                  className='w-full h-full object-cover transition-transform'
                />
                <div className='top-2 right-2 absolute bg-black/60 px-1.5 py-0.5 rounded-full font-medium text-white text-xs'>
                  {'★'.repeat(character?.rarity || 4)}
                </div>
                <div
                  className={cn(
                    'absolute left-2 top-2 rounded-full px-1.5 py-0.5 text-xs font-medium',
                    elementColors[
                      (character.element?.name?.toLowerCase() as keyof typeof elementColors) ||
                        'pyro'
                    ]
                  )}
                >
                  {character.element?.name ?
                    character.element.name.charAt(0).toUpperCase() +
                    character.element.name.slice(1)
                  : 'Pyro'}
                </div>
              </div>
              <div className='p-2 text-center'>
                <h3 className='font-medium line-clamp-1'>{character.name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
