<script setup>
defineProps({
  form: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="subsection-card subsection-card-first">
    <div class="section-heading">
      <div>
        <h2>Text content</h2>
        <p>These values power the hero section on your public home page.</p>
      </div>
    </div>

    <div class="field-grid">
      <label class="field-block">
        <span>Job title</span>
        <input v-model="form.jobTitle" class="app-input" type="text" placeholder="Backend Developer" required :disabled="disabled" />
      </label>

      <label class="field-block">
        <span>Company</span>
        <input v-model="form.company" class="app-input" type="text" placeholder="Petnet Inc." required :disabled="disabled" />
      </label>

      <label class="field-block field-block-full">
        <span>Long description</span>
        <textarea
          v-model="form.description"
          class="app-textarea"
          rows="4"
          placeholder="Backend Developer with hands-on frontend experience..."
          required
          :disabled="disabled"
        ></textarea>
      </label>

      <label class="field-block field-block-full">
        <span>Supporting description</span>
        <textarea
          v-model="form.supportingText"
          class="app-textarea"
          rows="3"
          placeholder="Feel free to explore my website..."
          required
          :disabled="disabled"
        ></textarea>
      </label>
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

.subsection-card-first {
  margin-top: 0;
}

.section-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
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

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.field-block {
  display: flex;
  flex-direction: column;
}

.field-block-full {
  grid-column: 1 / -1;
}

.field-block span {
  margin-bottom: 0.48rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text);
}

@media (max-width: 960px) {
  .field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
