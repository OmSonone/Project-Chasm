import { CategoryCard } from '@/components/item-artifact/category-card'

export default function Dashboard() {
  return (
    <div className='py-8 container'>
      <section className='mb-8'>
        <h2 className='mb-6 font-bold text-3xl tracking-tight'>
          {"Explore Teyvat's Lore"}
        </h2>
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
          <CategoryCard />
        </div>
      </section>
      <section className='mb-8'>
        <h2 className='mb-6 font-bold text-3xl tracking-tight'>
          Featured Audiobooks
        </h2>
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='bg-card shadow-xs hover:shadow-md p-4 border rounded-lg transition-all'
            >
              <div className='bg-muted mb-4 rounded-md aspect-4/3'></div>
              <h3 className='mb-2 font-semibold'>
                The Pale Princess and the Six Pygmies
              </h3>
              <p className='mb-4 text-muted-foreground text-sm'>
                A mysterious tale that hints at the ancient history of Teyvat.
              </p>
              <div className='flex items-center gap-2'>
                <div className='flex-1 bg-muted rounded-full h-2 overflow-hidden'>
                  <div className='bg-primary rounded-full w-1/3 h-full'></div>
                </div>
                <span className='text-muted-foreground text-xs'>12:34</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='mb-6 font-bold text-3xl tracking-tight'>
          Recently Added
        </h2>
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className='bg-card shadow-xs hover:shadow-md p-4 border rounded-lg transition-all'
            >
              <div className='bg-muted mb-4 rounded-md aspect-square'></div>
              <h3 className='font-semibold'>Item Name</h3>
              <p className='text-muted-foreground text-sm'>Category</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
