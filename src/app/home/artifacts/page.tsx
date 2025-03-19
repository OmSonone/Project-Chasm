'use client'

import { useState } from 'react'
// import { ChevronDown, Grid, List } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArtifactCard } from '@/components/artifact-card'
import { artifacts, artifactSets } from '@/data/artifacts'

type ArtifactType = 'flower' | 'plume' | 'sands' | 'goblet' | 'circlet'

export default function ArtifactsPage() {
    const [selectedSet, setSelectedSet] = useState(artifactSets[0])
    const [selectedType, setSelectedType] = useState<ArtifactType>('flower')

    // Get the selected artifact piece
    const selectedArtifact = artifacts.find(
        (artifact) =>
            artifact.set === selectedSet.name && artifact.type === selectedType
    )

    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10 pt-6'>
                <div className='flex justify-between items-center h-16 container'>
                    <h1 className='font-bold text-4xl tracking-tight'>
                        Artifacts
                    </h1>
                </div>
            </header>

            <div className='py-6 container'>
                <div className='flex flex-wrap gap-2'>
                    <Button variant='outline' size='sm'>
                        All Sets
                    </Button>
                    <Button variant='outline' size='sm'>
                        5★ Sets
                    </Button>
                    <Button variant='outline' size='sm'>
                        4★ Sets
                    </Button>
                    <Button variant='outline' size='sm'>
                        3★ Sets
                    </Button>
                </div>

                <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
                    {/* Left side - Artifact Set Display */}
                    <div className='sticky lg:w-1/2 xl:w-2/5'>
                        <div className='bg-card p-6 rounded-xl'>
                            <h2 className='mb-4 font-bold text-2xl'>
                                {selectedSet.name}
                            </h2>

                            {/* Artifact piece selector */}
                            <div className='flex gap-2 mb-6 pb-2 overflow-x-auto'>
                                {[
                                    'flower',
                                    'plume',
                                    'sands',
                                    'goblet',
                                    'circlet',
                                ].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() =>
                                            setSelectedType(
                                                type as ArtifactType
                                            )
                                        }
                                        className={`flex-shrink-0 rounded-lg p-1 transition-colors ${
                                            selectedType === type
                                                ? 'bg-primary/10 ring-1 ring-primary'
                                                : 'bg-muted/50 hover:bg-muted'
                                        }`}
                                    >
                                        <div className='rounded-md w-16 h-16 overflow-hidden'>
                                            <Image
                                                src='/static/images/placeholder.svg?height=100&width=100'
                                                alt={type}
                                                width={100}
                                                height={100}
                                                className='w-full h-full object-contain'
                                            />
                                        </div>
                                        <p className='mt-1 text-xs text-center capitalize'>
                                            {type}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* Selected artifact display */}
                            {selectedArtifact && (
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className='bg-muted/50 p-2 rounded-lg w-24 h-24'>
                                            <Image
                                                src={
                                                    selectedArtifact.image ||
                                                    '/static/images/placeholder.svg'
                                                }
                                                alt={selectedArtifact.name}
                                                width={200}
                                                height={200}
                                                className='w-full h-full object-contain'
                                            />
                                        </div>
                                        <div>
                                            <h3 className='font-semibold text-xl'>
                                                {selectedArtifact.name}
                                            </h3>
                                            <div className='mt-1'>
                                                <span className='bg-amber-500/20 px-2 py-0.5 rounded-full font-medium text-amber-500 text-xs'>
                                                    {'★'.repeat(
                                                        selectedArtifact.rarity
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className='mb-1 font-medium'>
                                            Description
                                        </h4>
                                        <p className='text-muted-foreground text-sm'>
                                            {selectedArtifact.description ||
                                                'A piece from the ' +
                                                    selectedSet.name +
                                                    ' set.'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='bg-card mt-4 p-4 border rounded-lg'>
                            <h3 className='mb-2 font-semibold'>Set Bonuses</h3>
                            <div className='space-y-2 text-sm'>
                                <p>
                                    <span className='font-medium'>
                                        2-Piece:
                                    </span>{' '}
                                    {selectedSet.bonus2pc}
                                </p>
                                <p>
                                    <span className='font-medium'>
                                        4-Piece:
                                    </span>{' '}
                                    {selectedSet.bonus4pc}
                                </p>
                            </div>
                            <h3 className='mt-4 mb-2 font-semibold'>Lore</h3>
                            <p className='text-muted-foreground text-sm'>
                                {selectedSet.lore}
                            </p>
                        </div>
                    </div>

                    {/* Right side - Artifacts Grid */}
                    <div className='lg:w-1/2 xl:w-3/5'>
                        <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
                            {artifacts.map((artifact) => (
                                <ArtifactCard
                                    key={artifact.id}
                                    artifact={artifact}
                                    onClick={() => {
                                        setSelectedSet(
                                            artifactSets.find(
                                                (set) =>
                                                    set.name === artifact.set
                                            )!
                                        )
                                        setSelectedType(artifact.type)
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
