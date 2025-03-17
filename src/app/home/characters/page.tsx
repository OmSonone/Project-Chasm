// import { ChevronDown, Grid, List } from 'lucide-react'
import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import { CharacterCard } from '@/components/character-card'
import { characters } from '@/data/characters'
import { CharacterFilter } from '@/components/character-filter'

export default function CharactersPage() {
    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10 sticky bg-background/80 backdrop-blur'>
                <div className='flex justify-between items-center h-16 container'>
                    <h1 className='font-bold text-2xl tracking-tight'>
                        Characters
                    </h1>
                    {/* <div className='flex items-center gap-4'>
                        <Button variant='outline' size='sm' className='gap-2'>
                            <span>Sort by</span>
                            <ChevronDown className='w-4 h-4' />
                        </Button>
                        <div className='flex border rounded-md'>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-none rounded-l-md'
                            >
                                <Grid className='w-4 h-4' />
                                <span className='sr-only'>Grid view</span>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-none rounded-r-md'
                            >
                                <List className='w-4 h-4' />
                                <span className='sr-only'>List view</span>
                            </Button>
                        </div>
                    </div> */}
                </div>
            </header>

            <div className='py-6 container'>
                <CharacterFilter />

                <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
                    {/* Left side - Character Splash Art */}
                    <div className='sticky lg:w-1/2 xl:w-2/5'>
                        <div className='bg-card rounded-xl aspect-[3/4] overflow-hidden'>
                            <div className='relative w-full h-full'>
                                <Image
                                    src='/static/images/placeholder.svg?height=800&width=600'
                                    alt='Selected character splash art'
                                    fill
                                    className='object-cover'
                                />
                                <div className='bottom-0 absolute bg-gradient-to-t from-black/80 to-transparent p-6 w-full text-white'>
                                    <h2 className='font-bold text-3xl'>
                                        Raiden Shogun
                                    </h2>
                                    <p className='opacity-90 text-lg'>
                                        Inazuma
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-card mt-4 p-4 border rounded-lg'>
                            <h3 className='mb-2 font-semibold'>
                                Character Details
                            </h3>
                            <p className='text-muted-foreground text-sm'>
                                The Raiden Shogun is the awesome and terrible
                                power of thunder incarnate, the exalted ruler of
                                the Inazuma Shogunate.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Character Grid */}
                    <div className='lg:w-1/2 xl:w-3/5'>
                        <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
                            {characters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    character={character}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
