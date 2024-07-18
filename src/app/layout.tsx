import {Inter} from 'next/font/google'

import {cn} from '@/lib/utils'

import './globals.scss'

import type {Metadata} from 'next'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Health Care',
  description: 'Best Health Care application'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen antialiased', inter.className)}>
        {children}
      </body>
    </html>
  )
}
