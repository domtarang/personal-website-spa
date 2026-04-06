import { API_BASE_URL } from '@/config/api'

const parseResponseBody = async (response) => {
  const contentType = response.headers.get('content-type') || ''

  if (!contentType.includes('application/json')) {
    return null
  }

  return response.json()
}

export const requestJson = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, options)
  const payload = await parseResponseBody(response)

  if (!response.ok) {
    throw new Error(payload?.message || 'Request failed.')
  }

  return payload
}
