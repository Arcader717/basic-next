import { permanentRedirect } from 'next/navigation'
import { setCookie, getCookie } from '../components/cookies';

export default function Page() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    let length = 16;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    };
    return permanentRedirect(`https://discord.com/oauth2/authorize?response_type=code&client_id=1163179429640544267&scope=identify&redirect_uri=https%3A%2F%2Fchronicbot.xyz%2Fcallback&prompt=consent&state=${randomString}`)
}
