import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { NextRequest } from 'next/server'

export const runtime = "edge"

export async function POST(req: NextRequest) {
  const heads = new Headers(req.headers)
  cookies().set(heads.get('name'), heads.get('value'))
  return new Response("Response", {
    status: 200,
    headers: { 'Cookie': `${heads.get('name')}:${cookies().get(heads.get('name')}` }
  })
}
