<script setup>
import { ref } from 'vue'
import CollapsibleItemCard from '@/components/maintenance/CollapsibleItemCard.vue'
import {
  createCertificationDraft,
  createContactDraft,
  createExperienceDraft,
  createExperienceResponsibilityDraft,
  createExperienceTagDraft,
  createHeroButtonDraft,
  createImageDraft,
  createProjectDraft,
  createSkillCategoryDraft,
  reorderItems,
  syncDisplayOrder,
} from '@/utils/portfolioContent'

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  sectionKey: {
    type: String,
    required: true,
  },
})

const expandedItems = ref({})

const getItemKey = (item, fallback = '') => item?.id || fallback

const isItemExpanded = (item, fallback = '') => Boolean(expandedItems.value[getItemKey(item, fallback)])

const setItemExpanded = (item, expanded, fallback = '') => {
  const key = getItemKey(item, fallback)

  if (!key) {
    return
  }

  if (expanded) {
    expandedItems.value = {
      ...expandedItems.value,
      [key]: true,
    }
    return
  }

  const nextState = { ...expandedItems.value }
  delete nextState[key]
  expandedItems.value = nextState
}

const toggleItemExpanded = (item, fallback = '') => {
  setItemExpanded(item, !isItemExpanded(item, fallback), fallback)
}

const addItem = (collection, draftFactory) => {
  const draft = draftFactory()
  collection.push(draft)
  const normalized = syncDisplayOrder(collection)
  collection.splice(0, collection.length, ...normalized)
  setItemExpanded(draft, true)
}

const removeItem = (collection, index) => {
  const item = collection[index]
  setItemExpanded(item, false)
  collection.splice(index, 1)
  const normalized = syncDisplayOrder(collection)
  collection.splice(0, collection.length, ...normalized)
}

const movingItemId = ref('')
let movingItemTimer = null

const markMovedItem = (itemId) => {
  movingItemId.value = itemId

  if (movingItemTimer) {
    window.clearTimeout(movingItemTimer)
  }

  movingItemTimer = window.setTimeout(() => {
    if (movingItemId.value === itemId) {
      movingItemId.value = ''
    }
  }, 320)
}

const isMovingItem = (item) => Boolean(item?.id) && movingItemId.value === item.id

const moveItem = (collection, index, direction) => {
  const movedId = reorderItems(collection, index, direction)

  if (movedId) {
    markMovedItem(movedId)
  }
}

const toggleProjectSecondaryButton = (project) => {
  project.secondaryButtonEnabled = !project.secondaryButtonEnabled

  if (!project.secondaryButtonEnabled) {
    project.secondaryButton.label = ''
    project.secondaryButton.link = ''
  }
}

const collapseAllItems = () => {
  expandedItems.value = {}
}

defineExpose({
  collapseAllItems,
})

</script>

<template>
  <form class="portfolio-form" @submit.prevent>
    <template v-if="sectionKey === 'hero'">
      <section class="subsection-card">
        <div class="section-heading">
          <div>
            <h2>Text content</h2>
            <p>These values power the hero section on your public home page.</p>
          </div>
        </div>

        <div class="field-grid">
          <label class="field-block">
            <span>Job title</span>
            <input v-model="form.hero.jobTitle" class="app-input" type="text" placeholder="Backend Developer" :disabled="disabled" />
          </label>

          <label class="field-block">
            <span>Company</span>
            <input v-model="form.hero.company" class="app-input" type="text" placeholder="Petnet Inc." :disabled="disabled" />
          </label>

          <label class="field-block field-block-full">
            <span>Description</span>
            <textarea v-model="form.hero.description" class="app-textarea" rows="4" :disabled="disabled"></textarea>
          </label>

          <label class="field-block field-block-full">
            <span>Supporting text</span>
            <textarea v-model="form.hero.supportingText" class="app-textarea" rows="3" :disabled="disabled"></textarea>
          </label>
        </div>
      </section>

      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>Hero buttons</h2>
            <p>Add, remove, and reorder the action buttons shown in the hero section.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.hero.heroButtons, createHeroButtonDraft)">
            <i class="mdi mdi-plus"></i>
            <span>Add button</span>
          </button>
        </div>

        <TransitionGroup v-if="form.hero.heroButtons.length" name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(button, index) in form.hero.heroButtons"
            :key="button.id || index"
            :title="`Button ${index + 1}`"
            :moving="isMovingItem(button)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.hero.heroButtons.length - 1"
            :expanded="isItemExpanded(button)"
            @move-up="moveItem(form.hero.heroButtons, index, -1)"
            @move-down="moveItem(form.hero.heroButtons, index, 1)"
            @remove="removeItem(form.hero.heroButtons, index)"
            @toggle="toggleItemExpanded(button)"
          >
            <div class="field-grid">
              <label class="field-block">
                <span>MDI icon</span>
                <input v-model="button.icon" class="app-input" type="text" placeholder="mdi-email-outline" :disabled="disabled" />
              </label>

              <label class="field-block">
                <span>Link</span>
                <input v-model="button.link" class="app-input" type="text" placeholder="mailto:you@example.com or https://..." :disabled="disabled" />
              </label>
            </div>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>

      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>Hero images</h2>
            <p>Add, remove, and reorder the image sources used in the hero rotation.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.hero.heroImages, () => createImageDraft('hero-image'))">
            <i class="mdi mdi-plus"></i>
            <span>Add image</span>
          </button>
        </div>

        <TransitionGroup name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(image, index) in form.hero.heroImages"
            :key="image.id || index"
            :title="`Image ${index + 1}`"
            :moving="isMovingItem(image)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.hero.heroImages.length - 1"
            :remove-disabled="form.hero.heroImages.length === 1"
            :expanded="isItemExpanded(image)"
            @move-up="moveItem(form.hero.heroImages, index, -1)"
            @move-down="moveItem(form.hero.heroImages, index, 1)"
            @remove="removeItem(form.hero.heroImages, index)"
            @toggle="toggleItemExpanded(image)"
          >
            <div class="field-grid">
              <label class="field-block field-block-full">
                <span>Image URL</span>
                <input v-model="image.url" class="app-input" type="text" placeholder="/hero-images/hero-1.png or https://..." :disabled="disabled" />
              </label>
              <label class="field-block field-block-full">
                <span>Alt text</span>
                <input v-model="image.alt" class="app-input" type="text" placeholder="Hero portrait of Mark Dominic Tarang" :disabled="disabled" />
              </label>
            </div>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>
    </template>

    <template v-else-if="sectionKey === 'about'">
      <section class="subsection-card">
        <div class="section-heading">
          <div>
            <h2>About paragraphs</h2>
            <p>Update the three paragraphs shown in the About Me section.</p>
          </div>
        </div>

        <div class="field-grid">
          <label v-for="(paragraph, index) in form.about.paragraphs" :key="`about-paragraph-${index}`" class="field-block field-block-full">
            <span>Paragraph {{ index + 1 }}</span>
            <textarea v-model="form.about.paragraphs[index]" class="app-textarea" rows="5" :disabled="disabled"></textarea>
          </label>
        </div>
      </section>

      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>About images</h2>
            <p>Add, remove, and reorder the images used in the About Me gallery.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.about.images, () => createImageDraft('about-image'))">
            <i class="mdi mdi-plus"></i>
            <span>Add image</span>
          </button>
        </div>

        <TransitionGroup name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(image, index) in form.about.images"
            :key="image.id || index"
            :title="`Image ${index + 1}`"
            :moving="isMovingItem(image)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.about.images.length - 1"
            :remove-disabled="form.about.images.length === 1"
            :expanded="isItemExpanded(image)"
            @move-up="moveItem(form.about.images, index, -1)"
            @move-down="moveItem(form.about.images, index, 1)"
            @remove="removeItem(form.about.images, index)"
            @toggle="toggleItemExpanded(image)"
          >
            <div class="field-grid">
              <label class="field-block field-block-full">
                <span>Image URL</span>
                <input v-model="image.url" class="app-input" type="text" placeholder="/about-images/cycling-1.jpg or https://..." :disabled="disabled" />
              </label>
              <label class="field-block field-block-full">
                <span>Alt text</span>
                <input v-model="image.alt" class="app-input" type="text" placeholder="Cycling photo of Mark Dominic Tarang" :disabled="disabled" />
              </label>
            </div>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>
    </template>

    <template v-else-if="sectionKey === 'skills'">
      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>Certifications</h2>
            <p>Add, remove, and reorder the certifications shown in the Skills section.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.skills.certifications, createCertificationDraft)">
            <i class="mdi mdi-plus"></i>
            <span>Add certification</span>
          </button>
        </div>

        <TransitionGroup name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(certification, index) in form.skills.certifications"
            :key="certification.id || index"
            :title="`Certification ${index + 1}`"
            :moving="isMovingItem(certification)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.skills.certifications.length - 1"
            :expanded="isItemExpanded(certification)"
            @move-up="moveItem(form.skills.certifications, index, -1)"
            @move-down="moveItem(form.skills.certifications, index, 1)"
            @remove="removeItem(form.skills.certifications, index)"
            @toggle="toggleItemExpanded(certification)"
          >
            <div class="field-grid">
              <label class="field-block field-block-full">
                <span>Title</span>
                <input v-model="certification.title" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>Link</span>
                <input v-model="certification.href" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>Date</span>
                <input v-model="certification.date" class="app-input" type="text" placeholder="November 25, 2024" :disabled="disabled" />
              </label>
            </div>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>

      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>Skill categories</h2>
            <p>Add, remove, and reorder the skill categories shown on the public site.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.skills.categories, createSkillCategoryDraft)">
            <i class="mdi mdi-plus"></i>
            <span>Add category</span>
          </button>
        </div>

        <TransitionGroup name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(category, index) in form.skills.categories"
            :key="category.id || index"
            :title="`Category ${index + 1}`"
            :moving="isMovingItem(category)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.skills.categories.length - 1"
            :expanded="isItemExpanded(category)"
            @move-up="moveItem(form.skills.categories, index, -1)"
            @move-down="moveItem(form.skills.categories, index, 1)"
            @remove="removeItem(form.skills.categories, index)"
            @toggle="toggleItemExpanded(category)"
          >
            <div class="field-grid">
              <label class="field-block">
                <span>Category name</span>
                <input v-model="category.name" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>MDI</span>
                <input v-model="category.mdi" class="app-input" type="text" placeholder="mdi-server-outline" :disabled="disabled" />
              </label>
              <label class="field-block field-block-full">
                <span>Content</span>
                <textarea v-model="category.content" class="app-textarea" rows="4" placeholder="Node.js · Express.js · PostgreSQL" :disabled="disabled"></textarea>
              </label>
            </div>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>
    </template>

    <template v-else-if="sectionKey === 'projects'">
      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>Project cards</h2>
            <p>Add, remove, reorder, and edit project cards, deployment status, actions, and modal content.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.projects.items, createProjectDraft)">
            <i class="mdi mdi-plus"></i>
            <span>Add project</span>
          </button>
        </div>

        <TransitionGroup name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(project, index) in form.projects.items"
            :key="project.id || index"
            :title="`Project ${index + 1}`"
            :moving="isMovingItem(project)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.projects.items.length - 1"
            :expanded="isItemExpanded(project)"
            @move-up="moveItem(form.projects.items, index, -1)"
            @move-down="moveItem(form.projects.items, index, 1)"
            @remove="removeItem(form.projects.items, index)"
            @toggle="toggleItemExpanded(project)"
          >
            <div class="field-grid">
              <label class="field-block field-block-full">
                <span>Photo URL</span>
                <input v-model="project.photo" class="app-input" type="text" placeholder="/project-images/project.png or https://..." :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>Project name</span>
                <input v-model="project.projectName" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>Short description</span>
                <input v-model="project.shortDescription" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>SPA status</span>
                <select v-model="project.spaStatus" class="app-input" :disabled="disabled">
                  <option value="live">live</option>
                  <option value="down">down</option>
                </select>
              </label>
              <label class="field-block">
                <span>API status</span>
                <select v-model="project.apiStatus" class="app-input" :disabled="disabled">
                  <option value="live">live</option>
                  <option value="down">down</option>
                </select>
              </label>
            </div>

            <div class="nested-panel">
              <div class="nested-panel-header">
                <strong>Primary button</strong>
              </div>
              <div class="field-grid">
                <label class="field-block">
                  <span>Label</span>
                  <input v-model="project.primaryButton.label" class="app-input" type="text" :disabled="disabled" />
                </label>
                <label class="field-block">
                  <span>Link</span>
                  <input v-model="project.primaryButton.link" class="app-input" type="text" :disabled="disabled" />
                </label>
              </div>
            </div>

            <div class="nested-panel">
              <div :class="['nested-panel-header', 'nested-panel-header-split', { 'nested-panel-header--compact': !project.secondaryButtonEnabled }]">
                <strong>Secondary button</strong>
                <button class="app-secondary-button" type="button" :disabled="disabled" @click="toggleProjectSecondaryButton(project)">
                  <i :class="['mdi', project.secondaryButtonEnabled ? 'mdi-toggle-switch' : 'mdi-toggle-switch-off-outline']"></i>
                  <span>{{ project.secondaryButtonEnabled ? 'Disable' : 'Enable' }}</span>
                </button>
              </div>
              <div v-if="project.secondaryButtonEnabled" class="field-grid">
                <label class="field-block">
                  <span>Label</span>
                  <input v-model="project.secondaryButton.label" class="app-input" type="text" :disabled="disabled" />
                </label>
                <label class="field-block">
                  <span>Link</span>
                  <input v-model="project.secondaryButton.link" class="app-input" type="text" :disabled="disabled" />
                </label>
              </div>
            </div>

            <label class="field-block field-block-full">
              <span>Learn More modal content</span>
              <textarea v-model="project.modalContent" class="app-textarea" rows="8" :disabled="disabled"></textarea>
            </label>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>
    </template>

    <template v-else-if="sectionKey === 'experience'">
      <section class="subsection-card">
        <div class="section-heading">
          <div>
            <h2>Experience photo</h2>
            <p>Update the photo shown above the experience cards.</p>
          </div>
        </div>

        <div class="field-grid">
          <label class="field-block field-block-full">
            <span>Photo URL</span>
            <input v-model="form.experience.photo.url" class="app-input" type="text" placeholder="/experience-images/petnet-genmeet.jpg or https://..." :disabled="disabled" />
          </label>
          <label class="field-block field-block-full">
            <span>Alt text</span>
            <input v-model="form.experience.photo.alt" class="app-input" type="text" :disabled="disabled" />
          </label>
        </div>
      </section>

      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>Experiences</h2>
            <p>Add, remove, reorder, and edit experiences, tags, and responsibilities.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.experience.items, createExperienceDraft)">
            <i class="mdi mdi-plus"></i>
            <span>Add experience</span>
          </button>
        </div>

        <TransitionGroup name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(experience, index) in form.experience.items"
            :key="experience.id || index"
            :title="`Experience ${index + 1}`"
            :moving="isMovingItem(experience)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.experience.items.length - 1"
            :expanded="isItemExpanded(experience)"
            @move-up="moveItem(form.experience.items, index, -1)"
            @move-down="moveItem(form.experience.items, index, 1)"
            @remove="removeItem(form.experience.items, index)"
            @toggle="toggleItemExpanded(experience)"
          >
            <div class="field-grid">
              <label class="field-block">
                <span>Experience title</span>
                <input v-model="experience.experienceTitle" class="app-input" type="text" placeholder="Professional Experience" :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>Job title</span>
                <input v-model="experience.jobTitle" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block field-block-full">
                <span>Company</span>
                <input v-model="experience.company" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block field-block-full">
                <span>Short experience description</span>
                <textarea v-model="experience.shortDescription" class="app-textarea" rows="4" :disabled="disabled"></textarea>
              </label>
            </div>

            <div class="nested-panel">
              <div :class="['nested-panel-header', 'nested-panel-header-split', { 'nested-panel-header--compact': !experience.tags.length }]">
                <strong>Tags</strong>
                <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(experience.tags, createExperienceTagDraft)">
                  <i class="mdi mdi-plus"></i>
                  <span>Add tag</span>
                </button>
              </div>

              <TransitionGroup v-if="experience.tags.length" name="reorder-list" tag="div" class="nested-list">
                <CollapsibleItemCard
                  v-for="(tag, tagIndex) in experience.tags"
                  :key="tag.id || tagIndex"
                  :title="`Tag ${tagIndex + 1}`"
                  :moving="isMovingItem(tag)"
                  :disabled="disabled"
                  :move-up-disabled="tagIndex === 0"
                  :move-down-disabled="tagIndex === experience.tags.length - 1"
                  :expanded="isItemExpanded(tag)"
                  nested
                  @move-up="moveItem(experience.tags, tagIndex, -1)"
                  @move-down="moveItem(experience.tags, tagIndex, 1)"
                  @remove="removeItem(experience.tags, tagIndex)"
                  @toggle="toggleItemExpanded(tag)"
                >
                  <div class="field-grid">
                    <label class="field-block">
                      <span>MDI</span>
                      <input v-model="tag.mdi" class="app-input" type="text" placeholder="mdi-calendar-range" :disabled="disabled" />
                    </label>
                    <label class="field-block">
                      <span>Text</span>
                      <input v-model="tag.text" class="app-input" type="text" :disabled="disabled" />
                    </label>
                  </div>
                </CollapsibleItemCard>
              </TransitionGroup>
            </div>

            <div class="nested-panel">
              <div :class="['nested-panel-header', 'nested-panel-header-split', { 'nested-panel-header--compact': !experience.responsibilities.length }]">
                <strong>Responsibilities</strong>
                <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(experience.responsibilities, createExperienceResponsibilityDraft)">
                  <i class="mdi mdi-plus"></i>
                  <span>Add responsibility</span>
                </button>
              </div>

              <TransitionGroup v-if="experience.responsibilities.length" name="reorder-list" tag="div" class="nested-list">
                <CollapsibleItemCard
                  v-for="(responsibility, responsibilityIndex) in experience.responsibilities"
                  :key="responsibility.id || responsibilityIndex"
                  :title="`Responsibility ${responsibilityIndex + 1}`"
                  :moving="isMovingItem(responsibility)"
                  :disabled="disabled"
                  :move-up-disabled="responsibilityIndex === 0"
                  :move-down-disabled="responsibilityIndex === experience.responsibilities.length - 1"
                  :expanded="isItemExpanded(responsibility)"
                  nested
                  @move-up="moveItem(experience.responsibilities, responsibilityIndex, -1)"
                  @move-down="moveItem(experience.responsibilities, responsibilityIndex, 1)"
                  @remove="removeItem(experience.responsibilities, responsibilityIndex)"
                  @toggle="toggleItemExpanded(responsibility)"
                >
                  <div class="field-grid">
                    <label class="field-block field-block-full">
                      <span>Responsibility title</span>
                      <input v-model="responsibility.title" class="app-input" type="text" :disabled="disabled" />
                    </label>
                    <label class="field-block field-block-full">
                      <span>Responsibility description</span>
                      <textarea v-model="responsibility.description" class="app-textarea" rows="4" :disabled="disabled"></textarea>
                    </label>
                  </div>
                </CollapsibleItemCard>
              </TransitionGroup>
            </div>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>
    </template>

    <template v-else-if="sectionKey === 'education'">
      <section class="subsection-card">
        <div class="section-heading">
          <div>
            <h2>Education photos</h2>
            <p>Only the college and senior high school photos are editable here.</p>
          </div>
        </div>

        <div class="field-grid">
          <label class="field-block field-block-full">
            <span>College photo URL</span>
            <input v-model="form.education.collegePhoto.url" class="app-input" type="text" placeholder="/education-images/college-graduation.jpg or https://..." :disabled="disabled" />
          </label>
          <label class="field-block field-block-full">
            <span>College photo alt text</span>
            <input v-model="form.education.collegePhoto.alt" class="app-input" type="text" :disabled="disabled" />
          </label>
          <label class="field-block field-block-full">
            <span>Senior high school photo URL</span>
            <input v-model="form.education.seniorHighPhoto.url" class="app-input" type="text" placeholder="/education-images/shs-graduation.png or https://..." :disabled="disabled" />
          </label>
          <label class="field-block field-block-full">
            <span>Senior high school photo alt text</span>
            <input v-model="form.education.seniorHighPhoto.alt" class="app-input" type="text" :disabled="disabled" />
          </label>
        </div>
      </section>
    </template>

    <template v-else-if="sectionKey === 'contact'">
      <section class="subsection-card">
        <div class="section-heading section-heading-split">
          <div>
            <h2>Contact cards</h2>
            <p>Add, remove, reorder, and edit the contact cards shown on the public site.</p>
          </div>
          <button class="app-secondary-button" type="button" :disabled="disabled" @click="addItem(form.contact.items, createContactDraft)">
            <i class="mdi mdi-plus"></i>
            <span>Add contact</span>
          </button>
        </div>

        <TransitionGroup name="reorder-list" tag="div" class="item-list">
          <CollapsibleItemCard
            v-for="(contact, index) in form.contact.items"
            :key="contact.id || index"
            :title="`Contact ${index + 1}`"
            :moving="isMovingItem(contact)"
            :disabled="disabled"
            :move-up-disabled="index === 0"
            :move-down-disabled="index === form.contact.items.length - 1"
            :expanded="isItemExpanded(contact)"
            @move-up="moveItem(form.contact.items, index, -1)"
            @move-down="moveItem(form.contact.items, index, 1)"
            @remove="removeItem(form.contact.items, index)"
            @toggle="toggleItemExpanded(contact)"
          >
            <div class="field-grid">
              <label class="field-block">
                <span>MDI</span>
                <input v-model="contact.mdi" class="app-input" type="text" placeholder="mdi-email-outline" :disabled="disabled" />
              </label>
              <label class="field-block">
                <span>Text</span>
                <input v-model="contact.text" class="app-input" type="text" :disabled="disabled" />
              </label>
              <label class="field-block field-block-full">
                <span>Link</span>
                <input v-model="contact.link" class="app-input" type="text" placeholder="mailto:you@example.com or https://..." :disabled="disabled" />
              </label>
            </div>
          </CollapsibleItemCard>
        </TransitionGroup>
      </section>
    </template>
  </form>
</template>

<style scoped>
.portfolio-form {
  height: 100%;
}

.subsection-card {
  margin-top: 1rem;
  padding: 1.15rem;
  border-radius: 1.4rem;
  border: 1px solid rgba(226, 232, 240, 0.85);
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.78), rgba(255, 255, 255, 0.88));
}

.section-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-heading-split,
.nested-panel-header-split {
  align-items: center;
}

.section-heading h2,
.nested-panel-header strong {
  margin: 0;
  font-family: var(--font-heading);
  letter-spacing: -0.04em;
  color: var(--text);
}

.section-heading p {
  margin: 0.45rem 0 0;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.field-block {
  display: flex;
  flex-direction: column;
}

.field-block span {
  margin-bottom: 0.48rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text);
}

.field-block-full {
  grid-column: 1 / -1;
}

.item-list,
.nested-list {
  display: grid;
  gap: 1rem;
}

.item-card,
.nested-card {
  padding: 1rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(148, 163, 184, 0.14);
  transition: background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}

.item-card.is-moving,
.nested-card.is-moving {
  border-color: rgba(37, 99, 235, 0.28);
  background: rgba(239, 246, 255, 0.96);
  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.12);
}

.item-card-header,
.nested-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.item-card-header--nested {
  margin-bottom: 0.85rem;
}

.item-card-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.65rem;
}

.nested-panel-header--compact {
  margin-bottom: 0;
}

.nested-panel {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(226, 232, 240, 0.85);
  background: rgba(248, 250, 252, 0.72);
}


.reorder-list-move,
.reorder-list-enter-active,
.reorder-list-leave-active {
  transition: transform 0.28s ease, opacity 0.28s ease;
}

.reorder-list-enter-from,
.reorder-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.reorder-list-leave-active {
  position: absolute;
}

@media (max-width: 960px) {
  .section-heading,
  .section-heading-split,
  .item-card-header,
  .nested-panel-header {
    flex-direction: column;
    align-items: stretch;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
