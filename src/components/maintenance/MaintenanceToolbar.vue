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
  <header class="maintenance-toolbar">
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
}

.maintenance-toolbar h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.55rem, 2vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: #eff6ff;
}

.toolbar-save {
  min-width: 8.5rem;
  padding: 0.88rem 1.28rem;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: linear-gradient(135deg, #f8fbff 0%, #dbeafe 100%);
  color: #1d4ed8;
  box-shadow: 0 14px 30px rgba(29, 78, 216, 0.22);
}

.toolbar-save:hover:not(:disabled) {
  background: linear-gradient(135deg, #ffffff 0%, #e0ecff 100%);
  box-shadow: 0 18px 36px rgba(29, 78, 216, 0.28);
}

.toolbar-save:disabled {
  background: linear-gradient(135deg, rgba(248, 251, 255, 0.6), rgba(219, 234, 254, 0.5));
  color: rgba(29, 78, 216, 0.62);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: none;
}

@media (max-width: 640px) {
  .maintenance-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .maintenance-toolbar h1 {
    font-size: clamp(1.35rem, 6vw, 1.7rem);
  }

  .toolbar-save {
    width: 100%;
  }
}
</style>
