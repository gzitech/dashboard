import './globals.css';

import { Metadata } from 'next';
import { Suspense } from 'react';

import Nav from './nav';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'GZITECH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
