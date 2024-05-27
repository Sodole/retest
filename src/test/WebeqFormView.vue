<template>
  <AppTitleBanner> 문의사항 </AppTitleBanner>

  <VContainer class="py-16">
    <VRow class="d-flex justify-center align-center">
      <VCol
        cols="8"
        md="8"
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
              WebEQ 교육신청
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
            name="email"
            label="이메일 주소"
            :rules="[ruleRequired]"
            class="mb-1"
          />
          <VTextField
            variant="solo-filled"
            flat
            name="applyDate"
            label="작성 시간"
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
import { sendSMWP } from '@/api/common';
import { ruleRequired } from '@/utils/rules';
import { devErrorLog } from '@/utils/common';

const QUESTION_TYPES = [
  {
    title: '교육신청 문의', // 다국어 제품 명
    value: '교육신청 문의', // 실제 메일에 전송 될 텍스트 (한글고정)
  },
];

const showSnackbar = ref(false);
const snackbarText = ref(null);
const snackbarColor = ref('info');

const popupSnackbar = (text, color) => {
  showSnackbar.value = true;
  snackbarText.value = text;
  snackbarColor.value = color;
};

const form = ref(null);
const loading = ref(false);

const sendEmailHandler = async (target) => {
  try {
    loading.value = true;

    const { valid } = await form.value.validate();
    if (!valid) return;

    const { name, phone, email, applyDate, title, content } = target;
    console.log(target);
    const res = await sendSMWP(
      name.value,
      phone.value,
      email.value,
      applyDate.value,
      title.value,
      content.value,
    );
    if (res.status !== 200) throw Error('Failed');

    form.value.reset();
    popupSnackbar('접수되었습니다.', 'success');
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('접수를 실패했습니다.', 'error');
  } finally {
    loading.value = false;
  }
};
</script>
