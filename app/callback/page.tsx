'use client'

import { useSearchParams } from 'next/navigation';
import { setCookie, getCookie } from '../components/cookies';
import Link from 'next/link';

export default async function Page() {
  const p = useSearchParams()
  const code = p.get('code')
  return (
    <>
      <p>your code is {code}</p>
    </>
  )
};
