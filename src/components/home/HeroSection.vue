<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useHeroSectionStore } from '@/stores/heroSection'

const HERO_ROTATION_INTERVAL = 3000
const HERO_CAPTURE_DURATION = 520

const heroSectionStore = useHeroSectionStore()
const heroImageFrame = ref(null)
const heroIndex = ref(0)
const heroTimerId = ref(null)
const captureTimeoutId = ref(null)

const heroImages = computed(() => heroSectionStore.sortedHeroImages)
const heroButtons = computed(() => heroSectionStore.sortedHeroButtons)
const heroSection = computed(() => heroSectionStore.heroSection)

const shouldOpenInNewTab = (link = '') => /^https?:\/\//i.test(String(link).trim())

const clearCaptureFlash = () => {
  heroImageFrame.value?.classList.remove('is-capturing')
}

const stop = () => {
  if (heroTimerId.value !== null) {
    window.clearInterval(heroTimerId.value)
    heroTimerId.value = null
  }

  if (captureTimeoutId.value !== null) {
    window.clearTimeout(captureTimeoutId.value)
    captureTimeoutId.value = null
  }
}

const advance = () => {
  if (!heroImageFrame.value || heroImages.value.length < 2) {
    return
  }

  clearCaptureFlash()
  void heroImageFrame.value.offsetWidth
  heroImageFrame.value.classList.add('is-capturing')
  heroIndex.value = (heroIndex.value + 1) % heroImages.value.length

  captureTimeoutId.value = window.setTimeout(() => {
    clearCaptureFlash()
    captureTimeoutId.value = null
  }, HERO_CAPTURE_DURATION)
}

const start = () => {
  if (heroImages.value.length < 2) {
    stop()
    return
  }

  stop()
  heroTimerId.value = window.setInterval(advance, HERO_ROTATION_INTERVAL)
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    stop()
    return
  }

  start()
}

const preloadImages = () => {
  heroImages.value.forEach((image) => {
    if (!image?.url) {
      return
    }

    const preloadImage = new Image()
    preloadImage.src = image.url
  })
}

watch(
  heroImages,
  () => {
    heroIndex.value = 0
    preloadImages()
    start()
  },
  { deep: true },
)

onMounted(async () => {
  document.addEventListener('visibilitychange', handleVisibilityChange)

  try {
    await heroSectionStore.fetch()
  } catch {
  }
})

onBeforeUnmount(() => {
  stop()
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<template>
  <section class="hero-section" id="hero-section">
    <svg class="hero-wave" viewBox="0 0 1600 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="heroWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="55%" stop-color="#4f46e5" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
        <linearGradient id="heroWaveGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.06" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.24" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.06" />
        </linearGradient>
      </defs>
      <path class="hero-wave-back" d="M0 700 L0 670 C225 678 418 640 594 570 C778 498 950 404 1132 312 C1308 220 1466 144 1600 92 L1600 700 Z" fill="url(#heroWaveGradient)">
        <animate attributeName="d" dur="12s" repeatCount="indefinite"
          values="M0 700 L0 670 C225 678 418 640 594 570 C778 498 950 404 1132 312 C1308 220 1466 144 1600 92 L1600 700 Z;
                  M0 700 L0 642 C198 648 384 600 576 520 C770 440 958 350 1142 266 C1318 186 1472 118 1600 72 L1600 700 Z;
                  M0 700 L0 666 C242 674 444 636 626 566 C804 498 972 402 1148 310 C1320 220 1474 144 1600 88 L1600 700 Z;
                  M0 700 L0 652 C212 660 402 616 586 540 C774 464 958 376 1140 286 C1314 198 1470 126 1600 78 L1600 700 Z;
                  M0 700 L0 670 C225 678 418 640 594 570 C778 498 950 404 1132 312 C1308 220 1466 144 1600 92 L1600 700 Z" />
      </path>
      <path class="hero-wave-front" d="M0 700 L0 655 C245 660 430 618 610 540 C790 462 930 352 1100 260 C1280 160 1445 102 1600 58 L1600 700 Z" fill="url(#heroWaveGradient)">
        <animate attributeName="d" dur="8s" repeatCount="indefinite"
          values="M0 700 L0 655 C245 660 430 618 610 540 C790 462 930 352 1100 260 C1280 160 1445 102 1600 58 L1600 700 Z;
                  M0 700 L0 634 C206 640 398 592 586 508 C776 424 960 330 1142 252 C1318 176 1474 110 1600 78 L1600 700 Z;
                  M0 700 L0 668 C236 676 438 640 626 570 C810 500 978 402 1152 308 C1324 216 1478 142 1600 82 L1600 700 Z;
                  M0 700 L0 646 C220 654 412 608 598 528 C786 448 968 356 1146 272 C1318 190 1474 120 1600 70 L1600 700 Z;
                  M0 700 L0 655 C245 660 430 618 610 540 C790 462 930 352 1100 260 C1280 160 1445 102 1600 58 L1600 700 Z" />
      </path>
      <path class="hero-wave-glow" d="M0 700 L0 650 C235 656 424 614 604 540 C788 468 954 380 1130 292 C1304 206 1464 132 1600 82 L1600 700 Z" fill="url(#heroWaveGlowGradient)">
        <animate attributeName="d" dur="9s" repeatCount="indefinite"
          values="M0 700 L0 650 C235 656 424 614 604 540 C788 468 954 380 1130 292 C1304 206 1464 132 1600 82 L1600 700 Z;
                  M0 700 L0 638 C214 644 404 596 592 516 C782 436 964 344 1146 262 C1320 182 1474 116 1600 72 L1600 700 Z;
                  M0 700 L0 662 C246 670 442 632 624 558 C804 484 972 392 1148 300 C1320 210 1474 138 1600 86 L1600 700 Z;
                  M0 700 L0 644 C222 650 412 604 598 526 C786 446 968 356 1146 274 C1320 194 1474 124 1600 76 L1600 700 Z;
                  M0 700 L0 650 C235 656 424 614 604 540 C788 468 954 380 1130 292 C1304 206 1464 132 1600 82 L1600 700 Z" />
      </path>
    </svg>

    <div class="hero-content">
      <div class="intro">
        <p class="intro-name">Hi, I'm <span>Mark Dominic Tarang</span></p>
        <p class="intro-position"><span>{{ heroSection.jobTitle }}</span> at <span>{{ heroSection.company }}</span></p>
        <p>{{ heroSection.description }}</p>
        <p>{{ heroSection.supportingText }}</p>

        <div v-if="heroButtons.length" class="intro-socials">
          <a
            v-for="(button, index) in heroButtons"
            :key="button.id || `${button.icon}-${index}`"
            :href="button.link"
            :target="shouldOpenInNewTab(button.link) ? '_blank' : undefined"
            :rel="shouldOpenInNewTab(button.link) ? 'noopener noreferrer' : undefined"
            :aria-label="button.icon || `Hero action ${index + 1}`"
          >
            <i :class="['intro-social-icon', 'mdi', button.icon]" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div ref="heroImageFrame" class="intro-image-frame" aria-live="polite">
        <div class="intro-image-stack">
          <img
            v-for="(image, index) in heroImages"
            :key="image.id || image.url || index"
            :src="image.url"
            :alt="index === heroIndex ? image.alt : ''"
            :class="['intro-image', { 'is-active': index === heroIndex }]"
            :data-hero-alt="image.alt"
            loading="eager"
            decoding="async"
            :fetchpriority="index === 0 ? 'high' : undefined"
            :aria-hidden="String(index !== heroIndex)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  max-width: none;
  min-height: calc(100vh - 7rem);
  margin: 1.25rem 0 0;
}

.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.84) 0%, rgba(255, 255, 255, 0) 72%);
  filter: blur(10px);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: var(--max-width);
  min-height: calc(100vh - 7rem);
  margin: 0 auto;
  padding: 4.5rem 0 0;
}

.hero-wave {
  position: absolute;
  left: 50%;
  bottom: -1px;
  z-index: 0;
  display: block;
  width: 100vw;
  min-width: 100vw;
  height: clamp(320px, 42vw, 560px);
  overflow: visible;
  transform: translateX(-50%);
  filter:
    drop-shadow(0 -10px 22px rgba(37, 99, 235, 0.18))
    drop-shadow(0 -28px 52px rgba(139, 92, 246, 0.16));
  pointer-events: none;
}

.hero-wave .hero-wave-back {
  opacity: 0.24;
  transform-origin: center bottom;
  animation: heroWaveDriftBack 12s ease-in-out infinite alternate;
}

.hero-wave .hero-wave-front {
  transform-origin: center bottom;
  animation: heroWaveDriftFront 8s ease-in-out infinite alternate;
}

.hero-wave .hero-wave-glow {
  opacity: 0.18;
  mix-blend-mode: screen;
  transform-origin: center bottom;
  animation: heroWaveGlow 9s ease-in-out infinite alternate;
}

.intro {
  width: min(580px, 100%);
  padding-bottom: clamp(1.2rem, 6vw, 4rem);
  text-align: left;
}

.intro-name {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  color: var(--text);
  font-weight: 700;
}

.intro-name span {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.intro-position {
  margin: 1.35rem 0 1rem;
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--text-muted);
}

.intro-position span {
  color: var(--primary);
  font-weight: 700;
}

.intro p:not(.intro-name):not(.intro-position) {
  max-width: 58ch;
  font-size: 1.02rem;
}

.intro-socials {
  display: flex;
  flex-direction: row;
  gap: 0.9rem;
  margin-top: 1.75rem;
}

.intro-socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border: none;
  border-radius: 1.05rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.22);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;
}

.intro-socials a:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 34px rgba(37, 99, 235, 0.24);
  filter: brightness(1.05);
}

.intro-social-icon {
  font-size: 1.45rem;
  line-height: 1;
  color: #ffffff;
}

.intro-image-frame {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-self: flex-end;
  isolation: isolate;
  overflow: hidden;
  width: min(460px, 38vw);
  height: min(82vh, 860px);
  max-height: min(82vh, 860px);
}

.intro-image-stack {
  position: relative;
  width: 100%;
  height: 100%;
}

.intro-image-frame::after {
  content: "";
  position: absolute;
  inset: 10% 8% 2% 8%;
  border-radius: 1.6rem;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0) 68%);
  opacity: 0;
  mix-blend-mode: screen;
  pointer-events: none;
}

.intro-image-frame.is-capturing::after {
  animation: heroCaptureFlash 0.52s ease;
}

.intro-image {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-height: none;
  border-radius: 0;
  object-fit: contain;
  object-position: center bottom;
  opacity: 0;
  filter: saturate(0.94);
  transform: scale(0.985);
  transform-origin: center bottom;
  transition:
    opacity 0.42s ease,
    transform 0.52s ease,
    filter 0.42s ease;
  pointer-events: none;
}

.intro-image.is-active {
  z-index: 2;
  opacity: 1;
  filter: none;
  transform: scale(1);
}

@keyframes heroWaveDriftFront {
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

@keyframes heroWaveDriftBack {
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

@keyframes heroWaveGlow {
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

@keyframes heroCaptureFlash {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }

  20% {
    opacity: 0.9;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.03);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-wave .hero-wave-back,
  .hero-wave .hero-wave-front,
  .hero-wave .hero-wave-glow {
    animation: none;
  }
}

@media (min-width: 2560px) {
  .intro-image-frame {
    width: min(600px, 38vw);
    height: min(82vh, 1100px);
    max-height: min(82vh, 1100px);
  }
}

@media (max-width: 1210px) {
  .hero-section {
    display: flex;
    min-height: calc(100svh - 7rem);
  }

  .hero-content {
    min-height: calc(100svh - 7rem);
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    padding-top: 3rem;
    padding-bottom: 0;
  }

  .hero-wave {
    height: clamp(240px, 48vw, 380px);
  }

  .intro {
    width: 100%;
    padding-bottom: 0;
    text-align: center;
  }

  .intro p:not(.intro-name):not(.intro-position) {
    max-width: none;
  }

  .intro-socials {
    justify-content: center;
  }

  .intro-image-frame {
    width: min(400px, 88vw);
    height: min(68vh, 560px);
    max-height: none;
    align-self: center;
    margin-top: auto;
  }

  .intro-image {
    max-height: none;
  }
}

@media (max-width: 430px) {
  .hero-section {
    min-height: calc(100svh - 6rem);
    margin-top: 0.75rem;
  }

  .hero-content {
    min-height: calc(100svh - 6rem);
    gap: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 0;
  }

  .hero-wave {
    height: 220px;
  }

  .intro-socials {
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .intro-socials a {
    width: 52px;
    height: 52px;
  }

  .intro-image-frame {
    width: min(320px, 86vw);
    height: min(62vh, 500px);
    margin-top: auto;
  }
}
</style>
