<script setup>
defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  movingItemId: {
    type: String,
    default: '',
  },
})

defineEmits(['add', 'remove', 'move'])
</script>

<template>
  <section class="subsection-card">
    <div class="section-heading section-heading-split">
      <div>
        <h2>Hero buttons</h2>
        <p>Add, remove, and reorder the action buttons shown under the hero text.</p>
      </div>
      <button class="app-secondary-button" type="button" :disabled="disabled" @click="$emit('add')">
        <i class="mdi mdi-plus"></i>
        <span>Add button</span>
      </button>
    </div>

    <TransitionGroup v-if="buttons.length" name="reorder-list" tag="div" class="item-list">
      <div v-for="(button, index) in buttons" :key="button.id || index" :class="['item-card', { 'is-moving': movingItemId === (button.id || `button-${index}`) }]">
        <div class="item-card-header">
          <strong>Button {{ index + 1 }}</strong>
          <div class="item-card-actions">
            <button class="app-icon-button" type="button" :disabled="disabled || index === 0" @click="$emit('move', index, -1)">
              <i class="mdi mdi-arrow-up"></i>
              <span class="sr-only">Move button up</span>
            </button>
            <button class="app-icon-button" type="button" :disabled="disabled || index === buttons.length - 1" @click="$emit('move', index, 1)">
              <i class="mdi mdi-arrow-down"></i>
              <span class="sr-only">Move button down</span>
            </button>
            <button class="app-danger-button" type="button" :disabled="disabled" @click="$emit('remove', index)">
              <i class="mdi mdi-trash-can-outline"></i>
              <span>Remove</span>
            </button>
          </div>
        </div>

        <div class="field-grid">
          <label class="field-block">
            <span>MDI icon</span>
            <input v-model="button.icon" class="app-input" type="text" placeholder="mdi-email-outline" required :disabled="disabled" />
          </label>

          <label class="field-block">
            <span>Link</span>
            <input v-model="button.link" class="app-input" type="text" placeholder="mailto:you@example.com or https://..." required :disabled="disabled" />
          </label>
        </div>
      </div>
    </TransitionGroup>

    <div v-else class="empty-state-inline">
      <p>No hero buttons yet. Add one to display an action icon in the hero section.</p>
    </div>
  </section>
</template>

<style scoped>
.subsection-card {
  margin-top: 1rem;
  padding: 1.15rem;
  border-radius: 1.4rem;
  border: 1px solid rgba(226, 232, 240, 0.85);
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.78), rgba(255, 255, 255, 0.88));
}

.section-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-heading-split {
  align-items: center;
}

.section-heading h2 {
  margin: 0;
  font-family: var(--font-heading);
  letter-spacing: -0.04em;
  color: var(--text);
}

.section-heading p {
  margin: 0.45rem 0 0;
}

.item-list {
  display: grid;
  gap: 1rem;
}

.item-card {
  padding: 1rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(148, 163, 184, 0.14);
  transition: background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}

.item-card.is-moving {
  border-color: rgba(37, 99, 235, 0.28);
  background: rgba(239, 246, 255, 0.96);
  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.12);
}

.item-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.item-card-header strong {
  color: var(--text);
}

.item-card-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.65rem;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.field-block {
  display: flex;
  flex-direction: column;
}

.field-block span {
  margin-bottom: 0.48rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text);
}

.empty-state-inline {
  border-radius: 1rem;
  border: 1px dashed rgba(148, 163, 184, 0.28);
  background: rgba(248, 250, 252, 0.72);
  padding: 1rem;
}

.reorder-list-move,
.reorder-list-enter-active,
.reorder-list-leave-active {
  transition: transform 0.28s ease, opacity 0.28s ease;
}

.reorder-list-enter-from,
.reorder-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.reorder-list-leave-active {
  position: absolute;
}

@media (max-width: 960px) {
  .section-heading,
  .section-heading-split,
  .item-card-header {
    flex-direction: column;
    align-items: stretch;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
