import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CHARACTER_FILTER_PREFIX } from '@/lib/characters';
import type { Elements, WeaponType } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';

interface CharacterFilterProps {
  elements: Elements[];
  weaponTypes: WeaponType[];
  query: string;
}

/** The filter value part of `?query=filter_<value>`, or an empty string. */
function getFilterValue(query: string): string {
  if (!query.startsWith(CHARACTER_FILTER_PREFIX)) return '';

  return query.slice(CHARACTER_FILTER_PREFIX.length).trim().toLowerCase();
}

/** Stable URL value for a Sanity document that may be missing its `id`. */
function filterValueFor(document: { id?: string; name?: string; _id: string }) {
  return document.id ?? document.name ?? document._id;
}

export function CharacterFilter({
  elements,
  weaponTypes,
  query,
}: CharacterFilterProps) {
  const filterValue = getFilterValue(query);

  return (
    <div className='space-y-4 w-full'>
      <div className='flex flex-wrap gap-2'>
        <Button
          asChild
          variant='outline'
          size='sm'
          className={`gap-1 cursor-pointer ${filterValue === '' ? 'button-active' : ''}`}
        >
          <Link href='/home/characters'>
            <span>All</span>
          </Link>
        </Button>

        {elements.map((element) => {
          const value = filterValueFor(element);

          return (
            <Button
              asChild
              variant='outline'
              size='sm'
              key={element._id}
              className={`gap-1 cursor-pointer ${
                filterValue === value.toLowerCase() ? 'button-active' : ''
              }`}
            >
              <Link href={`/home/characters?query=filter_${value}`}>
                <Image
                  src={
                    element.image
                      ? urlFor(element.image).url()
                      : `/static/images/elements/${element.name}.png`
                  }
                  alt=''
                  aria-hidden
                  width={20}
                  height={20}
                />
                <span>{element.name}</span>
              </Link>
            </Button>
          );
        })}

        {weaponTypes.map((weaponType) => {
          const value = filterValueFor(weaponType);

          return (
            <Button
              asChild
              variant='outline'
              size='sm'
              key={weaponType._id}
              className={`gap-1 cursor-pointer ${
                filterValue === value.toLowerCase() ? 'button-active' : ''
              }`}
            >
              <Link href={`/home/characters?query=filter_${value}`}>
                <Image
                  src={
                    weaponType.image
                      ? urlFor(weaponType.image).url()
                      : `/static/images/weapons/${weaponType.name}.png`
                  }
                  alt=''
                  aria-hidden
                  width={20}
                  height={20}
                />
                <span>{weaponType.name}</span>
              </Link>
            </Button>
          );
        })}

        {(['4', '5'] as const).map((rarity) => (
          <Button
            asChild
            variant='outline'
            size='sm'
            key={rarity}
            className={`gap-1 cursor-pointer ${
              filterValue === rarity ? 'button-active' : ''
            }`}
          >
            <Link href={`/home/characters?query=filter_${rarity}`}>
              <span
                className={
                  rarity === '5' ? 'text-amber-400' : 'text-purple-400'
                }
              >
                {'★'.repeat(Number(rarity))}
              </span>
              <span>{rarity}-Star</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
