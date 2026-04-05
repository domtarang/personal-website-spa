<script setup>
import HeaderSection from '@/components/home/HeaderSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import EducationSection from '@/components/home/EducationSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import FooterSection from '@/components/home/FooterSection.vue'
</script>

<template>
  <HeaderSection />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
  </main>

  <FooterSection />
</template>
