import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AudiobookModal } from '@/components/book-audiobook/audiobook-modal';

interface Book {
  id: string;
  image: string;
  title: string;
  type: string;
  volume?: string;
}

const BookDetails = (book: Book) => {
  return (
    <div className='hidden lg:block top-24 sticky lg:w-1/2 xl:w-2/5'>
      <div className='bg-card p-6 rounded-xl aspect-square overflow-hidden'>
        <div className='relative w-full h-full'>
          <Image
            src={book.image || '/placeholder.svg'}
            alt={book.title}
            width={400}
            height={600}
            className='mx-auto h-full object-contain'
          />
        </div>
      </div>
      <div className='bg-card mt-4 p-4 border rounded-lg'>
        <h2 className='mb-2 font-bold text-2xl'>{book.title}</h2>
        <div className='flex items-center gap-2 mb-4'>
          <span className='bg-amber-500/20 px-2 py-0.5 rounded-full font-medium text-amber-500 text-xs'>
            {book.type.charAt(0).toUpperCase() + book.type.slice(1)}
          </span>
          {book.volume && (
            <span className='text-muted-foreground text-sm'>{book.volume}</span>
          )}
        </div>
        <p className='text-muted-foreground text-sm'>
          Once, there was a glorious kingdom established among the snowy peaks.
          In it lived the princess, the pale princess...
        </p>
        <div className='flex justify-between gap-2 mt-4'>
          <AudiobookModal />
          <Link
            className='flex-1'
            href={`/home/books/${book.id}`}
          >
            <Button
              variant='outline'
              className='w-full bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 text-white hover:text-white dark:hover:text-black dark:text-black cursor-pointer'
            >
              View All Volumes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
