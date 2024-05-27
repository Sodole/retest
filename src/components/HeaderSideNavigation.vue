<template>
  <VNavigationDrawer
    :model-value="isShow"
    location="right"
    disable-resize-watcher
    class="bg-black"
  >
    <VList nav>
      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props" prepend-icon="mdi-domain">
            {{ locale.t('$vuetify.header.navigationMenu.about') }}
          </VListItem>
        </template>

        <VListItem
          prepend-icon="mdi-information"
          @click="routerHandler('About')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.about') }}
        </VListItem>
        <VListItem prepend-icon="mdi-map" @click="routerHandler('Customer')">
          {{ locale.t('$vuetify.header.navigationMenu.customer') }}
        </VListItem>
        <!-- <VListItem
          prepend-icon="mdi-timeline-text"
          @click="routerHandler('Timeline')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.history') }}
        </VListItem> -->
        <VListItem
          prepend-icon="mdi-clipboard-edit"
          @click="routerHandler('List')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.news') }}
        </VListItem>
      </VListGroup>

      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props" prepend-icon="mdi-monitor-dashboard">
            {{ locale.t('$vuetify.header.navigationMenu.introduce') }}
          </VListItem>
        </template>

        <VListItem
          prepend-icon="mdi-code-braces-box"
          @click="routerHandler('Product')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.product') }}
        </VListItem>
        <VListItem
          prepend-icon="mdi-lightbulb-on"
          @click="routerHandler('Solution')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.solution') }}
        </VListItem>
        <VListItem
          prepend-icon="mdi-newspaper-variant"
          @click="routerHandler('Application')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.application') }}
        </VListItem>
        <!-- <VListItem
          prepend-icon="mdi-expansion-card"
          @click="routerHandler('Hardware')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.hardware') }}
        </VListItem> -->
      </VListGroup>

      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props" prepend-icon="mdi-account">
            {{ locale.t('$vuetify.header.navigationMenu.support') }}
          </VListItem>
        </template>

        <VListItem
          prepend-icon="mdi-download-box"
          @click="routerHandler('Download')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.download') }}
        </VListItem>
        <VListItem
          prepend-icon="mdi-help-rhombus"
          @click="routerHandler('Question')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.question') }}
        </VListItem>
      </VListGroup>

      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props" prepend-icon="mdi-school">
            {{ locale.t('$vuetify.header.navigationMenu.education') }}
          </VListItem>
        </template>

        <VListItem
          prepend-icon="mdi-calendar-today"
          @click="routerHandler('Schedule')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.schedule') }}
        </VListItem>
        <VListItem
          prepend-icon="mdi-clipboard-edit"
          @click="routerHandler('Classroom')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.classroom') }}
        </VListItem>
        <VListItem
          prepend-icon="mdi-clipboard-edit"
          @click="routerHandler('Announcement')"
        >
          {{ locale.t('$vuetify.header.navigationMenu.announcement') }}
        </VListItem>
      </VListGroup>
    </VList>
  </VNavigationDrawer>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useLocale } from 'vuetify';

const locale = useLocale();

// eslint-disable-next-line no-undef
defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
const routerHandler = (name, hash) => {
  if (!name) {
    alert('구현 중인 화면입니다');
    return;
  }

  router.push({ name, hash });
};
</script>
