<script setup>
import { computed, ref } from 'vue'

const password = ref('')
const showPassword = ref(false)

const inputType = computed(() => (showPassword.value ? 'text' : 'password'))

const handleSubmit = () => {
  console.log('Login submitted')
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
      <form class="login-card" @submit.prevent="handleSubmit">
        <div class="login-copy">
          <p class="login-kicker">Private Access</p>
          <h1>Login</h1>
          <p>Enter your password to continue.</p>
        </div>

        <label class="login-field" for="password">Password</label>
        <div class="password-input-wrap">
          <input
            id="password"
            v-model="password"
            :type="inputType"
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

        <button class="login-button" type="submit">Login</button>
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
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
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

.login-field {
  display: inline-block;
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
}

.password-input-wrap {
  position: relative;
}

.password-input-wrap input {
  width: 100%;
  padding: 1rem 6.1rem 1rem 1rem;
  border: 1px solid rgba(148, 163, 184, 0.34);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.94);
  font: inherit;
  color: var(--text);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.password-input-wrap input:focus {
  border-color: rgba(37, 99, 235, 0.52);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  outline: none;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  padding: 0.3rem 0.55rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--text-muted);
  font: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  transform: translateY(-50%);
}

.password-toggle:hover {
  color: var(--primary);
}

.password-toggle i {
  font-size: 1rem;
}

.login-button {
  width: 100%;
  margin-top: 1rem;
  padding: 0.95rem 1rem;
  border: none;
  border-radius: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  box-shadow: 0 18px 36px rgba(37, 99, 235, 0.24);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 40px rgba(37, 99, 235, 0.28);
  filter: brightness(1.03);
}

@keyframes loginWaveDriftFront {
  0% {
    transform: translateX(-1.2%) translateY(0.35%);
  }

  50% {
    transform: translateX(1.55%) translateY(-1.8%);
  }

  100% {
    transform: translateX(-0.8%) translateY(0.85%);
  }
}

@keyframes loginWaveDriftBack {
  0% {
    transform: translateX(1.05%) translateY(0.9%);
  }

  50% {
    transform: translateX(-1.05%) translateY(-1.35%);
  }

  100% {
    transform: translateX(0.7%) translateY(0.2%);
  }
}

@keyframes loginWaveGlow {
  0% {
    transform: translateX(-0.45%) translateY(-0.35%);
    opacity: 0.13;
  }

  50% {
    transform: translateX(0.95%) translateY(-1.55%);
    opacity: 0.26;
  }

  100% {
    transform: translateX(-0.7%) translateY(0.3%);
    opacity: 0.16;
  }
}

@media (prefers-reduced-motion: reduce) {
  .login-wave-back,
  .login-wave-front,
  .login-wave-glow {
    animation: none;
  }
}

@media (max-width: 640px) {
  .login-card {
    padding: 1.5rem;
  }

  .password-input-wrap input {
    padding-right: 5.6rem;
  }
}
</style>
