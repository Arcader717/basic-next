import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export const runtime = "edge"

export async function GET(r: Request) {
  const c = cookies()
  const h = headers()
  const name = h.get('name')
  const cookie = c.get(name)
  return new Response("", {headers: {
    "cookie": cookie
  }})
}

export async function POST(r: Request) {
  const c = cookies()
  const h = headers()
  const name = h.get('name')
  const value = h.get('value')
  c.set(name, value)
}
