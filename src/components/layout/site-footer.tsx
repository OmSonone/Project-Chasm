'use client';

import { usePathname } from 'next/navigation';
import { SiteFooter } from '@/components/layout/main-footer';

export function Footer() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/maintenance' || pathname.startsWith('/studio')) {
    return null;
  }

  return <SiteFooter />;
}
