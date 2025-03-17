'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import Image from 'next/image'
import { Slider } from '@/components/ui/slider'

export function AudiobookModal() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className='w-full'>Listen to Audiobook</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
                <DialogHeader>
                    <DialogTitle>
                        The Pale Princess and the Six Pygmies
                    </DialogTitle>
                    <DialogDescription>Volume 1</DialogDescription>
                </DialogHeader>

                <div className='flex justify-center items-center mt-4'>
                    <div className='relative bg-muted/50 p-2 rounded-lg w-48 h-48'>
                        <Image
                            src='/static/images/placeholder.svg?height=300&width=200'
                            alt='Book cover'
                            width={200}
                            height={300}
                            className='w-full h-full object-contain'
                        />
                    </div>
                </div>

                <div className='space-y-6 mt-4'>
                    <div className='space-y-2'>
                        <div className='flex justify-between items-center'>
                            <span className='text-muted-foreground text-sm'>
                                1:23
                            </span>
                            <span className='text-muted-foreground text-sm'>
                                4:56
                            </span>
                        </div>
                        <Slider defaultValue={[28]} max={100} step={1} />
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <Button variant='ghost' size='icon' className='w-8 h-8'>
                            <SkipBack className='w-4 h-4' />
                            <span className='sr-only'>Skip back</span>
                        </Button>
                        <Button
                            variant='outline'
                            size='icon'
                            className='rounded-full w-12 h-12'
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? (
                                <Pause className='w-6 h-6' />
                            ) : (
                                <Play className='pl-1 w-6 h-6' />
                            )}
                            <span className='sr-only'>
                                {isPlaying ? 'Pause' : 'Play'}
                            </span>
                        </Button>
                        <Button variant='ghost' size='icon' className='w-8 h-8'>
                            <SkipForward className='w-4 h-4' />
                            <span className='sr-only'>Skip forward</span>
                        </Button>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Volume2 className='w-4 h-4 text-muted-foreground' />
                        <Slider
                            defaultValue={[80]}
                            max={100}
                            step={1}
                            className='flex-1'
                        />
                    </div>
                </div>

                <div className='bg-muted/20 mt-4 p-4 border rounded-lg'>
                    <h3 className='mb-2 font-semibold'>About this Book</h3>
                    <p className='text-muted-foreground text-sm'>
                        Once, there was a glorious kingdom established among the
                        snowy peaks. In it lived the princess, the pale
                        princess, whose beauty knew no equal. The magnificent
                        sight of her snowy raiment adorned with stars left all
                        who gazed upon her in awe. But though she was the most
                        beautiful of all, she was also the most lonely.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
