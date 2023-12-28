import type { Metadata } from 'next';

import './global.css'

export const metadata: Metadata = {
    title: "Basic",
    description: "A basic Next.js app"
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body class="bg-white">{children}</body>
      </html>
    )
  }
