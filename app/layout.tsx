import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Company Website',
  description: 'Professional services company showcasing our expertise in digital solutions, team capabilities, and client success stories.',
  keywords: 'professional services, digital solutions, web development, consulting, team',
  authors: [{ name: 'Professional Company' }],
  openGraph: {
    title: 'Professional Company Website',
    description: 'Professional services company showcasing our expertise in digital solutions, team capabilities, and client success stories.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}