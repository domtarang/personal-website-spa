<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="placeholder-shell">
    <h2>{{ title }}</h2>
    <p>In Progress</p>
  </div>
</template>

<style scoped>
.placeholder-shell {
  display: grid;
  place-items: center;
  min-height: 18rem;
  border-radius: 1.4rem;
  border: 1px dashed rgba(148, 163, 184, 0.32);
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.72), rgba(255, 255, 255, 0.84));
  text-align: center;
}

.placeholder-shell h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.45rem;
  letter-spacing: -0.04em;
  color: var(--text);
}

.placeholder-shell p {
  margin: 0.35rem 0 0;
  font-size: 1rem;
  font-weight: 600;
}
</style>
