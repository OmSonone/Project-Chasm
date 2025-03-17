import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { GET_ALL_ELEMENTS, GET_ALL_WEAPON_TYPES } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import { Elements, WeaponType } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'

export async function CharacterFilter() {
    const [elements, weaponTypes] = await Promise.all([
        client.fetch(GET_ALL_ELEMENTS),
        client.fetch(GET_ALL_WEAPON_TYPES),
    ])

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
                                :   `/static/images/elements/${element.name}.png`
                            }
                            alt={element?.image?.alt ?? 'Pyro'}
                            width={20}
                            height={20}
                        />
                        <span>{element.name}</span>
                    </Button>
                ))}
                {/* <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/elements/hydro.png'
                        alt='Hydro'
                        width={20}
                        height={20}
                    />
                    <span>Hydro</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/elements/anemo.png'
                        alt='Anemo'
                        width={20}
                        height={20}
                    />
                    <span>Anemo</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/elements/electro.png'
                        alt='Electro'
                        width={20}
                        height={20}
                    />
                    <span>Electro</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/elements/dendro.png'
                        alt='Dendro'
                        width={20}
                        height={20}
                    />
                    <span>Dendro</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/elements/cryo.png'
                        alt='Cryo'
                        width={20}
                        height={20}
                    />
                    <span>Cryo</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/elements/geo.png'
                        alt='Geo'
                        width={20}
                        height={20}
                    />
                    <span>Geo</span>
                </Button> */}

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
                                :   `/static/images/weapons/${weaponType.name}.png`
                            }
                            alt={weaponType?.image?.alt ?? 'Sword'}
                            width={20}
                            height={20}
                        />
                        <span>{weaponType.name}</span>
                    </Button>
                ))}
                {/* <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/weapons/claymore.png'
                        alt='Claymore'
                        width={20}
                        height={20}
                    />
                    <span>Claymore</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/weapons/polearm.png'
                        alt='Polearm'
                        width={20}
                        height={20}
                    />
                    <span>Polearm</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/weapons/catalyst.png'
                        alt='Catalyst'
                        width={20}
                        height={20}
                    />
                    <span>Catalyst</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <Image
                        src='/static/images/weapons/bow.png'
                        alt='Bow'
                        width={20}
                        height={20}
                    />
                    <span>Bow</span>
                </Button>

                {/* Rarity Filters */}
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <span className='text-purple-400'>★★★★</span>
                    <span>4-Star</span>
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 cursor-pointer'
                >
                    <span className='text-amber-400'>★★★★★</span>
                    <span>5-Star</span>
                </Button>
            </div>
        </div>
    )
}
