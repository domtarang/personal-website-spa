<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

function handleEscape(event) {
  if (event.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div v-if="isOpen" class="modal" aria-hidden="false" @click.self="emit('close')">
    <div class="modal-content">
      <button class="modal-close" type="button" aria-label="Close modal" @click="emit('close')">
        &times;
      </button>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  inset: 0;
  overflow: auto;
  background-color: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.modal-content {
  background: rgba(255, 255, 255, 0.96);
  margin: 8% auto;
  padding: 1.75rem;
  border: 1px solid var(--border);
  width: min(92%, 560px);
  border-radius: 1.5rem;
  position: relative;
  text-align: left;
  box-shadow: var(--shadow-lg);
}

.modal-close {
  color: var(--text-muted);
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: none;
  line-height: 1;
}

.modal-close:hover,
.modal-close:focus {
  color: var(--text);
}
</style>