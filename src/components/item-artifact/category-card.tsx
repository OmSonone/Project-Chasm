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
        <div className="bg-card shadow-xs hover:shadow-md p-6 border rounded-lg hover:scale-102 transition-all cursor-pointer">
            <Link
                href={href}
                className='block w-full h-full'
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
        </div>
    )
}
