<template lang="">
  <!-- v-if fullsize -->
  <VCol cols="3">
    <v-icon size="64" :icon="icons"></v-icon>
  </VCol>
  <v-col cols="9" class="text-left">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="mb-4">
          <h5>
            {{ locale.t(`$vuetify.aboutView.title.itemTitle.line${idx}`) }}
          </h5>
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ locale.t(`$vuetify.aboutView.title.itemContent.line${idx}`) }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-col>
  <!-- else 이거를 내보낼거다. -->
</template>
<script setup>
import { useDisplay } from 'vuetify';
import { useLocale } from 'vuetify';
import { defineProps } from 'vue';

// const size = 받아온사이즈;

const props = defineProps({
  idx: {
    type: Number,
    required: true,
  },
  icons: {
    type: Array,
    required: true,
  },
});

const openLinkHandler = (link) => {
  window.open(link);
};
const locale = useLocale();
const { smAndDown } = useDisplay();
</script>
<style lang="scss" scoped></style>
