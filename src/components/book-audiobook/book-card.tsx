'use client';

import type React from 'react';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface Book {
  id: string;
  title: string;
  type: 'lore' | 'quest';
  volume?: string;
  image: string;
  description?: string;
}

interface BookCardProps {
  book: Book;
  onClick?: () => void;
}

const typeColors = {
  lore: 'bg-amber-500/20 text-amber-500',
  quest: 'bg-purple-500/20 text-purple-500',
};

export function BookCard({ book, onClick }: BookCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className='group relative bg-card hover:shadow-md border rounded-lg overflow-hidden transition-all cursor-pointer hover:scale-105'
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='button'
      aria-label={`Select ${book.title}`}
    >
      <div className='bg-muted/50 aspect-square overflow-hidden'>
        <Image
          src={
            book.image || '/static/images/placeholder.svg?height=300&width=200'
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
    </div>
  );
}
