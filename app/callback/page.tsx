'use client'

import { useSearchParams } from 'next/navigation';
import { setCookie, getCookie } from '../components/cookies';
import { permanentRedirect } from 'next/navigation';
import Link from 'next/link';

export default async function Page() {
  const p = useSearchParams()
  const code = p.get('code')
  setCookie('code', code)
  return (
    <>
      <p>Got code</p>
      <Link href="/callback">
        <a>Callback</a>
      </Link>
      <
    </>
  )
};
