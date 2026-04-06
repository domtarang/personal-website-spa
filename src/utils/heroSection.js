export const createEmptyHeroSection = () => ({
  jobTitle: '',
  company: '',
  description: '',
  supportingText: '',
  heroButtons: [],
  heroImages: [],
})

export const cloneHeroSection = (source = createEmptyHeroSection()) => ({
  jobTitle: source?.jobTitle ?? '',
  company: source?.company ?? '',
  description: source?.description ?? '',
  supportingText: source?.supportingText ?? '',
  heroButtons: Array.isArray(source?.heroButtons)
    ? source.heroButtons.map((button, index) => ({
        id: button?.id || `hero-button-${index + 1}`,
        icon: button?.icon ?? '',
        link: button?.link ?? '',
        displayOrder: Number(button?.displayOrder ?? index + 1),
      }))
    : [],
  heroImages: Array.isArray(source?.heroImages)
    ? source.heroImages.map((image, index) => ({
        id: image?.id || `hero-image-${index + 1}`,
        url: image?.url ?? '',
        alt: image?.alt ?? '',
        displayOrder: Number(image?.displayOrder ?? index + 1),
      }))
    : [],
})

export const createHeroImageDraft = () => ({
  id: `hero-image-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
  url: '',
  alt: '',
  displayOrder: 0,
})

export const createHeroButtonDraft = () => ({
  id: `hero-button-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
  icon: '',
  link: '',
  displayOrder: 0,
})

export const sortByDisplayOrder = (items = []) => [...items].sort(
  (left, right) => Number(left?.displayOrder ?? 0) - Number(right?.displayOrder ?? 0),
)

export const syncDisplayOrder = (items = []) => items.map((item, index) => ({
  ...item,
  displayOrder: index + 1,
}))

export const reorderItems = (items, index, direction) => {
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
