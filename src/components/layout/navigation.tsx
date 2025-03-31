'use client';

import { usePathname } from 'next/navigation';
import { MainNav } from '@/components/layout/main-nav';

export function Navigation() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/maintenance' || pathname.startsWith('/studio')) {
    return null;
  }

  return <MainNav />;
}
