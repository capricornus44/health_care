import {Inter} from 'next/font/google'

import type {Metadata} from 'next'
import './globals.scss'
import {cn} from '@/lib/utils'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Health Care',
  description: 'Health Care application'
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
