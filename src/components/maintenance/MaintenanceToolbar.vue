<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  saving: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['save'])
</script>

<template>
  <header class="maintenance-toolbar app-surface">
    <h1>{{ title }}</h1>

    <button class="app-primary-button toolbar-save" type="button" :disabled="disabled || saving" @click="$emit('save')">
      <i class="mdi mdi-content-save-outline"></i>
      <span>{{ saving ? 'Saving...' : 'Save' }}</span>
    </button>
  </header>
</template>

<style scoped>
.maintenance-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 1.8rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.86));
}

.maintenance-toolbar h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 2.8vw, 2.5rem);
  letter-spacing: -0.05em;
  color: var(--text);
}

.toolbar-save {
  min-width: 9rem;
}

@media (max-width: 640px) {
  .maintenance-toolbar {
    flex-direction: column;
    align-items: stretch;
    border-radius: 1.35rem;
  }

  .toolbar-save {
    width: 100%;
  }
}
</style>
