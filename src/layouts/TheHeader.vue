<template>
  <VAppBar scroll-behavior="hide" flat class="header" density="comfortable">
    <VContainer class="h-100 my-0 mx-auto d-flex justify-center align-center">
      <VToolbarTitle>
        <VImg
          src="@/assets/logos/logo.webp"
          max-width="74"
          alt="세인티(SAINTI)"
          style="cursor: pointer"
          @click="moveHome"
        />
      </VToolbarTitle>

      <HeaderNavigation />

      <VTooltip v-if="!user.token" location="bottom">
        {{ locale.t('$vuetify.header.loginBtn') }}
        <template #activator="{ props }">
          <RouterLink to="/login">
            <VBtn v-bind="props" icon="mdi-login-variant" />
          </RouterLink>
        </template>
      </VTooltip>

      <VTooltip v-else location="bottom">
        {{ locale.t('$vuetify.header.logoutBtn') }}
        <template #activator="{ props }">
          <VBtn
            v-bind="props"
            icon="mdi-logout-variant"
            @click="logoutHandler"
          />
        </template>
      </VTooltip>

      <HeaderLocaleSelect />

      <VAppBarNavIcon class="d-block d-md-none" @click="toggleSider" />
    </VContainer>
  </VAppBar>

  <HeaderSideNavigation v-model="isShowSider" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay, useLocale } from 'vuetify';
import useUser from '@/store/useUser';
import useToast from '@/store/useToast';
import { logout } from '@/api/user';
import HeaderLocaleSelect from '@/components/HeaderLocaleSelect.vue';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import HeaderSideNavigation from '@/components/HeaderSideNavigation.vue';

const locale = useLocale();

const isShowSider = ref(false);
const toggleSider = () => {
  isShowSider.value = !isShowSider.value;
};

const user = useUser();
const { popupSnackbar } = useToast();

const logoutHandler = async () => {
  try {
    await logout();
    user.reset();

    popupSnackbar('success', '로그아웃 되었습니다');
  } catch (error) {
    console.log('error', error);
    popupSnackbar('error', '로그아웃에 실패했습니다');
  }
};

const router = useRouter();
const moveHome = () => {
  router.push({ name: 'Home' });
};

const { mdAndUp } = useDisplay();

watch(mdAndUp, (value) => {
  if (value && isShowSider.value) {
    isShowSider.value = false;
  }
});
</script>
