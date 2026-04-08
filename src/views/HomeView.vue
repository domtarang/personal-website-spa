<script setup>
import { onMounted, ref } from 'vue'
import HeaderSection from '@/components/home/HeaderSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import EducationSection from '@/components/home/EducationSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import FooterSection from '@/components/home/FooterSection.vue'
import { usePortfolioContentStore } from '@/stores/portfolioContent'

const portfolioContentStore = usePortfolioContentStore()
const loading = ref(true)
const errorMessage = ref('')

const loadPortfolioContent = async (force = false) => {
  loading.value = true
  errorMessage.value = ''

  try {
    await portfolioContentStore.fetch(force)
  } catch (error) {
    errorMessage.value = error?.message || 'Unable to load portfolio content.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  void loadPortfolioContent(false)
})
</script>

<template>
  <div v-if="loading" class="home-loading-screen" role="status" aria-live="polite">
    <div class="home-loading-card app-surface">
      <span class="loading-orb" aria-hidden="true"></span>
      <p class="home-loading-kicker">Loading portfolio</p>
      <h1>Please wait a moment</h1>
      <p>Fetching the latest website content from the API.</p>
    </div>
  </div>

  <div v-else-if="errorMessage" class="home-loading-screen home-loading-screen--error">
    <div class="home-loading-card app-surface">
      <p class="home-loading-kicker">Unable to load content</p>
      <h1>Something went wrong</h1>
      <p>{{ errorMessage }}</p>
      <button class="app-primary-button" type="button" @click="loadPortfolioContent(true)">
        <i class="mdi mdi-refresh"></i>
        <span>Retry</span>
      </button>
    </div>
  </div>

  <template v-else>
    <HeaderSection />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>

    <FooterSection />
  </template>
</template>

<style scoped>
.home-loading-screen {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 1.5rem;
}

.home-loading-card {
  width: min(520px, 100%);
  padding: 2.25rem;
  border-radius: 1.75rem;
  text-align: center;
}

.loading-orb {
  display: inline-flex;
  width: 70px;
  height: 70px;
  margin-bottom: 1.2rem;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(139, 92, 246, 0.35) 38%, rgba(37, 99, 235, 0.92) 100%);
  box-shadow:
    0 0 0 10px rgba(37, 99, 235, 0.08),
    0 18px 44px rgba(79, 70, 229, 0.22);
  animation: pulse 1.5s ease-in-out infinite;
}

.home-loading-kicker {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.home-loading-card h1 {
  margin: 0.8rem 0 0.65rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 2.5rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.home-loading-card p:last-child {
  margin-bottom: 0;
}

.home-loading-screen--error .home-loading-card {
  max-width: 560px;
}

.home-loading-screen--error .app-primary-button {
  margin-top: 1.25rem;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.06);
  }
}
</style>
