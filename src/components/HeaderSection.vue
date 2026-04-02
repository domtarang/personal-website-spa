<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isExpanded = ref(false)
const headerRef = ref(null)
const hamburgerRef = ref(null)

const MOBILE_NAV_BREAKPOINT = 1210
const SCROLL_OFFSET_PADDING = 20

const toBooleanString = (value) => String(Boolean(value))
const isKeyboardToggle = (event) => event.key === 'Enter' || event.key === ' '

const close = () => {
  isExpanded.value = false
}

const toggle = () => {
  isExpanded.value = !isExpanded.value
}

const getScrollOffset = () => {
  return (headerRef.value?.offsetHeight || 0) + SCROLL_OFFSET_PADDING
}

const smoothScrollToSection = (event, anchor) => {
  const targetHref = anchor.getAttribute('href')

  if (!targetHref || targetHref === '#') {
    return
  }

  const targetSection = document.querySelector(targetHref)
  if (!targetSection) {
    return
  }

  event.preventDefault()

  const targetTop =
    targetSection.getBoundingClientRect().top + window.scrollY - getScrollOffset()

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: 'smooth',
  })

  if (history.pushState) {
    history.pushState(null, '', targetHref)
  } else {
    window.location.hash = targetHref
  }

  if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
    close()
  }
}

const handleHeaderClick = (event) => {
  const anchor = event.target.closest('a[href^="#"]')

  if (!anchor || !headerRef.value?.contains(anchor)) {
    return
  }

  smoothScrollToSection(event, anchor)
}

const handleHamburgerKeydown = (event) => {
  if (!isKeyboardToggle(event)) {
    return
  }

  event.preventDefault()
  toggle()
}

const handleResize = () => {
  if (isExpanded.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header
    id="top"
    ref="headerRef"
    :class="['header', { expand: isExpanded }]"
    @click="handleHeaderClick"
  >
    <div class="title">
      <a href="#hero-section"><h1>Tarang | Personal Website</h1></a>
      <div
        ref="hamburgerRef"
        class="hamburger"
        aria-label="Toggle navigation"
        :aria-expanded="toBooleanString(isExpanded)"
        role="button"
        tabindex="0"
        @click="toggle"
        @keydown="handleHamburgerKeydown"
      >
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </div>
    </div>

    <ul :class="['nav-links-container', { expand: isExpanded }]" id="nav-links">
      <li><a href="#hero-section">Home</a></li>
      <li><a href="#about-section">About Me</a></li>
      <li><a href="#skills-section">Skills</a></li>
      <li><a href="#projects-section">Projects</a></li>
      <li><a href="#experience-section">Experience</a></li>
      <li><a href="#education-section">Education</a></li>
      <li><a href="#contact-section">Contact</a></li>
      <li>
        <a href="/assets/Tarang-Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button class="download-btn">Download Resume</button>
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
/* Global styles live in App.vue */
</style>
