import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-10 min-h-[60vh] text-center'>
      <h1 className='font-bold text-3xl tracking-tight'>Page not found</h1>
      <p className='max-w-md text-muted-foreground'>
        This record is not in the archive yet. Try browsing the collections
        instead.
      </p>
      <Button asChild>
        <Link href='/home'>Browse the archive</Link>
      </Button>
    </div>
  );
}
