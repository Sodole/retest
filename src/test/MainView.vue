<template>
  <section class="video-box">
    <VCarousel
      height="100%"
      :show-arrows="false"
      cycle
      hide-delimiter-background
      delimiter-icon="mdi-ellipse-outline"
    >
      <VCarouselItem cover>
        <video
          id="video-1"
          muted
          autoplay
          playsinline
          loop
          class="background-video"
        >
          <source src="@/assets/videos/1-LC-LINE.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
        <div class="d-flex fill-height justify-left align-center pa-16 overlay">
          <div class="text-white">
            <div class="mb-8">
              <h3 class="title mb-8">SMART HYBRID 전문 PCO</h3>
              <div>
                <p>
                  Press Conference가 7월 2일 금요일, 무료 컨퍼런스로 진행됩니다.
                </p>
                <p>
                  차세대 디지털 플랫폼의 차별화된 전시 기획과 최신 IT 기술
                  기반의 글로벌 오퍼레이션 사례를 만나보세요.
                </p>
              </div>
            </div>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail') }}
            </VBtn>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail2') }}
            </VBtn>
          </div>
        </div>
      </VCarouselItem>

      <VCarouselItem
        src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg"
        cover
      >
        <div class="d-flex fill-height justify-left align-center pa-16">
          <div class="text-white">
            <div class="mb-8">
              <h3 class="title mb-8">SMART HYBRID 전문 PCO</h3>
              <div>
                <p>
                  Press Conference가 7월 2일 금요일, 무료 컨퍼런스로 진행됩니다.
                </p>
                <p>
                  차세대 디지털 플랫폼의 차별화된 전시 기획과 최신 IT 기술
                  기반의 글로벌 오퍼레이션 사례를 만나보세요.
                </p>
              </div>
            </div>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail') }}
            </VBtn>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail2') }}
            </VBtn>
          </div>
        </div></VCarouselItem
      >

      <VCarouselItem
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      >
        <div class="d-flex fill-height justify-left align-center pa-16">
          <div class="text-white">
            <div class="mb-8">
              <h3 class="title mb-8">SMART HYBRID 전문2 PCO</h3>
              <div>
                <p>
                  Press Conference가 7월 2일 금요일, 무료 컨퍼런스로 진행됩니다.
                </p>
                <p>
                  차세대 디지털 플랫폼의 차별화된 전시 기획과 최신 IT 기술
                  기반의 글로벌 오퍼레이션 사례를 만나보세요.
                </p>
              </div>
            </div>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail') }}
            </VBtn>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail2') }}
            </VBtn>
          </div>
        </div></VCarouselItem
      >

      <VCarouselItem
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      >
        <div class="d-flex fill-height justify-left align-center pa-16">
          <div class="text-white">
            <div class="mb-8">
              <h3 class="title mb-8">SMART HYBRID 전문3 PCO</h3>
              <div>
                <p>
                  Press Conference가 7월 2일 금요일, 무료 컨퍼런스로 진행됩니다.
                </p>
                <p>
                  차세대 디지털 플랫폼의 차별화된 전시 기획과 최신 IT 기술
                  기반의 글로벌 오퍼레이션 사례를 만나보세요.
                </p>
              </div>
            </div>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail') }}
            </VBtn>
            <VBtn
              variant="outlined"
              color="on-primary"
              class="detail-button rounded-xl"
              @click="$router.push({ name: 'Product' })"
            >
              {{ locale.t('$vuetify.homeView.landingSubText.detail2') }}
            </VBtn>
          </div>
        </div></VCarouselItem
      >
    </VCarousel>
  </section>

  <VContainer class="mt-16 overflow-hidden">
    <!-- section 1  -->
    <VRow class="mb-16 section-margin" no-gutters>
      <VCol class="d-flex flex-column justify-center">
        <VCardTitle class="px-0 text-primary py-1 text-caption">
          {{ locale.t('$vuetify.homeView.landingText.line1') }}
        </VCardTitle>
        <VCardItem class="px-0 py-1 mb-3">
          <h5 class="text-wrap mb-1">
            {{ locale.t('$vuetify.homeView.landingText.line2') }}
          </h5>
        </VCardItem></VCol
      >

      <VCol class="">
        <VCardText class="px-0 py-0 text-body-1 text-medium-emphasis">
          <div class="">
            {{ locale.t('$vuetify.homeView.landingSubText.line1') }}

            {{ locale.t('$vuetify.homeView.landingSubText.line2') }}

            {{ locale.t('$vuetify.homeView.landingSubText.line3') }}
          </div>
        </VCardText></VCol
      >
    </VRow>

    <!-- section 2  -->
    <VRow class="hex-box d-flex text-center section-margin">
      <VCol
        v-for="idx in 3"
        :key="idx"
        class="hex-component px-6 border-sm"
        cols="12"
        md="4"
      >
        <MainHref :idx="idx" class="mainhref" />
      </VCol>
    </VRow>
    <!-- section 3  -->
    <h3>news</h3>

    <MainNewsCard />

    <!-- section 4  -->
    <HomeLocationSection id="location-section" />
  </VContainer>
</template>

<script setup>
import { useLocale } from 'vuetify';
import HomeLocationSection from '@/components/HomeLocationSection.vue';
import MainHref from '@/test/components/MainHref.vue';
import MainNewsCard from '@/test/components/MainNewsCard.vue';

const locale = useLocale();
</script>
<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  font-size: 2rem !important;
}

.sub-title {
  font-size: 1rem !important;
}
.detail-button {
  width: 100%;
  max-width: 150px;
  height: 40px;
  margin-right: 10px;
}

.video-box {
  width: 100%;
  height: 720px;
  overflow: hidden;
  position: relative;
  margin-bottom: 200px;
}

.video-text {
  position: absolute;
  top: 65%;
  left: 45%;
  transform: translate(-50%, -50%);
}

video {
  height: 100%;
}

.hex-box {
  background-image: url('https://cdn.pixabay.com/photo/2019/11/26/08/43/montana-4654005_640.jpg');
  background-size: cover;
}
.hex-component {
  height: 350px;
}
@media screen and (min-width: 1280px) {
  video {
    width: 100% !important;
    height: auto;
  }
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: relative;
  z-index: 1;
}
.scale {
  transition: 0.3s ease-in-out;
}

// .mainhref {
//   background-image: url('https://cdn.pixabay.com/photo/2019/11/26/08/43/montana-4654005_640.jpg');
// }
</style>
