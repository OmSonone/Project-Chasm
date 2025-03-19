'use client'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { books } from '@/data/books'
import { AudiobookPlayer } from '@/components/audiobook-player'
import { bookVolumes } from '@/data/book-volumes'

export default function BookDetailPage() {
    const router = useRouter()
    const { id } = useParams()
    // Find the book and its volumes
    const bookId = typeof id === 'string' ? id : id?.[0]
    const book = books.find((b) => b.id.split('-')[0] === bookId) || books[0]
    const volumes = bookVolumes.filter((v) => v.bookId === bookId)

    // If no volumes are found, create a default one from the book
    const allVolumes =
        volumes.length > 0 ?
            volumes
        :   [
                {
                    id: book.id,
                    bookId: book.id.split('-')[0],
                    title: book.title,
                    volume: book.volume || 'Volume 1',
                    content: 'This content is not available yet.',
                    image: book.image,
                    audioUrl: '',
                },
            ]

    if (!book) {
        return <div>Book not found</div>
    }

    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10 pt-6'>
                <div className='flex items-center h-16 container'>
                    <Button
                        variant='ghost'
                        size='default'
                        className='mr-2'
                        onClick={() => router.back()}
                    >
                        <ArrowLeft size={10} />
                        <span className='sr-only'>Back</span>
                    </Button>
                    <h1 className='font-bold text-4xl tracking-tight'>
                        {book.title}
                    </h1>
                </div>
            </header>

            <div className='py-6 container'>
                <div className='gap-6 grid md:grid-cols-3 lg:grid-cols-4'>
                    {/* Left sidebar with book cover and basic info */}
                    <div className='md:col-span-1'>
                        <div className='top-24 sticky space-y-4'>
                            <div className='bg-card p-4 rounded-xl overflow-hidden'>
                                <div className='relative aspect-[3/4]'>
                                    <Image
                                        src={
                                            book.image ||
                                            '/placeholder.svg?height=600&width=400'
                                        }
                                        alt={book.title}
                                        width={400}
                                        height={600}
                                        className='mx-auto object-contain'
                                    />
                                </div>
                                <div className='mt-4'>
                                    <h2 className='font-bold text-xl'>
                                        {book.title}
                                    </h2>
                                    <div className='flex items-center gap-2 mt-2'>
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                book.type === 'lore' ?
                                                    'bg-amber-500/20 text-amber-500'
                                                :   'bg-purple-500/20 text-purple-500'
                                            }`}
                                        >
                                            {book.type.charAt(0).toUpperCase() +
                                                book.type.slice(1)}
                                        </span>
                                        {allVolumes.length > 1 && (
                                            <span className='text-muted-foreground text-sm'>
                                                {allVolumes.length} Volumes
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='bg-card p-4 border rounded-lg'>
                                <h3 className='mb-2 font-semibold'>
                                    About this Book
                                </h3>
                                <p className='text-muted-foreground text-sm'>
                                    {book.description ||
                                        'A mysterious tale that hints at the ancient history of Teyvat. This book contains knowledge that has been lost to time.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className='md:col-span-2 lg:col-span-3'>
                        <div className='space-y-6'>
                            {/* Book volumes with accordion */}
                            <div className='bg-card border rounded-lg'>
                                <Accordion
                                    type='single'
                                    collapsible
                                    className='w-full'
                                >
                                    {allVolumes.map((volume) => (
                                        <AccordionItem
                                            key={volume.id}
                                            value={volume.id}
                                        >
                                            <AccordionTrigger className='px-4'>
                                                {volume.volume || 'Volume 1'}
                                            </AccordionTrigger>
                                            <AccordionContent className='px-4 pb-6'>
                                                <div className='space-y-6'>
                                                    {/* Audiobook player */}
                                                    <div>
                                                        <h3 className='mb-4 font-semibold text-lg'>
                                                            Listen to Audiobook
                                                        </h3>
                                                        <AudiobookPlayer
                                                            volume={volume}
                                                        />
                                                    </div>

                                                    {/* Book content */}
                                                    <div>
                                                        <h3 className='mb-4 font-semibold text-lg'>
                                                            Book Content
                                                        </h3>
                                                        <div className='dark:prose-invert max-w-none prose prose-sm'>
                                                            {volume.content
                                                                .split('\n\n')
                                                                .map(
                                                                    (
                                                                        paragraph,
                                                                        index
                                                                    ) => (
                                                                        <p
                                                                            key={
                                                                                index
                                                                            }
                                                                            className='mb-4 text-muted-foreground'
                                                                        >
                                                                            {
                                                                                paragraph
                                                                            }
                                                                        </p>
                                                                    )
                                                                )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                            {/* Related books */}
                            <div className='bg-card p-4 border rounded-lg'>
                                <h3 className='mb-4 font-semibold text-lg'>
                                    Related Books
                                </h3>
                                <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                                    {books
                                        .filter(
                                            (b) =>
                                                b.type === book.type &&
                                                b.id.split('-')[0] !== bookId
                                        )
                                        .slice(0, 4)
                                        .map((relatedBook) => (
                                            <div
                                                key={relatedBook.id}
                                                className='group bg-card hover:shadow-md border rounded-lg overflow-hidden transition-all cursor-pointer'
                                                onClick={() =>
                                                    router.push(
                                                        `/home/books/${relatedBook.id.split('-')[0]}`
                                                    )
                                                }
                                            >
                                                <div className='bg-muted/50 p-2 aspect-[3/4] overflow-hidden'>
                                                    <Image
                                                        src={
                                                            relatedBook.image ||
                                                            '/placeholder.svg?height=200&width=150'
                                                        }
                                                        alt={relatedBook.title}
                                                        width={150}
                                                        height={200}
                                                        className='w-full h-full object-contain group-hover:scale-105 transition-transform'
                                                    />
                                                </div>
                                                <div className='p-2'>
                                                    <h4 className='font-medium line-clamp-2'>
                                                        {relatedBook.title}
                                                    </h4>
                                                    {relatedBook.volume && (
                                                        <p className='text-muted-foreground text-xs'>
                                                            {relatedBook.volume}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
