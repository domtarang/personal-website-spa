<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const unavailableAlertMessage = 'The website is currently unavailable. It will be deployed as soon as possible.'

const isModalOpen = ref(false)
const activeProject = ref(null)

const projects = [
  {
    title: 'Joson-Perey Clinic',
    subtitle: 'My Academic Capstone Project - Appointment System',
    image: '/assets/images/joson-perey.png',
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
    image: '/assets/images/privarase.png',
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
/* Global styles live in App.vue */
</style>
