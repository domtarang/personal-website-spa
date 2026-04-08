<script setup>
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import MaintenanceSidebar from '@/components/maintenance/MaintenanceSidebar.vue'
import MaintenanceToolbar from '@/components/maintenance/MaintenanceToolbar.vue'
import MaintenanceFeedbackBanner from '@/components/maintenance/MaintenanceFeedbackBanner.vue'
import PasswordResetModal from '@/components/maintenance/PasswordResetModal.vue'
import PortfolioContentForm from '@/components/maintenance/PortfolioContentForm.vue'
import { maintenanceSections } from '@/constants/maintenanceSections'
import { useTimedNotice } from '@/composables/useTimedNotice'
import { useAuthStore } from '@/stores/auth'
import { usePortfolioContentStore } from '@/stores/portfolioContent'
import { clonePortfolioContent, createEmptyPortfolioContent } from '@/utils/portfolioContent'

const router = useRouter()
const authStore = useAuthStore()
const portfolioContentStore = usePortfolioContentStore()

const selectedSection = ref('hero')
const loading = ref(true)
const saving = ref(false)
const isPasswordModalOpen = ref(false)
const resettingPassword = ref(false)
const passwordError = ref('')
const form = reactive(createEmptyPortfolioContent())
const contentScrollRef = ref(null)
const formRef = ref(null)
const {
  message: feedbackMessage,
  type: feedbackType,
  meta: feedbackMeta,
  show: showFeedback,
  clear: clearFeedback,
} = useTimedNotice(5000)

const activeSection = computed(() => maintenanceSections.find((section) => section.key === selectedSection.value) || maintenanceSections[0])

const syncForm = (source) => {
  Object.assign(form, clonePortfolioContent(source))
}

const scrollBodyToTop = () => {
  const scrollElement = contentScrollRef.value

  if (!scrollElement) {
    return
  }

  scrollElement.scrollTop = 0
}

const selectSection = async (sectionKey) => {
  if (selectedSection.value === sectionKey) {
    scrollBodyToTop()
    return
  }

  selectedSection.value = sectionKey
  clearFeedback()
  await nextTick()
  scrollBodyToTop()
}

const loadPortfolioContent = async () => {
  loading.value = true
  clearFeedback()

  try {
    const portfolioContent = await portfolioContentStore.fetch(true)
    syncForm(portfolioContent)
  } catch (error) {
    showFeedback(error.message || 'Unable to load portfolio content.', 'error')
  } finally {
    loading.value = false
  }
}

const handleSave = async () => {
  saving.value = true
  clearFeedback()

  try {
    const payload = clonePortfolioContent(form)
    const savedPortfolioContent = await portfolioContentStore.save(payload, authStore.token)
    syncForm(savedPortfolioContent)
    await nextTick()
    formRef.value?.collapseAllItems?.()
    showFeedback('Portfolio content saved successfully.', 'success')
  } catch (error) {
    if (/unauthorized/i.test(error.message)) {
      await authStore.logout()
      await router.replace({ name: 'login', query: { redirect: '/maintenance' } })
      return
    }

    showFeedback(error.message || 'Unable to save portfolio content.', 'error')
  } finally {
    saving.value = false
  }
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

onMounted(loadPortfolioContent)
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

      <section class="maintenance-main content-card app-surface">
        <div ref="contentScrollRef" class="content-card-scroll">
          <div class="content-card-header">
            <MaintenanceToolbar
              :title="activeSection.title"
              :saving="saving"
              :disabled="loading"
              @save="handleSave"
            />
          </div>

          <div class="content-card-body">
            <PortfolioContentForm
              ref="formRef"
              :key="selectedSection"
              :form="form"
              :disabled="loading || saving"
              :section-key="selectedSection"
            />
          </div>
        </div>
      </section>
    </div>

    <MaintenanceFeedbackBanner
      v-if="feedbackMessage"
      :message="feedbackMessage"
      :type="feedbackType"
      :meta="feedbackMeta"
    />

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
  min-width: 0;
  min-height: 0;
  height: calc(100vh - 2rem);
  overflow: hidden;
  border-radius: 1.8rem;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
}

.content-card-scroll {
  height: 100%;
  overflow-y: auto;
}

.content-card-header {
  position: sticky;
  top: 0;
  z-index: 8;
  padding: 1.15rem 1.55rem;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 52%, #4338ca 100%);
  border-bottom: 1px solid rgba(191, 219, 254, 0.24);
  box-shadow: 0 18px 38px rgba(37, 99, 235, 0.24);
}

.content-card-body {
  padding: 1.25rem;
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

  .content-card-scroll {
    height: auto;
    overflow: visible;
  }

  .content-card-header {
    position: static;
    padding: 1rem 1.15rem;
    box-shadow: none;
  }
}

@media (max-width: 640px) {
  .maintenance-shell {
    width: min(100%, calc(100% - 0.75rem));
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .maintenance-main {
    border-radius: 1.35rem;
  }

  .content-card-header {
    padding: 0.95rem 1rem;
  }

  .content-card-body {
    padding: 0.9rem;
  }
}
</style>
