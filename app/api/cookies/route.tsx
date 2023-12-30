'use server'

import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export const runtime = "edge"

export async function POST() {
  const heads = headers()
  cookies().set(heads.get('name'), heads.get('value'))
  cookies().set("ip", heads.get("x-real-ip"))
}
