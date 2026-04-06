import { defineStore } from 'pinia'
import { fetchHeroSection, saveHeroSection } from '@/services/heroSection'
import { cloneHeroSection, createEmptyHeroSection, sortByDisplayOrder } from '@/utils/heroSection'

export const useHeroSectionStore = defineStore('heroSection', {
  state: () => ({
    heroSection: createEmptyHeroSection(),
    hasLoaded: false,
  }),
  getters: {
    sortedHeroImages: (state) => sortByDisplayOrder(state.heroSection.heroImages),
    sortedHeroButtons: (state) => sortByDisplayOrder(state.heroSection.heroButtons),
  },
  actions: {
    async fetch(force = false) {
      if (this.hasLoaded && !force) {
        return this.heroSection
      }

      const data = await fetchHeroSection()
      this.heroSection = cloneHeroSection(data)
      this.hasLoaded = true
      return this.heroSection
    },
    async save(nextHeroSection, token) {
      const data = await saveHeroSection(nextHeroSection, token)
      this.heroSection = cloneHeroSection(data)
      this.hasLoaded = true
      return this.heroSection
    },
    replace(nextHeroSection) {
      this.heroSection = cloneHeroSection(nextHeroSection)
      this.hasLoaded = true
    },
  },
})
