import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export interface Character {
  id: string;
  name: string;
  element: 'pyro' | 'hydro' | 'anemo' | 'electro' | 'dendro' | 'cryo' | 'geo';
  weapon: 'sword' | 'claymore' | 'polearm' | 'catalyst' | 'bow';
  rarity: number;
  image: string;
  title?: string;
  region?: string;
  affiliation?: string;
  constellation?: string;
  description?: string;
  personality?: string;
}

const CharacterDetails = (character: Character) => {
  return (
    <div className='hidden lg:block top-24 sticky lg:w-1/2 xl:w-2/5'>
      <div className='bg-card rounded-xl aspect-square overflow-hidden'>
        <div className='relative w-full h-full'>
          <Image
            src={
              character.image ||
              '/static/images/placeholder.svg?height=800&width=600'
            }
            alt='Selected character splash art'
            fill
            className='object-cover'
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
  );
};

export default CharacterDetails;
