<script setup>
const skills = [
  {
    icon: 'mdi mdi-code-tags',
    groups: [
      {
        title: 'Front-end Technologies',
        content: 'Vue.js, React, TypeScript, JavaScript, Vuetify, MUI, Tailwind, CSS, HTML',
      },
      {
        title: 'Back-end Technologies',
        content: 'Java, Spring Boot, Node.js, Express.js, NestJS, TypeScript',
      },
    ],
  },
  {
    icon: 'mdi mdi-server',
    groups: [
      {
        title: 'DevOps & Platforms',
        content: 'Git, GitHub, GitLab, Docker, Kubernetes, Render, Hostinger',
      },
      {
        title: 'Testing & API Tools',
        content: 'Vitest, Playwright, Postman, Burp Suite',
      },
    ],
  },
  {
    icon: 'mdi mdi-toolbox-outline',
    groups: [
      {
        title: 'Design & Creative Tools',
        content: 'Figma, Whimsical, Draw.io, Adobe Photoshop, Illustrator, Premiere Pro',
      },
      {
        title: 'Databases',
        content: 'SQL & PostgreSQL',
      },
    ],
  },
]
</script>

<template>
  <section class="skills-section" id="skills-section">
    <div class="skills-container">
      <div v-for="skill in skills" :key="skill.icon" class="skill">
        <i :class="['skill-icon', skill.icon]" aria-hidden="true"></i>

        <template v-for="group in skill.groups" :key="group.title">
          <p class="skill-title">{{ group.title }}</p>
          <p>{{ group.content }}</p>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 1rem 0 4rem;
}

.skills-container {
  width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.skill:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: rgba(37, 99, 235, 0.18);
}

.skill-title {
  margin: 1rem 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.18rem;
  font-weight: 700;
  color: var(--text);
}

.skill-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  font-size: 1.8rem;
  line-height: 1;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.10), rgba(139, 92, 246, 0.10));
  box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.08);
  color: #7a2238;
}

@media (max-width: 1030px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 800px) {
  .skills-section {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>