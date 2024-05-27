<template>
  <AppTitleBanner>
    {{ locale.t('$vuetify.header.navigationMenu.application') }}
  </AppTitleBanner>

  <VContainer>
    <h4
      class="font-weight-bold pt-16 hyundae-text-color pb-8 d-flex align-center"
    >
      H사
    </h4>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-1.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-format-color-fill"
                class="hyundae-text-color text-h4 ma-1"
              />
              일상관리 통합 시스템 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="font-weight-medium hyundae-text-color mb-2">
              주요 구축 내용
            </h6>
            <p class="font-weight-light ml-3 mb-1">일상점검관리 시스템 개발</p>
            <p class="font-weight-light ml-3 mb-1">
              크로스 플랫폼을 고려한 반응형 웹앱
            </p>
            <p class="font-weight-light ml-3 mb-1">
              기간별 점검 데이터 통계 분석 및 시각화
            </p>
            <p class="font-weight-light ml-3 mb-1">
              공장단위 확대가 가능한 확장성 있는 시스템 구축
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="hyundae-text-color text-h4 ma-1"
              />
              통합설비예지보전 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="hyundae-text-color mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3 mb-1">
              머신러닝 모델 활용 상태변화 인지 및 예측 알림 시스템 개발
            </p>
            <p class="font-weight-light ml-3 mb-1">
              통합 모니터링 화면 구축/분석을 통한 설비 고장 예방 및 진단 신뢰성
              보장
            </p>
            <p class="font-weight-light ml-3 mb-1">
              CPS 플랫폼 연계를 통한 알고리즘 관리 및 배포
            </p>
            <p class="font-weight-light ml-3 mb-1">
              SAP/데이터 레이크/서버 인터페이스 연동
            </p>
            <p class="font-weight-light ml-3 mb-1">데이터 분석 시스템</p>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-2.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
    </VRow>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-3.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="hyundae-text-color text-h4 ma-1"
              />
              전장품 데이터 수집/모니터링 시스템 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="hyundae-text-color mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3 mb-1">
              PLC 및 I/O Link Master, 센서 데이터 수집
            </p>
            <p class="font-weight-light ml-3 mb-1">
              실시간 통합 모니터링 화면 개발
            </p>
            <p class="font-weight-light ml-3 mb-1">
              전장품 상태 이력에 대한 통계 분석 및 시각화
            </p>
            <p class="font-weight-light ml-3 mb-1">전장품 기준 정보 관리</p>
            <p class="font-weight-light ml-3">시스템 관리</p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <h4 class="font-weight-bold mobis-text-color pb-8 d-flex align-center">
      M사
    </h4>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-5.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="mobis-text-color text-h4 ma-1"
              />
              전동화 공장 스마트 통합 관제 시스템 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="mobis-text-color mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3 mb-1">
              3D 모델링 / 전처리 / 최적화 / 애니메이션 개발
            </p>
            <p class="font-weight-light ml-3 mb-1">
              Web Ui 표준 설계 및 3D화면/공통기능(make-up화면) 개발
            </p>
            <p class="font-weight-light ml-3 mb-1">특화기능 개발(replay)</p>
            <p class="font-weight-light ml-3 mb-1">
              데이터 인터페이스(MES, WMS, ACS, IoT) 및 DB 서버 구축
            </p>
            <p class="font-weight-light ml-3">3D WEB/WAS 서버 구축</p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="mobis-text-color text-h4 ma-1"
              />
              전동화 공장 지능형제조플랫폼 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="mobis-text-color mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3 mb-1">데이터수집</p>
            <p class="font-weight-light ml-3 mb-1">
              실시간 통합 모니터링 화면과 다차원 분석 화면 개발
            </p>
            <p class="font-weight-light ml-3 mb-1">통합 대시보드 구축</p>
            <p class="font-weight-light ml-3 mb-1">
              각종 현황 정보의 연관 관계를 분석 시각화
            </p>
            <p class="font-weight-light ml-3">통합 플랫폼 구축</p>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-6.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
    </VRow>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-7.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="mobis-text-color text-h4 ma-1"
              />
              전동화 공장 배터리 화재 방지 시스템 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="mobis-text-color mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3 mb-1">
              설비/검사 데이터 수집 및 DB구축
            </p>
            <p class="font-weight-light ml-3 mb-1">
              공정별 화재 유발 인자 분석 화면 구축
            </p>
            <p class="font-weight-light ml-3 mb-1">
              사용자 맞춤형 분석 화면 기능제공
            </p>
            <p class="font-weight-light ml-3 mb-1">
              Web SCADA기반 실시간 모니터링
            </p>
            <p class="font-weight-light ml-3 mb-1">
              정규분포 계산 적용 및 상관관계 산출
            </p>
            <p class="font-weight-light ml-3">
              다차원 회귀분석을 통한 종속변수 및 독립변수 데이터 분석
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <h4 class="font-weight-bold text-primary pb-8 d-flex align-center">
      <VImg
        src="@/assets/logos/logo.webp"
        :aspect-ratio="4 / 3"
        max-width="90"
        class="rounded mr-4"
      />
      스마트팩토리
    </h4>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-16.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="text-primary text-h4 ma-1"
              />
              스마트팜 수직형 농장
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="text-primary mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3 mb-1">
              국내 최대 수직형 수경 재배 스마트팜 구축
            </p>
            <p class="font-weight-light ml-3">
              생육환경 관제 및 환경 제어 시스템 구축
            </p>
          </VCardText>
          <VCardText>
            <h6 class="text-primary mb-2">기대 효과</h6>
            <p class="font-weight-light ml-3 mb-1">
              주요 실시간 환경 데이터 관제
            </p>
            <p class="font-weight-light ml-3 mb-1">
              시스템을 통한 자동/수동 환경 통제로 최적화된 생육 주기 관리
            </p>
            <p class="font-weight-light ml-3">
              웹서버를 이용한 다중 사용자 관리
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="text-primary text-h4 ma-1"
              />
              식품안전관리 모니터링 시스템 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="text-primary mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3">
              HACCP 유해요소 안전관리 모니터링 시스템 구축
            </p>
          </VCardText>
          <VCardText>
            <h6 class="text-primary mb-2">기대 효과</h6>
            <p class="font-weight-light ml-3 mb-1">
              SMART HACCP 구축을 통해 식약청 불시점검 면제
            </p>
            <p class="font-weight-light ml-3 mb-1">
              장소에 구애 받지 않고 식품 생산 환경 감시 가능
            </p>
            <p class="font-weight-light ml-3">
              한계설정을 통해 담당자에게 알림 시스템(알람, 메일)
            </p>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-20.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
    </VRow>

    <VRow class="section-margin">
      <VCol cols="12" md="6" class="d-flex align-center">
        <VImg
          src="@/assets/images/application-image-21.webp"
          aspect-ratio="4/3"
          class="rounded-xl elevation-4"
        >
          <template #placeholder>
            <VSkeletonLoader :loading="true" class="w-100 h-100" />
          </template>
        </VImg>
      </VCol>
      <VCol cols="12" md="6" class="d-flex">
        <VCard color="background" class="w-100">
          <VCardTitle>
            <h5 class="font-weight-medium text-wrap">
              <VIcon
                icon="mdi-monitor-dashboard"
                class="text-primary text-h4 ma-1"
              />
              식품안전관리 모니터링 시스템 구축
            </h5>
          </VCardTitle>
          <VDivider class="mb-2" />
          <VCardText>
            <h6 class="text-primary mb-2">주요 구축 내용</h6>
            <p class="font-weight-light ml-3">
              HACCP 유해요소 안전관리 모니터링 시스템 구축
            </p>
          </VCardText>
          <VCardText>
            <h6 class="text-primary mb-2">기대 효과</h6>
            <p class="font-weight-light ml-3 mb-1">
              주요 실시간 환경 데이터 관제
            </p>
            <p class="font-weight-light ml-3">
              한계설정을 통해 담당자에게 알림 시스템(알람, 메일)
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { useLocale } from 'vuetify';
import AppTitleBanner from '@/components/AppTitleBanner.vue';

const locale = useLocale();
</script>

<style lang="scss" scoped>
.hyundae-text-color {
  color: #002c5f !important;
}
.mobis-text-color {
  color: #4c4c4e !important;
}
</style>
