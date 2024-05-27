<template>
  <AppTitleBanner> 다운로드 </AppTitleBanner>

  <VContainer class="py-16">
    <h4 class="mb-4 text-primary">소개 자료</h4>
    <VRow>
      <VCol
        v-for="item in ARCHIVES"
        :key="item.key"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <VCard color="grey-lighten-4" class="fill-height pa-2" max-height="356">
          <VImg
            :src="item.image"
            width="126"
            height="180"
            cover
            class="mx-auto my-2 rounded-lg elevation-2"
          />
          <VCardTitle class="text-wrap" :class="`text-${item.color}`">
            {{ item.title }}
          </VCardTitle>
          <VCardSubtitle>{{ item.type }}</VCardSubtitle>
          <VCardActions class="d-flex justify-end">
            <VBtn
              append-icon="mdi-download"
              @click="downloadHandler(item.filename)"
            >
              다운로드
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>

    <!-- <VDivider class="section-margin mt-4" />

    <h4 class="mb-4 text-primary">고객 지원</h4>
    <VRow>
      <VCol
        v-for="item in SOFTWEARS"
        :key="item.key"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <VCard color="grey-lighten-4" class="fill-height pa-2" max-height="356">
          <VImg
            :src="item.image"
            width="126"
            height="180"
            class="mx-auto my-2 rounded-lg elevation-2 bg-background"
          />
          <VCardTitle class="text-wrap" :class="`text-${item.color}`">
            {{ item.title }}
          </VCardTitle>
          <VCardSubtitle>{{ item.type }}</VCardSubtitle>
          <VCardActions class="d-flex justify-end">
            <VBtn
              append-icon="mdi-download"
              @click="downloadHandler(item.filename)"
            >
              다운로드
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow> -->
  </VContainer>
</template>

<script setup>
import AppTitleBanner from '@/components/AppTitleBanner.vue';
import { fileDownload } from '@/api/file';
import profileCatalogImage from '@/assets/images/sainti-profile.webp';
import ioServerCatalogImage from '@/assets/images/sm-io-server-catalog.webp';
import webEqImage from '@/assets/images/web-eq-catalog.webp';
import smwpCatalogImage from '@/assets/images/smwp-catalog.webp';
import sm2sCatalogImage from '@/assets/images/sm2s-catalog.webp';
import haccpCatalogImage from '@/assets/images/sm-haccp-catalog.webp';
import nectosCatalogImage from '@/assets/images/nectos-catalog.webp';
import useUser from '@/store/useUser';
import useToast from '@/store/useToast';
import { devErrorLog, fileSave } from '@/utils/common';

const user = useUser();
const { popupSnackbar } = useToast();

const downloadHandler = async (fileName) => {
  try {
    if (!user.token) {
      popupSnackbar('warning', '로그인이 필요한 서비스 입니다');
      return;
    }

    const downloadFilePath = `catalogs/${fileName}`;

    // download 파일 가져오기 & 가상 Url 생성
    const file = await fileDownload(downloadFilePath);
    fileSave(file, fileName);
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '다운로드를 실패했습니다');
  }
};

const ARCHIVES = [
  {
    key: 'sainti',
    title: 'SAINTI 회사소개서',
    type: '소개서',
    image: profileCatalogImage,
    color: 'primary',
    filename: '세인티 카탈로그.pdf',
  },
  {
    key: 'web-eq',
    title: 'WEB EQ',
    type: '카탈로그',
    image: webEqImage,
    color: 'web-eq',
    filename: 'WEB EQ 카탈로그.pdf',
  },
  {
    key: 'smwp',
    title: 'SMWP',
    type: '카탈로그',
    image: smwpCatalogImage,
    color: 'smwp',
    filename: 'SMWP 카탈로그.pdf',
  },
  {
    key: 'sm-io-server',
    title: 'SM-IO SERVER',
    type: '카탈로그',
    image: ioServerCatalogImage,
    color: 'sm-io-server',
    filename: 'SM-IO SERVER 카탈로그.pdf',
  },
  {
    key: 'sm2s',
    title: 'SM2S',
    type: '카탈로그',
    image: sm2sCatalogImage,
    color: 'sm2s',
    filename: 'SM2S 카탈로그.pdf',
  },
  {
    key: 'sm-haccp',
    title: 'SM-HACCP',
    type: '카탈로그',
    image: haccpCatalogImage,
    color: 'sm-haccp',
    filename: 'HACCP 카탈로그.pdf',
  },
  {
    key: 'nectos',
    title: 'NECTOS',
    type: '카탈로그',
    image: nectosCatalogImage,
    color: 'factoryIo',
    filename: 'NECTOS 카탈로그.pdf',
  },
];

// const SOFTWEARS = [
//   {
//     key: 'sm-io-server-softwear',
//     title: 'SM-IO SERVER',
//     type: '소프트웨어',
//     image: ioServerSoftwearImage,
//     color: 'sm-io-server',
//     filename: 'SM-IO SERVER 카탈로그.pdf',
//   },
// ];
</script>
