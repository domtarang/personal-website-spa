<script setup>
import { ref } from 'vue'
import ProjectModal from './ProjectModal.vue'

const projects = [
  {
    title: 'Joson-Perey Clinic',
    subtitle: 'My Academic Capstone Project - Appointment System',
    image: '/assets/images/Joson-Perey Clinic.png',
    website: '',
    description:
      'Joson-Perey Dental Clinic is an appointment scheduling system developed as our academic capstone project. The platform allows patients to easily book, view, and manage their dental appointments. It also features an intuitive admin dashboard for clinic staff to monitor schedules and patient data. Additionally, we integrated APIs such as a payment gateway for appointment fees and an SMS provider for appointment reminders.',
  },
]

const isModalOpen = ref(false)
const selectedProjectDescription = ref('')

function openModal(description) {
  selectedProjectDescription.value = description
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

function openWebsite(project) {
  if (!project.website) {
    alert('The website is currently unavailable. It will be deployed as soon as possible.')
    return
  }

  window.open(project.website, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section class="projects-section" id="projects-section">
    <p class="projects-title">Sample Projects</p>
    <p class="project-intro">
      Welcome to my projects portfolio. Here you'll find sample projects showcasing my technical
      skills and I'm currently working on more to expand this collection.
    </p>

    <div class="projects-container">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <img :src="project.image" :alt="project.title" />
        <p class="project-title">{{ project.title }}</p>
        <p class="project-subtitle">{{ project.subtitle }}</p>

        <button class="open-website-btn" type="button" @click="openWebsite(project)">
          Open Website
        </button>

        <button class="learn-more-btn" type="button" @click="openModal(project.description)">
          Learn More
        </button>
      </div>
    </div>

    <ProjectModal
      :is-open="isModalOpen"
      :description="selectedProjectDescription"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.04) 100%);
  padding: 2rem 0 5rem;
}

.projects-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
  margin: 2rem 0 1rem;
}

.project-intro {
  width: min(720px, calc(100% - 2rem));
  text-align: center;
  margin: 0 0 2.75rem;
  font-size: 1.02rem;
}

.projects-container {
  width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  margin-bottom: 0;
}

.projects-container p {
  margin: 0;
}

.project-card {
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.9rem;
  text-align: left;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 1rem 1rem 1.25rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(37, 99, 235, 0.18);
}

.project-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 1.15rem;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  color: var(--text);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-top: 0.35rem;
}

.project-subtitle {
  font-size: 0.98rem;
  text-align: left;
  color: var(--text-muted);
  min-height: 3rem;
}

.learn-more-btn,
.open-website-btn {
  width: 100%;
  font-size: 0.98rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  padding: 0.85rem 1rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease, background-color 0.25s ease;
}

.learn-more-btn {
  margin-bottom: 0;
  background: rgba(15, 23, 42, 0.06);
  color: var(--text);
}

.open-website-btn {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #ffffff;
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.18);
}

.learn-more-btn:hover,
.open-website-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.02);
  box-shadow: var(--shadow-md);
}

@media (max-width: 1300px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 800px) {
  .projects-container {
    grid-template-columns: 1fr;
  }

  .projects-section {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>