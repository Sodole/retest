<template>
  <section class="video-box">
    <VCarousel
      class="h-100"
      :show-arrows="false"
      delimiter-icon="mdi-square"
      hide-delimiter-background
      cycle
    >
      <VCarouselItem cover>
        <video id="video-1" muted autoplay playsinline loop>
          <source src="@/assets/videos/1-LC-LINE.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
      </VCarouselItem>

      <VCarouselItem>
        <video id="video-2" muted autoplay playsinline loop>
          <source src="@/assets/videos/2-GAP-LINE.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
      </VCarouselItem>

      <VCarouselItem>
        <video id="video-3" muted autoplay playsinline loop>
          <source src="@/assets/videos/3-BP010.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
      </VCarouselItem>

      <VCarouselItem>
        <video id="video-4" muted autoplay playsinline loop>
          <source src="@/assets/videos/4-BP060.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
      </VCarouselItem>
    </VCarousel>

    <VContainer
      class="d-flex flex-column w-100 h-100 justify-center align-center on-primary text-center video-text"
    >
      <div class="mb-8">
        <h3 class="title text-center">Pioneer Of The Advance</h3>
        <h3 class="title text-center my-1">Technology for</h3>
        <h3 class="title text-center">AI & Digital Twin</h3>
      </div>

      <div class="mb-8">
        <p>
          {{ locale.t('$vuetify.homeView.landingSubText.line1') }}
        </p>
        <p>
          {{ locale.t('$vuetify.homeView.landingSubText.line2') }}
        </p>
        <p>
          {{ locale.t('$vuetify.homeView.landingSubText.line3') }}
        </p>
      </div>

      <VBtn
        variant="outlined"
        color="on-primary"
        rounded="0"
        class="detail-button"
        @click="$router.push({ name: 'Product' })"
      >
        {{ locale.t('$vuetify.homeView.landingSubText.detail') }}
      </VBtn>
    </VContainer>
  </section>

  <VContainer class="mt-10 overflow-hidden">
    <!-- section 1  -->
    <VRow class="mb-16" no-gutters>
      <VCol cols="12" class="d-flex align-center pa-0">
        <VCard color="background">
          <VCardItem class="px-0 text-primary py-1 text-caption">
            {{ locale.t('$vuetify.homeView.setion1.itemName') }}
          </VCardItem>

          <VCardTitle class="px-0 py-1 mb-3">
            <h4 class="text-wrap mb-1">
              {{ locale.t('$vuetify.homeView.setion1.itemTitle.line1') }}
            </h4>
            <h4 class="text-wrap">
              {{ locale.t('$vuetify.homeView.setion1.itemTitle.line2') }}
            </h4>
          </VCardTitle>

          <VCardText class="px-0 py-0 text-body-1 text-medium-emphasis">
            <p>
              {{ locale.t('$vuetify.homeView.setion1.itemText.line1') }}
            </p>
            <p>
              {{ locale.t('$vuetify.homeView.setion1.itemText.line2') }}
            </p>
            <p>
              {{ locale.t('$vuetify.homeView.setion1.itemText.line3') }}
            </p>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12" class="d-flex align-center">
        <VImg
          src="@/assets/images/home/home-section-1.jpg"
          height="320"
          class="mt-6"
          cover
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
    </VRow>

    <!-- section 2  -->
    <VRow class="mb-16" no-gutters>
      <VCol cols="12" class="d-flex justify-end align-center pa-0">
        <VCard color="background" class="text-end">
          <VCardItem class="px-0 text-primary py-1 text-caption">
            {{ locale.t('$vuetify.homeView.setion2.itemName') }}
          </VCardItem>

          <VCardTitle class="px-0 py-1 mb-3">
            <h4 class="text-wrap mb-1">
              {{ locale.t('$vuetify.homeView.setion2.itemTitle.line1') }}
            </h4>
            <h4 class="text-wrap">
              {{ locale.t('$vuetify.homeView.setion2.itemTitle.line2') }}
            </h4>
          </VCardTitle>

          <VCardText class="px-0 py-0 text-body-1 text-medium-emphasis">
            <p>
              {{ locale.t('$vuetify.homeView.setion2.itemText.line1') }}
            </p>
            <p>
              {{ locale.t('$vuetify.homeView.setion2.itemText.line2') }}
            </p>
            <p>
              {{ locale.t('$vuetify.homeView.setion2.itemText.line3') }}
            </p>
            <p>
              {{ locale.t('$vuetify.homeView.setion2.itemText.line4') }}
            </p>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12" class="d-flex align-center">
        <VImg
          src="@/assets/images/home/home-section-2.jpg"
          height="320"
          class="mt-6"
          cover
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
    </VRow>

    <!-- section 3  -->
    <VRow class="section-margin" no-gutters>
      <VCol cols="12" class="d-flex align-center pa-0">
        <VCard color="background">
          <VCardItem class="px-0 text-primary py-1 text-caption">
            {{ locale.t('$vuetify.homeView.setion3.itemName') }}
          </VCardItem>

          <VCardTitle class="px-0 py-1 mb-3">
            <h4 class="text-wrap mb-1">
              {{ locale.t('$vuetify.homeView.setion3.itemTitle.line1') }}
            </h4>
            <h4 class="text-wrap">
              {{ locale.t('$vuetify.homeView.setion3.itemTitle.line2') }}
            </h4>
          </VCardTitle>

          <VCardText class="px-0 py-0 text-body-1 text-medium-emphasis">
            <p>
              {{ locale.t('$vuetify.homeView.setion3.itemText.line1') }}
            </p>
            <p>
              {{ locale.t('$vuetify.homeView.setion3.itemText.line2') }}
            </p>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12" class="d-flex align-center">
        <VImg
          src="@/assets/images/home/home-section-3.jpg"
          height="320"
          class="mt-6"
          cover
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
    </VRow>

    <HomeLocationSection id="location-section" />
  </VContainer>
</template>

<script setup>
import { useLocale } from 'vuetify';
import HomeLocationSection from '@/components/HomeLocationSection.vue';

const locale = useLocale();
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.75rem !important;
}

.detail-button {
  width: 100%;
  max-width: 320px;
  height: 48px;
}

.video-box {
  width: 100%;
  height: 720px;
  overflow: hidden;
  position: relative;
}

.video-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

video {
  height: 100%;
}

@media screen and (min-width: 1280px) {
  video {
    width: 100% !important;
    height: auto;
  }
}
</style>
