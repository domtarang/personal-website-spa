<script setup>
const contacts = [
  {
    href: 'mailto:dominictarang@gmail.com',
    label: 'Email',
    icon: 'mdi mdi-email-outline',
    text: 'dominictarang@gmail.com',
  },
  {
    href: 'tel:+639369407862',
    label: 'Phone',
    icon: 'mdi mdi-phone-outline',
    text: '09369407862',
  },
  {
    href: 'https://www.linkedin.com/in/mark-dominic-tarang-3b6031328',
    label: 'LinkedIn',
    icon: 'mdi mdi-linkedin',
    text: 'www.linkedin.com/in/mark-dominic-tarang-3b6031328',
    external: true,
  },
  {
    href: 'https://www.facebook.com/mark.dominic.tarang/',
    label: 'Facebook',
    icon: 'mdi mdi-facebook',
    text: 'https://www.facebook.com/mark.dominic.tarang/',
    external: true,
  },
]
</script>

<template>
  <section class="contact-section" id="contact-section">
    <p class="contact-title">Get in touch with me</p>

    <div class="contact-container">
      <a
        v-for="contact in contacts"
        :key="contact.href"
        :href="contact.href"
        :aria-label="contact.label"
        :target="contact.external ? '_blank' : undefined"
        :rel="contact.external ? 'noopener noreferrer' : undefined"
      >
        <div class="contact">
          <i :class="['contact-icon', contact.icon]" aria-hidden="true"></i>
          <p>{{ contact.text }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 5rem;
}

.contact-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
  margin: 0 0 2rem;
}

.contact-container {
  width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  gap: 1rem;
}

.contact {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 1.35rem;
  cursor: pointer;
  align-items: center;
  min-height: 78px;
  padding: 0.95rem 1rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.contact:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(37, 99, 235, 0.18);
  background: #ffffff;
}

.contact p {
  color: var(--text);
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
  word-break: break-word;
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 46px;
  font-size: 1.35rem;
  line-height: 1;
  color: #7a2238;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.10), rgba(139, 92, 246, 0.12));
  border-radius: 1rem;
  flex-shrink: 0;
}

@media (max-width: 1030px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact p {
    font-size: 0.92rem;
  }
}

@media (max-width: 800px) {
  .contact-section {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 430px) {
  .contact {
    align-items: flex-start;
  }
}
</style>