<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props" icon="mdi-web" />
    </template>

    <VList density="compact" class="text-subtitle-2">
      <VListItem @click="changeLocaleHandler(LANGUAGE_LIST.KO)">
        <template #prepend>
          <VAvatar>
            <VChip size="small" class="font-weight-bold rounded-lg">
              {{ LANGUAGE_LIST.KO }}
            </VChip>
          </VAvatar>
        </template>
        {{ locale.t('$vuetify.header.localeSelector.ko') }}
      </VListItem>

      <VListItem @click="changeLocaleHandler(LANGUAGE_LIST.EN)">
        <template #prepend>
          <VAvatar>
            <VChip size="small" class="font-weight-bold rounded-lg">
              {{ LANGUAGE_LIST.EN }}
            </VChip>
          </VAvatar>
        </template>
        {{ locale.t('$vuetify.header.localeSelector.en') }}
      </VListItem>
    </VList>
  </VMenu>
</template>

<script setup>
import { useLocale } from 'vuetify';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

// 언어코드 정의
const LANGUAGE_LIST = {
  EN: 'en',
  KO: 'ko',
};

// 로컬스토리지 키
const LOCALE_KEY = 'locale';

const locale = useLocale();
const storedLocale = localStorage.getItem(LOCALE_KEY);

// 로케일 변경과 함께 로컬스토리지 저장
const changeLocaleHandler = (newLocale) => {
  locale.current.value = newLocale;
  dayjs.locale(newLocale);
  localStorage.setItem(LOCALE_KEY, newLocale);
};

// 최초 실행 시 로케일 세팅
if (storedLocale) {
  changeLocaleHandler(storedLocale);
} else {
  const browserLocale = navigator.language;
  let newLocale;

  // 브라우저 언어가 한국어가 아닌 경우 무조건 영어로
  if (browserLocale === 'ko' || browserLocale === 'ko-KR') {
    newLocale = LANGUAGE_LIST.KO;
  } else {
    newLocale = LANGUAGE_LIST.EN;
  }
  changeLocaleHandler(newLocale);
}
</script>
