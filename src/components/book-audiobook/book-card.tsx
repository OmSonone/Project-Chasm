import type React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { books } from '@/data/books';
import Link from 'next/link';

export interface Book {
  id: string;
  title: string;
  type: 'lore' | 'quest';
  volume?: string;
  image: string;
  description?: string;
}

const typeColors = {
  lore: 'bg-amber-500/20 text-amber-500',
  quest: 'bg-purple-500/20 text-purple-500',
};

export function BookCard() {
  return (
    <div className='lg:w-1/2 xl:w-3/5'>
      <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((book: Book) => {
          return (
            <Link
              className='group relative bg-card hover:shadow-md border rounded-lg overflow-hidden transition-all cursor-pointer hover:scale-105'
              href={`/home/books?query=${book.id}`}
              key={book.id}
              tabIndex={0}
              role='button'
              aria-label={`Select ${book.title}`}
              scroll={false}
            >
              <div className='bg-muted/50 aspect-square overflow-hidden'>
                <Image
                  src={
                    book.image ||
                    '/static/images/placeholder.svg?height=300&width=200'
                  }
                  alt={book.title}
                  width={200}
                  height={300}
                  className='w-full h-full object-contain transition-transform'
                />
              </div>
              <div className='p-2'>
                <div
                  className={cn(
                    'mb-1 inline-block rounded-full px-1.5 py-0.5 text-xs font-medium',
                    typeColors[book.type]
                  )}
                >
                  {book.type.charAt(0).toUpperCase() + book.type.slice(1)}
                </div>
                <h3 className='font-medium line-clamp-2'>{book.title}</h3>
                {book.volume && (
                  <p className='text-muted-foreground text-xs'>{book.volume}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
