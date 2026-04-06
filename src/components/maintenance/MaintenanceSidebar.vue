<script setup>
defineProps({
  sections: {
    type: Array,
    required: true,
  },
  selectedSection: {
    type: String,
    required: true,
  },
})

defineEmits(['select', 'open-password', 'logout'])
</script>

<template>
  <aside class="maintenance-sidebar">
    <div class="sidebar-panel app-surface">
      <div class="sidebar-top">
        <p class="app-kicker">Maintenance Module</p>
      </div>

      <nav class="sidebar-nav" aria-label="Maintenance sections">
        <button
          v-for="section in sections"
          :key="section.key"
          type="button"
          :class="['sidebar-link', { 'is-active': selectedSection === section.key }]"
          @click="$emit('select', section.key)"
        >
          <span class="sidebar-link-icon-wrap">
            <i :class="['mdi', section.icon, 'sidebar-link-icon']"></i>
          </span>
          <span class="sidebar-link-copy">
            <span class="sidebar-link-label">{{ section.label }}</span>
          </span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <a class="app-secondary-button sidebar-footer-action" href="/" target="_blank" rel="noopener noreferrer">
          <i class="mdi mdi-open-in-new"></i>
          <span>Go to site</span>
        </a>

        <button class="app-secondary-button sidebar-footer-action" type="button" @click="$emit('open-password')">
          <i class="mdi mdi-lock-reset"></i>
          <span>Reset Password</span>
        </button>

        <button class="app-secondary-button sidebar-footer-action sidebar-footer-action-logout" type="button" @click="$emit('logout')">
          <i class="mdi mdi-logout"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.maintenance-sidebar {
  position: sticky;
  top: 1rem;
  height: calc(100vh - 2rem);
}

.sidebar-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  border-radius: 1.8rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.86));
}

.sidebar-top {
  margin-bottom: 1rem;
}

.sidebar-nav {
  display: grid;
  gap: 0.75rem;
  min-height: 0;
  overflow-y: auto;
  padding-right: 0.12rem;
}

.sidebar-link {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.9rem;
  width: 100%;
  padding: 0.9rem;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.72);
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.sidebar-link:hover {
  transform: translateY(-1px);
  border-color: rgba(99, 102, 241, 0.26);
  box-shadow: 0 14px 24px rgba(15, 23, 42, 0.06);
}

.sidebar-link.is-active {
  border-color: rgba(99, 102, 241, 0.18);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(139, 92, 246, 0.12));
}

.sidebar-link-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 1rem;
  background: rgba(248, 250, 252, 0.92);
  box-shadow: inset 0 0 0 1px rgba(148, 163, 184, 0.1);
}

.sidebar-link.is-active .sidebar-link-icon-wrap {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 14px 26px rgba(79, 70, 229, 0.2);
}

.sidebar-link-icon {
  font-size: 1.18rem;
  color: var(--text-muted);
}

.sidebar-link.is-active .sidebar-link-icon {
  color: #ffffff;
}

.sidebar-link-copy {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.sidebar-link-label {
  font-weight: 700;
}

.sidebar-footer {
  display: grid;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(226, 232, 240, 0.92);
}

.sidebar-footer-action {
  width: 100%;
}

.sidebar-footer-action-logout {
  border-color: rgba(239, 68, 68, 0.16);
  color: #b91c1c;
  background: rgba(255, 255, 255, 0.92);
}

@media (max-width: 960px) {
  .maintenance-sidebar {
    position: static;
    height: auto;
  }

  .sidebar-panel {
    height: auto;
  }
}
</style>
