<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'info',
  },
  meta: {
    type: Object,
    required: true,
  },
})

const noticeClass = computed(() => props.meta?.typeClass || 'app-notice-info')
</script>

<template>
  <Teleport to="body">
    <Transition name="maintenance-toast">
      <div :class="['feedback-banner app-surface app-notice', noticeClass]" role="status" aria-live="polite">
        <span class="app-notice-icon-wrap" aria-hidden="true">
          <i :class="['mdi', meta.icon, 'app-notice-icon']"></i>
        </span>
        <div class="app-notice-copy">
          <strong class="app-notice-title">{{ meta.title }}</strong>
          <p class="app-notice-message">{{ message }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.feedback-banner {
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  z-index: 1200;
  width: min(34rem, calc(100vw - 2rem));
  margin: 0;
  transform: translateX(-50%);
  box-shadow: 0 22px 48px rgba(15, 23, 42, 0.16);
  backdrop-filter: blur(14px);
  animation: maintenanceToastIn 0.24s ease;
}

.maintenance-toast-enter-active,
.maintenance-toast-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.maintenance-toast-enter-from,
.maintenance-toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 12px);
}

@keyframes maintenanceToastIn {
  0% {
    opacity: 0;
    transform: translate(-50%, 12px) scale(0.985);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
}

@media (max-width: 640px) {
  .feedback-banner {
    bottom: 1rem;
    width: calc(100vw - 1.25rem);
  }
}
</style>
