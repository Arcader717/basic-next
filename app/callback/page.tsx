'use client'

import { useSearchParams } from 'next/navigation'
// import { setCookie, getCookie } from '../components/cookies';
// import Link from 'next/link';

export default async function Page() {
  const searchParams = useSearchParams()
  let code = "Nothing :("
  if (searchParams.has("code")) {
    let code = searchParams.get("code")
  };
  return (
    <>
      <p>Hi {code}</p>
    </>
  )
};
