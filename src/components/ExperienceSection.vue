<script setup>
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
      <img src="/assets/images/company-pic.jpg" alt="Team photo from my professional experience" />
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
/* Global styles live in App.vue */
</style>
