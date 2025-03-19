// import { ChevronDown, Grid, List } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ItemCard } from '@/components/item-card'
import { items } from '@/data/items'

export default function ItemsPage() {
    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10 pt-6'>
                <div className='flex justify-between items-center h-16 container'>
                    <h1 className='font-bold text-4xl tracking-tight'>Items</h1>
                </div>
            </header>

            <div className='py-6 container'>
                <div className='flex flex-wrap gap-2'>
                    <Button variant='outline' size='sm'>
                        All Items
                    </Button>
                    <Button variant='outline' size='sm'>
                        Materials
                    </Button>
                    <Button variant='outline' size='sm'>
                        Food
                    </Button>
                    <Button variant='outline' size='sm'>
                        Gadgets
                    </Button>
                    <Button variant='outline' size='sm'>
                        Quest Items
                    </Button>
                </div>

                <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
                    {/* Left side - Item Display */}
                    <div className='sticky lg:w-1/2 xl:w-2/5'>
                        <div className='bg-card p-6 rounded-xl'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='bg-muted/50 p-2 rounded-lg w-24 h-24'>
                                    <Image
                                        src='/static/images/placeholder.svg?height=200&width=200'
                                        alt='Selected item'
                                        width={200}
                                        height={200}
                                        className='w-full h-full object-contain'
                                    />
                                </div>
                                <div>
                                    <h2 className='font-bold text-2xl'>
                                        Noctilucous Jade
                                    </h2>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className='bg-purple-500/20 px-2 py-0.5 rounded-full font-medium text-purple-500 text-xs'>
                                            Material
                                        </span>
                                        <span className='bg-amber-500/20 px-2 py-0.5 rounded-full font-medium text-amber-500 text-xs'>
                                            ★★★
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-4 mt-4'>
                                <div>
                                    <h3 className='mb-1 font-semibold'>
                                        Description
                                    </h3>
                                    <p className='text-muted-foreground text-sm'>
                                        A rare mineral that glows in the dark.
                                        It&apos;s said to be a product of the
                                        condensation of pure elemental energy.
                                    </p>
                                </div>

                                <div>
                                    <h3 className='mb-1 font-semibold'>
                                        Source
                                    </h3>
                                    <p className='text-muted-foreground text-sm'>
                                        Found in Liyue, particularly in Minlin
                                        and around Mt. Hulao. Can also be
                                        purchased from Shitou in Liyue Harbor.
                                    </p>
                                </div>

                                <div>
                                    <h3 className='mb-1 font-semibold'>
                                        Usage
                                    </h3>
                                    <ul className='space-y-1 text-muted-foreground text-sm'>
                                        <li>
                                            • Character Ascension: Beidou,
                                            Yanfei
                                        </li>
                                        <li>
                                            • Weapon Ascension: Prototype
                                            Archaic
                                        </li>
                                        <li>
                                            • Crafting: Lanterns, Adepti
                                            Seeker&apos;s Stove
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Items Grid */}
                    <div className='lg:w-1/2 xl:w-3/5'>
                        <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
                            {items.map((item) => (
                                <ItemCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
