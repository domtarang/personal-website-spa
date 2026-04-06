<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import MaintenanceSidebar from '@/components/maintenance/MaintenanceSidebar.vue'
import MaintenanceToolbar from '@/components/maintenance/MaintenanceToolbar.vue'
import MaintenanceFeedbackBanner from '@/components/maintenance/MaintenanceFeedbackBanner.vue'
import PasswordResetModal from '@/components/maintenance/PasswordResetModal.vue'
import SectionInProgress from '@/components/maintenance/SectionInProgress.vue'
import HeroSectionForm from '@/components/maintenance/hero/HeroSectionForm.vue'
import { maintenanceSections } from '@/constants/maintenanceSections'
import { useTimedNotice } from '@/composables/useTimedNotice'
import { useAuthStore } from '@/stores/auth'
import { useHeroSectionStore } from '@/stores/heroSection'
import {
  cloneHeroSection,
  createEmptyHeroSection,
  createHeroButtonDraft,
  createHeroImageDraft,
  reorderItems,
  syncDisplayOrder,
} from '@/utils/heroSection'

const router = useRouter()
const authStore = useAuthStore()
const heroSectionStore = useHeroSectionStore()

const selectedSection = ref('hero')
const loading = ref(true)
const saving = ref(false)
const isPasswordModalOpen = ref(false)
const resettingPassword = ref(false)
const passwordError = ref('')
const movingHeroButtonId = ref('')
const movingHeroImageId = ref('')
const moveHighlightTimers = {
  button: null,
  image: null,
}
const form = reactive(createEmptyHeroSection())
const {
  message: feedbackMessage,
  type: feedbackType,
  meta: feedbackMeta,
  show: showFeedback,
  clear: clearFeedback,
} = useTimedNotice(5000)

const activeSection = computed(() => maintenanceSections.find((section) => section.key === selectedSection.value) || maintenanceSections[0])
const isHeroSection = computed(() => selectedSection.value === 'hero')

const syncForm = (source) => {
  const nextValue = cloneHeroSection(source)
  form.jobTitle = nextValue.jobTitle
  form.company = nextValue.company
  form.description = nextValue.description
  form.supportingText = nextValue.supportingText
  form.heroButtons = nextValue.heroButtons.map((button) => ({ ...button }))
  form.heroImages = nextValue.heroImages.map((image) => ({ ...image }))
}

const clearMoveHighlightTimers = () => {
  if (moveHighlightTimers.button !== null) {
    window.clearTimeout(moveHighlightTimers.button)
    moveHighlightTimers.button = null
  }

  if (moveHighlightTimers.image !== null) {
    window.clearTimeout(moveHighlightTimers.image)
    moveHighlightTimers.image = null
  }
}

const markMovedItem = (type, itemId) => {
  if (!itemId) {
    return
  }

  if (moveHighlightTimers[type] !== null) {
    window.clearTimeout(moveHighlightTimers[type])
  }

  if (type === 'button') {
    movingHeroButtonId.value = itemId
  } else {
    movingHeroImageId.value = itemId
  }

  moveHighlightTimers[type] = window.setTimeout(() => {
    if (type === 'button') {
      movingHeroButtonId.value = ''
    } else {
      movingHeroImageId.value = ''
    }

    moveHighlightTimers[type] = null
  }, 520)
}

const selectSection = (sectionKey) => {
  selectedSection.value = sectionKey
  clearFeedback()
}

const loadHeroSection = async () => {
  loading.value = true
  clearFeedback()

  try {
    const heroSection = await heroSectionStore.fetch(true)
    syncForm(heroSection)
  } catch (error) {
    showFeedback(error.message || 'Unable to load hero section.', 'error')
  } finally {
    loading.value = false
  }
}

const addHeroImage = () => {
  form.heroImages = syncDisplayOrder([...form.heroImages, createHeroImageDraft()])
}

const removeHeroImage = (index) => {
  if (form.heroImages.length === 1) {
    showFeedback('At least one hero image is required.', 'warning')
    return
  }

  form.heroImages.splice(index, 1)
  form.heroImages = syncDisplayOrder(form.heroImages)
}

const moveHeroImage = (index, direction) => {
  const movedId = reorderItems(form.heroImages, index, direction)
  markMovedItem('image', movedId)
}

const addHeroButton = () => {
  form.heroButtons = syncDisplayOrder([...form.heroButtons, createHeroButtonDraft()])
}

const removeHeroButton = (index) => {
  form.heroButtons.splice(index, 1)
  form.heroButtons = syncDisplayOrder(form.heroButtons)
}

const moveHeroButton = (index, direction) => {
  const movedId = reorderItems(form.heroButtons, index, direction)
  markMovedItem('button', movedId)
}

const handleHeroSave = async () => {
  saving.value = true
  clearFeedback()

  try {
    const payload = cloneHeroSection(form)
    const savedHeroSection = await heroSectionStore.save(payload, authStore.token)
    syncForm(savedHeroSection)
    showFeedback('Hero section saved successfully.', 'success')
  } catch (error) {
    if (/unauthorized/i.test(error.message)) {
      await authStore.logout()
      await router.replace({ name: 'login', query: { redirect: '/maintenance' } })
      return
    }

    showFeedback(error.message || 'Unable to save hero section.', 'error')
  } finally {
    saving.value = false
  }
}

const handleSave = async () => {
  if (isHeroSection.value) {
    await handleHeroSave()
    return
  }

  showFeedback(`${activeSection.value.title} is still in progress.`, 'info')
}

const openPasswordModal = () => {
  passwordError.value = ''
  isPasswordModalOpen.value = true
}

const closePasswordModal = () => {
  if (resettingPassword.value) {
    return
  }

  passwordError.value = ''
  isPasswordModalOpen.value = false
}

const handlePasswordReset = async ({ currentPassword, newPassword }) => {
  passwordError.value = ''

  if (!currentPassword || !newPassword) {
    passwordError.value = 'Both password fields are required.'
    return
  }

  if (newPassword.trim().length < 8) {
    passwordError.value = 'New password must be at least 8 characters long.'
    return
  }

  resettingPassword.value = true

  try {
    await authStore.resetPassword(currentPassword, newPassword)
    window.sessionStorage.setItem('personal-website-auth-notice', 'Password updated successfully. Please log in again.')
    authStore.clear()
    isPasswordModalOpen.value = false
    await router.replace({ name: 'login' })
  } catch (error) {
    if (/unauthorized/i.test(error.message)) {
      await authStore.logout()
      await router.replace({ name: 'login', query: { redirect: '/maintenance' } })
      return
    }

    passwordError.value = error.message || 'Unable to reset password.'
  } finally {
    resettingPassword.value = false
  }
}

const handleLogout = async () => {
  await authStore.logout()
  await router.replace({ name: 'login' })
}

onMounted(loadHeroSection)

onBeforeUnmount(() => {
  clearFeedback()
  clearMoveHighlightTimers()
})
</script>

<template>
  <main class="maintenance-page">
    <div class="maintenance-shell">
      <MaintenanceSidebar
        :sections="maintenanceSections"
        :selected-section="selectedSection"
        @select="selectSection"
        @open-password="openPasswordModal"
        @logout="handleLogout"
      />

      <section class="maintenance-main">
        <MaintenanceToolbar :title="activeSection.title" :saving="saving" :disabled="loading" @save="handleSave" />

        <MaintenanceFeedbackBanner
          v-if="feedbackMessage"
          :message="feedbackMessage"
          :type="feedbackType"
          :meta="feedbackMeta"
        />

        <section class="content-card app-surface">
          <div class="content-card-scroll">
            <HeroSectionForm
              v-if="isHeroSection"
              :form="form"
              :disabled="loading || saving"
              :moving-hero-button-id="movingHeroButtonId"
              :moving-hero-image-id="movingHeroImageId"
              @add-hero-button="addHeroButton"
              @remove-hero-button="removeHeroButton"
              @move-hero-button="moveHeroButton"
              @add-hero-image="addHeroImage"
              @remove-hero-image="removeHeroImage"
              @move-hero-image="moveHeroImage"
            />
            <SectionInProgress v-else :title="activeSection.title" />
          </div>
        </section>
      </section>
    </div>

    <PasswordResetModal
      :open="isPasswordModalOpen"
      :loading="resettingPassword"
      :error-message="passwordError"
      @close="closePasswordModal"
      @submit="handlePasswordReset"
    />
  </main>
</template>

<style scoped>
.maintenance-page {
  position: relative;
  isolation: isolate;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
}

.maintenance-shell {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 1.25rem;
  width: min(1880px, calc(100% - 2rem));
  height: 100vh;
  margin: 0 auto;
  padding: 1rem 0;
}

.maintenance-main {
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
  gap: 0.95rem;
  min-width: 0;
  height: calc(100vh - 2rem);
}

.content-card {
  min-height: 0;
  height: 100%;
  overflow: hidden;
  border-radius: 1.8rem;
}

.content-card-scroll {
  height: 100%;
  overflow-y: auto;
  padding: 1.15rem;
}

@media (max-width: 1280px) {
  .maintenance-shell {
    grid-template-columns: 280px minmax(0, 1fr);
    width: min(100%, calc(100% - 1rem));
    gap: 1rem;
  }
}

@media (max-width: 960px) {
  .maintenance-page {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  .maintenance-shell {
    grid-template-columns: 1fr;
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .maintenance-main {
    height: auto;
  }

  .content-card,
  .content-card-scroll {
    height: auto;
  }

  .content-card-scroll {
    overflow: visible;
  }
}

@media (max-width: 640px) {
  .maintenance-shell {
    width: min(100%, calc(100% - 0.75rem));
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .content-card {
    border-radius: 1.35rem;
  }

  .content-card-scroll {
    padding: 1rem;
  }
}
</style>
