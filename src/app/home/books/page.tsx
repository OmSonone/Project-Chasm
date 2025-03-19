'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookCard } from '@/components/book-audiobook/book-card'
import { books } from '@/data/books'
import { AudiobookModal } from '@/components/book-audiobook/audiobook-modal'

export default function BooksPage() {
    const router = useRouter()
    const [selectedBook, setSelectedBook] = useState(books[0])

    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10 pt-6'>
                <div className='flex justify-between items-center h-16 container'>
                    <h1 className='font-bold text-4xl tracking-tight'>Books</h1>
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
                    <div className='hidden lg:block top-24 sticky lg:w-1/2 xl:w-2/5'>
                        <div className='bg-card p-6 rounded-xl aspect-square overflow-hidden'>
                            <div className='relative w-full h-full'>
                                <Image
                                    src={
                                        selectedBook.image || '/placeholder.svg'
                                    }
                                    alt={selectedBook.title}
                                    width={400}
                                    height={600}
                                    className='mx-auto h-full object-contain'
                                />
                            </div>
                        </div>
                        <div className='bg-card mt-4 p-4 border rounded-lg'>
                            <h2 className='mb-2 font-bold text-2xl'>
                                {selectedBook.title}
                            </h2>
                            <div className='flex items-center gap-2 mb-4'>
                                <span className='bg-amber-500/20 px-2 py-0.5 rounded-full font-medium text-amber-500 text-xs'>
                                    {selectedBook.type.charAt(0).toUpperCase() +
                                        selectedBook.type.slice(1)}
                                </span>
                                {selectedBook.volume && (
                                    <span className='text-muted-foreground text-sm'>
                                        {selectedBook.volume}
                                    </span>
                                )}
                            </div>
                            <p className='text-muted-foreground text-sm'>
                                Once, there was a glorious kingdom established
                                among the snowy peaks. In it lived the princess,
                                the pale princess...
                            </p>
                            <div className='flex justify-between gap-2 mt-4'>
                                <AudiobookModal />
                                <Button
                                    variant='outline'
                                    className='flex-1 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 text-white hover:text-white dark:hover:text-black dark:text-black cursor-pointer'
                                    onClick={() =>
                                        router.push(
                                            `/home/books/${selectedBook.id.split('-')[0]}`
                                        )
                                    }
                                >
                                    View All Volumes
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Books Grid */}
                    <div className='lg:w-1/2 xl:w-3/5'>
                        <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
                            {books.map((book) => (
                                <BookCard
                                    key={book.id}
                                    book={book}
                                    onClick={() => setSelectedBook(book)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
