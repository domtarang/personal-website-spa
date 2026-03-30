<template>
  <RouterView />
</template>

<style>
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

html {
  scroll-behavior: auto;
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

button {
  font: inherit;
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

a:focus-visible,
button:focus-visible,
.hamburger:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.28);
  outline-offset: 3px;
}
</style>