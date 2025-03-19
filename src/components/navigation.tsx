'use client'

import { usePathname } from 'next/navigation'
import { MainNav } from '@/components/main-nav'

export function Navigation() {
    const pathname = usePathname()
    
    if (pathname === '/') {
        return null
    }
    
    return <MainNav />
} 