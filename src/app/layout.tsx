import React from 'react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/site-footer';
import ChangelogPopup from '@/components/layout/changelog-popup';

const workSans = localFont({
  src: [
    {
      path: './fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-work-sans',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const siteDescription =
  "Explore the depths of Teyvat's lore through books, characters, artifacts, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Project Chasm',
  title: {
    default: 'Project Chasm - Genshin Impact Lore',
    template: '%s | Project Chasm',
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    siteName: 'Project Chasm',
    title: 'Project Chasm - Genshin Impact Lore',
    description: siteDescription,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Chasm - Genshin Impact Lore',
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${workSans.variable} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className='flex flex-col flex-1 min-h-screen'>{children}</main>
          <ChangelogPopup />
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
