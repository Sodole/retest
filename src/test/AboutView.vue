<template>
  <section class="video-box">
    <!-- <v-img
      width="100%"
      height="80%"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
    </v-img> -->
    <VContainer
      class="d-flex flex-column justify-center align-center on-primary text-center"
    >
      <VCol class="jutify-center align-center">
        <div class="align-center">
          <h4 class="service-title">
            {{ locale.t('$vuetify.aboutView.mainTitle.menu') }}
          </h4>
        </div>
      </VCol>
      <VCol> </VCol>
      <VRow class="d-flex justify-center align-center">
        <VCol
          v-for="idx in 6"
          :key="idx"
          cols="12"
          sm="6"
          md="6"
          lg="4"
          class="d-flex justify-center align-center"
          id="testSection"
        >
          <AboutBox :idx="idx" :icons="icons[idx - 1].icon" />
        </VCol>
      </VRow>
    </VContainer>
  </section>

  <VContainer class="overflow-hidden">
    <!-- section 1  -->
    <VRow class="mt-16">
      <VCol cols="12" v-for="(item, idx) in items" :key="idx + 1">
        <AboutMainComponentVue :item="item" :idx="idx" />
      </VCol>
    </VRow>
    <!-- section 2  -->

    <!-- section 3  -->
  </VContainer>
</template>

<script setup>
import { useLocale } from 'vuetify';
import HomeLocationSection from '@/components/HomeLocationSection.vue';
import AboutBox from '@/test/components/AboutBox.vue';
import AboutMainComponentVue from './components/AboutMainComponent.vue';
import { VCol } from 'vuetify/lib/components/index.mjs';
import { computed, watch } from 'vue';

const locale = useLocale();
const icons = [
  { icon: 'mdi-map' },
  { icon: 'mdi-home' },
  { icon: 'mdi-account' },
  { icon: 'mdi-map' },
  { icon: 'mdi-home' },
  { icon: 'mdi-account' },
];

const items = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
];
computed: {
  function size() {
    const size = window.screen.width > 700 ? 'full' : 'semi';
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.75rem !important;
}

.service-title {
  position: relative;
  overflow: hidden;
}

.detail-button {
  width: 100%;
  max-width: 320px;
  height: 48px;
}

.video-box {
  overflow: hidden;
  position: relative;
  background-image: url('https://cdn.pixabay.com/photo/2020/04/02/21/56/forest-4996811_640.jpg');
  // 위코드만 사용하면 여백이 나와서 cover추가
  background-size: cover;
}

.video-text {
  width: 400px;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-60%, -60%);
}

video {
  height: 100%;
}

// }
</style>
