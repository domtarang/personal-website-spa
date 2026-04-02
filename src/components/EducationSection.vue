<script setup>
const educationEntries = [
  {
    level: 'College',
    degree: 'BS in Information Technology',
    school: 'De La Salle University - Dasmariñas',
    batch: 'Class of 2024',
    mediaClass: 'education-media education-media--portrait',
    image: '/assets/images/college-graduation.jpg',
    imageAlt: 'College graduation photo of Mark Dominic Tarang',
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
    image: '/assets/images/shs-graduation.png',
    imageAlt: 'Senior high school photo of Mark Dominic Tarang',
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
]
</script>

<template>
  <section class="education-section" id="education-section">
    <svg class="projects-wave projects-wave--education-top-right" viewBox="0 0 640 360" preserveAspectRatio="none" aria-hidden="true">
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
      <path class="projects-wave-back" d="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" fill="url(#educationProjectsWaveGradient)">
        <animate attributeName="d" dur="13s" repeatCount="indefinite"
          values="M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z;
                  M0 0 H640 C572 0 496 42 404 116 C288 210 176 288 0 334 V0 Z;
                  M0 0 H640 C548 0 470 26 378 84 C272 150 180 246 0 302 V0 Z;
                  M0 0 H640 C562 0 486 36 394 104 C286 188 180 274 0 326 V0 Z;
                  M0 0 H640 C556 0 484 30 402 90 C300 166 194 262 0 314 V0 Z" />
      </path>
      <path class="projects-wave-front" d="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" fill="url(#educationProjectsWaveGradient)">
        <animate attributeName="d" dur="9s" repeatCount="indefinite"
          values="M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z;
                  M0 0 H640 C586 0 512 50 418 130 C304 222 180 300 0 350 V0 Z;
                  M0 0 H640 C562 0 490 34 396 98 C286 182 178 274 0 326 V0 Z;
                  M0 0 H640 C578 0 506 46 414 120 C300 208 184 292 0 344 V0 Z;
                  M0 0 H640 C572 0 502 40 412 110 C300 196 186 286 0 340 V0 Z" />
      </path>
      <path class="projects-wave-glow" d="M0 0 H640 C566 0 494 36 406 102 C296 184 184 274 0 330 V0 Z" fill="url(#educationProjectsWaveGlowGradient)">
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
/* Global styles live in App.vue */
</style>
