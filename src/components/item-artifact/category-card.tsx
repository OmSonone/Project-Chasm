import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BookOpen, User, Package, Sparkles, LucideIcon } from 'lucide-react';

interface Category {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  textColor: string;
}

export function CategoryCard() {
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
    <>
      {categories.map((category: Category) => (
        <div
          key={category.title}
          className='bg-card shadow-xs hover:shadow-md p-6 border rounded-lg hover:scale-102 transition-all cursor-pointer'
        >
          <Link href={category.href} className='block w-full h-full'>
            <div
              className={cn(
                'mb-4 flex h-12 w-12 items-center justify-center rounded-full',
                category.color
              )}
            >
              <category.icon className={cn('h-6 w-6', category.textColor)} />
            </div>
            <h3 className='mb-2 font-semibold text-xl'>{category.title}</h3>
            <p className='text-muted-foreground text-sm'>
              {category.description}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
}
