'use client';

import type React from 'react';

import Image from 'next/image';
import { cn } from '@/lib/utils';

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

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

const elementColors = {
  pyro: 'bg-red-500/20 text-red-500',
  hydro: 'bg-blue-500/20 text-blue-500',
  anemo: 'bg-emerald-500/20 text-emerald-500',
  electro: 'bg-purple-500/20 text-purple-500',
  dendro: 'bg-green-500/20 text-green-500',
  cryo: 'bg-cyan-500/20 text-cyan-500',
  geo: 'bg-amber-500/20 text-amber-500',
};

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className='group relative bg-card hover:shadow-md border rounded-lg overflow-hidden transition-all cursor-pointer hover:scale-105'
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='button'
      aria-label={`Select ${character.name}`}
    >
      <div className='aspect-square overflow-hidden'>
        <Image
          src={
            character.image ||
            '/static/images/placeholder.svg?height=200&width=200'
          }
          alt={character.name}
          width={200}
          height={200}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform'
        />
        <div className='top-2 right-2 absolute bg-black/60 px-1.5 py-0.5 rounded-full font-medium text-white text-xs'>
          {'★'.repeat(character.rarity)}
        </div>
        <div
          className={cn(
            'absolute left-2 top-2 rounded-full px-1.5 py-0.5 text-xs font-medium',
            elementColors[character.element]
          )}
        >
          {character.element.charAt(0).toUpperCase() +
            character.element.slice(1)}
        </div>
      </div>
      <div className='p-2 text-center'>
        <h3 className='font-medium line-clamp-1'>{character.name}</h3>
      </div>
    </div>
  );
}
