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
        <a href="/Tarang-Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button class="download-btn">Download Resume</button>
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0.75rem;
  z-index: 100;
  display: flex;
  align-items: center;
  width: min(1180px, calc(100% - 1.5rem));
  min-height: 5rem;
  margin: 1rem auto 0;
  padding: 0.9rem 1.25rem;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition:
    min-height 0.3s ease,
    opacity 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.header:hover {
  box-shadow: var(--shadow-md);
}

.header.expand {
  min-height: 23rem;
}

.title {
  display: flex;
  align-items: center;
  margin-left: 0;
  min-width: fit-content;
}

.title h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  letter-spacing: -0.03em;
  color: var(--text);
}

.nav-links-container {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.75rem;
  margin: 0 0 0 auto;
  padding: 0;
}

.nav-links-container.expand {
  display: flex;
}

.nav-links-container a {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted);
}

.nav-links-container a:hover {
  color: var(--primary);
}

.hamburger {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.9rem;
  margin-left: auto;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.download-btn {
  font-family: var(--font-body);
  margin-right: 0;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.2rem;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(37, 99, 235, 0.22);
  filter: brightness(1.04);
}

@media (max-width: 1210px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    width: calc(100% - 1rem);
    top: 0.5rem;
  }

  .title {
    width: 100%;
    min-height: 3.2rem;
  }

  .nav-links-container {
    display: none;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem 0 0.25rem;
    margin: 0;
  }

  .nav-links-container li {
    width: 100%;
  }

  .nav-links-container a {
    display: inline-flex;
    justify-content: center;
  }

  .download-btn {
    width: 100%;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.38rem;
    margin-right: 0;
  }

  .hamburger-line {
    height: 0.1rem;
    width: 50%;
    background-color: var(--text);
    border-bottom: 1px solid var(--text);
  }
}

@media (max-width: 430px) {
  .title h1 {
    font-size: 1.05rem;
  }

  .header {
    padding: 0.75rem 0.9rem;
  }

  .hamburger {
    width: 40px;
    height: 40px;
  }
}
</style>
