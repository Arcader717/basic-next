'use client'

import Link from 'next/link';
import './global.css';

const Page: React.FC = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/callback">
        <a>Callback page</a>
      </Link>
    </div>
  );
};

export default Page;
