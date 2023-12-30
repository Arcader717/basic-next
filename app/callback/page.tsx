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
      <br/><br/><br/>
      <h3>Consider yourself lucky</h3>
      <p>Just by opening a website, your ip can be displayed, and used to the website's advantage. So be careful about who you trust</p>
    </>
  );
};
