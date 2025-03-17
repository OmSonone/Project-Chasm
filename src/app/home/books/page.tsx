// import { ChevronDown, Grid, List } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookCard } from '@/components/book-card'
import { books } from '@/data/books'
import { AudiobookModal } from '@/components/audiobook-modal'

export default function BooksPage() {
    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10 sticky bg-background/80 backdrop-blur'>
                <div className='flex justify-between items-center h-16 container'>
                    <h1 className='font-bold text-2xl tracking-tight'>Books</h1>
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
                <div className='flex flex-wrap gap-2'>
                    <Button variant='outline' size='sm'>
                        All Books
                    </Button>
                    <Button variant='outline' size='sm'>
                        Lore
                    </Button>
                    <Button variant='outline' size='sm'>
                        Quest Items
                    </Button>
                </div>

                <div className='flex lg:flex-row flex-col lg:gap-8 mt-6'>
                    {/* Left side - Book Display */}
                    <div className='sticky lg:w-1/2 xl:w-2/5'>
                        <div className='bg-card p-6 rounded-xl aspect-square overflow-hidden'>
                            <div className='relative w-full h-full'>
                                <Image
                                    src='/static/images/placeholder.svg?height=600&width=400'
                                    alt='Selected book cover'
                                    width={400}
                                    height={600}
                                    className='mx-auto h-full object-contain'
                                />
                            </div>
                        </div>
                        <div className='bg-card mt-4 p-4 border rounded-lg'>
                            <h2 className='mb-2 font-bold text-2xl'>
                                The Pale Princess and the Six Pygmies
                            </h2>
                            <div className='flex items-center gap-2 mb-4'>
                                <span className='bg-amber-500/20 px-2 py-0.5 rounded-full font-medium text-amber-500 text-xs'>
                                    Lore
                                </span>
                                <span className='text-muted-foreground text-sm'>
                                    Volume 1
                                </span>
                            </div>
                            <p className='text-muted-foreground text-sm'>
                                Once, there was a glorious kingdom established
                                among the snowy peaks. In it lived the princess,
                                the pale princess...
                            </p>
                            <div className='mt-4'>
                                <AudiobookModal />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Books Grid */}
                    <div className='lg:w-1/2 xl:w-3/5'>
                        <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
                            {books.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
