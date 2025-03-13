import type React from 'react'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
// import { ModeToggle } from '@/components/mode-toggle'

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
            <body>
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
