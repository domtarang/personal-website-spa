<script setup>
</script>

<template>
  <section class="about-section" id="about-section">
    <div class="about">
      <img src="/assets/images/about.jpg" alt="My Graduation Photo" class="about-image" />

      <div class="about-content">
        <p class="about-title">Get to know me!</p>

        <p>
          I’m <span>Mark Dominic Tarang</span>, though most people know me as <span>Dom</span>.
          At 24 years old, I am currently based in Mendez, Cavite. I earned my
          <span>Bachelor of Science in Information Technology from De La Salle University – Dasmariñas</span>,
          specializing in Web Development, and graduated Class of 2024. I was honored to finish as
          <span>Summa Cum Laude</span> and to be recognized as Rank 5 in the BSIT program.
        </p>

        <p>
          I’m currently a <span>Backend Developer</span> at <span>Petnet Inc.</span>, with more
          than one year of experience building and maintaining reliable, high-performing, and
          user-friendly systems. Alongside my backend expertise, I also have hands-on frontend
          experience, giving me a well-rounded perspective in full-stack development.
        </p>

        <p>
          Outside of tech, I stay active through cycling, running, and working out. I’m an
          endurance cyclist and have recently joined several Audax Randonneur Philippines events.
          I’m also into running and currently training for a marathon, while strength training
          helps me stay balanced and support my overall performance.
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
  background: transparent;
  padding: 5rem 0;
}

.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: var(--max-width);
  padding: 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius-xl) + 0.25rem);
  box-shadow: var(--shadow-sm);
}

.about-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
  margin: 0 0 1rem;
}

.about-content {
  text-align: left;
  margin: 0;
}

.about-content span {
  color: var(--primary);
  font-weight: 700;
}

.about-image {
  width: min(360px, 100%);
  height: 430px;
  margin: 0;
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: var(--shadow-md);
}

@media (max-width: 1210px) {
  .about {
    flex-direction: column;
    width: var(--max-width);
  }

  .about-image {
    width: min(420px, 100%);
    height: 340px;
  }
}

@media (max-width: 800px) {
  .about-section {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>