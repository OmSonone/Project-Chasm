import type React from 'react'
import '@/app/globals.css'
import { ModeToggle } from '@/components/mode-toggle'
import { BookOpen, User, Package, Sparkles } from 'lucide-react'
import Link from 'next/link'
export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const categories = [
        {
            title: 'Characters',
            description: 'Explore the heroes and villains of Teyvat',
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
    ]
    return (
        <div className='min-h-screen gradient-container'>
            <header className='top-0 z-10 sticky bg-background/80 backdrop-blur-sm border-b'>
                <div className='flex justify-between items-center h-16 container'>
                    <div className='flex items-center gap-6'>
                        <h1 className='font-bold text-2xl tracking-tight'>
                            <Link href='/'>Project Chasm</Link>
                        </h1>
                        <nav className='hidden md:flex'>
                            <ul className='flex gap-6'>
                                {categories.map((category) => (
                                    <li key={category.title}>
                                        <a
                                            href={category.href}
                                            className='font-medium text-muted-foreground hover:text-foreground text-sm transition-colors'
                                        >
                                            {category.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <ModeToggle />
                </div>
            </header>
            {children}
        </div>
    )
}
