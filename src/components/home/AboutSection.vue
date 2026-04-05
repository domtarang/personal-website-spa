<script setup>
import { computed, ref } from 'vue'
import cycling1 from '@/assets/images/about/cycling-1.jpg'
import cycling2 from '@/assets/images/about/cycling-2.jpg'
import formalAttire from '@/assets/images/about/formal-attire.jpg'
import beach from '@/assets/images/about/beach.jpg'
import family from '@/assets/images/about/family.jpg'

const aboutIndex = ref(0)

const aboutImages = [
  {
    src: cycling1,
    alt: 'Cycling photo of Mark Dominic Tarang',
  },
  {
    src: cycling2,
    alt: 'Cycling photo of Mark Dominic Tarang',
  },
  {
    src: formalAttire,
    alt: 'Formal portrait of Mark Dominic Tarang',
  },
  {
    src: beach,
    alt: 'Beach photo of Mark Dominic Tarang',
  },
  {
    src: family,
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
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.75rem 0;
  background: rgba(255, 255, 255, 0.9);
}

.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: var(--max-width);
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.about-content {
  margin: 0;
  text-align: left;
}

.about-content span {
  color: var(--primary);
  font-weight: 700;
}

.about-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.15rem 0 1.4rem;
}

.about-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.85rem;
  border: 1px solid rgba(37, 99, 235, 0.12);
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.2;
}

.about-tag i {
  color: var(--primary);
  font-size: 1rem;
  line-height: 1;
}

.about-media {
  position: relative;
  flex-shrink: 0;
  width: min(460px, 100%);
  height: 600px;
  margin: 0;
  overflow: hidden;
  border-radius: 2rem;
  background: var(--bg-alt);
  box-shadow: var(--shadow-md);
}

.about-viewport {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.about-track {
  display: flex;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.about-slide {
  flex: 0 0 100%;
  min-width: 100%;
  height: 100%;
}

.about-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.about-carousel-controls {
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  pointer-events: none;
}

.about-nav,
.about-indicator {
  pointer-events: auto;
}

.about-nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;
  height: 3.8rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 1.05rem;
  background: rgba(255, 255, 255, 0.94);
  color: var(--text);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.14);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease;
}

.about-nav:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.24);
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.18);
}

.about-nav:disabled {
  opacity: 0.48;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
  cursor: default;
  transform: none;
}

.about-nav i {
  font-size: 1.65rem;
  line-height: 1;
}

.about-indicators {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.38rem;
  padding: 0.48rem 0.66rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.about-indicator {
  width: 0.54rem;
  height: 0.54rem;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.2);
  opacity: 0.9;
  cursor: pointer;
  transition:
    width 0.22s ease,
    transform 0.22s ease,
    background-color 0.22s ease,
    opacity 0.22s ease;
}

.about-indicator.is-active {
  width: 1.18rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  opacity: 1;
}

.about-nav:focus-visible,
.about-indicator:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.28);
  outline-offset: 3px;
}

@media (max-width: 1210px) {
  .about {
    flex-direction: column;
    width: var(--max-width);
  }

  .about-media {
    width: min(420px, 88vw);
    height: 520px;
  }
}

@media (max-width: 620px) {
  .about-tags {
    gap: 0.65rem;
    margin: 1rem 0 1.25rem;
  }

  .about-tag {
    padding: 0.55rem 0.78rem;
    font-size: 0.86rem;
  }

  .about-media {
    width: min(360px, 84vw);
    height: 460px;
  }

  .about-carousel-controls {
    left: 0.85rem;
    right: 0.85rem;
    bottom: 0.85rem;
    gap: 0.7rem;
  }

  .about-nav {
    width: 3.35rem;
    height: 3.35rem;
  }

  .about-nav i {
    font-size: 1.42rem;
  }

  .about-indicators {
    gap: 0.32rem;
    padding: 0.44rem 0.58rem;
  }

  .about-indicator {
    width: 0.48rem;
    height: 0.48rem;
  }

  .about-indicator.is-active {
    width: 1.02rem;
  }
}

@media (max-width: 430px) {
  .about {
    padding: 0;
  }

  .about-title {
    margin-top: 0.1rem;
  }

  .about-tags {
    gap: 0.58rem;
    margin: 0.95rem 0 1.15rem;
  }

  .about-tag {
    padding: 0.52rem 0.72rem;
    font-size: 0.83rem;
  }

  .about-media {
    width: min(300px, 82vw);
    height: 400px;
  }

  .about-carousel-controls {
    left: 0.72rem;
    right: 0.72rem;
    bottom: 0.72rem;
    gap: 0.55rem;
  }

  .about-nav {
    width: 3.05rem;
    height: 3.05rem;
  }

  .about-nav i {
    font-size: 1.28rem;
  }

  .about-indicators {
    gap: 0.28rem;
    padding: 0.38rem 0.5rem;
  }

  .about-indicator {
    width: 0.42rem;
    height: 0.42rem;
  }

  .about-indicator.is-active {
    width: 0.88rem;
  }
}
</style>
