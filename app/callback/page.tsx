'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { setCookies, getCookies } from '../components/cookies';

export default async function Page() {
  const p = useSearchParams()
  const code = params.get('code')
  setCookies('code', code)
  const newCode = cook.get('code')
  return (
    <>
      <p>code is {getCookies('code')}</p>
    </>
  );
};
