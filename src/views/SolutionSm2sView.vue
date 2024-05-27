<template>
  <h3 class="font-weight-bold text-sm2s mb-4">SM2S</h3>
  <p class="text-subtitle-1">
    "<span class="text-sm2s">SM2S</span>는 발주부터 출하까지 고품질의
    <span class="text-sm2s"
      >수익 지향적 생산체제를 수립하기 위한 MES 구축 S/W</span
    >입니다."
  </p>
  <p class="text-caption mb-10">MES: Manufacturing Execution System</p>

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-6 px-6 fill-height">
        <VImg
          src="@/assets/images/sm2s-icon-1.webp"
          max-width="140"
          max-height="140"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm2s font-weight-light">
          S/W Retail
        </VCardTitle>
        <VCardText>
          SM2S(MES)<br />
          SCADA<br />
          IoT Device
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-6 px-6 fill-height">
        <VImg
          src="@/assets/images/sm2s-icon-2.webp"
          max-width="140"
          max-height="140"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm2s font-weight-light">
          Smart System
        </VCardTitle>
        <VCardText>
          Smart Factory<br />
          Smart Farm<br />
          Smart Haccp
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-6 px-6 fill-height">
        <VImg
          src="@/assets/images/sm2s-icon-3.webp"
          max-width="140"
          max-height="140"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-sm2s font-weight-light">
          4th Industrial Education
        </VCardTitle>
        <VCardText>
          Automation<br />
          Code/Program<br />
          Big Data
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/sm2s.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>

    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two" class="w-100">
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-1-box" class="text-sm2s" />
          </template>
          최소 비용으로 최적 맞춤형 서비스 제공
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-2-box" class="text-sm2s" />
          </template>
          생산현장에 따른 간편한 화면 Customization
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-3-box" class="text-sm2s" />
          </template>
          전용 데이터 수집 서버 장착
        </VListItem>
      </VList>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol class="height-fill align-center text-center">
      <VCard variant="" color="#5D78B5" class="py-6 px-6">
        <h4 class="font-weight-medium text-decoration-underline">
          주요 시스템 구성
        </h4>
      </VCard>
      <VCard color="surface-variant" class="py-10 px-6">
        <VRow>
          <VCol cols="12" md="4">
            <VCard>
              <VImg
                src="@/assets/images/sm2s-system-1.webp"
                max-width="160"
                class="my-6 mb-4 mx-auto"
              />
              <VCardTitle class="text-sm2s font-weight-light">
                모니터링
              </VCardTitle>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard>
              <VImg
                src="@/assets/images/sm2s-system-2.webp"
                max-width="160"
                class="my-6 mb-4 mx-auto"
              />
              <VCardTitle class="text-sm2s font-weight-light">
                생산/재고관리
              </VCardTitle>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard>
              <VImg
                src="@/assets/images/sm2s-system-3.webp"
                max-width="160"
                class="my-6 mb-4 mx-auto"
              />
              <VCardTitle class="text-sm2s font-weight-light">
                데이터집계
              </VCardTitle>
            </VCard>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" class="height-fill align-center text-center">
      <VCard variant="" color="#5D78B5" class="py-6 px-6">
        <h4 class="font-weight-medium text-decoration-underline">
          솔루션 월 구독 안내
        </h4>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 w-100 d-flex">
        <div>
          <p class="text-subtitle-1 font-weight-bold">베이직</p>
          <span>전문적인 기능을 합리적인 가격으로 이용할 수 있습니다.</span>
        </div>
        <div class="ml-auto text-right">
          <p class="text-subtitle-1 font-weight-bold">월 결제시</p>
          <span>1,000,000 / 월</span>
        </div>
      </VCard>
    </VCol>
  </VRow>
  <!-- <VCol class="height-fill align-center text-center py-16">
    <VImg
      src="@/assets/images/sm2s-footer.webp"
      class="section-margin mx-auto py-16"
      max-width="800"
    />
  </VCol> -->
</template>

<script setup></script>
