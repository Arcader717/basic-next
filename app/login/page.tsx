import { permanentRedirect } from 'next/navigation'
import { setCookie, getCookie } from '../components/cookies';

export default function Page() {
    setCookie("code", ":)")
    return permanentRedirect('/callback')
}
