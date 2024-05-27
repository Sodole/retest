<template lang="">
  <!-- il8n의 line이 1부터 시작하기 때문에 idx+1 -->
  <v-card class="mx-auto text-center">
    <v-img class="align-end text-white" height="500" :src="item.src" cover>
    </v-img>

    <v-card-subtitle class="pt-4"
      ><h3>
        {{
          locale.t(`$vuetify.aboutView.landingText.cardTitle.line${idx + 1}`)
        }}
      </h3></v-card-subtitle
    >

    <v-card-text>
      <div></div>

      <div>
        {{ locale.t(`$vuetify.aboutView.landingText.cardText.line${idx + 1}`) }}
      </div>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { useLocale } from 'vuetify';
import { defineProps } from 'vue';
const locale = useLocale();
const props = defineProps({
  idx: {
    type: Number,
    require: true,
  },
  item: {
    type: Object,
    require: true,
  },
});
</script>
<style lang="scss" scoped>
.video-box {
  width: 100%;
  height: 720px;
  overflow: hidden;
  position: relative;
}
</style>
