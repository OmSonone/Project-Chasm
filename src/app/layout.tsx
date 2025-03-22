import React from 'react';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Navigation } from '@/components/layout/navigation';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from '@/components/layout/site-footer';

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

export const metadata = {
  title: 'Project Chasm - Genshin Impact Lore',
  description:
    "Explore the depths of Teyvat's lore through books, characters, artifacts, and more.",
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
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
