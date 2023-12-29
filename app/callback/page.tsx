'use client'

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default function Page() {
  const p = useSearchParams();
  var code = "Nothing :(";
  console.log("Testing vercel logs");
  if (p.has("code")) {
    code = p.get("code");
  };
  return (
    <>
      <h1>This is the callback page</h1>
      <p>Currently used to get the search params</p>
      <br/><br/><br/>
      <p>Add '?code=' and then whatever you want then reload to get it to show below</p>
      <p>If it changes click the button below the word you put in</p>
      <br/><br/><br/>
      <h3>{code}</h3>
      <button onClick="console.log('Testing vercel runtime logs');">Test logs</button>
    </>
  );
};
