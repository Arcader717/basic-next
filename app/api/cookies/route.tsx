import { setCookie, getCookie } from '../../components/cookies'
import { headers } from 'next/headers'

export const runtime = "edge"

export async function GET(r: Request) {
  const h = headers()
  const name = h.get('name')
  const cookie = getCookie(name)
  return new Response("", {
    headers: {
      "cookie": String(cookie)
    }
  })
}

export async function POST(r: Request) {
  const h = headers()
  const name = h.get('name')
  const value = h.get('value')
  setCookie(name, value)
}
