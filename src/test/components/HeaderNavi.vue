<template>
  <VSlideGroup class="d-none d-md-flex">
    <VSlideGroupItem>
      <template v-for="firstLevel in MENUS">
        <VMenu
          v-if="firstLevel?.children"
          :key="`parent-${firstLevel.id}`"
          open-on-hover
        >
          <template #activator="{ props }">
            <VBtn v-bind="props" rounded="lg">
              {{ locale.t(`$vuetify.header.navigationMenu.${firstLevel.key}`) }}
            </VBtn>
          </template>

          <VList density="compact" class="text-subtitle-2">
            <VListItem
              v-for="secondLevel in firstLevel.children"
              :key="secondLevel.id"
              :prepend-icon="secondLevel.icon"
              @click="routerHandler(secondLevel.name, secondLevel?.scrollTo)"
            >
              {{
                locale.t(`$vuetify.header.navigationMenu.${secondLevel.key}`)
              }}
            </VListItem>
          </VList>
        </VMenu>

        <VBtn
          v-else
          :key="`leaf-${firstLevel.id}`"
          rounded="lg"
          @click="routerHandler(firstLevel.name)"
        >
          {{ locale.t(`$vuetify.header.navigationMenu.${firstLevel.key}`) }}
        </VBtn>
      </template>
    </VSlideGroupItem>
  </VSlideGroup>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useLocale } from 'vuetify';
import useMenu from '@/store/useMenu';

const { MENUS } = useMenu();

const locale = useLocale();

const router = useRouter();
const routerHandler = (name, hash) => {
  if (!name) {
    alert('구현 중인 화면입니다');
    return;
  }

  router.push({ name, hash });
};
</script>
