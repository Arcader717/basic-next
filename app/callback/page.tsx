'use client'

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Page = () => {
  const p = useSearchParams();
  if (p.has("code")) {
    const code = p.get("code")
  } else {
    const code = p.get("Nothing :(")
  }
  return (
    <>
      <h1>This is the callback page</h1>
      <p>Currently used to get the search params</p>
      <br/><br/><br/>
      <p>Add '?code=' and then whatever you want then reload to get it to show below</p>
      <br/><br/><br/>
      <h3>{code}</h3>
    </>
  )
