import Link from 'next/link';
import { headers } from 'next/headers';

export default function Page() {
  const heads = headers()
  const p = useSearchParams();
  var code = "Nothing :(";
  if (p.has("code")) {
    code = p.get("code");
  };
  function btnLog() {
    console.log("Vercel log test");
  }
  return (
    <>
      <h1>Got your fucken ip idiot</h1>
      <p>{heads.get('x-real-ip')}</p>
    </>
  );
};
