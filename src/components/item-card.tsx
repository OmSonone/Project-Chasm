import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface Item {
    id: string
    name: string
    type: 'material' | 'food' | 'gadget' | 'quest'
    rarity: number
    image: string
}

interface ItemCardProps {
    item: Item
}

const typeColors = {
    material: 'bg-purple-500/20 text-purple-500',
    food: 'bg-green-500/20 text-green-500',
    gadget: 'bg-blue-500/20 text-blue-500',
    quest: 'bg-amber-500/20 text-amber-500',
}

export function ItemCard({ item }: ItemCardProps) {
    return (
        <div className='group relative bg-card hover:shadow-md border rounded-lg overflow-hidden transition-all'>
            <div className='bg-muted/50 p-2 aspect-square overflow-hidden'>
                <Image
                    src={item.image || '/static/images/placeholder.svg?height=200&width=200'}
                    alt={item.name}
                    width={200}
                    height={200}
                    className='w-full h-full object-contain group-hover:scale-105 transition-transform'
                />
                <div className='top-2 right-2 absolute bg-black/60 px-1.5 py-0.5 rounded-full font-medium text-white text-xs'>
                    {'★'.repeat(item.rarity)}
                </div>
            </div>
            <div className='p-2'>
                <div
                    className={cn(
                        'mb-1 inline-block rounded-full px-1.5 py-0.5 text-xs font-medium',
                        typeColors[item.type]
                    )}
                >
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </div>
                <h3 className='font-medium line-clamp-2'>{item.name}</h3>
            </div>
        </div>
    )
}
