'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { setCookie, getCookie } from '../components/cookies';

export default async function Page() {
  const p = useSearchParams()
  const code = p.get('code')
  setCookie('code', code)
  const newCode = getCookie('code')
  return (
    <>
      <p>code is {newCode}</p>
    </>
  );
};
