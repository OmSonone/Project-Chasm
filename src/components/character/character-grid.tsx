'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CharacterCard } from '@/components/character/character-card'
import { characters } from '@/data/characters'

export function CharacterGrid() {
    const router = useRouter()
    const [selectedCharacter, setSelectedCharacter] = useState(characters[0])

    return (
        <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
            {/* Left side - Character Splash Art */}
            <div className='hidden lg:block top-24 sticky lg:w-1/2 xl:w-2/5'>
                <div className='bg-card rounded-xl aspect-[3/4] overflow-hidden'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={
                                selectedCharacter.image ||
                                '/static/images/placeholder.svg?height=800&width=600'
                            }
                            alt='Selected character splash art'
                            fill
                            className='object-cover'
                        />
                        <div className='bottom-0 absolute bg-gradient-to-t from-black/80 to-transparent p-6 w-full text-white'>
                            <h2 className='font-bold text-3xl'>
                                {selectedCharacter.name}
                            </h2>
                            <p className='opacity-90 text-lg'>
                                {selectedCharacter.title ||
                                    'Plane of Euthymia'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-card mt-4 p-4 border rounded-lg'>
                    <h3 className='mb-2 font-semibold'>
                        Character Details
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                        {selectedCharacter.description ||
                            'The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.'}
                    </p>
                    <div className='mt-4'>
                        <Button
                            className='w-full'
                            onClick={() =>
                                router.push(
                                    `/home/characters/${selectedCharacter.id}`
                                )
                            }
                        >
                            View Character Details
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right side - Character Grid */}
            <div className='lg:w-1/2 xl:w-3/5'>
                <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
                    {characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                            onClick={() =>
                                setSelectedCharacter(character)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
} 