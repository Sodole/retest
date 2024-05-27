<template>
  <AppTitleBanner> 문의사항 </AppTitleBanner>

  <VContainer class="py-16">
    <VRow>
      <VCol
        cols="12"
        md="6"
        class="height-fill d-flex justify-center align-center flex-column"
      >
        <div class="w-100 h-100 pa-8 d-flex justify-center align-center">
          <VImg src="@/assets/images/customer-support.webp" />
        </div>

        <VRow>
          <VCol
            cols="12"
            sm="6"
            class="pa-0 d-flex justify-center align-center mb-4"
          >
            <VAvatar color="surface-variant">
              <VIcon icon="mdi-phone" color="primary" />
            </VAvatar>
            <a href="tel:02-6956-3035" class="text-no-wrap ml-3 mr-5">
              02-6956-3035
            </a>
          </VCol>
          <VCol
            cols="12"
            sm="6"
            class="pa-0 d-flex justify-center align-center mb-4"
          >
            <VAvatar color="surface-variant">
              <VIcon icon="mdi-fax" color="primary" />
            </VAvatar>
            <p class="text-no-wrap mx-3">070-7966-3045</p>
          </VCol>
        </VRow>
      </VCol>
      <VCol
        cols="12"
        md="6"
        class="height-fill d-flex justify-center align-center"
      >
        <VForm
          ref="form"
          validate-on="submit"
          class="w-100"
          @submit.prevent="sendEmailHandler"
        >
          <VListItem class="mb-4">
            <template #prepend>
              <VAvatar color="surface-variant">
                <VIcon icon="mdi-email" color="primary" />
              </VAvatar>
            </template>
            <VListItemTitle class="text-h5 font-weight-medium">
              문의 메일 보내기
            </VListItemTitle>
          </VListItem>

          <div class="d-flex mb-1">
            <VTextField
              variant="solo-filled"
              flat
              name="name"
              label="이름"
              :rules="[ruleRequired]"
              class="mr-4"
            />
            <VSelect
              :items="QUESTION_TYPES"
              variant="solo-filled"
              flat
              name="type"
              label="문의 유형"
              :rules="[ruleRequired]"
            />
          </div>
          <VTextField
            variant="solo-filled"
            flat
            name="phone"
            label="핸드폰"
            :rules="[ruleRequired]"
            class="mb-1"
          />
          <VTextField
            variant="solo-filled"
            flat
            name="emailAddress"
            label="이메일 주소"
            :rules="[ruleRequired]"
            class="mb-1"
          />
          <VTextField
            variant="solo-filled"
            flat
            name="title"
            label="제목"
            :rules="[ruleRequired]"
            class="mb-1"
          />
          <VTextarea
            variant="solo-filled"
            flat
            name="content"
            label="내용"
            :rules="[ruleRequired]"
            class="mb-1"
          />
          <div class="w-100 d-flex">
            <VBtn
              append-icon="mdi-send"
              type="submit"
              class="ml-auto"
              :loading="loading"
            >
              전송
            </VBtn>
          </div>
        </VForm>
      </VCol>
    </VRow>

    <VSnackbar v-model="showSnackbar" :timeout="2000" :color="snackbarColor">
      {{ snackbarText }}
    </VSnackbar>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue';
import AppTitleBanner from '@/components/AppTitleBanner.vue';
import { sendEmail } from '@/api/common';
import { ruleRequired } from '@/utils/rules';
import { devErrorLog } from '@/utils/common';
import useUser from '@/store/useUser';
import { useRouter } from 'vue-router';

const router = useRouter();

const QUESTION_TYPES = [
  {
    title: '제품문의', // 다국어 제품 명
    value: '제품문의', // 실제 메일에 전송 될 텍스트 (한글고정)
  },
  {
    title: '교육문의',
    value: '교육문의',
  },
  {
    title: '기타문의',
    value: '기타문의',
  },
];

const showSnackbar = ref(false);
const snackbarText = ref(null);
const snackbarColor = ref('info');

const user = useUser();

const popupSnackbar = (text, color) => {
  showSnackbar.value = true;
  snackbarText.value = text;
  snackbarColor.value = color;
};

const form = ref(null);
const loading = ref(false);

const sendEmailHandler = async ({ target }) => {
  try {
    loading.value = true;

    const { valid } = await form.value.validate();
    if (!valid) return;

    const { name, type, phone, emailAddress, title, content } = target;
    console.log('target:', target);
    console.log('name:', name.value);
    const res = await sendEmail(
      name.value,
      type.value,
      phone.value,
      emailAddress.value,
      title.value,
      content.value,
    );
    if (res.status !== 200) throw Error('Failed');

    form.value.reset();
    popupSnackbar('접수되었습니다.', 'success');
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('로그인이 필요합니다.', 'error');
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  } finally {
    loading.value = false;
  }
};
</script>
