<template>
  <VRow class="text-center section-margin"
    ><VCol class="d-flex"
      ><h3 class="font-weight-bold text-sm-io-server mb-4">
        {{ locale.t('$vuetify.productSmloServerView.main.title') }}
      </h3></VCol
    ><VCol class="d-flex justify-end">
      <ProductButton color="sm-io-server" @click="routerHandler('Question')"
        >SWMP 신청하기</ProductButton
      ></VCol
    >
  </VRow>
  <p class="text-subtitle-2 text-sm-io-server">
    {{ locale.t('$vuetify.productSmloServerView.main.subTitle') }}
  </p>
  <p class="text-subtitle-1 mb-10">
    {{ locale.t('$vuetify.productSmloServerView.main.subText') }}
  </p>

  <VImg
    src="@/assets/images/sm-io-server-summary.webp"
    max-width="800"
    class="mx-auto section-margin"
  />

  <VRow class="text-center section-margin">
    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-io-server-icon-1.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle>
          {{
            locale.t('$vuetify.productSmloServerView.cardSection.card1.title')
          }}
        </VCardTitle>
        <VCardText>
          {{
            locale.t('$vuetify.productSmloServerView.cardSection.card1.text')
          }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-io-server-icon-2.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle>
          {{
            locale.t('$vuetify.productSmloServerView.cardSection.card2.title')
          }}
        </VCardTitle>
        <VCardText>
          {{
            locale.t('$vuetify.productSmloServerView.cardSection.card2.text')
          }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <VCard color="surface-variant" class="py-10 px-6 fill-height">
        <VImg
          src="@/assets/images/sm-io-server-icon-3.webp"
          max-width="200"
          class="mb-4 mx-auto"
        />
        <VCardTitle>
          {{
            locale.t('$vuetify.productSmloServerView.cardSection.card3.title')
          }}
        </VCardTitle>
        <VCardText>
          {{
            locale.t('$vuetify.productSmloServerView.cardSection.card3.text')
          }}
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VImg
        src="@/assets/images/sm-io-server.webp"
        class="mx-auto logos"
        max-width="400"
      />
    </VCol>

    <VCol cols="12" md="6" class="height-fill d-flex align-center">
      <VList lines="two">
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-1-box" class="text-sm-io-server" />
          </template>
          {{
            locale.t('$vuetify.productSmloServerView.specialSection.card1.text')
          }}
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-2-box" class="text-sm-io-server" />
          </template>
          {{
            locale.t('$vuetify.productSmloServerView.specialSection.card2.text')
          }}
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-3-box" class="text-sm-io-server" />
          </template>
          {{
            locale.t('$vuetify.productSmloServerView.specialSection.card3.text')
          }}
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-4-box" class="text-sm-io-server" />
          </template>
          {{
            locale.t('$vuetify.productSmloServerView.specialSection.card4.text')
          }}
        </VListItem>
        <VListItem class="text-h6 font-weight-medium">
          <template #prepend>
            <VIcon icon="mdi-numeric-5-box" class="text-sm-io-server" />
          </template>
          {{
            locale.t('$vuetify.productSmloServerView.specialSection.card5.text')
          }}
        </VListItem>
      </VList>
    </VCol>
  </VRow>
</template>

<script setup>
import { useLocale } from 'vuetify';
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
const locale = useLocale();
</script>
