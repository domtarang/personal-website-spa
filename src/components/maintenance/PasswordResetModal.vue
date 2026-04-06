<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close', 'submit'])

const currentPassword = ref('')
const newPassword = ref('')
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)

const resetFields = () => {
  currentPassword.value = ''
  newPassword.value = ''
  showCurrentPassword.value = false
  showNewPassword.value = false
}

watch(() => props.open, (isOpen) => {
  if (!isOpen) {
    resetFields()
  }
})

const handleSubmit = () => {
  emit('submit', {
    currentPassword: currentPassword.value,
    newPassword: newPassword.value,
  })
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal-card app-surface" role="dialog" aria-modal="true" aria-labelledby="reset-password-title">
        <div class="modal-copy">
          <h2 id="reset-password-title">Reset password</h2>
          <p>Enter your existing password and the new password you want to use.</p>
        </div>

        <div class="modal-field-grid">
          <div>
            <label class="app-input-label" for="existing-password">Existing password</label>
            <div class="password-input-wrap">
              <input
                id="existing-password"
                v-model="currentPassword"
                :type="showCurrentPassword ? 'text' : 'password'"
                class="app-input"
                placeholder="Enter existing password"
                autocomplete="current-password"
                :disabled="loading"
              />
              <button
                type="button"
                class="password-toggle"
                :aria-label="showCurrentPassword ? 'Hide current password' : 'Show current password'"
                :disabled="loading"
                @click="showCurrentPassword = !showCurrentPassword"
              >
                <i :class="showCurrentPassword ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'" aria-hidden="true"></i>
                <span>{{ showCurrentPassword ? 'Hide' : 'View' }}</span>
              </button>
            </div>
          </div>

          <div>
            <label class="app-input-label" for="new-password">New password</label>
            <div class="password-input-wrap">
              <input
                id="new-password"
                v-model="newPassword"
                :type="showNewPassword ? 'text' : 'password'"
                class="app-input"
                placeholder="Enter new password"
                autocomplete="new-password"
                :disabled="loading"
              />
              <button
                type="button"
                class="password-toggle"
                :aria-label="showNewPassword ? 'Hide new password' : 'Show new password'"
                :disabled="loading"
                @click="showNewPassword = !showNewPassword"
              >
                <i :class="showNewPassword ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'" aria-hidden="true"></i>
                <span>{{ showNewPassword ? 'Hide' : 'View' }}</span>
              </button>
            </div>
          </div>
        </div>

        <div
          v-if="errorMessage"
          class="app-notice app-notice-error modal-notice"
          role="alert"
          aria-live="assertive"
        >
          <span class="app-notice-icon-wrap" aria-hidden="true">
            <i class="mdi mdi-alert-circle app-notice-icon"></i>
          </span>
          <div class="app-notice-copy">
            <strong class="app-notice-title">Reset failed</strong>
            <p class="app-notice-message">{{ errorMessage }}</p>
          </div>
        </div>

        <div class="modal-actions">
          <button class="app-secondary-button" type="button" :disabled="loading" @click="$emit('close')">
            Cancel
          </button>
          <button class="app-primary-button" type="button" :disabled="loading" @click="handleSubmit">
            <i class="mdi mdi-lock-reset"></i>
            <span>{{ loading ? 'Resetting...' : 'Reset Password' }}</span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.24);
  backdrop-filter: blur(5px);
}

.modal-card {
  width: min(100%, 620px);
  padding: 1.5rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.94);
}

.modal-copy h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.95rem;
  letter-spacing: -0.04em;
  color: var(--text);
}

.modal-copy p {
  margin: 0.75rem 0 0;
  max-width: 34rem;
}

.modal-field-grid {
  display: grid;
  gap: 1.15rem;
  margin-top: 1.35rem;
}

.modal-notice {
  margin-top: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.85rem;
  margin-top: 1.5rem;
}

@media (max-width: 640px) {
  .modal-card {
    padding: 1.25rem;
    border-radius: 1.35rem;
  }

  .modal-actions {
    flex-direction: column-reverse;
  }

  .modal-actions > * {
    width: 100%;
  }
}
</style>
