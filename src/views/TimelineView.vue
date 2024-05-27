<template>
  <AppTitleBanner :breadcrumbs="BREADCRUMBS">
    {{ locale.t('$vuetify.timelineView.timelineTitle') }}
  </AppTitleBanner>

  <VContainer class="d-block d-md-flex">
    <aside :class="mdAndUp ? 'title-md' : 'title'">
      <h6 class="text-center text-no-wrap mt-n1"></h6>
    </aside>

    <article class="w-100">
      <!-- year -->
      <div v-for="({ year, months }, index) in TIMELINE" :key="year">
        <div class="d-sm-flex pb-4">
          <h6 class="mr-16 mt-n1" :class="smAndDown && 'mb-4'">
            {{ year }}
          </h6>

          <!-- month -->
          <ul>
            <li v-for="{ month, records } in months" :key="year + month">
              <div class="d-flex">
                <div class="month">
                  <span class="font-weight-bold"
                    >{{ String(month).padStart(2, '0') }}월</span
                  >
                </div>
                <ul>
                  <li
                    v-for="record in records"
                    :key="year + month + record"
                    class="mb-4"
                  >
                    <span class="text-medium-emphasis">
                      {{ record }}
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <VDivider v-if="index + 1 !== TIMELINE.length" class="mb-10" />
      </div>
    </article>
  </VContainer>
</template>

<script setup>
import { useDisplay, useLocale } from 'vuetify';
import AppTitleBanner from '@/components/AppTitleBanner.vue';

const locale = useLocale();
const { smAndDown, mdAndUp } = useDisplay();

// TODO: 전역으로 변경 필요
const BREADCRUMBS = [
  {
    title: '홈',
    disabled: true,
  },
  {
    title: '회사소개',
    disabled: true,
  },
  {
    title: '연혁',
    disabled: false,
  },
];

const TIMELINE = [
  {
    year: 2023,
    months: [
      {
        month: 1,
        records: ['AI Solution 제품 런칭'],
      },
      {
        month: 8,
        records: [
          "'통신 패킷 분석 시스템' 특허 출원",
          '㈜세인티(SAINTI)사명 변경',
        ],
      },
    ],
  },
  {
    year: 2022,
    months: [
      {
        month: 7,
        records: ['GMP 품질관리 시스템 런칭(SM-GMP)'],
      },
      {
        month: 10,
        records: ['디지털 트윈 런칭(DIGITAL TWIN)'],
      },
    ],
  },
  {
    year: 2021,
    months: [
      {
        month: 1,
        records: ['기업부설연구소 설립'],
      },
      {
        month: 3,
        records: ['벤처기업 인증'],
      },
      {
        month: 6,
        records: ['현대오토에버 협력사 등록'],
      },
      {
        month: 12,
        records: ['Smart HACCP 제품 런칭(SM-HACCP)'],
      },
    ],
  },
  {
    year: 2020,
    months: [
      {
        month: 10,
        records: ['Web Solution 제품 런칭(SMWP)'],
      },
    ],
  },
  {
    year: 2019,
    months: [
      {
        month: 6,
        records: ['㈜스카다아이씨티 법인 전환'],
      },
    ],
  },
  {
    year: 2018,
    months: [
      {
        month: 4,
        records: ['스카다시스템 설립'],
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.title {
  margin: 0 auto;
  margin-bottom: 40px;
}

.title-md {
  margin-right: 80px;
}

.month {
  width: 36px !important;
  margin-right: 16px;
  text-align: end;
}
</style>
