import { defineStore } from 'pinia'
import {
  clearPersistedToken,
  loginRequest,
  logoutRequest,
  persistToken,
  readStoredToken,
  resetPasswordRequest,
} from '@/services/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: readStoredToken(),
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token),
  },
  actions: {
    hydrate() {
      this.token = readStoredToken()
    },
    async login(password) {
      const token = await loginRequest(password)
      persistToken(token)
      this.token = token
      return token
    },
    async logout() {
      const token = this.token
      this.token = ''
      clearPersistedToken()
      await logoutRequest(token)
    },
    async resetPassword(currentPassword, newPassword) {
      return resetPasswordRequest(currentPassword, newPassword, this.token)
    },
    clear() {
      this.token = ''
      clearPersistedToken()
    },
  },
})
