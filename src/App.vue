<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css');

:root {
  --font-body: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-heading: "Space Grotesk", "Inter", system-ui, sans-serif;
  --primary: #2563eb;
  --primary-strong: #1d4ed8;
  --accent: #8b5cf6;
  --accent-soft: #eef2ff;
  --text: #0f172a;
  --text-muted: #475569;
  --bg: #f8fafc;
  --bg-alt: #eef2f7;
  --surface: rgba(255, 255, 255, 0.88);
  --surface-solid: #ffffff;
  --border: rgba(148, 163, 184, 0.25);
  --shadow-sm: 0 10px 30px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 18px 45px rgba(15, 23, 42, 0.10);
  --shadow-lg: 0 30px 70px rgba(37, 99, 235, 0.14);
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;
  --max-width: min(1120px, calc(100% - 2rem));
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-body);
  line-height: 1.7;
  background:
    radial-gradient(circle at top, rgba(37, 99, 235, 0.07), transparent 32%),
    linear-gradient(180deg, #ffffff 0%, var(--bg) 42%, #ffffff 100%);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
}

p,
li {
  color: var(--text-muted);
}

img {
  display: block;
  max-width: 100%;
}

section {
  position: relative;
}

/* =========================
   Header
========================= */
.header {
  display: flex;
  align-items: center;
  width: min(1180px, calc(100% - 1.5rem));
  margin: 1rem auto 0;
  padding: 0.9rem 1.25rem;
  min-height: 5rem;
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  z-index: 100;
  position: sticky;
  top: 0.75rem;
  transition: min-height 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.header:hover {
  box-shadow: var(--shadow-md);
}

.header.expand {
  min-height: 23rem;
}

.title {
  display: flex;
  align-items: center;
  margin-left: 0;
  min-width: fit-content;
}

.title h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  letter-spacing: -0.03em;
  color: var(--text);
}

.nav-links-container {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.75rem;
  margin: 0 0 0 auto;
  padding: 0;
}

.nav-links-container.expand {
  display: flex;
}

.nav-links-container a {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted);
}

.nav-links-container a:hover {
  color: var(--primary);
}

.hamburger {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.9rem;
  margin-left: auto;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.download-btn {
  font-family: var(--font-body);
  margin-right: 0;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.2rem;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(37, 99, 235, 0.22);
  filter: brightness(1.04);
}

/* =========================
   Hero Section
========================= */
.hero-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: calc(100vh - 7rem);
  width: 100%;
  max-width: none;
  margin: 1.25rem 0 0;
}

.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.84) 0%, rgba(255, 255, 255, 0) 72%);
  filter: blur(10px);
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: var(--max-width);
  min-height: calc(100vh - 7rem);
  margin: 0 auto;
  padding: 4.5rem 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.hero-wave {
  position: absolute;
  left: 50%;
  bottom: -1px;
  width: 100vw;
  min-width: 100vw;
  transform: translateX(-50%);
  height: clamp(320px, 42vw, 560px);
  display: block;
  pointer-events: none;
  z-index: 0;
  overflow: visible;
  filter: drop-shadow(0 -10px 22px rgba(37, 99, 235, 0.18)) drop-shadow(0 -28px 52px rgba(139, 92, 246, 0.16));
}

.hero-wave .hero-wave-back {
  opacity: 0.24;
  transform-origin: center bottom;
  animation: heroWaveDriftBack 12s ease-in-out infinite alternate;
}

.hero-wave .hero-wave-front {
  transform-origin: center bottom;
  animation: heroWaveDriftFront 8s ease-in-out infinite alternate;
}

.hero-wave .hero-wave-glow {
  opacity: 0.18;
  mix-blend-mode: screen;
  transform-origin: center bottom;
  animation: heroWaveGlow 9s ease-in-out infinite alternate;
}

@keyframes heroWaveDriftFront {
  0% {
    transform: translateX(-1.2%) translateY(0.35%);
  }
  50% {
    transform: translateX(1.55%) translateY(-1.8%);
  }
  100% {
    transform: translateX(-0.8%) translateY(0.85%);
  }
}

@keyframes heroWaveDriftBack {
  0% {
    transform: translateX(1.05%) translateY(0.9%);
  }
  50% {
    transform: translateX(-1.05%) translateY(-1.35%);
  }
  100% {
    transform: translateX(0.7%) translateY(0.2%);
  }
}

@keyframes heroWaveGlow {
  0% {
    transform: translateX(-0.45%) translateY(-0.35%);
    opacity: 0.13;
  }
  50% {
    transform: translateX(0.95%) translateY(-1.55%);
    opacity: 0.26;
  }
  100% {
    transform: translateX(-0.7%) translateY(0.3%);
    opacity: 0.16;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-wave .hero-wave-back,
  .hero-wave .hero-wave-front,
  .hero-wave .hero-wave-glow {
    animation: none;
  }
}

.intro {
  width: min(580px, 100%);
  text-align: left;
  padding-bottom: clamp(1.2rem, 6vw, 4rem);
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
  width: 58px;
  height: 58px;
  border-radius: 1.05rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border: none;
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.22);
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.intro-social-icon {
  font-size: 1.45rem;
  line-height: 1;
  color: #ffffff;
}

.intro-socials a:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 34px rgba(37, 99, 235, 0.24);
  filter: brightness(1.05);
}

.intro-image-frame {
  width: min(460px, 38vw);
  height: min(82vh, 860px);
  max-height: min(82vh, 860px);
  align-self: flex-end;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  isolation: isolate;
  overflow: hidden;
}

.intro-image-stack {
  position: relative;
  width: 100%;
  height: 100%;
}

.intro-image-frame::after {
  content: "";
  position: absolute;
  inset: 10% 8% 2% 8%;
  border-radius: 1.6rem;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0) 68%);
  opacity: 0;
  pointer-events: none;
  mix-blend-mode: screen;
}

.intro-image-frame.is-capturing::after {
  animation: heroCaptureFlash 0.52s ease;
}

.intro-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-height: none;
  border-radius: 0;
  object-fit: contain;
  object-position: center bottom;
  z-index: 1;
  opacity: 0;
  filter: saturate(0.94);
  -webkit-mask-image: none;
  mask-image: none;
  transform: scale(0.985);
  transform-origin: center bottom;
  transition: opacity 0.42s ease, transform 0.52s ease, filter 0.42s ease;
  pointer-events: none;
}

.intro-image.is-active {
  opacity: 1;
  z-index: 2;
  filter: none;
  transform: scale(1);
}

@keyframes heroCaptureFlash {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }
  20% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.03);
  }
}

/* =========================
   Skills Section
========================= */
.skills-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 4.5rem 0 4.5rem;
}

.skills-shell {
  width: var(--max-width);
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.25fr);
  gap: 3rem;
  align-items: start;
}

.skills-copy {
  position: static;
  top: auto;
}

.skills-kicker {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.skills-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.4vw, 2.8rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  color: var(--text);
}

.skills-description {
  width: min(52ch, 100%);
  margin: 1rem 0 0;
  font-size: 1rem;
  color: var(--text-muted);
}

.skills-note {
  margin: 1.4rem 0 0;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text);
  opacity: 0.72;
}

.certifications-block {
  margin-top: 2.6rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(148, 163, 184, 0.22);
}

.certifications-title {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.certification-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.2rem;
}

.certification-card {
  display: grid;
  grid-template-columns: 0.9rem minmax(0, 1fr);
  column-gap: 0.85rem;
  row-gap: 0.3rem;
  align-items: start;
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.certification-card:hover {
  border-color: transparent;
  box-shadow: none;
}

.certification-marker {
  grid-row: 1 / span 2;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  width: 0.9rem;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.5;
}

.certification-course {
  margin: 0;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
}

.certification-date {
  grid-column: 2;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.45;
  color: var(--text-muted);
}

.certification-link {
  display: inline;
  font-size: inherit;
  font-weight: inherit;
  color: var(--text);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.14em;
}

.certification-link::after {
  content: " ↗";
  font-size: 0.95em;
}

.certification-link:hover {
  color: var(--primary-strong);
}

.certification-link i,
.certification-top,
.certification-source {
  display: none;
}

.skills-list {
  position: relative;
  display: grid;
  gap: 0;
}

.skill-row {
  display: grid;
  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
  gap: 1.4rem;
  align-items: start;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.24);
  transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.skill-row:last-child {
  border-bottom: 1px solid rgba(148, 163, 184, 0.24);
}

.skill-row:hover {
  transform: none;
  border-color: rgba(37, 99, 235, 0.2);
}

.skill-label {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.skill-index {
  min-width: 2rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--primary-strong);
  opacity: 0.78;
}

.skill-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.55rem;
  height: 2.55rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary-strong);
  font-size: 1.12rem;
  flex-shrink: 0;
}

.skill-title-group {
  min-width: 0;
}

.skill-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
}

.skill-subtitle {
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.skill-values {
  margin: 0;
  padding-top: 0.1rem;
  font-size: 1rem;
  line-height: 1.9;
  color: var(--text);
  overflow-wrap: anywhere;
}

.skill-values span {
  color: var(--text-muted);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}


/* =========================
   Experience Section
========================= */
.experience-section {
  padding: 5rem 0 5rem;
  background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.04) 100%);
}

.experience-section-header {
  width: min(760px, calc(100% - 2rem));
  margin: 0 auto 2rem;
  text-align: center;
}

.experience-section-kicker {
  margin: 0 0 0.7rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.experience-section-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--text);
}

.experience-intro {
  width: min(760px, calc(100% - 2rem));
  margin: 0 auto 2.5rem;
}

.experience-intro img {
  width: 100%;
  max-height: 360px;
  object-fit: cover;
  object-position: center;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.experience-list {
  width: min(920px, calc(100% - 2rem));
  margin: 0 auto;
}

.experience-entry {
  padding: 0;
}

.experience-entry + .experience-entry {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(148, 163, 184, 0.24);
}

.experience-headline {
  display: grid;
  gap: 0.55rem;
  margin-bottom: 1rem;
}

.experience-kicker {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.experience-role {
  margin: 0.15rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3vw, 2.45rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--text);
}

.experience-company {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-muted);
}

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.15rem;
  margin: 0 0 1.15rem;
}

.experience-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
}

.experience-meta i {
  color: var(--primary);
  font-size: 1rem;
}

.experience-summary {
  margin: 0;
  max-width: 80ch;
  font-size: 1.02rem;
}

.experience-points {
  position: relative;
  margin: 1.65rem 0 0;
  padding-left: 1.45rem;
}

.experience-points::before {
  content: "";
  position: absolute;
  left: 0.28rem;
  top: 0.35rem;
  bottom: 0.35rem;
  width: 2px;
  background: linear-gradient(180deg, rgba(37, 99, 235, 0.28), rgba(139, 92, 246, 0.16));
}

.experience-item {
  position: relative;
  padding: 0 0 1.45rem 1.15rem;
}

.experience-item:last-child {
  padding-bottom: 0;
}

.experience-item::before {
  content: "";
  position: absolute;
  left: -0.04rem;
  top: 0.45rem;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.08);
}

.experience-item h3 {
  margin: 0;
  font-size: 1.06rem;
  line-height: 1.4;
  color: var(--text);
}

.experience-item p {
  margin: 0.35rem 0 0;
  font-size: 0.97rem;
  max-width: 74ch;
}



/* =========================
   Education Section
========================= */
.education-section {
  position: relative;
  isolation: isolate;
  overflow: visible;
  width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 0;
  display: grid;
  gap: 2.5rem;
}

.projects-wave--education-top-right {
  top: -1px;
  right: calc((100vw - 100%) / -2 - 1px);
  width: clamp(260px, 30vw, 560px);
  height: clamp(180px, 20vw, 360px);
  transform: scaleX(-1);
  transform-origin: center center;
}

.education-header,
.education-list {
  position: relative;
  z-index: 1;
}

.education-header {
  width: min(760px, 100%);
  margin-bottom: 0.25rem;
}

.education-kicker {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.education-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
}

.education-intro {
  width: min(62ch, 100%);
  margin: 0.95rem 0 0;
  font-size: 1rem;
}

.education-list {
  display: grid;
  gap: 3rem;
}

.education-row {
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  align-items: start;
  gap: clamp(1.5rem, 3vw, 3rem);
}

.education-row--reverse {
  grid-template-columns: minmax(0, 1fr) minmax(420px, 560px);
}

.education-row + .education-row {
  padding-top: 2.5rem;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
}

.education-media {
  position: relative;
  overflow: hidden;
  border-radius: calc(var(--radius-xl) + 0.15rem);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-sm);
}

.education-media::after {
  content: "";
  position: absolute;
  inset: auto 1rem 1rem 1rem;
  height: 24%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0), rgba(15, 23, 42, 0.08));
  opacity: 0.45;
  pointer-events: none;
}

.education-media--portrait {
  aspect-ratio: 3 / 4;
}

.education-media--landscape {
  aspect-ratio: 16 / 10;
}

.education-media--shs {
  aspect-ratio: 4 / 3;
  min-height: 420px;
}

.education-media--shs img {
  object-position: center 20%;
}

.education-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.education-card {
  display: grid;
  align-content: start;
  padding: 0.35rem 0;
}

.education-level {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.education-degree {
  margin: 0.45rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.65rem, 2.6vw, 2.35rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: var(--text);
}

.education-school {
  margin: 0.95rem 0 0;
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-muted);
}

.education-batch {
  margin: 0.4rem 0 0;
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text);
}

.education-highlights {
  display: grid;
  gap: 1rem;
  margin: 1.55rem 0 0;
  padding: 0;
  list-style: none;
}

.education-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.6;
}

.education-highlights i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-top: 0.08rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary-strong);
  font-size: 0.95rem;
  flex-shrink: 0;
}

.education-highlights strong {
  color: var(--text);
}

/* =========================
   Projects Section
========================= */
.projects-section {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.96) 52%, rgba(255, 255, 255, 0.94) 100%);
  padding: 5rem 0 5rem;
}

.projects-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.84) 0%, rgba(255, 255, 255, 0) 72%);
  filter: blur(10px);
  pointer-events: none;
  z-index: 0;
}

.projects-wave {
  position: absolute;
  display: block;
  pointer-events: none;
  z-index: 0;
  overflow: visible;
  filter: drop-shadow(0 10px 20px rgba(37, 99, 235, 0.12)) drop-shadow(0 18px 36px rgba(139, 92, 246, 0.10));
}

.projects-wave--top-left {
  top: -1px;
  left: -1px;
  width: clamp(260px, 30vw, 560px);
  height: clamp(180px, 20vw, 360px);
}

.projects-wave--bottom-right {
  right: -1px;
  bottom: -1px;
  width: clamp(280px, 32vw, 600px);
  height: clamp(200px, 22vw, 390px);
  transform: scaleX(-1) scaleY(-1);
  transform-origin: center center;
}

.projects-wave .projects-wave-back {
  opacity: 0.18;
  transform-origin: center;
  animation: projectsWaveFloatBack 13s ease-in-out infinite alternate;
}

.projects-wave .projects-wave-front {
  opacity: 0.92;
  transform-origin: center;
  animation: projectsWaveFloatFront 9s ease-in-out infinite alternate;
}

.projects-wave .projects-wave-glow {
  opacity: 0.16;
  mix-blend-mode: screen;
  transform-origin: center;
  animation: projectsWaveGlow 10s ease-in-out infinite alternate;
}

@keyframes projectsWaveFloatFront {
  0% {
    transform: translate(-0.6%, 0.5%);
  }
  50% {
    transform: translate(1.1%, -1.1%);
  }
  100% {
    transform: translate(-0.4%, 0.9%);
  }
}

@keyframes projectsWaveFloatBack {
  0% {
    transform: translate(0.8%, 0.9%);
  }
  50% {
    transform: translate(-1.1%, -0.8%);
  }
  100% {
    transform: translate(0.55%, 0.2%);
  }
}

@keyframes projectsWaveGlow {
  0% {
    transform: translate(-0.35%, -0.2%);
    opacity: 0.12;
  }
  50% {
    transform: translate(0.95%, -1.15%);
    opacity: 0.24;
  }
  100% {
    transform: translate(-0.55%, 0.35%);
    opacity: 0.14;
  }
}

@media (prefers-reduced-motion: reduce) {
  .projects-wave .projects-wave-back,
  .projects-wave .projects-wave-front,
  .projects-wave .projects-wave-glow {
    animation: none;
  }
}

.projects-title,
.experience-title,
.about-title,
.contact-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text);
  font-weight: 700;
}

.projects-shell {
  position: relative;
  z-index: 1;
  width: var(--max-width);
}

.projects-header {
  width: min(760px, 100%);
  margin: 0 auto 2.6rem;
  text-align: center;
}

.projects-kicker {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-strong);
}

.projects-title {
  margin: 0;
}

.project-intro {
  width: min(64ch, 100%);
  text-align: center;
  margin: 0.95rem auto 0;
  font-size: 1rem;
}

.projects-container {
  width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 350px));
  justify-content: center;
  gap: 1.4rem;
  margin-bottom: 0;
}

.projects-container p {
  margin: 0;
}

.project-card {
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.9rem;
  text-align: left;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 1rem 1rem 1.25rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(37, 99, 235, 0.18);
}

.project-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 1.15rem;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  color: var(--text);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-top: 0.35rem;
}

.project-subtitle {
  font-size: 0.98rem;
  text-align: left;
  color: var(--text-muted);
  min-height: 3rem;
}

.learn-more-btn,
.open-website-btn {
  width: 100%;
  font-family: var(--font-body);
  font-size: 0.98rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  padding: 0.85rem 1rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease, background-color 0.25s ease;
}

.learn-more-btn {
  margin-bottom: 0;
  background: rgba(15, 23, 42, 0.06);
  color: var(--text);
}

.open-website-btn {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #ffffff;
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.18);
}

.project-link {
  width: 100%;
  display: block;
}

.project-link .open-website-btn {
  display: block;
}

.learn-more-btn:hover,
.open-website-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.02);
  box-shadow: var(--shadow-md);
}

/* =========================
   About Section
========================= */
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 4.75rem 0 4.75rem;
}

.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: var(--max-width);
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.about-title {
  margin: 0;
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
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.12);
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

.about-content {
  text-align: left;
  margin: 0;
}

.about-content span {
  color: var(--primary);
  font-weight: 700;
}

.about-media {
  width: min(460px, 100%);
  height: 600px;
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: var(--shadow-md);
  background: var(--bg-alt);
  flex-shrink: 0;
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
  min-width: 100%;
  height: 100%;
  flex: 0 0 100%;
}

.about-image {
  width: 100%;
  height: 100%;
  display: block;
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
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.14);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background-color 0.22s ease;
}

.about-nav:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.18);
  border-color: rgba(37, 99, 235, 0.24);
  background: rgba(255, 255, 255, 0.98);
}

.about-nav:disabled {
  opacity: 0.48;
  cursor: default;
  transform: none;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
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
  cursor: pointer;
  opacity: 0.9;
  transition: width 0.22s ease, transform 0.22s ease, background-color 0.22s ease, opacity 0.22s ease;
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

/* =========================
   Contact Section
========================= */
.contact-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 5rem;
}

.contact-section::before {
  content: "";
  width: var(--max-width);
  max-width: calc(100% - 2rem);
  height: 1px;
  margin: 0 auto 3rem;
  background: rgba(148, 163, 184, 0.2);
}

.contact-title {
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
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
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
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 1rem;
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.18);
  flex-shrink: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.contact:hover .contact-icon {
  transform: scale(1.04);
  box-shadow: 0 16px 28px rgba(37, 99, 235, 0.22);
  filter: brightness(1.04);
}

/* =========================
   Footer
========================= */
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2rem);
  max-width: 1180px;
  margin: 0 auto 1rem;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  box-shadow: var(--shadow-md);
}

.footer p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

/* =========================
   Modal
========================= */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  inset: 0;
  overflow: auto;
  background-color: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.modal.is-open {
  display: block;
}

.modal-content {
  background: rgba(255, 255, 255, 0.96);
  margin: 8% auto;
  padding: 1.75rem;
  border: 1px solid var(--border);
  width: min(92%, 560px);
  border-radius: 1.5rem;
  position: relative;
  text-align: left;
  box-shadow: var(--shadow-lg);
}

.modal-close {
  color: var(--text-muted);
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: none;
  line-height: 1;
}

.modal-close:hover,
.modal-close:focus {
  color: var(--text);
}

/* =========================
   Focus States
========================= */
a:focus-visible,
button:focus-visible,
.hamburger:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.28);
  outline-offset: 3px;
}

/* =========================
   Responsive
========================= */
@media (max-width: 1300px) {
  .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 340px));
  }
}

@media (max-width: 1210px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    width: calc(100% - 1rem);
    top: 0.5rem;
  }

  .title {
    width: 100%;
    min-height: 3.2rem;
  }

  .nav-links-container {
    display: none;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem 0 0.25rem;
    margin: 0;
  }

  .nav-links-container li {
    width: 100%;
  }

  .nav-links-container a {
    display: inline-flex;
    justify-content: center;
  }

  .download-btn {
    width: 100%;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.38rem;
    margin-right: 0;
  }

  .hamburger-line {
    height: 0.1rem;
    width: 50%;
    background-color: var(--text);
    border-bottom: 1px solid var(--text);
  }

  .hero-section {
    min-height: calc(100svh - 7rem);
    display: flex;
  }

  .intro {
    width: 100%;
    text-align: center;
    padding-bottom: 0;
  }

  .intro p:not(.intro-name):not(.intro-position) {
    max-width: none;
  }

  .intro-socials {
    justify-content: center;
  }

  .intro-image-frame {
    width: min(400px, 88vw);
    height: min(68vh, 560px);
    max-height: none;
    align-self: center;
    margin-top: auto;
  }

  .intro-image {
    max-height: none;
  }

  .about {
    flex-direction: column;
    width: var(--max-width);
  }

  .about-media {
    width: min(420px, 88vw);
    height: 520px;
  }

  .hero-content {
    min-height: calc(100svh - 7rem);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 3rem;
    padding-bottom: 0;
    gap: 2rem;
  }

  .hero-wave {
    height: clamp(240px, 48vw, 380px);
  }
}


@media (max-width: 1080px) {
  .education-row,
  .education-row--reverse {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .education-row--reverse .education-card {
    order: 2;
  }

  .education-row--reverse .education-media {
    order: 1;
  }

  .education-media--portrait {
    width: min(320px, 100%);
  }

  .education-media--landscape {
    width: min(520px, 100%);
  }

  .education-media--shs {
    width: min(640px, 100%);
    min-height: 380px;
  }
}

@media (max-width: 1080px) {
  .skills-shell {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .skills-copy {
    position: static;
    max-width: 760px;
  }

  .skill-row {
    grid-template-columns: minmax(180px, 210px) minmax(0, 1fr);
    gap: 1.1rem;
  }
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
  .projects-container {
    grid-template-columns: 1fr;
    width: min(440px, calc(100% - 2rem));
  }

  .skills-section {
    padding: 3.4rem 0 3rem;
  }

  .skills-shell {
    gap: 2.4rem;
  }

  .skill-row {
    grid-template-columns: 1fr;
    gap: 0.95rem;
    padding: 1rem 0;
  }

  .skill-row:hover {
    transform: none;
  }

  .skill-values {
    padding-top: 0;
    font-size: 0.97rem;
    line-height: 1.8;
  }

  .about-section,
  .projects-section,
  .experience-section,
  .contact-section,
  .skills-section {
    padding-left: 0;
    padding-right: 0;
  }
}


@media (max-width: 800px) {
  .education-section {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 620px) {
  .education-section {
    padding: 4rem 0;
  }

  .education-list {
    gap: 2rem;
  }

  .education-degree {
    font-size: 1.75rem;
  }

  .education-school {
    font-size: 1rem;
  }

  .education-batch,
  .education-highlights li {
    font-size: 0.95rem;
  }

  .education-highlights {
    gap: 0.72rem;
  }

  .education-highlights i {
    width: 1.85rem;
    height: 1.85rem;
    font-size: 0.88rem;
  }

  .education-media--shs {
    min-height: 340px;
  }
}

@media (max-width: 430px) {
  .education-title {
    font-size: 1.75rem;
  }

  .education-intro {
    font-size: 0.95rem;
  }

  .education-degree {
    font-size: 1.58rem;
  }

  .education-row,
  .education-row--reverse {
    gap: 1.2rem;
  }
}

@media (max-width: 620px) {
  .experience-section-header {
    margin-bottom: 1.6rem;
  }

  .experience-section-title {
    font-size: 1.9rem;
  }

  .skills-section {
    padding-bottom: 2.75rem;
  }

  .skills-title {
    font-size: 1.85rem;
  }

  .skills-description {
    margin-top: 0.85rem;
    font-size: 0.96rem;
  }

  .skills-note {
    margin-top: 1rem;
    font-size: 0.84rem;
  }

  .certifications-block {
    margin-top: 2.2rem;
  }

  .certification-course {
    font-size: 0.97rem;
  }

  .certification-card {
    grid-template-columns: 0.85rem minmax(0, 1fr);
    column-gap: 0.72rem;
    padding: 0;
  }

  .skill-label {
    gap: 0.75rem;
  }

  .skill-index {
    min-width: 1.6rem;
    font-size: 0.74rem;
  }

  .skill-icon {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1rem;
  }

  .skill-title {
    font-size: 1rem;
  }

  .skill-subtitle,
  .skill-values {
    font-size: 0.94rem;
  }


  .experience-meta {
    gap: 0.65rem;
  }

  .experience-meta span {
    width: 100%;
  }

  .experience-points {
    padding-left: 1.2rem;
  }

  .experience-item {
    padding-left: 1rem;
  }

  .about-tags {
    gap: 0.65rem;
    margin: 1rem 0 1.25rem;
  }

  .about-tag {
    font-size: 0.86rem;
    padding: 0.55rem 0.78rem;
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
  .title h1 {
    font-size: 1.05rem;
  }

  .header {
    padding: 0.75rem 0.9rem;
  }

  .hamburger {
    width: 40px;
    height: 40px;
  }

  .hero-section {
    min-height: calc(100svh - 6rem);
    margin-top: 0.75rem;
  }

  .intro-socials {
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .intro-socials a {
    width: 52px;
    height: 52px;
  }

  .skills-title {
    font-size: 1.7rem;
  }

  .skill-label {
    align-items: flex-start;
  }

  .skill-title-group {
    padding-top: 0.05rem;
  }

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
    font-size: 0.83rem;
    padding: 0.52rem 0.72rem;
  }

  .project-card img {
    height: 190px;
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

  .contact {
    align-items: flex-start;
    min-height: auto;
  }

  .hero-content {
    min-height: calc(100svh - 6rem);
    padding-top: 2rem;
    padding-bottom: 0;
    gap: 1.5rem;
  }

  .hero-wave {
    height: 220px;
  }

  .intro-image-frame {
    width: min(320px, 86vw);
    height: min(62vh, 500px);
    margin-top: auto;
  }
}
  

/* =========================
   Skills Alignment Refresh
========================= */
.skills-list {
  display: grid;
  gap: 0;
}

.skill-row {
  display: grid;
  grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
  gap: 1.25rem 1.5rem;
  align-items: center;
  padding: 1.2rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.24);
  transition: border-color 0.25s ease, background-color 0.25s ease;
}

.skill-row:last-child {
  border-bottom: 1px solid rgba(148, 163, 184, 0.24);
}

.skill-row:hover {
  transform: none;
  border-color: rgba(37, 99, 235, 0.18);
}

.skill-label {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-width: 0;
}

.skill-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  font-size: 0.78rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--primary-strong);
  opacity: 0.78;
}

.skill-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary-strong);
  font-size: 1.04rem;
  line-height: 1;
  flex-shrink: 0;
}

.skill-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
}

.skill-values {
  margin: 0;
  padding-top: 0;
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text);
  overflow-wrap: anywhere;
}

.skill-values span {
  color: var(--text-muted);
}

@media (max-width: 1080px) {
  .skill-row {
    grid-template-columns: minmax(210px, 240px) minmax(0, 1fr);
    gap: 1rem 1.2rem;
  }
}

@media (max-width: 800px) {
  .skill-row {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    padding: 1rem 0;
    align-items: start;
  }

  .skill-values {
    font-size: 0.97rem;
    line-height: 1.8;
  }
}

@media (max-width: 620px) {
  .skills-shell {
    gap: 2.35rem;
  }

  .skills-list {
    margin-top: 0.2rem;
  }

  .skill-label {
    gap: 0.75rem;
  }

  .skill-index {
    min-width: 1.75rem;
    font-size: 0.72rem;
  }

  .skill-icon {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 0.96rem;
  }

  .skill-title,
  .skill-values {
    font-size: 0.94rem;
  }
}

@media (max-width: 430px) {
  .skills-shell {
    gap: 2.5rem;
  }

  .skill-label {
    gap: 0.68rem;
  }

  .skill-index {
    min-width: 1.6rem;
    font-size: 0.7rem;
  }

  .skill-icon {
    width: 2.05rem;
    height: 2.05rem;
    font-size: 0.9rem;
  }

  .skill-title {
    font-size: 0.98rem;
  }

  .skill-values {
    line-height: 1.72;
  }
}



@media (max-width: 800px) {
  .projects-section {
    padding: 5rem 0 3.6rem;
  }

  .projects-header {
    margin-bottom: 2.1rem;
  }
}

@media (max-width: 620px) {
  .about-section {
    padding: 3.8rem 0 3.8rem;
  }

  .projects-section {
    padding: 4.75rem 0 3.2rem;
  }

  .projects-header {
    margin-bottom: 1.9rem;
  }

  .project-intro {
    font-size: 0.96rem;
  }
}

@media (max-width: 430px) {
  .about-section {
    padding: 3.3rem 0 3.2rem;
  }

  .projects-section {
    padding: 4.5rem 0 3rem;
  }
}


@media (max-width: 800px) {
  .projects-wave--top-left {
    width: min(300px, 56vw);
    height: min(180px, 30vw);
  }

  .projects-wave--bottom-right {
    width: min(320px, 58vw);
    height: min(190px, 32vw);
  }
}


@media (max-width: 800px) {
  .education-section {
    padding-bottom: 2rem;
  }

  .contact-section {
    padding-top: 1.5rem;
  }

  .contact-section::before {
    margin-bottom: 2.25rem;
  }
}

@media (max-width: 620px) {
  .education-section {
    padding-top: 3.5rem;
    padding-bottom: 1.5rem;
  }

  .contact-section {
    padding-top: 1rem;
    padding-bottom: 4rem;
  }

  .contact-section::before {
    margin-bottom: 2rem;
  }
}

@media (max-width: 430px) {
  .education-section {
    padding-top: 3.25rem;
    padding-bottom: 1.1rem;
  }

  .contact-section {
    padding-top: 0.75rem;
    padding-bottom: 3.6rem;
  }

  .contact-section::before {
    margin-bottom: 1.8rem;
  }
}

@media (max-width: 430px) {
  .projects-wave--top-left {
    width: min(230px, 52vw);
    height: min(140px, 26vw);
  }

  .projects-wave--bottom-right {
    width: min(250px, 54vw);
    height: min(150px, 28vw);
  }
}
</style>
