'use client'

import Image from 'next/image'

export interface Artifact {
    id: string
    name: string
    rarity: number
    type: 'flower' | 'plume' | 'sands' | 'goblet' | 'circlet'
    set: string
    image: string
    description?: string
}

interface ArtifactCardProps {
    artifact: Artifact
    onClick?: () => void
}

export function ArtifactCard({ artifact, onClick }: ArtifactCardProps) {
    return (
        <div
            className='group relative bg-card hover:shadow-md border rounded-lg overflow-hidden transition-all cursor-pointer'
            onClick={onClick}
        >
            <div className='bg-muted/50 p-2 aspect-square overflow-hidden'>
                <Image
                    src={
                        artifact.image ||
                        '/static/images/placeholder.svg?height=200&width=200'
                    }
                    alt={artifact.name}
                    width={200}
                    height={200}
                    className='w-full h-full object-contain group-hover:scale-105 transition-transform'
                />
                <div className='top-2 right-2 absolute bg-black/60 px-1.5 py-0.5 rounded-full font-medium text-white text-xs'>
                    {'★'.repeat(artifact.rarity)}
                </div>
            </div>
            <div className='p-2'>
                <h3 className='font-medium line-clamp-1'>{artifact.name}</h3>
                <p className='text-muted-foreground text-xs line-clamp-1'>
                    {artifact.set}
                </p>
            </div>
        </div>
    )
}
