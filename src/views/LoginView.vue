<template>
  <div class="background">
    <VContainer class="py-16">
      <VRow>
        <VCol cols="12" sm="6" class="px-8 d-flex justify-center align-center">
          <VImg
            src="@/assets/images/lock.webp"
            max-width="400"
            class="mx-auto"
            alt="세인티(SAINTI)"
          />
        </VCol>

        <VDivider vertical inset class="d-none d-sm-block" />

        <VCol cols="12" sm="6" class="px-4" align-self="center">
          <VCard
            class="mx-auto elevation-6"
            :class="smAndUp ? 'pa-8' : 'pa-2'"
            max-width="440"
          >
            <VCardTitle class="text-h5 font-weight-medium">SIGN IN</VCardTitle>
            <VForm @submit.prevent>
              <VCardText>
                <VTextField
                  v-model="emailField"
                  variant="underlined"
                  :label="locale.t('$vuetify.loginView.emailLabel')"
                  autofocus
                />
                <VTextField
                  v-model="passwordField"
                  variant="underlined"
                  :label="locale.t('$vuetify.loginView.pwLabel')"
                  :type="showPassword ? 'text' : 'password'"
                  :append-inner-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append-inner="showPassword = !showPassword"
                />
              </VCardText>

              <VCardActions class="d-flex flex-column">
                <VBtn
                  type="submit"
                  variant="elevated"
                  class="w-100 mb-2"
                  @click="loginHandler"
                >
                  {{ locale.t('$vuetify.loginView.login') }}
                </VBtn>

                <RouterLink :to="{ name: 'Join' }" class="w-100">
                  <VBtn variant="text" class="w-100">
                    {{ locale.t('$vuetify.loginView.singUp') }}
                  </VBtn>
                </RouterLink>
              </VCardActions>
            </VForm>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup>
import { useLocale, useDisplay } from 'vuetify';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import useUser from '@/store/useUser';
import useToast from '@/store/useToast';
import { login } from '@/api/user';
import { devErrorLog } from '@/utils/common';

const { smAndUp } = useDisplay();

const locale = useLocale();

const showPassword = ref(false);

const emailField = ref();
const passwordField = ref();
const isRememberId = ref(false);

const { email, name, role, token } = storeToRefs(useUser());

const router = useRouter();

const { popupSnackbar } = useToast();

const loginHandler = async () => {
  try {
    const data = await login(emailField.value, passwordField.value);

    email.value = data.email;
    name.value = data.name;
    role.value = data.role;
    token.value = data.accessToken;

    popupSnackbar('success', '로그인 되었습니다');
    router.push({ name: 'Home' });
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '로그인에 실패했습니다');
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
