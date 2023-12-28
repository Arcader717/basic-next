import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1>This is the callback page</h1>
      <Link href="/">
        <a>Go home!</a>
      </Link>
    </div>
  )
}

export default Page;
