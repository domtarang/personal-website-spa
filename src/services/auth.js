import { requestJson } from '@/services/http'

export const AUTH_TOKEN_KEY = 'personal-website-admin-token'

export const readStoredToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY) || ''

export const persistToken = (token) => {
  window.localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export const clearPersistedToken = () => {
  window.localStorage.removeItem(AUTH_TOKEN_KEY)
}

export const loginRequest = async (password) => {
  const payload = await requestJson('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  })

  const token = payload?.token || ''

  if (!token) {
    throw new Error('Login token is missing.')
  }

  return token
}

export const logoutRequest = async (token) => {
  if (!token) {
    return
  }

  try {
    await requestJson('/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch {
  }
}

export const resetPasswordRequest = async (currentPassword, newPassword, token) => requestJson('/auth/password', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ currentPassword, newPassword }),
})
