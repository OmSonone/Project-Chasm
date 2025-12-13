import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Elements, WeaponType } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface CharacterFilterProps {
  elements: Elements[];
  weaponTypes: WeaponType[];
  query: { query: string };
}

export async function CharacterFilter({
  elements,
  weaponTypes,
  query,
}: CharacterFilterProps) {
  const { query: queryString } = await query;
  const queryValue = queryString?.split('_')[1];

  return (
    <div className='space-y-4 w-full'>
      <div className='flex flex-wrap gap-2'>
        <Link href={`/home/characters`}>
          <Button
            variant='outline'
            size='sm'
            className={`gap-1 cursor-pointer`}
          >
            <span>All</span>
          </Button>
        </Link>
        {/* Element Filters */}
        {elements.map((element: Elements) => (
          <Link
            href={`/home/characters?query=filter_${element.id}`}
            key={element.id}
          >
            <Button
              variant='outline'
              size='sm'
              className={`gap-1 cursor-pointer ${queryValue === element.id ? 'button-active' : ''}`}
            >
              <Image
                src={
                  element.image ?
                    urlFor(element.image).url()
                  : `/static/images/elements/${element.name}.png`
                }
                alt={`${element?.image?.alt ?? 'Pyro'} Image`}
                width={20}
                height={20}
              />
              <span>{element.name}</span>
            </Button>
          </Link>
        ))}

        {/* Weapon Filters */}
        {weaponTypes.map((weaponType: WeaponType) => (
          <Link
            href={`/home/characters?query=filter_${weaponType.id}`}
            key={weaponType.id}
          >
            <Button
              variant='outline'
              size='sm'
              className={`gap-1 cursor-pointer ${queryValue === weaponType.id ? 'button-active' : ''}`}
            >
              <Image
                src={
                  weaponType.image ?
                    urlFor(weaponType.image).url()
                  : `/static/images/weapons/${weaponType.name}.png`
                }
                alt={`${weaponType?.image?.alt ?? 'Sword'} Image`}
                width={20}
                height={20}
              />
              <span>{weaponType.name}</span>
            </Button>
          </Link>
        ))}

        {/* Rarity Filters */}
        <Link href={`/home/characters?query=filter_4`}>
          <Button
            variant='outline'
            size='sm'
            className={`gap-1 cursor-pointer ${queryValue === '4' ? 'button-active' : ''}`}
          >
            <span className='text-purple-400'>★★★★</span>
            <span>4-Star</span>
          </Button>
        </Link>
        <Link href={`/home/characters?query=filter_5`}>
          <Button
            variant='outline'
            size='sm'
            className={`gap-1 cursor-pointer ${queryValue === '5' ? 'button-active' : ''}`}
          >
            <span className='text-amber-400'>★★★★★</span>
            <span>5-Star</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
