<template>
  <AppTitleBanner no-margin>
    {{ locale.t('$vuetify.header.navigationMenu.introduce') }}
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
      <VTab rounded="0" class="h-100" @click="routerHandler('ProductWebEQ')">
        <VImg src="@/assets/icons/icon-web-eq.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">WEB EQ</span>
      </VTab>

      <VTab rounded="0" class="h-100" @click="routerHandler('ProductSmwp')">
        <VImg src="@/assets/icons/icon-smwp.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">SMWP</span>
      </VTab>

      <VTab
        rounded="0"
        class="h-100"
        @click="routerHandler('ProductSmIoServer')"
      >
        <VImg src="@/assets/icons/icon-io-server.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">
          SM-IO SERVER
        </span>
      </VTab>
      <!-- twiz들어감 -->
      <VTab rounded="0" class="h-100" @click="routerHandler('ProductTwiz')">
        <VImg src="@/assets/icons/icon-haccp.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">SM-TWIZ</span>
      </VTab>
      <!-- <VTab
        rounded="0"
        class="h-100"
        @click="routerHandler('ProductQlikSense')"
      >
        <VImg src="@/assets/icons/icon-qlik.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">QLIK SENSE</span>
      </VTab>

      <VTab
        rounded="0"
        class="h-100"
        @click="routerHandler('ProductFactoryIO')"
      >
        <VImg src="@/assets/icons/icon-factory-io.webp" width="22" />
        <span class="ml-1 text-subtitle-1 font-weight-medium">FACTORY I/O</span>
      </VTab> -->
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
<!-- 
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
</style> -->
