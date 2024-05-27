<template>
  <VRow class="text-center section-margin"
    ><VCol class="d-flex"
      ><h3 class="mb-8 font-weight-bold text-smwp mb-4">SMWP</h3></VCol
    ><VCol class="d-flex justify-end"
      ><ProductButton
        class="mr-4"
        color="smwp"
        @click="routerHandler('Question')"
        >SWMP</ProductButton
      ><ProductButton color="smwp" @click="routerHandler('SmwpForm')"
        >SWMP 신청하기</ProductButton
      ></VCol
    >
  </VRow>

  <p class="text-subtitle-1">
    "<span class="text-smwp">SMWP</span>는 스마트팩토리 구축에 최적화 된
    <span class="text-smwp">Web 기반의 새로운 Platform</span>입니다."
  </p>
  <p class="text-caption mb-10">SMWP: SM-Web Platfrom</p>

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/smwp-icon-1.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-smwp font-weight-light">
          Web 개발환경
        </VCardTitle>
        <VCardText>
          <ul>
            <li>드래그, 클릭 및 설정방식</li>
            <li>간단한 Javascript 언어로 개발 가능</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/smwp-icon-2.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-smwp font-weight-light">
          편리한 레이아웃
        </VCardTitle>
        <VCardText>
          <ul>
            <li>메인페이지 레이아웃 빠른 생성</li>
            <li>가로/세로 화면 최적화</li>
            <li>브라우저별 화면 최적화</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/smwp-icon-3.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-smwp font-weight-light">
          높은 개방성, 안정성
        </VCardTitle>
        <VCardText>
          <ul>
            <li>화면, 데이터, 사용자 통합</li>
            <li>암호화 통신, 이중화, Log 검사, Dos 공격 방지</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/smwp-icon-4.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-smwp font-weight-light">
          Cross Platform
        </VCardTitle>
        <VCardText>
          <ul>
            <li>PC, Tablet, Smartphone 등 접속 가능</li>
            <li>Windows, Linux, Mac, Android, iOS 접속 가능</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/smwp.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>

    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two">
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-1-box" class="text-smwp" />
          </template>
          원격 통합 관제 시스템
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-2-box" class="text-smwp" />
          </template>
          산업 현장별 최적화 Customize
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-3-box" class="text-smwp" />
          </template>
          Browser Server 구조
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-4-box" class="text-smwp" />
          </template>
          온라인 편집
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-5-box" class="text-smwp" />
          </template>
          Drag & Drop 방식의 쉬운 개발 환경
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-6-box" class="text-smwp" />
          </template>
          설정식 데이터 인터페이스
        </VListItem>
      </VList>
    </VCol>
  </VRow>

  <h4 class="mb-10 font-weight-bold text-smwp text-center">아키텍처</h4>
  <VImg
    src="@/assets/images/smwp-architecture.webp"
    class="section-margin mx-auto"
    max-width="800"
  />

  <h4 class="mb-10 font-weight-bold text-smwp text-center">제품 기능</h4>
  <VRow>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-checkbox-blank" class="text-smwp text-h4" />
        </template>
        <h6>2D 그래픽 화면</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-cube-outline" class="text-smwp text-h4" />
        </template>
        <h6>3D 그래픽 화면</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-chart-bar" class="text-smwp text-h4" />
        </template>
        <h6>차트</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-cctv" class="text-smwp text-h4" />
        </template>
        <h6>CCTV</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-database" class="text-smwp text-h4" />
        </template>
        <h6>데이터 소스 지원</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-map-marker" class="text-smwp text-h4" />
        </template>
        <h6>GIS 지도</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-page-layout-body" class="text-smwp text-h4" />
        </template>
        <h6>UI 도구</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-shield-account" class="text-smwp text-h4" />
        </template>
        <h6>사용자, 권한 관리</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="4">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-cellphone" class="text-smwp text-h4" />
        </template>
        <h6>모바일 APP</h6>
      </VListItem>
    </VCol>
  </VRow>
</template>

<script setup>
import ProductButton from '@/test/components/ProductButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routerHandler = (name) => {
  if (!name) {
    alert('구현 중인 화면입니다');
    return;
  }

  router.push({ name });
};
</script>
