<template>
  <h3 class="font-weight-bold text-sm-farm mb-4">SM-AI-FARM</h3>
  <p class="text-subtitle-1">
    "<span class="text-sm-farm">SM-AI-FARM</span>은 시간과 공간적 제약 없이
    작물의 생육환경을
    <span class="text-sm-farm">관측하고 최적 상태로 관리하는 스마트 시스템</span
    >입니다."
  </p>
  <p class="text-caption mb-10">SM-FARM: SMART FARM</p>

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-farm-icon-1.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm-farm font-weight-light">
          실시간 모니터링
        </VCardTitle>
        <VCardText>
          실시간 생육환경<br />
          감시를 통한 품질향상
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-farm-icon-2.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm-farm font-weight-light">
          시스템 자동 제어
        </VCardTitle>
        <VCardText>
          이력 저장 및 데이터 분석<br />
          활용 필요성
        </VCardText>
      </VCard>
    </VCol>
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-farm-icon-3.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm-farm font-weight-light">
          데이터 집계
        </VCardTitle>
        <VCardText class="">
          자동제어를 통한<br />
          스마트 생산 시스템 구축
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <h4 class="mb-10 font-weight-bold text-sm-farm text-center">제품 기능</h4>
  <VRow class="section-margin">
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-remote" class="text-sm-farm text-h4" />
        </template>
        <h6>자동/수동 원격 제어</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-monitor-dashboard" class="text-sm-farm text-h4" />
        </template>
        <h6>실시간 모니터링</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-chart-bar" class="text-sm-farm text-h4" />
        </template>
        <h6>생육환경 데이터 수집/분석</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-remote-desktop" class="text-sm-farm text-h4" />
        </template>
        <h6>복합환경 제어</h6>
      </VListItem>
    </VCol>
  </VRow>

  <h4 class="mx-auto mb-10 font-weight-bold text-sm-farm text-center">
    적용 분야
  </h4>
  <VRow class="section-margin">
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-warehouse" class="text-sm-farm text-h4" />
        </template>
        <h6>온실농장</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-sprout" class="text-sm-farm text-h4" />
        </template>
        <h6>식물농장</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-solar-power" class="text-sm-farm text-h4" />
        </template>
        <h6>노지농장</h6>
      </VListItem>
    </VCol>
    <VCol cols="12" md="6">
      <VListItem class="pa-3">
        <template #prepend>
          <VIcon icon="mdi-cow" class="text-sm-farm text-h4" />
        </template>
        <h6>축산농장</h6>
      </VListItem>
    </VCol>
  </VRow>
</template>

<script setup></script>
