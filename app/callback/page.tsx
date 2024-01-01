'use client'

import { useSearchParams } from 'next/navigation'
// import { setCookie, getCookie } from '../components/cookies';
// import Link from 'next/link';

export default async function Page() {
  const searchParams = useSearchParams()
  if (searchParams.has("code")) {
    const code = searchParams.get("code")
  } else {
    const code = "Nothing :("
  }
  return (
    <>
      <p>Hi {code}</p>
    </>
  )
};
