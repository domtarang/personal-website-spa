<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  moving: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  moveUpDisabled: {
    type: Boolean,
    default: false,
  },
  moveDownDisabled: {
    type: Boolean,
    default: false,
  },
  removeDisabled: {
    type: Boolean,
    default: false,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  nested: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['move-up', 'move-down', 'remove', 'toggle'])

const cardClasses = computed(() => ([
  props.nested ? 'nested-card' : 'item-card',
  { 'is-moving': props.moving, 'is-collapsed': !props.expanded },
]))
</script>

<template>
  <div :class="cardClasses">
    <div :class="['item-card-header', { 'item-card-header--nested': nested }]">
      <strong>{{ title }}</strong>
      <div class="item-card-actions">
        <button class="app-icon-button" type="button" :disabled="disabled || moveUpDisabled" @click="emit('move-up')">
          <i class="mdi mdi-arrow-up"></i>
        </button>
        <button class="app-icon-button" type="button" :disabled="disabled || moveDownDisabled" @click="emit('move-down')">
          <i class="mdi mdi-arrow-down"></i>
        </button>
        <button
          class="app-danger-button"
          type="button"
          aria-label="Remove item"
          :disabled="disabled || removeDisabled"
          @click="emit('remove')"
        >
          <i class="mdi mdi-trash-can-outline"></i>
        </button>
        <button class="app-icon-button" type="button" :disabled="disabled" @click="emit('toggle')">
          <i :class="['mdi', expanded ? 'mdi-chevron-up' : 'mdi-chevron-down']"></i>
        </button>
      </div>
    </div>

    <Transition name="collapse-panel">
      <div v-if="expanded" class="collapsible-item-card__content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.item-card,
.nested-card {
  padding: 1rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(148, 163, 184, 0.14);
  transition: background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}

.nested-card {
  background: rgba(255, 255, 255, 0.86);
}

.item-card.is-moving,
.nested-card.is-moving {
  border-color: rgba(37, 99, 235, 0.28);
  background: rgba(239, 246, 255, 0.96);
  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.12);
}

.item-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0;
}

.item-card-header strong {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1rem;
  letter-spacing: -0.02em;
  color: var(--text);
}

.item-card-header--nested strong {
  font-size: 0.95rem;
}

.item-card-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.65rem;
}

.collapsible-item-card__content {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.collapse-panel-enter-active,
.collapse-panel-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
  transform-origin: top;
}

.collapse-panel-enter-from,
.collapse-panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 960px) {
  .item-card-header {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
