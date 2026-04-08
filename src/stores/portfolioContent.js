import { defineStore } from 'pinia'
import { fetchPortfolioContent, savePortfolioContent } from '@/services/portfolioContent'
import { clonePortfolioContent, createEmptyPortfolioContent, sortByDisplayOrder } from '@/utils/portfolioContent'

export const usePortfolioContentStore = defineStore('portfolioContent', {
  state: () => ({
    portfolioContent: createEmptyPortfolioContent(),
    hasLoaded: false,
  }),
  getters: {
    heroSection: (state) => state.portfolioContent.hero,
    aboutSection: (state) => state.portfolioContent.about,
    skillsSection: (state) => state.portfolioContent.skills,
    projectsSection: (state) => state.portfolioContent.projects,
    experienceSection: (state) => state.portfolioContent.experience,
    educationSection: (state) => state.portfolioContent.education,
    contactSection: (state) => state.portfolioContent.contact,
    sortedHeroImages: (state) => sortByDisplayOrder(state.portfolioContent.hero.heroImages),
    sortedHeroButtons: (state) => sortByDisplayOrder(state.portfolioContent.hero.heroButtons),
    aboutImages: (state) => sortByDisplayOrder(state.portfolioContent.about.images),
    certifications: (state) => sortByDisplayOrder(state.portfolioContent.skills.certifications),
    skillCategories: (state) => sortByDisplayOrder(state.portfolioContent.skills.categories),
    projectItems: (state) => sortByDisplayOrder(state.portfolioContent.projects.items),
    experienceItems: (state) => sortByDisplayOrder(state.portfolioContent.experience.items),
    contactItems: (state) => sortByDisplayOrder(state.portfolioContent.contact.items),
  },
  actions: {
    async fetch(force = false) {
      if (this.hasLoaded && !force) {
        return this.portfolioContent
      }

      const data = await fetchPortfolioContent()
      this.portfolioContent = clonePortfolioContent(data)
      this.hasLoaded = true
      return this.portfolioContent
    },
    async save(nextPortfolioContent, token) {
      const data = await savePortfolioContent(nextPortfolioContent, token)
      this.portfolioContent = clonePortfolioContent(data)
      this.hasLoaded = true
      return this.portfolioContent
    },
    replace(nextPortfolioContent) {
      this.portfolioContent = clonePortfolioContent(nextPortfolioContent)
      this.hasLoaded = true
    },
  },
})
