import Link from 'next/link';
import { headers } from 'next/headers';

export default function Page() {
  const heads = headers()
  function btnLog() {
    console.log("Vercel log test");
  }
  return (
    <>
      <h1>Got your fucken IP idiot</h1>
      <h2>{heads.get('x-real-ip')}</h2>
      <p>This is a heads up to the fact that just by opening a website, your ip can be displayed, and used to the website's advantage. So be careful about who you trust</p>
    </>
  );
};
