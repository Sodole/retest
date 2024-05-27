<template>
  <VDivider />
  <VFooter class="py-8 px-0 bg-black" height="300">
    <VContainer>
      <VRow
        no-gutters
        class="d-flex justify-between text-medium-emphasis text-no-wrap text-center"
        align="center"
      >
        <VCol cols="12" md="auto">
          <VImg
            src="@/assets/logos/logo.webp"
            width="80"
            alt="세인티(SAINTI)"
            class="mt-n1 mx-auto"
          />
        </VCol>
        <VCol cols="12" lg="auto">
          <VCard class="d-flex bg-black mt-3 ml-8">
            <VCardText>
              {{ locale.t('$vuetify.footer.subMenu.item1') }}</VCardText
            ><VCardText>{{
              locale.t('$vuetify.footer.subMenu.item2')
            }}</VCardText
            ><VCardText>{{
              locale.t('$vuetify.footer.subMenu.item3')
            }}</VCardText
            ><VCardText>{{
              locale.t('$vuetify.footer.subMenu.item4')
            }}</VCardText></VCard
          ></VCol
        >
        <VSpacer />

        <VCol
          cols="12"
          lg="6"
          class="d-flex align-center justify-end"
          :class="{ 'justify-end': lgAndUp, 'justify-center': !lgAndUp }"
        >
          <VBtn
            variant="text"
            color="on-surface"
            class="text-body-1 text-medium-emphasis d-flex align-center justify-center mb-1"
            :class="mdAndUp ? 'ml-6' : 'mt-2'"
            @click="openLinkHandler('https://www.youtube.com/@sainti6956')"
          >
            <template #prepend>
              <VIcon icon="mdi-youtube" color="#C4302B" size="35" />
            </template>
          </VBtn>
          <VBtn
            variant="text"
            color="on-surface"
            class="text-body-1 text-medium-emphasis d-flex align-center justify-center"
            :class="mdAndUp ? 'ml-6' : 'mt-2'"
            @click="openLinkHandler('https://www.youtube.com/@sainti6956')"
          >
            <template #prepend>
              <VImg src="@/assets/icons/icon-naver.png" width="25" />
            </template> </VBtn
        ></VCol>
      </VRow>
      <!-- <VRow class="">
       </VRow
      > -->
      <VRow class="d-flex">
        <VCard class="bg-black"
          ><VCardText
            >{{ locale.t('$vuetify.footer.info.company') }} <br />{{
              locale.t('$vuetify.footer.info.address.magok')
            }}
            <br />남양주본사 :
            {{ locale.t('$vuetify.footer.info.address.namyangju') }}
          </VCardText></VCard
        >
      </VRow>
      <VRow>
        <VCol cols="12" md="auto"> &copy; Copyright SAINTI Inc. </VCol>
      </VRow>

      <!-- <VCol cols="12" md="auto">
        <a @click="$router.push({ name: 'Question' })">온라인 문의</a>
      </VCol> -->
    </VContainer>
  </VFooter>
</template>

<script setup>
import { useDisplay } from 'vuetify';
import { useLocale } from 'vuetify';

const locale = useLocale();
const openLinkHandler = (link) => {
  window.open(link);
};

const { mdAndUp, lgAndUp } = useDisplay();
</script>
