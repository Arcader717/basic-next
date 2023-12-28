'use client'

import Link from 'next/link'
import './global.css'

const Page = () => {
  return (
    <h1>Hello, Next.js!</h1>
    <Link href="/callback">Callback page</Link>
  );
}

export default Page;
