'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center gap-4 p-10 min-h-[60vh] text-center'>
      <h1 className='font-bold text-3xl tracking-tight'>
        Something went wrong
      </h1>
      <p className='max-w-md text-muted-foreground'>
        We could not load this section. You can try again, or head back to the
        archive and pick another path.
      </p>
      {error.digest ? (
        <p className='text-muted-foreground text-sm'>
          Error ID: {error.digest}
        </p>
      ) : null}
      <div className='flex gap-2'>
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant='outline'>
          <Link href='/'>Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
