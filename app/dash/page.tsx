import { permanentRedirect } from 'next/navigation'
import { getCookie, setCookie } from '../components/cookies'

export default function Page() {
  const code = getCookie('code') 
  return (
    <p>Testing page for sessions and cookies</p>
    <p>Your code is {code}</p>
  )
}
