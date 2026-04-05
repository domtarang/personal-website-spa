<script setup>
const certifications = [
  {
    title: 'Udemy: The Complete 2024 Web Development Bootcamp',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b3143bd2-ac9d-45d1-8990-aeb63455583f.jpg',
    date: 'July 31, 2024',
  },
  {
    title: 'Udemy: Laravel From Scratch',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-0ad25400-4584-4715-9dc5-731ba4bb2b24.jpg',
    date: 'November 17, 2024',
  },
  {
    title: 'Udemy: Vue 3 in Action',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-57f7dbb6-82a2-4622-8c8e-0551806f690f.jpg',
    date: 'November 25, 2024',
  },
]

const skills = [
  {
    index: '01',
    icon: 'mdi mdi-monitor-cellphone-star',
    title: 'Front-end',
    values: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'Vuetify', 'MUI', 'Tailwind CSS', 'CSS', 'HTML'],
  },
  {
    index: '02',
    icon: 'mdi mdi-server-outline',
    title: 'Back-end',
    values: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'NestJS', 'TypeScript', 'Laravel'],
  },
  {
    index: '03',
    icon: 'mdi mdi-cloud-outline',
    title: 'DevOps',
    values: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Render', 'Hostinger'],
  },
  {
    index: '04',
    icon: 'mdi mdi-flask-outline',
    title: 'Testing',
    values: ['Vitest', 'Playwright', 'Postman', 'Burp Suite'],
  },
  {
    index: '05',
    icon: 'mdi mdi-palette-outline',
    title: 'Design',
    values: ['Figma', 'Whimsical', 'Draw.io', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  },
  {
    index: '06',
    icon: 'mdi mdi-database-outline',
    title: 'Data',
    values: ['SQL', 'PostgreSQL'],
  },
]
</script>

<template>
  <section class="skills-section" id="skills-section">
    <div class="skills-shell">
      <div class="skills-copy">
        <p class="skills-kicker">Skills</p>
        <h2 class="skills-title">Tools and technologies I work with</h2>
        <p class="skills-description">
          Here are the tools and technologies I use most often for building web apps, working on APIs, testing features, and deploying projects.
        </p>

        <div class="certifications-block">
          <h3 class="certifications-title">Certifications</h3>
          <div class="certification-grid">
            <article v-for="certification in certifications" :key="certification.title" class="certification-card">
              <span class="certification-marker" aria-hidden="true">•</span>
              <h4 class="certification-course">
                <a class="certification-link" :href="certification.href" target="_blank" rel="noopener noreferrer">{{ certification.title }}</a>
              </h4>
              <p class="certification-date">{{ certification.date }}</p>
            </article>
          </div>
        </div>
      </div>

      <div class="skills-list" aria-label="Skills list">
        <article v-for="skill in skills" :key="skill.index" class="skill-row">
          <div class="skill-label">
            <span class="skill-index">{{ skill.index }}</span>
            <i :class="['skill-icon', skill.icon]" aria-hidden="true"></i>
            <h3 class="skill-title">{{ skill.title }}</h3>
          </div>
          <p class="skill-values">
            <template v-for="(value, index) in skill.values" :key="`${skill.index}-${value}`">
              {{ value }}<span v-if="index < skill.values.length - 1"> · </span>
            </template>
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0;
  background: transparent;
}

.skills-shell {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.25fr);
  gap: 3rem;
  align-items: start;
  width: var(--max-width);
}

.skills-copy {
  position: static;
  top: auto;
}

.skills-kicker {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.skills-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.4vw, 2.8rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  color: var(--text);
}

.skills-description {
  width: min(52ch, 100%);
  margin: 1rem 0 0;
  font-size: 1rem;
  color: var(--text-muted);
}

.skills-note {
  margin: 1.4rem 0 0;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text);
  opacity: 0.72;
}

.certifications-block {
  margin-top: 2.6rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(148, 163, 184, 0.22);
}

.certifications-title {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.certification-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.2rem;
}

.certification-card {
  display: grid;
  grid-template-columns: 0.9rem minmax(0, 1fr);
  column-gap: 0.85rem;
  row-gap: 0.3rem;
  align-items: start;
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.certification-marker {
  grid-row: 1 / span 2;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  width: 0.9rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.certification-course {
  margin: 0;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
}

.certification-link {
  display: inline;
  font-size: inherit;
  font-weight: inherit;
  color: var(--text);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.14em;
}

.certification-link::after {
  content: " ↗";
  font-size: 0.95em;
}

.certification-link:hover {
  color: var(--primary-strong);
}

.certification-date {
  grid-column: 2;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.45;
  color: var(--text-muted);
}

.skills-list {
  display: grid;
  gap: 0;
}

.skill-row {
  display: grid;
  grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
  gap: 1.25rem 1.5rem;
  align-items: center;
  padding: 1.2rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.24);
  transition:
    border-color 0.25s ease,
    background-color 0.25s ease;
}

.skill-row:last-child {
  border-bottom: 1px solid rgba(148, 163, 184, 0.24);
}

.skill-row:hover {
  border-color: rgba(37, 99, 235, 0.18);
  transform: none;
}

.skill-label {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-width: 0;
}

.skill-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  font-size: 0.78rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--primary-strong);
  opacity: 0.78;
}

.skill-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary-strong);
  font-size: 1.04rem;
  line-height: 1;
  flex-shrink: 0;
}

.skill-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
}

.skill-values {
  margin: 0;
  padding-top: 0;
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text);
  overflow-wrap: anywhere;
}

.skill-values span {
  color: var(--text-muted);
}

@media (max-width: 1080px) {
  .skills-shell {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .skills-copy {
    max-width: 760px;
  }

  .skill-row {
    grid-template-columns: minmax(210px, 240px) minmax(0, 1fr);
    gap: 1rem 1.2rem;
  }
}

@media (max-width: 800px) {
  .skills-section {
    padding: 3.4rem 0 3rem;
  }

  .skills-shell {
    gap: 2.4rem;
  }

  .skill-row {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    align-items: start;
    padding: 1rem 0;
  }

  .skill-values {
    font-size: 0.97rem;
    line-height: 1.8;
  }
}

@media (max-width: 620px) {
  .skills-section {
    padding-bottom: 2.75rem;
  }

  .skills-shell {
    gap: 2.35rem;
  }

  .skills-title {
    font-size: 1.85rem;
  }

  .skills-description {
    margin-top: 0.85rem;
    font-size: 0.96rem;
  }

  .skills-note {
    margin-top: 1rem;
    font-size: 0.84rem;
  }

  .certifications-block {
    margin-top: 2.2rem;
  }

  .certification-card {
    grid-template-columns: 0.85rem minmax(0, 1fr);
    column-gap: 0.72rem;
    padding: 0;
  }

  .certification-course {
    font-size: 0.97rem;
  }

  .skill-label {
    gap: 0.75rem;
  }

  .skill-index {
    min-width: 1.6rem;
    font-size: 0.74rem;
  }

  .skill-icon {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1rem;
  }

  .skill-title {
    font-size: 1rem;
  }

  .skill-values {
    font-size: 0.94rem;
  }
}

@media (max-width: 430px) {
  .skills-title {
    font-size: 1.7rem;
  }

  .skill-label {
    align-items: flex-start;
  }
}
</style>
