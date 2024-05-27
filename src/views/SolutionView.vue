<template>
  <AppTitleBanner no-margin>
    {{ locale.t('$vuetify.header.navigationMenu.solution') }}
  </AppTitleBanner>

  <VTabs
    color="secondary"
    height="56"
    class="pt-2 mb-10"
    selected-class="bg-secondary on-secondary"
    bg-color="surface-variant"
    fixed-tabs
  >
    <VContainer class="d-flex justify-center py-0">
      <VTab rounded="0" class="h-100" @click="routerHandler('SolutionSmFarm')">
        <VImg src="@/assets/icons/icon-farm.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">SM-AI-FARM</span>
      </VTab>

      <VTab rounded="0" class="h-100" @click="routerHandler('SolutionSm2s')">
        <VImg src="@/assets/icons/icon-sm2s.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">SM2S</span>
      </VTab>

      <VTab rounded="0" class="h-100" @click="routerHandler('SolutionSmHaccp')">
        <VImg src="@/assets/icons/icon-haccp.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">SM-HACCP</span>
      </VTab>

      <VTab rounded="0" class="h-100" @click="routerHandler('SolutionSmGmp')">
        <VImg src="@/assets/icons/icon-haccp.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">SM-GMP</span>
      </VTab>
    </VContainer>
  </VTabs>

  <VContainer>
    <RouterView />
  </VContainer>
</template>

<script setup>
import { useLocale } from 'vuetify';
import { useRouter } from 'vue-router';
import AppTitleBanner from '@/components/AppTitleBanner.vue';

const locale = useLocale();

const router = useRouter();

const routerHandler = (name) => {
  if (!name) {
    alert('구현 중인 화면입니다');
    return;
  }

  router.push({ name });
};
</script>

<style lang="scss" scoped>
.logos {
  cursor: pointer;
  filter: grayscale(100%);
  transition: 0.3s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transition: 0.3s ease-in-out;
  }
}

.selected {
  filter: grayscale(0%) !important;
}
</style>
