<template>
  <div class="background">
    <VContainer class="py-16">
      <VRow>
        <VCol cols="12" sm="6" class="px-8 d-flex justify-center align-center">
          <VImg
            src="@/assets/images/identification.webp"
            class="mx-auto"
            alt="세인티(SAINTI)"
          />
        </VCol>

        <VCol cols="12" sm="6" class="px-4" align-self="center">
          <VCard
            class="mx-auto elevation-6"
            :class="smAndUp ? 'pa-8' : 'pa-2'"
            max-width="480"
          >
            <VCardTitle class="text-h5 font-weight-medium">SIGN UP</VCardTitle>
            <VCardText class="py-5">
              <VForm @submit.prevent>
                <VTextField
                  v-model="email"
                  label="이메일"
                  variant="underlined"
                  type="email"
                />
                <VTextField
                  v-model="password"
                  label="비밀번호"
                  variant="underlined"
                  :type="showPassword ? 'text' : 'password'"
                  :append-inner-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append-inner="showPassword = !showPassword"
                />
                <VTextField
                  v-model="confirmPassword"
                  label="비밀번호 확인"
                  variant="underlined"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  :append-inner-icon="
                    !showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  @click:append-inner="
                    showConfirmPassword = !showConfirmPassword
                  "
                />
                <VTextField
                  v-model="name"
                  label="이름"
                  variant="underlined"
                  type="id"
                />
                <VRow class="d-flex align-center">
                  <VCol>
                    <VTextField
                      v-model="birthDate"
                      label="생년월일"
                      variant="underlined"
                      type="number"
                    />
                  </VCol>
                  <span class="mx-2"> - </span>
                  <VCol>
                    <div class="d-flex align-center">
                      <VTextField
                        v-model="gender"
                        variant="underlined"
                        type="number"
                        placeholder="●"
                      />
                      <span>●●●●●●</span>
                    </div>
                  </VCol>
                </VRow>
                <VTextField
                  v-model="phoneNumber"
                  label="핸드폰"
                  variant="underlined"
                  type="tel"
                />
                <VTextField
                  v-model="company"
                  label="회사"
                  variant="underlined"
                />
                <VBtn type="submit" class="w-100 mt-8" @click="joinHandler">
                  가입
                </VBtn>
              </VForm>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { signup } from '@/api/user';
import useToast from '@/store/useToast';
import { devErrorLog } from '@/utils/common';

const { smAndUp } = useDisplay();

const email = ref();
const password = ref();
const name = ref();
const confirmPassword = ref();
const birthDate = ref();
const gender = ref();
const phoneNumber = ref();
const company = ref();

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const router = useRouter();

const { popupSnackbar } = useToast();

const joinHandler = async () => {
  try {
    const data = await signup(
      email.value,
      password.value,
      name.value,
      birthDate.value,
      gender.value,
      phoneNumber.value,
      company.value,
    );

    if (!data) throw Error('Failed');

    popupSnackbar('success', '가입되었습니다');
    router.push({ name: 'Login' });
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '가입을 실패했습니다');
  }
};
</script>

<style lang="scss" scoped>
.background {
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(var(--v-theme-primary), var(--v-activated-opacity)) 0%,
    rgba(var(--v-theme-background)) 100%
  );
}
</style>
