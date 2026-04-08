const createUid = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`

export const sortByDisplayOrder = (items = []) => [...items].sort(
  (left, right) => Number(left?.displayOrder ?? 0) - Number(right?.displayOrder ?? 0),
)

export const syncDisplayOrder = (items = []) => items.map((item, index) => ({
  ...item,
  displayOrder: index,
}))

export const reorderItems = (items = [], index, direction) => {
  const nextIndex = index + direction

  if (nextIndex < 0 || nextIndex >= items.length) {
    return ''
  }

  const [item] = items.splice(index, 1)
  items.splice(nextIndex, 0, item)

  const normalized = syncDisplayOrder(items)
  items.splice(0, items.length, ...normalized)

  return item?.id || ''
}

export const createHeroButtonDraft = () => ({
  id: createUid('hero-button'),
  icon: '',
  link: '',
  displayOrder: 0,
})

export const createImageDraft = (prefix = 'image') => ({
  id: createUid(prefix),
  url: '',
  alt: '',
  displayOrder: 0,
})

export const createCertificationDraft = () => ({
  id: createUid('certification'),
  title: '',
  href: '',
  date: '',
  displayOrder: 0,
})

export const createSkillCategoryDraft = () => ({
  id: createUid('skill-category'),
  name: '',
  mdi: '',
  content: '',
  displayOrder: 0,
})

export const createProjectDraft = () => ({
  id: createUid('project'),
  photo: '',
  projectName: '',
  shortDescription: '',
  spaStatus: 'down',
  apiStatus: 'down',
  primaryButton: {
    label: '',
    link: '',
  },
  secondaryButtonEnabled: false,
  secondaryButton: {
    label: '',
    link: '',
  },
  modalContent: '',
  displayOrder: 0,
})

export const createExperienceTagDraft = () => ({
  id: createUid('experience-tag'),
  mdi: '',
  text: '',
  displayOrder: 0,
})

export const createExperienceResponsibilityDraft = () => ({
  id: createUid('responsibility'),
  title: '',
  description: '',
  displayOrder: 0,
})

export const createExperienceDraft = () => ({
  id: createUid('experience'),
  experienceTitle: '',
  jobTitle: '',
  company: '',
  tags: [],
  shortDescription: '',
  responsibilities: [],
  displayOrder: 0,
})

export const createContactDraft = () => ({
  id: createUid('contact'),
  mdi: '',
  text: '',
  link: '',
  displayOrder: 0,
})

export const createEmptyPortfolioContent = () => ({
  hero: {
    jobTitle: '',
    company: '',
    description: '',
    supportingText: '',
    heroButtons: [],
    heroImages: [],
  },
  about: {
    paragraphs: ['', '', ''],
    images: [],
  },
  skills: {
    certifications: [],
    categories: [],
  },
  projects: {
    items: [],
  },
  experience: {
    photo: {
      url: '',
      alt: '',
    },
    items: [],
  },
  education: {
    collegePhoto: {
      url: '',
      alt: '',
    },
    seniorHighPhoto: {
      url: '',
      alt: '',
    },
  },
  contact: {
    items: [],
  },
  updatedAt: '',
})

export const clonePortfolioContent = (source = createEmptyPortfolioContent()) => ({
  hero: {
    jobTitle: source?.hero?.jobTitle ?? '',
    company: source?.hero?.company ?? '',
    description: source?.hero?.description ?? '',
    supportingText: source?.hero?.supportingText ?? '',
    heroButtons: syncDisplayOrder(Array.isArray(source?.hero?.heroButtons)
      ? source.hero.heroButtons.map((button, index) => ({
          id: button?.id || createUid(`hero-button-${index + 1}`),
          icon: button?.icon ?? '',
          link: button?.link ?? '',
          displayOrder: Number(button?.displayOrder ?? index),
        }))
      : []),
    heroImages: syncDisplayOrder(Array.isArray(source?.hero?.heroImages)
      ? source.hero.heroImages.map((image, index) => ({
          id: image?.id || createUid(`hero-image-${index + 1}`),
          url: image?.url ?? '',
          alt: image?.alt ?? '',
          displayOrder: Number(image?.displayOrder ?? index),
        }))
      : []),
  },
  about: {
    paragraphs: [0, 1, 2].map((index) => source?.about?.paragraphs?.[index] ?? ''),
    images: syncDisplayOrder(Array.isArray(source?.about?.images)
      ? source.about.images.map((image, index) => ({
          id: image?.id || createUid(`about-image-${index + 1}`),
          url: image?.url ?? '',
          alt: image?.alt ?? '',
          displayOrder: Number(image?.displayOrder ?? index),
        }))
      : []),
  },
  skills: {
    certifications: syncDisplayOrder(Array.isArray(source?.skills?.certifications)
      ? source.skills.certifications.map((certification, index) => ({
          id: certification?.id || createUid(`certification-${index + 1}`),
          title: certification?.title ?? '',
          href: certification?.href ?? '',
          date: certification?.date ?? '',
          displayOrder: Number(certification?.displayOrder ?? index),
        }))
      : []),
    categories: syncDisplayOrder(Array.isArray(source?.skills?.categories)
      ? source.skills.categories.map((category, index) => ({
          id: category?.id || createUid(`skill-category-${index + 1}`),
          name: category?.name ?? '',
          mdi: category?.mdi ?? '',
          content: category?.content ?? '',
          displayOrder: Number(category?.displayOrder ?? index),
        }))
      : []),
  },
  projects: {
    items: syncDisplayOrder(Array.isArray(source?.projects?.items)
      ? source.projects.items.map((project, index) => ({
          id: project?.id || createUid(`project-${index + 1}`),
          photo: project?.photo ?? '',
          projectName: project?.projectName ?? '',
          shortDescription: project?.shortDescription ?? '',
          spaStatus: project?.spaStatus === 'live' ? 'live' : 'down',
          apiStatus: project?.apiStatus === 'live' ? 'live' : 'down',
          primaryButton: {
            label: project?.primaryButton?.label ?? '',
            link: project?.primaryButton?.link ?? '',
          },
          secondaryButtonEnabled: Boolean(project?.secondaryButtonEnabled),
          secondaryButton: {
            label: project?.secondaryButton?.label ?? '',
            link: project?.secondaryButton?.link ?? '',
          },
          modalContent: project?.modalContent ?? '',
          displayOrder: Number(project?.displayOrder ?? index),
        }))
      : []),
  },
  experience: {
    photo: {
      url: source?.experience?.photo?.url ?? '',
      alt: source?.experience?.photo?.alt ?? '',
    },
    items: syncDisplayOrder(Array.isArray(source?.experience?.items)
      ? source.experience.items.map((item, index) => ({
          id: item?.id || createUid(`experience-${index + 1}`),
          experienceTitle: item?.experienceTitle ?? '',
          jobTitle: item?.jobTitle ?? '',
          company: item?.company ?? '',
          tags: syncDisplayOrder(Array.isArray(item?.tags)
            ? item.tags.map((tag, tagIndex) => ({
                id: tag?.id || createUid(`experience-tag-${tagIndex + 1}`),
                mdi: tag?.mdi ?? '',
                text: tag?.text ?? '',
                displayOrder: Number(tag?.displayOrder ?? tagIndex),
              }))
            : []),
          shortDescription: item?.shortDescription ?? '',
          responsibilities: syncDisplayOrder(Array.isArray(item?.responsibilities)
            ? item.responsibilities.map((responsibility, responsibilityIndex) => ({
                id: responsibility?.id || createUid(`responsibility-${responsibilityIndex + 1}`),
                title: responsibility?.title ?? '',
                description: responsibility?.description ?? '',
                displayOrder: Number(responsibility?.displayOrder ?? responsibilityIndex),
              }))
            : []),
          displayOrder: Number(item?.displayOrder ?? index),
        }))
      : []),
  },
  education: {
    collegePhoto: {
      url: source?.education?.collegePhoto?.url ?? '',
      alt: source?.education?.collegePhoto?.alt ?? '',
    },
    seniorHighPhoto: {
      url: source?.education?.seniorHighPhoto?.url ?? '',
      alt: source?.education?.seniorHighPhoto?.alt ?? '',
    },
  },
  contact: {
    items: syncDisplayOrder(Array.isArray(source?.contact?.items)
      ? source.contact.items.map((item, index) => ({
          id: item?.id || createUid(`contact-${index + 1}`),
          mdi: item?.mdi ?? '',
          text: item?.text ?? '',
          link: item?.link ?? '',
          displayOrder: Number(item?.displayOrder ?? index),
        }))
      : []),
  },
  updatedAt: source?.updatedAt ?? '',
})

export const shouldOpenInNewTab = (link = '') => /^https?:\/\//i.test(String(link).trim())

export const getProjectStatusTags = (project = {}) => {
  const spaStatus = project?.spaStatus === 'live' ? 'live' : 'down'
  const apiStatus = project?.apiStatus === 'live' ? 'live' : 'down'

  if (spaStatus === 'live' && apiStatus === 'live') {
    return [{ label: 'Production', status: 'live' }]
  }

  return [
    { label: 'SPA', status: spaStatus },
    { label: 'API', status: apiStatus },
  ]
}
