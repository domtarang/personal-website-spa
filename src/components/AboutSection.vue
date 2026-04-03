<script setup>
import { computed, ref } from 'vue'

const aboutIndex = ref(0)

const aboutImages = [
  {
    src: '/assets/images/cycling-pic-1.jpg',
    alt: 'Cycling photo of Mark Dominic Tarang',
  },
  {
    src: '/assets/images/cycling-pic-2.jpg',
    alt: 'Cycling photo of Mark Dominic Tarang',
  },
  {
    src: '/assets/images/formal-attire-pic.jpg',
    alt: 'Formal portrait of Mark Dominic Tarang',
  },
  {
    src: '/assets/images/beach-pic.jpg',
    alt: 'Beach photo of Mark Dominic Tarang',
  },
  {
    src: '/assets/images/family-pic.jpg',
    alt: 'Family photo of Mark Dominic Tarang',
  },
]

const aboutTrackStyle = computed(() => ({
  transform: `translate3d(-${aboutIndex.value * 100}%, 0, 0)`,
}))

const showSlide = (index) => {
  aboutIndex.value = Math.max(0, Math.min(index, aboutImages.length - 1))
}
</script>

<template>
  <section class="about-section" id="about-section">
    <div class="about">
      <div class="about-media">
        <div class="about-viewport" aria-live="polite">
          <div class="about-track" :style="aboutTrackStyle">
            <div v-for="image in aboutImages" :key="image.src" class="about-slide">
              <img :src="image.src" :alt="image.alt" class="about-image" />
            </div>
          </div>
        </div>

        <div class="about-carousel-controls" aria-label="About photo controls">
          <button
            class="about-nav about-prev"
            type="button"
            aria-label="Previous photo"
            :disabled="aboutIndex === 0"
            :aria-disabled="String(aboutIndex === 0)"
            @click="showSlide(aboutIndex - 1)"
          >
            <i class="mdi mdi-chevron-left" aria-hidden="true"></i>
          </button>

          <div class="about-indicators" aria-label="About photo indicators">
            <button
              v-for="(image, index) in aboutImages"
              :key="image.src"
              :class="['about-indicator', { 'is-active': index === aboutIndex }]"
              type="button"
              :aria-label="`Show photo ${index + 1}`"
              :data-slide="index"
              :aria-current="String(index === aboutIndex)"
              @click="showSlide(index)"
            ></button>
          </div>

          <button
            class="about-nav about-next"
            type="button"
            aria-label="Next photo"
            :disabled="aboutIndex === aboutImages.length - 1"
            :aria-disabled="String(aboutIndex === aboutImages.length - 1)"
            @click="showSlide(aboutIndex + 1)"
          >
            <i class="mdi mdi-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div class="about-content">
        <p class="about-title">Get to know me!</p>
        <div class="about-tags" aria-label="Personal highlights">
          <span class="about-tag"><i class="mdi mdi-cake-variant-outline" aria-hidden="true"></i>May 11, 2001</span>
          <span class="about-tag"><i class="mdi mdi-map-marker-outline" aria-hidden="true"></i>Mendez, Cavite</span>
          <span class="about-tag"><i class="mdi mdi-bike-fast" aria-hidden="true"></i>Cycling &amp; running</span>
        </div>
        <p>
          Hello and welcome! I’m <span>Mark Dominic Tarang</span>, though most people call me <span>Dom</span>. I’m from Mendez, Cavite, and I’m glad you’re here taking the time to learn a bit more about me. I’m someone who’s naturally curious, driven, and always eager to keep learning, improving, and building things with purpose.
        </p>
        <p>
          <span>Java</span> was the first language that gave structure to my curiosity about technology. What started with exploring software and learning how things work gradually led me into programming, and over time, shaped my path as a <span>software engineer</span> who enjoys building dependable, user-focused applications.
        </p>
        <p>
          Outside of tech, I stay active through <span>cycling, running, and strength training</span>. I’m especially drawn to endurance sports because they reflect the same values I bring to software development: consistency, discipline, resilience, and steady progress. I’ve also joined several <span>Audax Randonneur Philippines</span> events, which continue to strengthen my long-term mindset in both life and career.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Global styles live in App.vue */
</style>
