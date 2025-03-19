import type React from 'react'
import '@/app/globals.css'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='min-h-screen gradient-container'>
            {children}
        </div>
    )
}
