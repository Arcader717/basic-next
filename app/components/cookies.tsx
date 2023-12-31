import { cookies } from 'next/headers'

export async function setCookies(name, value) {
  await fetch("https://www.chronicbot.xyz/api/cookies", {
    method: "POST",
    headers: {
      "name": name,
      "value": value
    }
  })
}

export async function getCookies(name) {
  return await fetch("https://www.chronicbot.xyz/api/cookies", {
    method: "GET",
    headers: {
      "name": name
    }
  }
}

