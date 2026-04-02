<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const unavailableAlertMessage = 'The website is currently unavailable. It will be deployed as soon as possible.'

const isModalOpen = ref(false)
const modalDescription = ref('')

const projects = [
  {
    title: 'Joson-Perey Clinic',
    subtitle: 'My Academic Capstone Project - Appointment System',
    image: '/assets/images/Joson-Perey Clinic.png',
    imageAlt: 'Joson-Perey Clinic',
    description:
      'Joson-Perey Dental Clinic is an appointment scheduling system developed as our academic capstone project. The platform allows patients to easily book, view, and manage their dental appointments. It also features an intuitive admin dashboard for clinic staff to monitor schedules and patient data. Additionally, we integrated APIs such as a payment gateway for appointment fees and an SMS provider for appointment reminders.',
    websiteUrl: '',
  },
  {
    title: 'Privarase',
    subtitle: 'My Internship Project - Cybersecurity and Data Privacy Platform',
    image: '/assets/images/privarase.png',
    imageAlt: 'Privarase',
    description:
      'Privarase is a cybersecurity and data privacy platform designed to help users stay safe online through easy-to-understand articles, guides, and security tips. The website allows readers to explore practical resources across topics such as social media protection, account security, privacy tools, and the latest cybersecurity news. It also features categorized content, newsletter updates, and video guides to make cybersecurity knowledge more accessible and engaging.',
    websiteUrl: 'https://www.privarase.com/',
  },
]

const openModal = (description = '') => {
  modalDescription.value = description
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
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
          :data-description="project.description"
        >
          <img :src="project.image" :alt="project.imageAlt" />
          <p class="project-title">{{ project.title }}</p>
          <p class="project-subtitle">{{ project.subtitle }}</p>

          <template v-if="project.websiteUrl">
            <a class="project-link" :href="project.websiteUrl" target="_blank" rel="noopener noreferrer">
              <button class="open-website-btn" type="button">Open Website</button>
            </a>
          </template>
          <template v-else>
            <button class="open-website-btn unavailable-btn" type="button" @click="handleUnavailable">Open Website</button>
          </template>

          <button class="learn-more-btn" type="button" @click="openModal(project.description)">Learn More</button>
        </div>
      </div>
    </div>
  </section>

  <div id="modal" :class="['modal', { 'is-open': isModalOpen }]" :aria-hidden="String(!isModalOpen)" @click.self="closeModal">
    <div class="modal-content">
      <button id="modal-close" class="modal-close" aria-label="Close modal" @click="closeModal">&times;</button>
      <p id="modal-description">{{ modalDescription }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Global styles live in App.vue */
</style>
