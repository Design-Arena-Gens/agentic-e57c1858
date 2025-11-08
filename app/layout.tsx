import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Menopause Survival Guide: Your Tour Through The Change',
  description: 'A humorous, holistic guide to navigating menopause with grace, grit, and maybe some good wine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
