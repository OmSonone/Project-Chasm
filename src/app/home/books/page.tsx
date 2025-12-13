import { Button } from '@/components/ui/button';
import { BookCard } from '@/components/book-audiobook/book-card';
import { books } from '@/data/books';
import BookDetails from '@/components/book-audiobook/book-details';
import PageHeader from '@/components/layout/page-header';

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const book = books.find((book) => book.id === query) || books[0];

  return (
    <div className='min-h-screen gradient-container'>
      <PageHeader header='Books' />

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
          <BookDetails {...book} />
          <BookCard />
        </div>
      </div>
    </div>
  );
}
