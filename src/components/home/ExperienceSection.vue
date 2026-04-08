<script setup>
import { computed } from 'vue'
import { usePortfolioContentStore } from '@/stores/portfolioContent'

const portfolioContentStore = usePortfolioContentStore()

const experiencePhoto = computed(() => portfolioContentStore.experienceSection.photo)
const experienceEntries = computed(() => portfolioContentStore.experienceItems)
</script>

<template>
  <section class="experience-section" id="experience-section">
    <div class="experience-section-header">
      <p class="experience-section-kicker">EXPERIENCE</p>
      <h2 class="experience-section-title">My Professional Journey</h2>
    </div>

    <div class="experience-intro">
      <img :src="experiencePhoto.url" :alt="experiencePhoto.alt" />
    </div>

    <div class="experience-list">
      <article v-for="entry in experienceEntries" :key="entry.id || `${entry.company}-${entry.jobTitle}`" class="experience-entry">
        <div class="experience-headline">
          <p class="experience-kicker">{{ entry.experienceTitle }}</p>
          <h2 class="experience-role">{{ entry.jobTitle }}</h2>
          <p class="experience-company">{{ entry.company }}</p>
        </div>

        <div class="experience-meta">
          <span v-for="item in entry.tags" :key="item.id || `${entry.id}-${item.text}`">
            <i :class="['mdi', item.mdi]" aria-hidden="true"></i>{{ item.text }}
          </span>
        </div>

        <p class="experience-summary">
          {{ entry.shortDescription }}
        </p>

        <div class="experience-points">
          <div v-for="point in entry.responsibilities" :key="point.id || `${entry.id}-${point.title}`" class="experience-item">
            <h3>{{ point.title }}</h3>
            <p>{{ point.description }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.04) 100%);
}

.experience-section-header {
  width: min(760px, calc(100% - 2rem));
  margin: 0 auto 2rem;
  text-align: center;
}

.experience-section-kicker {
  margin: 0 0 0.7rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.experience-section-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--text);
}

.experience-intro {
  width: min(760px, calc(100% - 2rem));
  margin: 0 auto 2.5rem;
}

.experience-intro img {
  width: 100%;
  max-height: 360px;
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow-sm);
}

.experience-list {
  width: min(920px, calc(100% - 2rem));
  margin: 0 auto;
}

.experience-entry {
  padding: 0;
}

.experience-entry + .experience-entry {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(148, 163, 184, 0.24);
}

.experience-headline {
  display: grid;
  gap: 0.55rem;
  margin-bottom: 1rem;
}

.experience-kicker {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.experience-role {
  margin: 0.15rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3vw, 2.45rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--text);
}

.experience-company {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-muted);
}

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.15rem;
  margin: 0 0 1.15rem;
}

.experience-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
}

.experience-meta i {
  color: var(--primary);
  font-size: 1rem;
}

.experience-summary {
  max-width: 80ch;
  margin: 0;
  font-size: 1.02rem;
}

.experience-points {
  position: relative;
  margin: 1.65rem 0 0;
  padding-left: 1.45rem;
}

.experience-points::before {
  content: "";
  position: absolute;
  left: 0.28rem;
  top: 0.35rem;
  bottom: 0.35rem;
  width: 2px;
  background: linear-gradient(180deg, rgba(37, 99, 235, 0.28), rgba(139, 92, 246, 0.16));
}

.experience-item {
  position: relative;
  padding: 0 0 1.45rem 1.15rem;
}

.experience-item:last-child {
  padding-bottom: 0;
}

.experience-item::before {
  content: "";
  position: absolute;
  left: -0.04rem;
  top: 0.45rem;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.08);
}

.experience-item h3 {
  margin: 0;
  font-size: 1.06rem;
  line-height: 1.4;
  color: var(--text);
}

.experience-item p {
  max-width: 74ch;
  margin: 0.35rem 0 0;
  font-size: 0.97rem;
}

@media (max-width: 620px) {
  .experience-section-header {
    margin-bottom: 1.6rem;
  }

  .experience-section-title {
    font-size: 1.9rem;
  }

  .experience-meta {
    gap: 0.65rem;
  }

  .experience-meta span {
    width: 100%;
  }

  .experience-points {
    padding-left: 1.2rem;
  }

  .experience-item {
    padding-left: 1rem;
  }
}
</style>
