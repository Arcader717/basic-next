import { cookies } from 'next/headers'

export function set(name, value) {
  cookies().set(name, value)
}

export function get(name) {
  return cookies().get(name)
}

