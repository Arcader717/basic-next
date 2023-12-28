import type Metadata from 'next';
import Link from 'next/link';
import './global.css';

export const metadata: Metadata = {
    title: "Basic",
    description: "A basic Next.js app"
}

const Page: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Link href="/callback">
        <a>Callback page</a>
      </Link>
    </div>
  );
};

export default Page;
