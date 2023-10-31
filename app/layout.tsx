import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To do list app',
  description: 'todoliddydoo',
}

export interface ChildProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: ChildProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
