<script setup>
import { computed } from 'vue'
import { usePortfolioContentStore } from '@/stores/portfolioContent'
import { shouldOpenInNewTab } from '@/utils/portfolioContent'

const portfolioContentStore = usePortfolioContentStore()
const contactItems = computed(() => portfolioContentStore.contactItems)
</script>

<template>
  <section class="contact-section" id="contact-section">
    <p class="contact-title">Get in touch with me</p>

    <div class="contact-container">
      <a
        v-for="item in contactItems"
        :key="item.id || item.link"
        :href="item.link"
        :aria-label="item.text"
        :target="shouldOpenInNewTab(item.link) ? '_blank' : undefined"
        :rel="shouldOpenInNewTab(item.link) ? 'noopener noreferrer' : undefined"
      >
        <div class="contact">
          <i :class="['contact-icon', 'mdi', item.mdi]" aria-hidden="true"></i>
          <p>{{ item.text }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 5rem;
}

.contact-section::before {
  content: "";
  width: var(--max-width);
  max-width: calc(100% - 2rem);
  height: 1px;
  margin: 0 auto 3rem;
  background: rgba(148, 163, 184, 0.2);
}

.contact-title {
  margin: 0 0 2rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: var(--max-width);
  margin: 0;
}

.contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  min-height: 78px;
  padding: 0.95rem 1rem;
  border: 1px solid var(--border);
  border-radius: 1.35rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    background-color 0.25s ease;
}

.contact:hover {
  transform: translateY(-4px);
  border-color: rgba(37, 99, 235, 0.18);
  background: #ffffff;
  box-shadow: var(--shadow-md);
}

.contact p {
  margin: 0;
  color: var(--text);
  font-size: 0.98rem;
  font-weight: 600;
  word-break: break-word;
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #ffffff;
  font-size: 1.35rem;
  line-height: 1;
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.18);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;
}

.contact:hover .contact-icon {
  transform: scale(1.04);
  box-shadow: 0 16px 28px rgba(37, 99, 235, 0.22);
  filter: brightness(1.04);
}

@media (max-width: 1030px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact p {
    font-size: 0.92rem;
  }
}

@media (max-width: 430px) {
  .contact {
    align-items: flex-start;
    min-height: auto;
  }
}
</style>
