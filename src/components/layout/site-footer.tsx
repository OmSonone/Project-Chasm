'use client';

import { usePathname } from 'next/navigation';
import { SiteFooter } from '@/components/layout/main-footer';

export function Footer() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/maintenance') {
    return null;
  }

  return <SiteFooter />;
}
