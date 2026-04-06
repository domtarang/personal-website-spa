<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const password = ref('')
const showPassword = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')
const infoMessage = ref('')

const inputType = computed(() => (showPassword.value ? 'text' : 'password'))
const feedbackMeta = computed(() => {
  if (errorMessage.value) {
    return {
      icon: 'mdi-alert-circle',
      title: 'Login failed',
      typeClass: 'app-notice-error',
      message: errorMessage.value,
    }
  }

  if (infoMessage.value) {
    return {
      icon: 'mdi-check-circle',
      title: 'Success',
      typeClass: 'app-notice-success',
      message: infoMessage.value,
    }
  }

  return null
})

onMounted(() => {
  const notice = window.sessionStorage.getItem('personal-website-auth-notice') || ''

  if (notice) {
    infoMessage.value = notice
    window.sessionStorage.removeItem('personal-website-auth-notice')
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await authStore.login(password.value)
    const redirectTarget = typeof route.query.redirect === 'string' && route.query.redirect
      ? route.query.redirect
      : '/maintenance'

    await router.replace(redirectTarget)
  } catch (error) {
    errorMessage.value = error.message || 'Unable to login.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="login-page">
    <div class="login-backdrop" aria-hidden="true">
      <svg class="login-wave" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="loginWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563eb" />
            <stop offset="55%" stop-color="#4f46e5" />
            <stop offset="100%" stop-color="#8b5cf6" />
          </linearGradient>
          <linearGradient id="loginWaveGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08" />
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.24" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.08" />
          </linearGradient>
        </defs>

        <path
          class="login-wave-back"
          d="M0 900 L0 620 C188 660 392 610 596 520 C796 434 980 318 1156 226 C1324 138 1474 76 1600 32 L1600 900 Z"
          fill="url(#loginWaveGradient)"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="M0 900 L0 620 C188 660 392 610 596 520 C796 434 980 318 1156 226 C1324 138 1474 76 1600 32 L1600 900 Z;
                    M0 900 L0 650 C206 684 408 638 600 548 C792 458 978 346 1152 246 C1322 150 1472 88 1600 48 L1600 900 Z;
                    M0 900 L0 628 C194 662 398 620 600 530 C804 440 988 324 1166 234 C1332 150 1480 86 1600 42 L1600 900 Z;
                    M0 900 L0 620 C188 660 392 610 596 520 C796 434 980 318 1156 226 C1324 138 1474 76 1600 32 L1600 900 Z"
          />
        </path>

        <path
          class="login-wave-front"
          d="M0 900 L0 700 C228 714 426 664 614 576 C804 490 968 378 1146 278 C1314 184 1468 112 1600 58 L1600 900 Z"
          fill="url(#loginWaveGradient)"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="M0 900 L0 700 C228 714 426 664 614 576 C804 490 968 378 1146 278 C1314 184 1468 112 1600 58 L1600 900 Z;
                    M0 900 L0 680 C204 694 404 644 592 556 C784 468 972 358 1152 266 C1322 178 1474 112 1600 70 L1600 900 Z;
                    M0 900 L0 712 C236 728 436 682 622 592 C808 504 976 392 1152 294 C1322 202 1474 128 1600 74 L1600 900 Z;
                    M0 900 L0 700 C228 714 426 664 614 576 C804 490 968 378 1146 278 C1314 184 1468 112 1600 58 L1600 900 Z"
          />
        </path>

        <path
          class="login-wave-glow"
          d="M0 900 L0 665 C220 686 420 640 610 558 C798 476 970 370 1148 278 C1320 190 1472 120 1600 66 L1600 900 Z"
          fill="url(#loginWaveGlowGradient)"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0 900 L0 665 C220 686 420 640 610 558 C798 476 970 370 1148 278 C1320 190 1472 120 1600 66 L1600 900 Z;
                    M0 900 L0 648 C204 668 404 622 594 542 C788 460 974 350 1154 260 C1324 174 1476 110 1600 64 L1600 900 Z;
                    M0 900 L0 676 C234 694 432 648 620 566 C804 484 972 378 1150 286 C1320 198 1472 124 1600 70 L1600 900 Z;
                    M0 900 L0 665 C220 686 420 640 610 558 C798 476 970 370 1148 278 C1320 190 1472 120 1600 66 L1600 900 Z"
          />
        </path>
      </svg>
    </div>

    <section class="login-shell">
      <form class="login-card app-surface" @submit.prevent="handleSubmit">
        <div class="login-copy">
          <p class="login-kicker">Private Access</p>
          <h1>Login</h1>
          <p>Enter your maintenance password to continue.</p>
        </div>

        <label class="app-input-label" for="password">Password</label>
        <div class="password-input-wrap">
          <input
            id="password"
            v-model="password"
            :type="inputType"
            class="app-input"
            placeholder="Enter password"
            autocomplete="current-password"
            required
          />

          <button
            type="button"
            class="password-toggle"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
            @click="showPassword = !showPassword"
          >
            <i :class="showPassword ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'" aria-hidden="true"></i>
            <span>{{ showPassword ? 'Hide' : 'View' }}</span>
          </button>
        </div>

        <div
          v-if="feedbackMeta"
          :class="['app-notice', feedbackMeta.typeClass, 'login-notice']"
          role="status"
          :aria-live="errorMessage ? 'assertive' : 'polite'"
        >
          <span class="app-notice-icon-wrap" aria-hidden="true">
            <i :class="['mdi', feedbackMeta.icon, 'app-notice-icon']"></i>
          </span>
          <div class="app-notice-copy">
            <strong class="app-notice-title">{{ feedbackMeta.title }}</strong>
            <p class="app-notice-message">{{ feedbackMeta.message }}</p>
          </div>
        </div>

        <button class="app-primary-button login-button" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Signing in...' : 'Login' }}
        </button>

        <a class="app-secondary-button login-secondary-link" href="/" target="_blank" rel="noopener noreferrer">
          Go to site
        </a>
      </form>
    </section>
  </main>
</template>

<style scoped>
.login-page {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(37, 99, 235, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f8fafc 42%, #ffffff 100%);
}

.login-page::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0) 72%);
  filter: blur(10px);
  pointer-events: none;
}

.login-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.login-wave {
  position: absolute;
  inset: auto 50% -1px;
  width: 100vw;
  min-width: 100vw;
  height: min(70vh, 620px);
  transform: translateX(-50%);
  filter:
    drop-shadow(0 -10px 22px rgba(37, 99, 235, 0.18))
    drop-shadow(0 -28px 52px rgba(139, 92, 246, 0.16));
}

.login-wave-back {
  opacity: 0.22;
  transform-origin: center bottom;
  animation: loginWaveDriftBack 12s ease-in-out infinite alternate;
}

.login-wave-front {
  transform-origin: center bottom;
  animation: loginWaveDriftFront 8s ease-in-out infinite alternate;
}

.login-wave-glow {
  opacity: 0.18;
  mix-blend-mode: screen;
  transform-origin: center bottom;
  animation: loginWaveGlow 10s ease-in-out infinite alternate;
}

.login-shell {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 1.5rem;
}

.login-card {
  width: min(100%, 440px);
  padding: 2rem;
  border-radius: 1.75rem;
}

.login-copy {
  margin-bottom: 1.5rem;
  text-align: center;
}

.login-kicker {
  margin: 0 0 0.5rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary);
}

.login-copy h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 2.4rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--text);
}

.login-copy p:last-child {
  margin: 0.85rem 0 0;
}

.login-notice {
  margin: 1rem 0;
}

.login-button,
.login-secondary-link {
  width: 100%;
}

.login-button {
  margin-top: 1.15rem;
}

.login-secondary-link {
  margin-top: 0.85rem;
}

@keyframes loginWaveDriftBack {
  from { transform: translateY(0); }
  to { transform: translateY(12px); }
}

@keyframes loginWaveDriftFront {
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}

@keyframes loginWaveGlow {
  from { transform: translateY(0); opacity: 0.16; }
  to { transform: translateY(10px); opacity: 0.26; }
}
</style>
