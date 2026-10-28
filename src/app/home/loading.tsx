export default function Loading() {
  return (
    <div className='container px-4 py-8'>
      <div className='bg-muted mb-8 rounded-md w-48 h-10 animate-pulse' />
      <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='bg-card shadow-xs p-4 border rounded-lg'>
            <div className='bg-muted mb-4 rounded-md aspect-square animate-pulse' />
            <div className='bg-muted mb-2 rounded w-3/4 h-4 animate-pulse' />
            <div className='bg-muted rounded w-1/2 h-3 animate-pulse' />
          </div>
        ))}
      </div>
    </div>
  );
}
