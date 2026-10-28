'use client';

export default function GlobalErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='flex flex-col justify-center items-center gap-4 p-10 min-h-screen text-center'>
          <h1 className='font-bold text-4xl'>Something went wrong</h1>
          <p className='max-w-md'>
            The archive hit an unexpected error. Try reloading the page, and if
            it keeps happening please report it with the error ID below.
          </p>
          {error.digest ? (
            <p className='text-sm opacity-70'>Error ID: {error.digest}</p>
          ) : null}
          <div className='flex gap-2'>
            <button
              onClick={reset}
              className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white cursor-pointer'
            >
              Try again
            </button>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className='hover:bg-gray-100 px-4 py-2 border rounded cursor-pointer'
            >
              Return to Home Page
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
