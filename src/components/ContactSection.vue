<script setup>
const contactItems = [
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
        v-for="item in contactItems"
        :key="item.href"
        :href="item.href"
        :aria-label="item.label"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
      >
        <div class="contact">
          <i :class="['contact-icon', item.icon]" aria-hidden="true"></i>
          <p>{{ item.text }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Global styles live in App.vue */
</style>
