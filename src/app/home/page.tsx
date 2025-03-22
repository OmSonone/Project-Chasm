import { CategoryCard } from '@/components/item-artifact/category-card';
import { BookOpen, User, Package, Sparkles } from 'lucide-react';

export default function Dashboard() {
  const categories = [
    {
      title: 'Characters',
      description: 'Explore the heroes and villains of Teyvat.',
      icon: User,
      href: '/home/characters',
      color: 'bg-blue-500/10 dark:bg-blue-500/20',
      textColor: 'text-blue-500 dark:text-blue-400',
    },
    {
      title: 'Books',
      description: 'Discover the written lore with audiobook versions',
      icon: BookOpen,
      href: '/home/books',
      color: 'bg-amber-500/10 dark:bg-amber-500/20',
      textColor: 'text-amber-500 dark:text-amber-400',
    },
    {
      title: 'Artifacts',
      description: 'Learn about the powerful relics and their stories',
      icon: Sparkles,
      href: '/home/artifacts',
      color: 'bg-purple-500/10 dark:bg-purple-500/20',
      textColor: 'text-purple-500 dark:text-purple-400',
    },
    {
      title: 'Items',
      description: 'Catalog of materials and items found in Teyvat',
      icon: Package,
      href: '/home/items',
      color: 'bg-green-500/10 dark:bg-green-500/20',
      textColor: 'text-green-500 dark:text-green-400',
    },
  ];

  return (
    <div className='py-8 container'>
      <section className='mb-8'>
        <h2 className='mb-6 font-bold text-3xl tracking-tight'>
          {"Explore Teyvat's Lore"}
        </h2>
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={category.href}
              color={category.color}
              textColor={category.textColor}
            />
          ))}
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
  );
}
