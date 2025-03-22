import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Elements, WeaponType } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';

interface CharacterFilterProps {
  elements: Elements[];
  weaponTypes: WeaponType[];
}

export function CharacterFilter({
  elements,
  weaponTypes,
}: CharacterFilterProps) {
  return (
    <div className='space-y-4 w-full'>
      <div className='flex flex-wrap gap-2'>
        {/* Element Filters */}
        {elements.map((element: Elements) => (
          <Button
            key={element.id}
            variant='outline'
            size='sm'
            className='gap-1 cursor-pointer'
          >
            <Image
              src={
                element.image ?
                  urlFor(element.image).url()
                : `/static/images/elements/${element.name}.png`
              }
              alt={element?.image?.alt ?? 'Pyro'}
              width={20}
              height={20}
            />
            <span>{element.name}</span>
          </Button>
        ))}

        {/* Weapon Filters */}
        {weaponTypes.map((weaponType: WeaponType) => (
          <Button
            key={weaponType.id}
            variant='outline'
            size='sm'
            className='gap-1 cursor-pointer'
          >
            <Image
              src={
                weaponType.image ?
                  urlFor(weaponType.image).url()
                : `/static/images/weapons/${weaponType.name}.png`
              }
              alt={weaponType?.image?.alt ?? 'Sword'}
              width={20}
              height={20}
            />
            <span>{weaponType.name}</span>
          </Button>
        ))}

        {/* Rarity Filters */}
        <Button variant='outline' size='sm' className='gap-1 cursor-pointer'>
          <span className='text-purple-400'>★★★★</span>
          <span>4-Star</span>
        </Button>
        <Button variant='outline' size='sm' className='gap-1 cursor-pointer'>
          <span className='text-amber-400'>★★★★★</span>
          <span>5-Star</span>
        </Button>
      </div>
    </div>
  );
}
