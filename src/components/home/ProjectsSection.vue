<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import josonPerey from '@/assets/images/projects/joson-perey.png'
import privarase from '@/assets/images/projects/privarase.png'

const unavailableAlertMessage = 'The website is currently unavailable. It will be deployed as soon as possible.'

const isModalOpen = ref(false)
const activeProject = ref(null)

const projects = [
  {
    title: 'Joson-Perey Clinic',
    subtitle: 'My Academic Capstone Project - Appointment System',
    image: josonPerey,
    imageAlt: 'Joson-Perey Clinic',
    summary:
      'Joson-Perey Dental Clinic is an appointment scheduling platform developed as our academic capstone project to make dental bookings more convenient for patients and easier to manage for clinic staff.',
    details:
      'The system was designed to improve the overall appointment workflow by giving patients a simple way to book, review, and manage their appointments online. For the clinic team, it provides an admin dashboard for organizing schedules, monitoring patient information, and keeping daily operations more streamlined. SMS reminder support was also integrated to help reduce missed appointments and improve communication.',
    coreFeatures: [
      'Online appointment booking for patients',
      'Schedule viewing and appointment management',
      'Admin dashboard for monitoring schedules and patient information',
      'Streamlined workflow for handling daily clinic appointments',
      'SMS/Email reminder support for appointment updates',
    ],
    tags: [
      { label: 'SPA', status: 'live' },
      { label: 'API', status: 'down' },
    ],
    actions: [
      {
        label: 'Open Client Website',
        url: 'https://joson-perey.domtarang.com/',
        variant: 'primary',
      },
      {
        label: 'Open Admin Portal',
        url: 'https://joson-perey.domtarang.com/admin',
        variant: 'secondary',
      },
    ],
  },
  {
    title: 'Privarase',
    subtitle: 'My Internship Project - Cybersecurity and Data Privacy Platform',
    image: privarase,
    imageAlt: 'Privarase',
    summary:
      'Privarase is a cybersecurity and data privacy platform created during my internship to make online safety more practical, approachable, and easier for everyday users to understand.',
    details:
      'The platform brings together educational content that helps readers explore topics like account protection, social media safety, privacy tools, and current cybersecurity concerns without overwhelming technical language. Its structure was built to keep learning organized and engaging through articles, guides, categorized resources, newsletter content, and video-based materials.',
    coreFeatures: [
      'Educational articles, guides, and security tips',
      'Resources focused on privacy, account safety, and social media protection',
      'Categorized content for easier topic discovery',
      'Newsletter content and awareness-driven updates',
      'Video guides that make cybersecurity learning more engaging',
    ],
    tags: [
      { label: 'Production', status: 'live' },
    ],
    actions: [
      {
        label: 'Open Website',
        url: 'https://www.privarase.com/',
        variant: 'primary',
      },
    ],
  },
]

const openModal = (project = null) => {
  activeProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  activeProject.value = null
}

const handleUnavailable = () => {
  window.alert(unavailableAlertMessage)
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section class="projects-section" id="projects-section">
    <svg class="projects-wave projects-wave--top-left" viewBox="0 0 640 360" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="projectsWaveGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="55%" stop-color="#4f46e5" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
        <linearGradient id="projectsWaveGlowGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <path class="projects-wave-back" d="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" fill="url(#projectsWaveGradientTop)">
        <animate attributeName="d" dur="13s" repeatCount="indefinite"
          values="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z;
                  M0 0 H640 C572 0 496 42 404 116 C288 210 176 288 0 334 V0 Z;
                  M0 0 H640 C548 0 470 26 378 84 C272 150 180 246 0 302 V0 Z;
                  M0 0 H640 C562 0 486 36 394 104 C286 188 180 274 0 326 V0 Z;
                  M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" />
      </path>
      <path class="projects-wave-front" d="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" fill="url(#projectsWaveGradientTop)">
        <animate attributeName="d" dur="9s" repeatCount="indefinite"
          values="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z;
                  M0 0 H640 C586 0 512 50 418 130 C304 222 180 300 0 350 V0 Z;
                  M0 0 H640 C562 0 490 34 396 98 C286 182 178 274 0 326 V0 Z;
                  M0 0 H640 C578 0 506 46 414 120 C300 208 184 292 0 344 V0 Z;
                  M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" />
      </path>
      <path class="projects-wave-glow" d="M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z" fill="url(#projectsWaveGlowGradientTop)">
        <animate attributeName="d" dur="10s" repeatCount="indefinite"
          values="M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z;
                  M0 0 H640 C582 0 508 48 416 126 C304 218 182 296 0 346 V0 Z;
                  M0 0 H640 C558 0 488 32 396 96 C288 178 178 268 0 322 V0 Z;
                  M0 0 H640 C574 0 502 42 410 116 C298 202 184 286 0 338 V0 Z;
                  M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z" />
      </path>
    </svg>

    <svg class="projects-wave projects-wave--bottom-right" viewBox="0 0 640 360" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="projectsWaveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="55%" stop-color="#4f46e5" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
        <linearGradient id="projectsWaveGlowGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <path class="projects-wave-back" d="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" fill="url(#projectsWaveGradientBottom)">
        <animate attributeName="d" dur="13s" repeatCount="indefinite"
          values="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z;
                  M0 0 H640 C572 0 496 42 404 116 C288 210 176 288 0 334 V0 Z;
                  M0 0 H640 C548 0 470 26 378 84 C272 150 180 246 0 302 V0 Z;
                  M0 0 H640 C562 0 486 36 394 104 C286 188 180 274 0 326 V0 Z;
                  M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" />
      </path>
      <path class="projects-wave-front" d="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" fill="url(#projectsWaveGradientBottom)">
        <animate attributeName="d" dur="9s" repeatCount="indefinite"
          values="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z;
                  M0 0 H640 C586 0 512 50 418 130 C304 222 180 300 0 350 V0 Z;
                  M0 0 H640 C562 0 490 34 396 98 C286 182 178 274 0 326 V0 Z;
                  M0 0 H640 C578 0 506 46 414 120 C300 208 184 292 0 344 V0 Z;
                  M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" />
      </path>
      <path class="projects-wave-glow" d="M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z" fill="url(#projectsWaveGlowGradientBottom)">
        <animate attributeName="d" dur="10s" repeatCount="indefinite"
          values="M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z;
                  M0 0 H640 C582 0 508 48 416 126 C304 218 182 296 0 346 V0 Z;
                  M0 0 H640 C558 0 488 32 396 96 C288 178 178 268 0 322 V0 Z;
                  M0 0 H640 C574 0 502 42 410 116 C298 202 184 286 0 338 V0 Z;
                  M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z" />
      </path>
    </svg>

    <div class="projects-shell">
      <div class="projects-header">
        <p class="projects-kicker">Projects</p>
        <h2 class="projects-title">Things I’ve built and worked on</h2>
        <p class="project-intro">
          Welcome to my projects portfolio. Here you'll find sample projects showcasing my technical skills and I'm currently working on more to expand this collection.
        </p>
      </div>

      <div class="projects-container">
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <img :src="project.image" :alt="project.imageAlt" />
          <p class="project-title">{{ project.title }}</p>
          <p class="project-subtitle">{{ project.subtitle }}</p>

          <div v-if="project.tags?.length" class="project-tags" aria-label="Project status tags">
            <span
              v-for="tag in project.tags"
              :key="`${project.title}-${tag.label}`"
              class="project-tag"
              :class="`project-tag--${tag.status}`"
            >
              <span class="project-tag-dot" aria-hidden="true"></span>
              {{ tag.label }} {{ tag.status }}
            </span>
          </div>

          <div v-if="project.actions?.length" class="project-actions">
            <a
              v-for="action in project.actions"
              :key="`${project.title}-${action.label}`"
              class="project-link"
              :class="[
                'project-action-btn',
                action.variant === 'secondary' ? 'project-action-btn--secondary' : 'project-action-btn--primary',
              ]"
              :href="action.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ action.label }}
            </a>
          </div>
          <template v-else>
            <button class="project-action-btn project-action-btn--primary unavailable-btn" type="button" @click="handleUnavailable">
              Open Website
            </button>
          </template>

          <button class="learn-more-btn" type="button" @click="openModal(project)">Learn More</button>
        </div>
      </div>
    </div>
  </section>

  <div
    id="modal"
    :class="['modal', { 'is-open': isModalOpen }]"
    :aria-hidden="String(!isModalOpen)"
    @click.self="closeModal"
  >
    <div class="modal-content" role="dialog" aria-modal="true" :aria-labelledby="activeProject ? 'modal-title' : undefined">
      <button id="modal-close" class="modal-close" aria-label="Close modal" @click="closeModal">
        <i class="mdi mdi-close"></i>
      </button>

      <div class="modal-hero">
        <p class="modal-kicker">Project Overview</p>
        <h3 id="modal-title" class="modal-title">{{ activeProject?.title }}</h3>
        <p class="modal-subtitle">{{ activeProject?.subtitle }}</p>
      </div>

      <div class="modal-body">
        <div class="modal-description-card">
          <p class="modal-section-label">Project Summary</p>
          <p id="modal-description" class="modal-summary">{{ activeProject?.summary }}</p>
          <p v-if="activeProject?.details" class="modal-summary modal-summary--secondary">
            {{ activeProject?.details }}
          </p>
        </div>

        <div v-if="activeProject?.coreFeatures?.length" class="modal-feature-card">
          <p class="modal-section-label">Core Features</p>
          <ul class="modal-feature-list">
            <li
              v-for="feature in activeProject.coreFeatures"
              :key="`${activeProject.title}-${feature}`"
            >
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 5rem 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.96) 52%, rgba(255, 255, 255, 0.94) 100%);
}

.projects-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.84) 0%, rgba(255, 255, 255, 0) 72%);
  filter: blur(10px);
  pointer-events: none;
}

.projects-wave {
  position: absolute;
  z-index: 0;
  display: block;
  overflow: visible;
  filter:
    drop-shadow(0 10px 20px rgba(37, 99, 235, 0.12))
    drop-shadow(0 18px 36px rgba(139, 92, 246, 0.10));
  pointer-events: none;
}

.projects-wave--top-left {
  top: -1px;
  left: -1px;
  width: clamp(260px, 30vw, 560px);
  height: clamp(180px, 20vw, 360px);
}

.projects-wave--bottom-right {
  right: -1px;
  bottom: -1px;
  width: clamp(280px, 32vw, 600px);
  height: clamp(200px, 22vw, 390px);
  transform: scaleX(-1) scaleY(-1);
  transform-origin: center center;
}

.projects-wave .projects-wave-back {
  opacity: 0.18;
  transform-origin: center;
  animation: projectsWaveFloatBack 13s ease-in-out infinite alternate;
}

.projects-wave .projects-wave-front {
  opacity: 0.92;
  transform-origin: center;
  animation: projectsWaveFloatFront 9s ease-in-out infinite alternate;
}

.projects-wave .projects-wave-glow {
  opacity: 0.16;
  mix-blend-mode: screen;
  transform-origin: center;
  animation: projectsWaveGlow 10s ease-in-out infinite alternate;
}

.projects-shell {
  position: relative;
  z-index: 1;
  width: var(--max-width);
}

.projects-header {
  width: min(760px, 100%);
  margin: 0 auto 2.6rem;
  text-align: center;
}

.projects-kicker {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.projects-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
}

.project-intro {
  width: min(64ch, 100%);
  margin: 0.95rem auto 0;
  font-size: 1rem;
  text-align: center;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 350px));
  justify-content: center;
  gap: 1.4rem;
  width: var(--max-width);
  margin: 0 auto;
}

.projects-container p {
  margin: 0;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.9rem;
  height: 100%;
  padding: 1rem 1rem 1.25rem;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.96) 100%);
  box-shadow: var(--shadow-sm);
  text-align: left;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(37, 99, 235, 0.18);
  box-shadow: var(--shadow-lg);
}

.project-card img {
  width: 100%;
  height: 220px;
  border-radius: 1.15rem;
  object-fit: cover;
}

.project-title {
  margin-top: 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
}

.project-subtitle {
  min-height: 3rem;
  font-size: 0.98rem;
  text-align: left;
  color: var(--text-muted);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.1rem;
}

.project-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1;
}

.project-tag-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.55);
}

.project-tag--live {
  color: #166534;
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.2);
}

.project-tag--down {
  color: #b91c1c;
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.18);
}

.project-actions {
  display: grid;
  gap: 0.75rem;
  width: 100%;
  padding-top: 0.45rem;
}

.project-actions:has(> :only-child) {
  margin-top: auto;
}

.project-actions:has(> :only-child) + .learn-more-btn {
  margin-bottom: auto;
}

.project-card > .project-action-btn.unavailable-btn {
  margin-top: auto;
}

.project-card > .project-action-btn.unavailable-btn + .learn-more-btn {
  margin-bottom: auto;
}

.project-link,
.project-action-btn,
.learn-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.85rem 1rem;
  border: none;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.98rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease;
}

.project-action-btn--primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #ffffff;
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.18);
}

.project-action-btn--secondary {
  border: 1px solid rgba(37, 99, 235, 0.14);
  background: rgba(37, 99, 235, 0.08);
  color: var(--text);
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.06);
}

.learn-more-btn {
  margin-bottom: 0;
  background: rgba(15, 23, 42, 0.06);
  color: var(--text);
}

.project-link:hover,
.project-action-btn:hover,
.learn-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  filter: brightness(1.02);
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
  padding: 1.5rem;
  overflow-y: auto;
  background: rgba(15, 23, 42, 0.58);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.modal.is-open {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  width: min(92%, 620px);
  margin: auto;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 1.75rem;
  background:
    radial-gradient(circle at top right, rgba(139, 92, 246, 0.16), transparent 36%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.99) 0%, rgba(248, 250, 252, 0.98) 100%);
  box-shadow: 0 30px 90px rgba(15, 23, 42, 0.28);
  text-align: left;
}

.modal-content::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
}

.modal-hero {
  position: relative;
  padding: 2rem 2rem 1.25rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.1), transparent 42%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.38) 100%);
}

.modal-kicker {
  margin: 0 0 0.6rem;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.modal-title {
  margin: 0;
  padding-right: 3rem;
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 2.8vw, 2.25rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--text);
}

.modal-subtitle {
  max-width: 48ch;
  margin: 0.75rem 0 0;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.modal-body {
  display: grid;
  gap: 1rem;
  padding: 1.35rem 2rem 2rem;
}

.modal-description-card,
.modal-feature-card {
  padding: 1.15rem 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 1.25rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.82) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 12px 28px rgba(15, 23, 42, 0.05);
}

.modal-section-label {
  margin: 0 0 0.85rem;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.modal-summary {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.modal-summary--secondary {
  margin-top: 0.95rem;
  padding-top: 0.95rem;
  border-top: 1px solid rgba(148, 163, 184, 0.16);
}

.modal-feature-list {
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.modal-feature-list li {
  position: relative;
  padding-left: 1.65rem;
  font-size: 0.97rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.modal-feature-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.72rem;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.08);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.85rem;
  height: 2.85rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--text-muted);
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.1);
  cursor: pointer;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease;
}

.modal-close i {
  font-size: 1.15rem;
  line-height: 1;
}

.modal-close:hover,
.modal-close:focus {
  border-color: rgba(37, 99, 235, 0.22);
  color: var(--text);
  box-shadow: 0 18px 30px rgba(15, 23, 42, 0.14);
  transform: translateY(-1px);
}

@keyframes projectsWaveFloatFront {
  0% {
    transform: translate(-0.6%, 0.5%);
  }

  50% {
    transform: translate(1.1%, -1.1%);
  }

  100% {
    transform: translate(-0.4%, 0.9%);
  }
}

@keyframes projectsWaveFloatBack {
  0% {
    transform: translate(0.8%, 0.9%);
  }

  50% {
    transform: translate(-1.1%, -0.8%);
  }

  100% {
    transform: translate(0.55%, 0.2%);
  }
}

@keyframes projectsWaveGlow {
  0% {
    transform: translate(-0.35%, -0.2%);
    opacity: 0.12;
  }

  50% {
    transform: translate(0.95%, -1.15%);
    opacity: 0.24;
  }

  100% {
    transform: translate(-0.55%, 0.35%);
    opacity: 0.14;
  }
}

@media (prefers-reduced-motion: reduce) {
  .projects-wave .projects-wave-back,
  .projects-wave .projects-wave-front,
  .projects-wave .projects-wave-glow {
    animation: none;
  }
}

@media (max-width: 1300px) {
  .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 340px));
  }
}

@media (max-width: 800px) {
  .projects-container {
    grid-template-columns: 1fr;
    width: min(440px, calc(100% - 2rem));
    margin: 0 auto;
  }
}

@media (max-width: 620px) {
  .modal {
    padding: 1rem;
  }

  .modal-content {
    width: min(100%, 560px);
    border-radius: 1.35rem;
  }

  .modal-hero {
    padding: 1.7rem 1.2rem 1.1rem;
  }

  .modal-title {
    padding-right: 2.65rem;
    font-size: 1.65rem;
  }

  .modal-subtitle {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .modal-body {
    padding: 1.15rem 1.2rem 1.35rem;
  }

  .modal-description-card,
  .modal-feature-card {
    padding: 1rem;
    border-radius: 1.05rem;
  }

  .modal-summary,
  .modal-feature-list li {
    font-size: 0.94rem;
    line-height: 1.72;
  }

  .modal-close {
    top: 0.85rem;
    right: 0.85rem;
    width: 2.6rem;
    height: 2.6rem;
  }
}

@media (max-width: 430px) {
  .project-card img {
    height: 190px;
  }
}
</style>
