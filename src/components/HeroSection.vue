<script setup>
</script>

<template>
  <section class="hero-section" id="hero-section">
    <div class="intro">
      <p class="intro-name">Hi, I'm <span>Mark Dominic Tarang</span></p>
      <p class="intro-position"><span>Backend Developer</span> at <span>Petnet Inc.</span></p>

      <p>
        Backend Developer with hands-on frontend experience, skilled in building
        and maintaining reliable, high-performing, and user-friendly systems.
        Strong background in system design, full-stack development, debugging,
        and cross-functional collaboration to support business goals and user needs.
      </p>

      <p>Feel free to explore my website to learn more about me and get in touch!</p>

      <div class="intro-socials">
        <a href="mailto:dominictarang@gmail.com" aria-label="Email">
          <i class="intro-social-icon mdi mdi-email-outline" aria-hidden="true"></i>
        </a>

        <a href="tel:+639369407862" aria-label="Phone">
          <i class="intro-social-icon mdi mdi-phone-outline" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/mark-dominic-tarang-3b6031328"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="intro-social-icon mdi mdi-linkedin" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.facebook.com/mark.dominic.tarang/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i class="intro-social-icon mdi mdi-facebook" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <img src="/assets/images/hero.png" alt="Intro Image" class="intro-image" />
  </section>
</template>

<style scoped>
.hero-section {
  min-height: calc(100vh - 7rem);
  width: var(--max-width);
  margin: 1.25rem auto 0;
  padding: 4rem 0 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.intro {
  width: min(580px, 100%);
  text-align: left;
}

.intro-name {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  color: var(--text);
  font-weight: 700;
  margin: 0;
}

.intro-name span {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.intro-position {
  font-size: 1.15rem;
  margin: 1.35rem 0 1rem;
  font-weight: 500;
  color: var(--text-muted);
}

.intro-position span {
  color: var(--primary);
  font-weight: 700;
}

.intro p:not(.intro-name):not(.intro-position) {
  max-width: 58ch;
  font-size: 1.02rem;
}

.intro-socials {
  display: flex;
  flex-direction: row;
  gap: 0.9rem;
  margin-top: 1.75rem;
}

.intro-socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.intro-social-icon {
  font-size: 1.5rem;
  line-height: 1;
  color: #7a2238;
}

.intro-socials a:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(37, 99, 235, 0.22);
}

.intro-image {
  width: min(420px, 38vw);
  height: auto;
  align-self: center;
  border-radius: 2rem;
  object-fit: cover;
  filter: drop-shadow(0 28px 50px rgba(15, 23, 42, 0.12));
}

@media (max-width: 1210px) {
  .hero-section {
    min-height: auto;
    flex-direction: column;
    justify-content: center;
    padding-top: 3rem;
    gap: 2.5rem;
  }

  .intro {
    width: 100%;
    text-align: center;
  }

  .intro p:not(.intro-name):not(.intro-position) {
    max-width: none;
  }

  .intro-socials {
    justify-content: center;
  }

  .intro-image {
    width: min(380px, 88vw);
  }
}
</style>