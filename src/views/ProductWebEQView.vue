<template>
  <VRow class="text-center section-margin"
    ><VCol class="d-flex"
      ><h3 class="mb-8 font-weight-bold text-web-eq mb-4">WEB EQ</h3></VCol
    ><VCol class="d-flex justify-end"
      ><ProductButton
        class="mr-4"
        color="web-eq"
        @click="routerHandler('Question')"
        >다운로드</ProductButton
      ><ProductButton color="web-eq" @click="routerHandler('WebeqForm')"
        >신청하기</ProductButton
      ></VCol
    >
  </VRow>

  <p class="text-subtitle-1">
    "<span class="text-web-eq">WEB EQ</span>는 스마트 제조 혁신에 최적화된
    미래형 산업용 AI 융합 Web <span class="text-web-eq">Platform</span>입니다."
  </p>
  <p class="text-caption mb-10">AI VISION - SMART MANUFACTURING</p>

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/web-eq-icon-1.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-web-eq font-weight-light">
          Web 개발환경
        </VCardTitle>
        <VCardText>
          <ul>
            <li>Drag & Drop 설정 방식</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/web-eq-icon-2.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-web-eq font-weight-light">
          딥러닝 알고리즘
        </VCardTitle>
        <VCardText>
          <ul>
            <li>결함 감지</li>
            <li>객체 판별</li>
            <li>문자 인식</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/web-eq-icon-3.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-web-eq font-weight-light">
          실시간 판별
        </VCardTitle>
        <VCardText>
          <ul>
            <li>산업용 비전</li>
            <li>카메라 연동</li>
            <li>실시간 판별 가능</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/web-eq-icon-4.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-web-eq font-weight-light">
          SDK 제공
        </VCardTitle>
        <VCardText>
          <ul>
            <li>C++, C#, LabVIEW, SMWP SDK 기본 제공</li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/web-eq-image-10.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>

    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two">
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-1-box" class="text-web-eq" />
          </template>
          Brower Server 구조
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-2-box" class="text-web-eq" />
          </template>
          산업 현장별 최적화 Customize
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-3-box" class="text-web-eq" />
          </template>
          딥러닝 알고리즘
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-4-box" class="text-web-eq" />
          </template>
          Drag & Drop 방식의 쉬운 개발 환경
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-5-box" class="text-web-eq" />
          </template>
          다양한 방식의 SDK 제공 시스템 확장
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-6-box" class="text-web-eq" />
          </template>
          실시간 이미지 처리
        </VListItem>
      </VList>
    </VCol>
  </VRow>

  <div class="d-flex flex-column ga-16">
    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">WEB EQ</h4>
      <VImg
        src="@/assets/images/web-eq-image-1.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
      <p class="text-center">
        WEB EQ는 AI Vision・AI Web SCADA・AI Web Monitoring이 모두 융합된 미래형
        산업용 AI Web Platform 입니다.
      </p>
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">아키텍처</h4>
      <VImg
        src="@/assets/images/web-eq-image-2.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">결함 감지</h4>
      <VImg
        src="@/assets/images/web-eq-image-3.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
      <div class="d-flex justify-center ga-4 flex-wrap">
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          AI 불량 검사 시스템
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          다양한 결함 리스트
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          AI 알고리즘
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          간섭 방지 기능
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          치수 회전
        </VChip>
      </div>
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">객체 판별</h4>
      <VImg
        src="@/assets/images/web-eq-image-4.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
      <div class="d-flex justify-center ga-4 flex-wrap">
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          타겟팅 기술
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          손쉬운 개발
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          결함 특징 감지
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          다중 대상 동시 인식
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          픽셀 수준 분할 및 인식
        </VChip>
      </div>
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">문자 인식</h4>
      <VImg
        src="@/assets/images/web-eq-image-5.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
      <div class="d-flex justify-center ga-4 flex-wrap">
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          제조 산업 맞춤형 문자 인식(OCR)
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          빠른 인식 속도와 높은 정확도
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          손쉬운 개발 및 모델 학습
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          간섭 방지 기능
        </VChip>
        <VChip class="bg-web-eq text-surface" rounded="lg" size="large">
          치수 회전
        </VChip>
      </div>
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">
        클라우드 기반 서비스
      </h4>
      <VImg
        src="@/assets/images/web-eq-image-6.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">SDK 제공</h4>
      <VImg
        src="@/assets/images/web-eq-image-7.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
      <p class="text-center font-weight-medium">SDK 다운로드</p>
      <p class="text-center mb-6">
        학습된 모델은 SDK로 다운로드하여 직접 호출하여 사용할 수 있도록 개발
        언어를 지원.
      </p>

      <p class="text-center font-weight-medium">다양한 카메라 인터페이스</p>
      <p class="text-center mb-6">
        실시간 카메라와 인터페이스하여 이미지를 판독 가능.
      </p>

      <p class="text-center font-weight-medium">모델 다운로드</p>
      <p class="text-center mb-6">
        CPU, GPU 버전의 모델 다운로드 기능 지원. 최대 50ms의 속도로 인터페이스
        가능.
      </p>
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">
        LowCode 활용
      </h4>
      <VImg
        src="@/assets/images/web-eq-image-8.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
      <p class="text-center font-weight-medium">플로우 노드 생성</p>
      <p class="text-center mb-6">
        기능별 노드 생성으로 코드 개발 없이 드래그 앤 드롭으로만으로도 쉽게 개발
        가능.
      </p>

      <p class="text-center font-weight-medium">기능 통합</p>
      <p class="text-center mb-6">
        문자 인식, 객체 판별, 불량 검출 등 다양한 모델을 통합하여 사용 가능.
      </p>

      <p class="text-center font-weight-medium">모니터링 화면 제공</p>
      <p class="text-center mb-6">
        AI 판단 결과를 시각화된 형태로 모니터링 및 제어 가능.
      </p>
    </div>

    <div class="py-4">
      <h4 class="mb-10 font-weight-bold text-web-eq text-center">적용분야</h4>
      <VImg
        src="@/assets/images/web-eq-image-9.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
    </div>
  </div>
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

<style lang=""></style>
