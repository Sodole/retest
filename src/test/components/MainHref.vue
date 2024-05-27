<template lang="">
  <VCard
    class="py-10 px-6 fill-height d-flex flex-column justify-center align-center"
  >
    <VCardTitle primary-title class="">
      {{ locale.t(`$vuetify.mainView.landingTitle.title${idx}`) }}</VCardTitle
    ><VCardText class="">{{
      locale.t(`$vuetify.mainView.landingSubTitle.subTitle${idx}`)
    }}</VCardText
    ><VCardActions><v-btn color="orange" text="더보기"></v-btn></VCardActions
  ></VCard>
</template>
<script setup>
import { useLocale } from 'vuetify';
import { defineProps } from 'vue';
const locale = useLocale();
const props = defineProps({
  idx: { type: Number, required: true },
});
</script>
<style lang="scss" scoped>
.v-card {
  height: 100%; /* 부모 컨테이너의 높이에 맞추도록 설정 */
  background-color: transparent;
}
</style>
