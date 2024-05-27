<template>
  <AppTitleBanner> 뉴스 </AppTitleBanner>

  <VContainer class="py-16">
    <RouterView />
  </VContainer>
</template>

<script setup>
import AppTitleBanner from '@/components/AppTitleBanner.vue';
</script>

<style lang="scss" scoped></style>
