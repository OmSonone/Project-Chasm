'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, Play, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { characters } from '@/data/characters'
import { characterStories } from '@/data/character-stories'
import { CharacterStoryPlayer } from '@/components/character-story-player'

export default function CharacterDetailPage() {
    const router = useRouter()
    const { id } = useParams()
    const character = characters.find((c) => c.id === id) || characters[0]
    const stories = characterStories.filter(
        (story) => story.characterId === character.id
    )

    const [activeTab, setActiveTab] = useState('profile')

    if (!character) {
        return <div>Character not found</div>
    }

    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10'>
                <div className='flex items-center h-16 container'>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='mr-2'
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className='w-5 h-5' />
                        <span className='sr-only'>Back</span>
                    </Button>
                    <h1 className='font-bold text-2xl tracking-tight'>
                        {character.name}
                    </h1>
                </div>
            </header>

            <div className='py-6 container'>
                <div className='gap-6 grid md:grid-cols-3 lg:grid-cols-4'>
                    {/* Left sidebar with character image and basic info */}
                    <div className='md:col-span-1'>
                        <div className='top-24 sticky space-y-4'>
                            <div className='bg-card rounded-xl overflow-hidden'>
                                <div className='relative aspect-[3/4]'>
                                    <Image
                                        src={
                                            character.image ||
                                            '/static/images/placeholder.svg?height=600&width=400'
                                        }
                                        alt={character.name}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <div className='p-4'>
                                    <h2 className='font-bold text-xl'>
                                        {character.name}
                                    </h2>
                                    <div className='flex flex-wrap gap-2 mt-2'>
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                character.element === 'pyro' ?
                                                    'bg-red-500/20 text-red-500'
                                                : character.element === 'hydro' ?
                                                    'bg-blue-500/20 text-blue-500'
                                                : character.element === 'anemo' ?
                                                    'bg-emerald-500/20 text-emerald-500'
                                                : character.element === 'electro' ?
                                                    'bg-purple-500/20 text-purple-500'
                                                : character.element === 'dendro' ?
                                                    'bg-green-500/20 text-green-500'
                                                : character.element === 'cryo' ?
                                                    'bg-cyan-500/20 text-cyan-500'
                                                : 'bg-amber-500/20 text-amber-500'
                                            }`}
                                        >
                                            {character.element.charAt(0).toUpperCase() +
                                                character.element.slice(1)}
                                        </span>
                                        <span className='inline-flex items-center bg-muted px-2.5 py-0.5 rounded-full font-medium text-xs'>
                                            {character.weapon.charAt(0).toUpperCase() +
                                                character.weapon.slice(1)}
                                        </span>
                                        <span className='inline-flex items-center bg-amber-500/10 px-2.5 py-0.5 rounded-full font-medium text-amber-500 text-xs'>
                                            {'★'.repeat(character.rarity)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className='md:col-span-2 lg:col-span-3'>
                        <Tabs
                            value={activeTab}
                            onValueChange={setActiveTab}
                            className='w-full'
                        >
                            <TabsList className='grid grid-cols-3 mb-4 w-full'>
                                <TabsTrigger value='profile'>Profile</TabsTrigger>
                                <TabsTrigger value='stories'>Stories</TabsTrigger>
                                <TabsTrigger value='voice'>Voice-Overs</TabsTrigger>
                            </TabsList>

                            <TabsContent value='profile' className='space-y-6'>
                                <div className='bg-card p-4 border rounded-lg'>
                                    <h3 className='mb-2 font-semibold text-lg'>
                                        Character Details
                                    </h3>
                                    <div className='gap-4 grid sm:grid-cols-2'>
                                        <div>
                                            <p className='font-medium text-muted-foreground text-sm'>
                                                Title
                                            </p>
                                            <p>{character.title || 'Plane of Euthymia'}</p>
                                        </div>
                                        <div>
                                            <p className='font-medium text-muted-foreground text-sm'>
                                                Region
                                            </p>
                                            <p>{character.region || 'Inazuma'}</p>
                                        </div>
                                        <div>
                                            <p className='font-medium text-muted-foreground text-sm'>
                                                Affiliation
                                            </p>
                                            <p>{character.affiliation || 'Inazuma Shogunate'}</p>
                                        </div>
                                        <div>
                                            <p className='font-medium text-muted-foreground text-sm'>
                                                Constellation
                                            </p>
                                            <p>{character.constellation || 'Imperatrix Umbrosa'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-card p-4 border rounded-lg'>
                                    <h3 className='mb-2 font-semibold text-lg'>
                                        Description
                                    </h3>
                                    <p className='text-muted-foreground'>
                                        {character.description ||
                                            'Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.'}
                                    </p>
                                </div>

                                <div className='bg-card p-4 border rounded-lg'>
                                    <h3 className='mb-2 font-semibold text-lg'>
                                        Personality
                                    </h3>
                                    <p className='text-muted-foreground'>
                                        {character.personality ||
                                            'The Raiden Shogun is the vessel of Ei, the current Electro Archon of Inazuma. She is committed to the pursuit of eternity, and rules Inazuma with an unwavering resolve to ensure that her nation remains unchanging forever.'}
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value='stories' className='space-y-6'>
                                <div className='bg-card border rounded-lg'>
                                    <Accordion
                                        type='single'
                                        collapsible
                                        className='w-full'
                                    >
                                        {stories.length > 0 ? (
                                            stories.map((story) => (
                                                <AccordionItem
                                                    key={story.id}
                                                    value={story.id}
                                                >
                                                    <AccordionTrigger className='px-4'>
                                                        {story.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent className='px-4 pb-4'>
                                                        <div className='mb-4 text-muted-foreground text-sm'>
                                                            <p>{story.summary}</p>
                                                        </div>
                                                        <CharacterStoryPlayer
                                                            story={story}
                                                        />
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))
                                        ) : (
                                            <div className='p-4 text-muted-foreground text-center'>
                                                No character stories available yet.
                                            </div>
                                        )}
                                    </Accordion>
                                </div>
                            </TabsContent>

                            <TabsContent value='voice' className='space-y-6'>
                                <div className='bg-card p-4 border rounded-lg'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <h3 className='font-semibold text-lg'>
                                            Voice-Over
                                        </h3>
                                        <Button
                                            variant='outline'
                                            size='sm'
                                            className='gap-1'
                                        >
                                            <span>English</span>
                                            <ChevronDown className='w-4 h-4' />
                                        </Button>
                                    </div>

                                    <div className='space-y-4'>
                                        {[
                                            'Hello',
                                            'About Self',
                                            'About the Vision',
                                            'About Us',
                                            'Idle',
                                            'Combat: Start',
                                            'Combat: End',
                                        ].map((category) => (
                                            <div
                                                key={category}
                                                className='flex justify-between items-center p-3 border rounded-lg'
                                            >
                                                <span>{category}</span>
                                                <Button
                                                    variant='ghost'
                                                    size='icon'
                                                    className='rounded-full w-8 h-8'
                                                >
                                                    <Play className='w-4 h-4' />
                                                    <span className='sr-only'>
                                                        Play {category}
                                                    </span>
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
