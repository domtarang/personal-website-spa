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
    values: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'NestJS', 'TypeScript'],
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
/* Global styles live in App.vue */
</style>
