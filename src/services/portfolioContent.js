import { requestJson } from '@/services/http'

export const fetchPortfolioContent = async () => {
  const payload = await requestJson('/portfolio-content')
  return payload?.data
}

export const savePortfolioContent = async (portfolioContent, token) => {
  const payload = await requestJson('/portfolio-content', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(portfolioContent),
  })

  return payload?.data
}
