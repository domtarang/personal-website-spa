<script setup>
import { computed } from 'vue'
import { usePortfolioContentStore } from '@/stores/portfolioContent'

const portfolioContentStore = usePortfolioContentStore()

const educationEntries = computed(() => [
  {
    level: 'College',
    degree: 'BS in Information Technology',
    school: 'De La Salle University - Dasmariñas',
    batch: 'Class of 2024',
    mediaClass: 'education-media education-media--portrait',
    image: portfolioContentStore.educationSection.collegePhoto.url,
    imageAlt: portfolioContentStore.educationSection.collegePhoto.alt,
    reverse: false,
    highlights: [
      {
        icon: 'mdi mdi-school-outline',
        html: '<strong>Summa Cum Laude</strong> and <strong>Rank 5</strong> in the BS in Information Technology program.',
      },
      {
        icon: 'mdi mdi-star-four-points-outline',
        html: '<strong>Consistent Dean’s Lister</strong> throughout college.',
      },
      {
        icon: 'mdi mdi-chart-line',
        html: '<strong>GPA:</strong> 3.81 / 4.0',
      },
    ],
  },
  {
    level: 'Senior High School',
    degree: 'General Academic Strand',
    school: 'Mendez-Nuñez Montessori',
    batch: 'Batch 2020',
    mediaClass: 'education-media education-media--landscape education-media--shs',
    image: portfolioContentStore.educationSection.seniorHighPhoto.url,
    imageAlt: portfolioContentStore.educationSection.seniorHighPhoto.alt,
    reverse: true,
    highlights: [
      {
        icon: 'mdi mdi-trophy-outline',
        html: '<strong>Montessorian of the Year</strong>',
      },
      {
        icon: 'mdi mdi-medal-outline',
        html: '<strong>With Honors</strong>',
      },
      {
        icon: 'mdi mdi-star-four-points-outline',
        html: '<strong>Multiple subject excellence awards</strong> in Science, Mathematics, Filipino, English, Communication Arts, and Contemporary Arts.',
      },
    ],
  },
])
</script>

<template>
  <section class="education-section" id="education-section">
    <svg class="education-wave education-wave--education-top-right" viewBox="0 0 640 360" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="educationProjectsWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="55%" stop-color="#4f46e5" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
        <linearGradient id="educationProjectsWaveGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <path class="education-wave-back" d="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" fill="url(#educationProjectsWaveGradient)">
        <animate attributeName="d" dur="13s" repeatCount="indefinite"
          values="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z;
                  M0 0 H640 C572 0 496 42 404 116 C288 210 176 288 0 334 V0 Z;
                  M0 0 H640 C548 0 470 26 378 84 C272 150 180 246 0 302 V0 Z;
                  M0 0 H640 C562 0 486 36 394 104 C286 188 180 274 0 326 V0 Z;
                  M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" />
      </path>
      <path class="education-wave-front" d="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" fill="url(#educationProjectsWaveGradient)">
        <animate attributeName="d" dur="9s" repeatCount="indefinite"
          values="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z;
                  M0 0 H640 C586 0 512 50 418 130 C304 222 180 300 0 350 V0 Z;
                  M0 0 H640 C562 0 490 34 396 98 C286 182 178 274 0 326 V0 Z;
                  M0 0 H640 C578 0 506 46 414 120 C300 208 184 292 0 344 V0 Z;
                  M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" />
      </path>
      <path class="education-wave-glow" d="M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z" fill="url(#educationProjectsWaveGlowGradient)">
        <animate attributeName="d" dur="10s" repeatCount="indefinite"
          values="M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z;
                  M0 0 H640 C582 0 508 48 416 126 C304 218 182 296 0 346 V0 Z;
                  M0 0 H640 C558 0 488 32 396 96 C288 178 178 268 0 322 V0 Z;
                  M0 0 H640 C574 0 502 42 410 116 C298 202 184 286 0 338 V0 Z;
                  M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z" />
      </path>
    </svg>

    <div class="education-header">
      <p class="education-kicker">Education</p>
      <h2 class="education-title">The schools that shaped my journey</h2>
      <p class="education-intro">A quick look at my college and senior high school background, along with the academic milestones I’m most proud of.</p>
    </div>

    <div class="education-list">
      <article
        v-for="entry in educationEntries"
        :key="`${entry.level}-${entry.school}`"
        :class="['education-row', { 'education-row--reverse': entry.reverse }]"
      >
        <template v-if="entry.reverse">
          <div class="education-card">
            <p class="education-level">{{ entry.level }}</p>
            <h3 class="education-degree">{{ entry.degree }}</h3>
            <p class="education-school">{{ entry.school }}</p>
            <p class="education-batch">{{ entry.batch }}</p>

            <ul class="education-highlights">
              <li v-for="highlight in entry.highlights" :key="highlight.html">
                <i :class="highlight.icon" aria-hidden="true"></i>
                <span v-html="highlight.html"></span>
              </li>
            </ul>
          </div>

          <div :class="entry.mediaClass">
            <img :src="entry.image" :alt="entry.imageAlt" />
          </div>
        </template>

        <template v-else>
          <div :class="entry.mediaClass">
            <img :src="entry.image" :alt="entry.imageAlt" />
          </div>

          <div class="education-card">
            <p class="education-level">{{ entry.level }}</p>
            <h3 class="education-degree">{{ entry.degree }}</h3>
            <p class="education-school">{{ entry.school }}</p>
            <p class="education-batch">{{ entry.batch }}</p>

            <ul class="education-highlights">
              <li v-for="highlight in entry.highlights" :key="highlight.html">
                <i :class="highlight.icon" aria-hidden="true"></i>
                <span v-html="highlight.html"></span>
              </li>
            </ul>
          </div>
        </template>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  position: relative;
  isolation: isolate;
  overflow: visible;
  display: grid;
  gap: 2.5rem;
  width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 0;
}

.education-wave {
  position: absolute;
  z-index: 0;
  display: block;
  overflow: visible;
  filter:
    drop-shadow(0 10px 20px rgba(37, 99, 235, 0.12))
    drop-shadow(0 18px 36px rgba(139, 92, 246, 0.10));
  pointer-events: none;
}

.education-wave--education-top-right {
  top: -1px;
  right: calc((100vw - 100%) / -2 - 1px);
  width: clamp(260px, 30vw, 560px);
  height: clamp(180px, 20vw, 360px);
  transform: scaleX(-1);
  transform-origin: center center;
}

.education-wave .education-wave-back {
  opacity: 0.18;
  transform-origin: center;
  animation: projectsWaveFloatBack 13s ease-in-out infinite alternate;
}

.education-wave .education-wave-front {
  opacity: 0.92;
  transform-origin: center;
  animation: projectsWaveFloatFront 9s ease-in-out infinite alternate;
}

.education-wave .education-wave-glow {
  opacity: 0.16;
  mix-blend-mode: screen;
  transform-origin: center;
  animation: projectsWaveGlow 10s ease-in-out infinite alternate;
}

.education-header,
.education-list {
  position: relative;
  z-index: 1;
}

.education-header {
  width: min(760px, 100%);
  margin-bottom: 0.25rem;
}

.education-kicker {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.education-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
}

.education-intro {
  width: min(62ch, 100%);
  margin: 0.95rem 0 0;
  font-size: 1rem;
}

.education-list {
  display: grid;
  gap: 3rem;
}

.education-row {
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  align-items: start;
  gap: clamp(1.5rem, 3vw, 3rem);
}

.education-row--reverse {
  grid-template-columns: minmax(0, 1fr) minmax(420px, 560px);
}

.education-row + .education-row {
  padding-top: 2.5rem;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
}

.education-media {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius-xl) + 0.15rem);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-sm);
}

.education-media::after {
  content: "";
  position: absolute;
  inset: auto 1rem 1rem;
  height: 24%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0), rgba(15, 23, 42, 0.08));
  opacity: 0.45;
  pointer-events: none;
}

.education-media--portrait {
  aspect-ratio: 3 / 4;
}

.education-media--landscape {
  aspect-ratio: 16 / 10;
}

.education-media--shs {
  aspect-ratio: 4 / 3;
  min-height: 420px;
}

.education-media--shs img {
  object-position: center 20%;
}

.education-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.education-card {
  display: grid;
  align-content: start;
  padding: 0.35rem 0;
}

.education-level {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.education-degree {
  margin: 0.45rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.65rem, 2.6vw, 2.35rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: var(--text);
}

.education-school {
  margin: 0.95rem 0 0;
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-muted);
}

.education-batch {
  margin: 0.4rem 0 0;
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text);
}

.education-highlights {
  display: grid;
  gap: 1rem;
  margin: 1.55rem 0 0;
  padding: 0;
  list-style: none;
}

.education-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.education-highlights i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  margin-top: 0.08rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary-strong);
  font-size: 0.95rem;
}

.education-highlights :deep(strong) {
  color: var(--text);
}

@keyframes projectsWaveFloatFront {
  0% {
    transform: translate(-0.6%, 0.5%);
  }

  50% {
    transform: translate(1.1%, -1.1%);
  }

  100% {
    transform: translate(-0.4%, 0.9%);
  }
}

@keyframes projectsWaveFloatBack {
  0% {
    transform: translate(0.8%, 0.9%);
  }

  50% {
    transform: translate(-1.1%, -0.8%);
  }

  100% {
    transform: translate(0.55%, 0.2%);
  }
}

@keyframes projectsWaveGlow {
  0% {
    transform: translate(-0.35%, -0.2%);
    opacity: 0.12;
  }

  50% {
    transform: translate(0.95%, -1.15%);
    opacity: 0.24;
  }

  100% {
    transform: translate(-0.55%, 0.35%);
    opacity: 0.14;
  }
}

@media (prefers-reduced-motion: reduce) {
  .education-wave .education-wave-back,
  .education-wave .education-wave-front,
  .education-wave .education-wave-glow {
    animation: none;
  }
}

@media (max-width: 1080px) {
  .education-row,
  .education-row--reverse {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .education-row--reverse .education-card {
    order: 2;
  }

  .education-row--reverse .education-media {
    order: 1;
  }

  .education-media--portrait {
    width: min(320px, 100%);
  }

  .education-media--landscape {
    width: min(520px, 100%);
  }

  .education-media--shs {
    width: min(640px, 100%);
    min-height: 380px;
  }
}

@media (max-width: 620px) {
  .education-section {
    padding: 4rem 0;
  }

  .education-list {
    gap: 2rem;
  }

  .education-degree {
    font-size: 1.75rem;
  }

  .education-school {
    font-size: 1rem;
  }

  .education-batch,
  .education-highlights li {
    font-size: 0.95rem;
  }

  .education-highlights {
    gap: 0.72rem;
  }

  .education-highlights i {
    width: 1.85rem;
    height: 1.85rem;
    font-size: 0.88rem;
  }

  .education-media--shs {
    min-height: 340px;
  }
}

@media (max-width: 430px) {
  .education-title {
    font-size: 1.75rem;
  }

  .education-intro {
    font-size: 0.95rem;
  }

  .education-degree {
    font-size: 1.58rem;
  }

  .education-row,
  .education-row--reverse {
    gap: 1.2rem;
  }
}
</style>
