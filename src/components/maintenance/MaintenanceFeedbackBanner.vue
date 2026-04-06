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
  <div :class="['feedback-banner app-surface app-notice', noticeClass]" role="status" aria-live="polite">
    <span class="app-notice-icon-wrap" aria-hidden="true">
      <i :class="['mdi', meta.icon, 'app-notice-icon']"></i>
    </span>
    <div class="app-notice-copy">
      <strong class="app-notice-title">{{ meta.title }}</strong>
      <p class="app-notice-message">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.feedback-banner {
  margin: 0;
}
</style>
