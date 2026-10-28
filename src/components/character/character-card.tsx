import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import {
  filterCharactersByQuery,
  type CharacterWithExpandedRefs,
} from '@/lib/characters';

const elementColors: Record<string, string> = {
  pyro: 'bg-red-500/50 text-red-500',
  hydro: 'bg-blue-500/20 text-blue-500',
  anemo: 'bg-emerald-500/20 text-emerald-500',
  electro: 'bg-purple-500/20 text-purple-500',
  dendro: 'bg-green-500/20 text-green-500',
  cryo: 'bg-cyan-500/20 text-cyan-500',
  geo: 'bg-amber-500/20 text-amber-500',
};

export function CharacterCard({
  characters,
  query,
}: {
  characters: CharacterWithExpandedRefs[];
  query: string;
}) {
  const filteredCharacters = filterCharactersByQuery(characters, query);

  if (filteredCharacters.length === 0) {
    return (
      <div className='lg:w-1/3 xl:w-1/3'>
        <div className='bg-card p-6 border rounded-lg text-muted-foreground text-center'>
          No characters match this filter yet.
        </div>
      </div>
    );
  }

  return (
    <div className='lg:w-1/3 xl:w-1/3'>
      <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-3'>
        {filteredCharacters.map((character) => {
          const elementName = character.element?.name;
          const elementColor =
            elementColors[elementName?.toLowerCase() ?? ''] ??
            elementColors.pyro;

          return (
            <Link
              key={character.id ?? character._id}
              href={`/home/characters?query=${character.id ?? character._id}`}
              className='group relative bg-card hover:shadow-md border rounded-lg overflow-hidden hover:scale-105 transition-all cursor-pointer'
              aria-label={`Select ${character.name}`}
              scroll={false}
            >
              <div
                className={cn(
                  'aspect-square overflow-hidden',
                  character.rarity === 5
                    ? 'bg-amber-100/50'
                    : character.rarity === 4
                      ? 'bg-purple-100/30'
                      : ''
                )}
              >
                <Image
                  src={
                    character.image
                      ? urlFor(character.image).url()
                      : '/static/images/placeholder.svg?height=200&width=200'
                  }
                  alt={character.name ?? 'Character'}
                  width={200}
                  height={200}
                  className='w-full h-full object-cover transition-transform'
                />
                <div className='top-2 right-2 absolute bg-black/60 px-1.5 py-0.5 rounded-full font-medium text-white text-xs'>
                  {'★'.repeat(character.rarity ?? 4)}
                </div>
                <div
                  className={cn(
                    'absolute left-2 top-2 rounded-full px-1.5 py-0.5 text-xs font-medium',
                    elementColor
                  )}
                >
                  {elementName
                    ? elementName.charAt(0).toUpperCase() + elementName.slice(1)
                    : 'Pyro'}
                </div>
              </div>
              <div className='p-2 text-center'>
                <h3 className='font-medium line-clamp-1'>{character.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
