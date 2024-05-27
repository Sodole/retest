<template>
  <VContainer class="d-flex flex-column pb-6">
    <VBreadcrumbs :items="breadcrumbs" class="px-0">
      <template #divider>
        <VIcon icon="mdi-chevron-right" class="text-disabled" />
      </template>
    </VBreadcrumbs>

    <h4 class="mx-auto">
      <slot></slot>
    </h4>
  </VContainer>

  <VParallax
    v-if="image"
    :src="image"
    gradient="to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
    height="320"
    :class="noMargin || 'section-margin'"
  />
</template>

<script setup>
import useMenu from '@/store/useMenu';
import homeBannerImage from '@/assets/images/home/home-banner.jpg';

// eslint-disable-next-line no-undef
defineProps({
  image: {
    type: String,
    default: () => homeBannerImage,
  },
  noMargin: {
    type: Boolean,
    default: false,
  },
});

const { breadcrumbs } = useMenu();
</script>
