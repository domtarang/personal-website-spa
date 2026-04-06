<script setup>
import HeroTextContentSection from '@/components/maintenance/hero/HeroTextContentSection.vue'
import HeroButtonsSection from '@/components/maintenance/hero/HeroButtonsSection.vue'
import HeroImagesSection from '@/components/maintenance/hero/HeroImagesSection.vue'

defineProps({
  form: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  movingHeroButtonId: {
    type: String,
    default: '',
  },
  movingHeroImageId: {
    type: String,
    default: '',
  },
})

defineEmits([
  'add-hero-button',
  'remove-hero-button',
  'move-hero-button',
  'add-hero-image',
  'remove-hero-image',
  'move-hero-image',
])
</script>

<template>
  <form class="hero-form" @submit.prevent>
    <HeroTextContentSection :form="form" :disabled="disabled" />

    <HeroButtonsSection
      :buttons="form.heroButtons"
      :disabled="disabled"
      :moving-item-id="movingHeroButtonId"
      @add="$emit('add-hero-button')"
      @remove="(index) => $emit('remove-hero-button', index)"
      @move="(index, direction) => $emit('move-hero-button', index, direction)"
    />

    <HeroImagesSection
      :images="form.heroImages"
      :disabled="disabled"
      :moving-item-id="movingHeroImageId"
      @add="$emit('add-hero-image')"
      @remove="(index) => $emit('remove-hero-image', index)"
      @move="(index, direction) => $emit('move-hero-image', index, direction)"
    />
  </form>
</template>

<style scoped>
.hero-form {
  height: 100%;
}
</style>
