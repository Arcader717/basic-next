'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { set, get } from '../components/cookies';

export default async function Page() {
  const p = useSearchParams()
  const code = params.get('code')
  set('code', code)
  const newCode = cook.get('code')
  return (
    <>
      <p>code is {get('code')}</p>
    </>
  );
};
