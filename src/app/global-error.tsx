'use client';

export default function GlobalErrorComponent() {
  // You can access the error via the error prop if you use the Error Boundary pattern
  return (
    <html>
      <head>
        <title>Global Error</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        <div className='px-10 flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-4xl mb-4'>Something went wrong</h1>
          <p className='mb-6'>
            If you reached this page, it means that I fucked something up
            massively. Please reach out to me on discord @omsonone and let me
            know how you managed to break this site you maniac.
          </p>
          <button
            onClick={() => (window.location.href = '/')}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'
          >
            Return to Home Page
          </button>
        </div>
      </body>
    </html>
  );
}
