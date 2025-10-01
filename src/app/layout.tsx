import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akshit Kumar - Product Builder, Thriller Novelist & Adventurer',
  description: 'Thriller novelist, outdoor adventurer, book lover, and product builder — I craft digital experiences by day and stories by night, with my dog always nearby.',
  keywords: ['product design', 'thriller novelist', 'outdoor adventures', 'UX design', 'writing', 'creativity'],
  authors: [{ name: 'Akshit Kumar' }],
  openGraph: {
    title: 'Akshit Kumar - Product Builder, Thriller Novelist & Adventurer',
    description: 'Thriller novelist, outdoor adventurer, book lover, and product builder — I craft digital experiences by day and stories by night, with my dog always nearby.',
    url: 'https://akshitkumar.com',
    siteName: 'Akshit Kumar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshit Kumar - Product Builder, Thriller Novelist & Adventurer',
    description: 'Thriller novelist, outdoor adventurer, book lover, and product builder — I craft digital experiences by day and stories by night, with my dog always nearby.',
  },
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}