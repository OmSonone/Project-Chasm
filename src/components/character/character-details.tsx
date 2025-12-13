import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { urlFor } from '@/sanity/lib/image'
import { CharacterWithExpandedRefs } from '@/components/character/character-card'

const CharacterDetails = (character: CharacterWithExpandedRefs) => {

  return (
    <div className='hidden lg:block top-24 sticky lg:w-2/3 xl:w-2/3'>
      <div className='bg-card rounded-xl aspect-square overflow-hidden'>
        <div className='relative w-full h-full'>
          <Image
            src={
              character.splash ?
                urlFor(character.splash).url()
              : '/static/images/placeholder.svg?height=800&width=600'
            }
            alt='Selected character splash art'
            fill
            className='object-contain'
          />
          <div className='bottom-0 absolute bg-gradient-to-t from-black/80 to-transparent p-6 w-full text-white'>
            <h2 className='font-bold text-3xl'>{character.name}</h2>
            <p className='opacity-90 text-lg'>
              {character.title || 'Plane of Euthymia'}
            </p>
          </div>
        </div>
      </div>
      <div className='bg-card mt-4 p-4 border rounded-lg'>
        <h3 className='mb-2 font-semibold'>Character Details</h3>
        <p className='text-muted-foreground text-sm'>
          {character.description ||
            'The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.'}
        </p>
        <div className='mt-4'>
          <Link href={`/home/characters/${character.id}`}>
            <Button className='w-full'>View Character Details</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails
