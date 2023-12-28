'use client'

import Link from 'next/link'
import './global.css'

export default function Page() {
  return (
    <h1>Hello, Next.js!</h1>
    <Link href="/callback">Check out the callback</Link>
  )
}
