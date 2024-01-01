'use client'

import { useRouter } from 'next/navigation'
// import { setCookie, getCookie } from '../components/cookies';
// import Link from 'next/link';

export default async function Page() {
  let router = useRouter();
  const { keyword } = router.query;
  return (
    <>
      <p>Hi {keyword}</p>
    </>
  )
};
