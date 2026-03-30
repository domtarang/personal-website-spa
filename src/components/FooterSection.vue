<script setup>
</script>

<template>
  <footer class="footer">
    <p>&copy; 2026 Mark Dominic Tarang. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2rem);
  max-width: 1180px;
  margin: 0 auto 1rem;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  box-shadow: var(--shadow-md);
}

.footer p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}
</style>