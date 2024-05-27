<template>
  <h3 class="font-weight-bold text-sm-haccp mb-4">SM-HACCP</h3>
  <p class="text-subtitle-1">
    "<span class="text-sm-haccp">SM-HACCP</span>은 식품안전과 업무효율성을 모두
    <span class="text-sm-haccp"
      >얻을 수 있는 순수한 Web 기반의 관리 프로그램</span
    >입니다."
  </p>
  <p class="text-caption mb-10">
    HACCP: Hazard Analysis and Critical Control Points
  </p>

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-haccp-icon-1.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm-haccp font-weight-light">
          실시간 모니터링
        </VCardTitle>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-haccp-icon-2.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm-haccp font-weight-light">
          한계기준 이탈 알림
        </VCardTitle>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-haccp-icon-3.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm-haccp font-weight-light">
          데이터 집계
        </VCardTitle>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/sm-haccp.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>

    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two" class="w-100">
        <VListItem
          class="text-h5 font-weight-medium text-center text-sm-haccp underlined text-decoration-underline"
        >
          SM-HACCP STANDARD
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          CCP 모니터링
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          종합생산 모니터링
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          모니터링 일지표 및 점검표 관리
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          일지 및 점검표 결재 시스템 도입
        </VListItem>
      </VList>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two" class="w-100">
        <VListItem
          class="text-h5 font-weight-medium text-center text-sm-haccp underlined text-decoration-underline"
        >
          SM-HACCP ADVANCED
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          생산관리 시스템
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          바코드 시스템 연동
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          회수 처리 및 이력 추적 관리
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-sm-haccp" />
          </template>
          누적 데이터 통계 활용
        </VListItem>
      </VList>
    </VCol>
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/sm-haccp.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>
  </VRow>

  <!-- <VCol class="height-fill align-center text-center py-16">
    <VImg
      src="@/assets/images/sm-haccp-footer.webp"
      class="section-margin mx-auto"
      max-width="800"
    />
  </VCol> -->
</template>

<script setup></script>
