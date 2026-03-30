<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function goToSection(sectionId) {
  closeMenu()

  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

function handleResize() {
  if (window.innerWidth > 1210) {
    closeMenu()
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
  <header class="header" id="top" :class="{ expand: isMenuOpen }">
    <div class="title-row">
      <div class="title">
        <a href="" @click.prevent="goToSection('hero-section')">
          <h1>Tarang | Personal Website</h1>
        </a>
      </div>

      <button
        class="hamburger"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="String(isMenuOpen)"
        @click="toggleMenu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <ul class="nav-links-container" :class="{ expand: isMenuOpen }">
      <li><a @click.prevent="goToSection('hero-section')">Home</a></li>
      <li><a @click.prevent="goToSection('skills-section')">Skills</a></li>
      <li><a @click.prevent="goToSection('projects-section')">Projects</a></li>
      <li><a @click.prevent="goToSection('about-section')">About Me</a></li>
      <li><a @click.prevent="goToSection('contact-section')">Contact</a></li>
      <li>
        <a
          class="download-btn"
          href="/assets/Tarang_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          Download CV
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: min(1180px, calc(100% - 1.5rem));
  margin: 1rem auto 0;
  padding: 0.9rem 1.25rem;
  min-height: 5rem;
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  z-index: 100;
  position: sticky;
  top: 0.75rem;
  transition: min-height 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.header:hover {
  box-shadow: var(--shadow-md);
}

.header.expand {
  min-height: 23rem;
}

.title-row {
  display: flex;
  align-items: center;
  min-width: fit-content;
}

.title {
  display: flex;
  align-items: center;
  min-width: fit-content;
}

.title h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  letter-spacing: -0.03em;
  color: var(--text);
  white-space: nowrap;
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
  white-space: nowrap;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff !important;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.2rem;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
  white-space: nowrap;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(37, 99, 235, 0.22);
  filter: brightness(1.04);
  color: #ffffff !important;
}

@media (max-width: 1210px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    width: calc(100% - 1rem);
    top: 0.5rem;
  }

  .title-row {
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
    margin-left: auto;
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

  .hamburger {
    width: 40px;
    height: 40px;
  }
}
</style>