import type React from 'react'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
// import { ModeToggle } from '@/components/mode-toggle'
import localFont from 'next/font/local'

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
})

export const metadata = {
    title: 'Project Chasm - Genshin Impact Lore',
    description:
        "Explore the depths of Teyvat's lore through books, characters, artifacts, and more.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={workSans.variable}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* <div className='flex flex-col justify-center item-center'>
                        <header className='top-0 z-10 sticky bg-background/80 backdrop-blur-sm border-b'>
                            <div className='flex flex-row justify-end items-center h-16 container'>
                                <ModeToggle />
                            </div>
                        </header> */}
                    {children}
                    {/* </div> */}
                </ThemeProvider>
            </body>
        </html>
    )
}
