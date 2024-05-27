<template>
  <VRow class="text-center section-margin d-block">
    <div class="py-6">
      <h3
        class="d-inline font-weight-bold text-factoryIo mb-6 font-weight-bold text-center"
      >
        구현영상 기초
      </h3>
    </div>
    <iframe
      style="display: block; width: 100%; height: 100%; aspect-ratio: 16/9"
      src="https://www.youtube.com/embed/6QKlKtvbT7s?si=ZXsFv1eSFNPeOJHE"
      title="구현영상 기초"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </VRow>

  <VRow class="text-center section-margin d-block">
    <div class="text-center py-6 mb-6">
      <h4 class="d-inline font-weight-bold text-factoryIo pb-2 text-center">
        구현영상 응용
      </h4>
    </div>
    <iframe
      style="display: block; width: 100%; height: 100%; aspect-ratio: 16/9"
      src="https://www.youtube.com/embed/QRQL6fZ6lUA?si=X33xabhk2bzVkLxF"
      title="구현영상 응용"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </VRow>

  <h4 class="font-weight-bold text-factoryIo mb-4 pt-5">FACTORY I/O</h4>
  <p class="text-subtitle-1">
    "<span class="text-factoryIo">Factory I/O</span>는 제조환경을 가상으로
    구현하는 <span class="text-factoryIo">CPS 솔루션</span>입니다."
  </p>
  <p class="text-caption mb-10">CPS: Cyber-Physical System</p>

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/factory-io-icon-1.webp"
          max-width="160"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-factoryIo font-weight-light">
          대규모 산업응용
        </VCardTitle>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/factory-io-icon-2.webp"
          max-width="160"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-factoryIo font-weight-light">
          간편한 가상설비 구축
        </VCardTitle>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/factory-io-icon-3.webp"
          max-width="160"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-factoryIo font-weight-light">
          다양한 라이브러리
        </VCardTitle>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/factory-io-icon-4.webp"
          max-width="160"
          class="mb-4 mx-auto"
        />
        <VCardTitle class="text-factoryIo font-weight-light">
          4차산업현장 교육
        </VCardTitle>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/factory-io.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>

    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two" class="w-100">
        <VListItem
          class="text-h5 font-weight-medium text-center text-factoryIo underlined text-decoration-underline"
        >
          Factory IO Starter
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          Factory I/O용 독립된 PLC 시뮬레이터 사용(Control I/O)
        </VListItem>
        <VListItem
          class="pt-10 text-h5 font-weight-medium text-center text-factoryIo underlined text-decoration-underline"
        >
          Factory IO Starter
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          이더넷을 통한 Siemens PLC와 연결
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          호환 PLC: S7-200/20 SMART/300/400,<br />
          S7-1200/1500, S7-PLCSIM
        </VListItem>
      </VList>
    </VCol>
  </VRow>

  <VRow class="section-margin">
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two" class="w-100">
        <VListItem
          class="text-h5 font-weight-medium text-center text-factoryIo underlined text-decoration-underline"
        >
          Factory IO Ultimate
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          All-in-one
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          PLC, SoftPLC, PLC 시뮬레이터, Modbus,<br />
          OPC 등 자동화기술 범용
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          이더넷을 통한 Allen-Bradley, Siemens PLC 연결
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          Modbus TCP Server/Cilent, OPC Client DA/UA 사용
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          인터페이스 보드(어드벤텍 USB4750,<br />
          USB4704)를 통해 모든 PLC 모델 연결
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-check-circle-outline" class="text-factoryIo" />
          </template>
          SDK(사용자 맞춤형 I/O 드라이버)를 사용하여 확장 개발
        </VListItem>
      </VList>
    </VCol>
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/factory-io.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>
  </VRow>

  <h4 class="mb-10 font-weight-bold text-factoryIo text-center">아키텍처</h4>
  <VImg
    src="@/assets/images/factory-io-architecture.webp"
    class="section-margin mx-auto"
    max-width="800"
  />
</template>

<script setup></script>
