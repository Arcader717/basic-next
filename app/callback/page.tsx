'use client'

import { useSearchParams } from 'next/navigation'
// import { setCookie, getCookie } from '../components/cookies';
// import Link from 'next/link';

export default async function Page() {
  const searchParams = useSearchParams();
  return (
    <>
      <p>Hi {searchParams}</p>
    </>
  )
};
