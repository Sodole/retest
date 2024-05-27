<template>
  <VDivider />
  <VFooter class="py-8 px-0">
    <VContainer>
      <VRow
        no-gutters
        class="text-medium-emphasis text-no-wra text-center"
        align="center"
      >
        <VCol cols="12" md="auto">
          <VImg
            src="@/assets/logos/logo.webp"
            width="60"
            alt="세인티(SAINTI)"
            class="mt-n1 mx-auto"
          />
        </VCol>

        <VCol cols="12" md="auto" :class="mdAndUp ? 'mx-6' : 'my-2'">
          &copy; Copyright SAINTI Inc.
        </VCol>

        <!-- 미사용 기능 주석 -->
        <!-- <VCol cols="12" md="auto">
          <a>개인정보 취급방침</a>
        </VCol>
        <VCol cols="12" md="auto" :class="mdAndUp ? 'mx-6' : 'my-2'">
          <a>사이트 이용약관</a>
        </VCol> -->
        <VCol cols="12" md="auto">
          <a @click="$router.push({ name: 'Question' })">온라인 문의</a>
        </VCol>

        <VSpacer />

        <VCol cols="12" md="auto">
          <VBtn
            variant="text"
            color="on-surface"
            class="text-body-1 text-medium-emphasis"
            :class="mdAndUp ? 'ml-6' : 'mt-2'"
            @click="openLinkHandler('https://www.youtube.com/@sainti6956')"
          >
            <template #prepend>
              <VIcon icon="mdi-youtube" color="#C4302B" />
            </template>
            Youtube
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VFooter>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const openLinkHandler = (link) => {
  window.open(link);
};

const { mdAndUp } = useDisplay();
</script>
