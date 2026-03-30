<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import HeroSection from '../components/HeroSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <HeaderSection />

  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </main>

  <FooterSection />
</template>