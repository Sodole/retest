<template>
  <h3 class="font-weight-bold text-qlik-sense mb-4">QLIK SENSE</h3>
  <p class="text-subtitle-1 mb-10">
    "<span class="text-qlik-sense">Qlik Sense</span>는 개별 클라이언트 설치가
    필요없는 Qlik만의 독보적인 두가지 엔진을 기반으로 한
    <span class="text-qlik-sense">웹 어플리케이션 BI 솔루션</span>입니다."
  </p>

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/qlik-sense-icon1.webp"
          max-width="160"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-qlik-sense font-weight-light">
          연관분석
        </VCardTitle>
        <VCardText>
          데이터들 간의 관련성을<br />
          발견할 수 있는 분석경험 지원
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/qlik-sense-icon2.webp"
          max-width="160"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-qlik-sense font-weight-light">
          증강분석
        </VCardTitle>
        <VCardText>
          AI 기반 제안, 자동결합 및<br />
          상호작용을 분석 전반에 지원
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/qlik-sense-icon3.webp"
          max-width="160"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-qlik-sense font-weight-light">
          임베디드분석
        </VCardTitle>
        <VCardText>
          오픈API제공, 여러 환경에<br />
          임베디드 구현 지원
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/qlik-sense-footer.webp"
        class="section-margin mx-auto"
        max-width="800"
      />
    </VCol>

    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two" class="w-100 h-100">
        <VListItem
          class="text-h5 font-weight-medium text-center text-qlik-sense underlined text-decoration-underline"
        >
          주요특징
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-1-box" class="text-qlik-sense" />
          </template>
          데이터 연결 시각화
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-2-box" class="text-qlik-sense" />
          </template>
          데이터 스크립트
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-3-box" class="text-qlik-sense" />
          </template>
          연관 통찰력 생성
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-4-box" class="text-qlik-sense" />
          </template>
          시트(대시보드) 탐색
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-5-box" class="text-qlik-sense" />
          </template>
          스마트 검색
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-6-box" class="text-qlik-sense" />
          </template>
          비교분석 및 고급분석
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-7-box" class="text-qlik-sense" />
          </template>
          연관분석엔진 + 인지엔진
        </VListItem>
      </VList>
    </VCol>
  </VRow>

  <!-- <VImg
    src="@/assets/images/qlik-sense-footer.webp"
    class="section-margin mx-auto"
    max-width="800"
  /> -->
</template>

<script setup></script>
