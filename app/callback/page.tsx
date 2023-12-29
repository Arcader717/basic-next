'use client'

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const p = useSearchParams();
  let code = "Nothing :(";
  if (p.has("code")) {
    let code = p.get("code");
  };
  return (
    <>
      <h1>This is the callback page</h1>
      <p>Currently used to get the search params</p>
      <br/><br/><br/>
      <p>Add '?code=' and then whatever you want then reload to get it to show below</p>
      <br/><br/><br/>
      <h3>{code}</h3>
    </>
  );
};
