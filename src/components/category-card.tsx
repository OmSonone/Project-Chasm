import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
    title: string
    description: string
    icon: LucideIcon
    href: string
    color: string
    textColor: string
}

export function CategoryCard({
    title,
    description,
    icon: Icon,
    href,
    color,
    textColor,
}: CategoryCardProps) {
    return (
        <Link
            href={href}
            className='group bg-card shadow-xs hover:shadow-md p-6 border rounded-lg transition-all'
        >
            <div
                className={cn(
                    'mb-4 flex h-12 w-12 items-center justify-center rounded-full',
                    color
                )}
            >
                <Icon className={cn('h-6 w-6', textColor)} />
            </div>
            <h3 className='mb-2 font-semibold text-xl'>{title}</h3>
            <p className='text-muted-foreground text-sm'>{description}</p>
        </Link>
    )
}
