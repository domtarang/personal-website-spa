<script setup>
import petnetGenmeet from '@/assets/images/experience/petnet-genmeet.jpg'

const experienceEntries = [
  {
    kicker: 'Professional Experience',
    role: 'Backend Developer',
    company: 'Petnet Inc.',
    meta: [
      { icon: 'mdi mdi-calendar-range', text: 'February 2025 - Present' },
      { icon: 'mdi mdi-account-group-outline', text: 'Unified Service Portal (USP) Team' },
      { icon: 'mdi mdi-storefront-outline', text: 'Supporting 186 Pera Hub branches nationwide' },
    ],
    summary:
      'Currently assigned to the Unified Service Portal (USP) team, supporting a core internal platform used by tellers and front line associates across 186 Pera Hub branches nationwide.',
    points: [
      {
        title: 'Enhance and maintain the USP system',
        description: 'Keep the platform stable, efficient, and reliable for day-to-day branch operations across the network.',
      },
      {
        title: 'Build features and improve workflows',
        description: 'Develop new features, improve existing workflows, and resolve bugs to support better usability and performance.',
      },
      {
        title: 'Support modernization efforts',
        description: 'Help drive website migration efforts to the latest tech stack while ensuring business continuity and system quality.',
      },
      {
        title: 'Deliver maintainable production-ready solutions',
        description: 'Work closely with teammates in delivering solutions that balance maintainability, functionality, and user needs.',
      },
    ],
  },
  {
    kicker: 'Internship Experience',
    role: 'IT Intern Team Leader',
    company: 'The Interns Hub',
    meta: [
      { icon: 'mdi mdi-calendar-range', text: 'February 2024 - June 2024' },
      { icon: 'mdi mdi-account-supervisor-outline', text: 'Team Leadership' },
      { icon: 'mdi mdi-clipboard-text-clock-outline', text: 'Scrums, reporting, QA, and creative support' },
    ],
    summary:
      'Completed my internship as an IT Intern Team Leader, guiding fellow interns while contributing to website development, testing, and creative deliverables across multiple tasks.',
    points: [
      {
        title: 'Led the intern team and facilitated daily scrums',
        description: 'Coordinated the team’s daily workflow and provided weekly progress reports to my supervisor to keep deliverables on track.',
      },
      {
        title: 'Tracked progress and monitored output',
        description: 'Used ClickUp to organize tasks, monitor team progress, and maintain visibility over ongoing work.',
      },
      {
        title: 'Contributed to a cybersecurity and data privacy website',
        description: 'Supported development efforts and performed quality assurance testing to help ensure functionality and usability.',
      },
      {
        title: 'Supported creative deliverables',
        description: 'Contributed to graphic design and video editing projects as part of the team’s broader output.',
      },
    ],
  },
]
</script>

<template>
  <section class="experience-section" id="experience-section">
    <div class="experience-section-header">
      <p class="experience-section-kicker">EXPERIENCE</p>
      <h2 class="experience-section-title">My Professional Journey</h2>
    </div>

    <div class="experience-intro">
      <img :src="petnetGenmeet" alt="Team photo from my professional experience" />
    </div>

    <div class="experience-list">
      <article v-for="entry in experienceEntries" :key="`${entry.company}-${entry.role}`" class="experience-entry">
        <div class="experience-headline">
          <p class="experience-kicker">{{ entry.kicker }}</p>
          <h2 class="experience-role">{{ entry.role }}</h2>
          <p class="experience-company">{{ entry.company }}</p>
        </div>

        <div class="experience-meta">
          <span v-for="item in entry.meta" :key="`${entry.role}-${item.text}`">
            <i :class="item.icon" aria-hidden="true"></i>{{ item.text }}
          </span>
        </div>

        <p class="experience-summary">
          {{ entry.summary }}
        </p>

        <div class="experience-points">
          <div v-for="point in entry.points" :key="`${entry.role}-${point.title}`" class="experience-item">
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
