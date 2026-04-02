<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const HERO_ROTATION_INTERVAL = 3000
const HERO_CAPTURE_DURATION = 520

const heroImageFrame = ref(null)
const heroIndex = ref(0)
const heroTimerId = ref(null)
const captureTimeoutId = ref(null)

const heroImages = [
  {
    src: '/assets/images/hero-1.png',
    alt: 'Hero portrait of Mark Dominic Tarang',
  },
  {
    src: '/assets/images/hero-2.png',
    alt: 'Alternate hero portrait of Mark Dominic Tarang',
  },
  {
    src: '/assets/images/hero-3.png',
    alt: 'Alternate hero portrait of Mark Dominic Tarang',
  },
  {
    src: '/assets/images/hero-4.png',
    alt: 'Alternate hero portrait of Mark Dominic Tarang',
  },
]

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

const start = () => {
  if (heroImages.length < 2) {
    return
  }

  stop()
  heroTimerId.value = window.setInterval(advance, HERO_ROTATION_INTERVAL)
}

const advance = () => {
  if (!heroImageFrame.value || heroImages.length < 2) {
    return
  }

  clearCaptureFlash()
  void heroImageFrame.value.offsetWidth
  heroImageFrame.value.classList.add('is-capturing')
  heroIndex.value = (heroIndex.value + 1) % heroImages.length

  captureTimeoutId.value = window.setTimeout(() => {
    clearCaptureFlash()
    captureTimeoutId.value = null
  }, HERO_CAPTURE_DURATION)
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    stop()
    return
  }

  start()
}

const preloadImages = () => {
  heroImages.forEach((image) => {
    const preloadImage = new Image()
    preloadImage.src = image.src
  })
}

onMounted(() => {
  preloadImages()
  start()
  document.addEventListener('visibilitychange', handleVisibilityChange)
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
        <p class="intro-position"><span>Backend Developer</span> at <span>Petnet Inc.</span></p>
        <p>
          Backend Developer with hands-on frontend experience, skilled in building
          and maintaining reliable, high-performing, and user-friendly systems.
        </p>
        <p>Feel free to explore my website to learn more about me and get in touch!</p>

        <div class="intro-socials">
          <a href="mailto:dominictarang@gmail.com" aria-label="Email">
            <i class="intro-social-icon mdi mdi-email-outline" aria-hidden="true"></i>
          </a>
          <a href="tel:+639369407862" aria-label="Phone">
            <i class="intro-social-icon mdi mdi-phone-outline" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/mark-dominic-tarang-3b6031328" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i class="intro-social-icon mdi mdi-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/mark.dominic.tarang/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i class="intro-social-icon mdi mdi-facebook" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div ref="heroImageFrame" class="intro-image-frame" aria-live="polite">
        <div class="intro-image-stack">
          <img
            v-for="(image, index) in heroImages"
            :key="image.src"
            :src="image.src"
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
/* Global styles live in App.vue */
</style>
