import { requestJson } from '@/services/http'

export const fetchHeroSection = async () => {
  const payload = await requestJson('/hero-section')
  return payload?.data
}

export const saveHeroSection = async (heroSection, token) => {
  const payload = await requestJson('/hero-section', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(heroSection),
  })

  return payload?.data
}
