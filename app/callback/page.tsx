'use client'

import { useSearchParams } from 'next/navigation'
// import { setCookie, getCookie } from '../components/cookies';
// import Link from 'next/link';

export default async function Page() {
  let params = new URLSearchParams(document.location.search);
  let code = "Nothing :("
  if (params.has("code")) {
    let code = params.get("code")
  };
  return (
    <>
      <p>Hi {code}</p>
    </>
  )
};
