<template>
  <VAppBar
    height="70"
    scroll-behavior="inverted"
    flat
    class="pl-8 pb-1"
    density="comfortable"
    :class="{ 'bg-black': !isAtTop, 'bg-transparent': isAtTop }"
  >
    <VRow class="d-flex align-center justify-center">
      <!-- <VContainer class="h-100 my-2 d-flex justify-between align-center"> -->
      <VCol>
        <VToolbarTitle class="mr-auto">
          <VImg
            src="@/assets/logos/logo.webp"
            max-width="86"
            alt="세인티(SAINTI)"
            style="cursor: pointer"
            @click="moveHome"
          /> </VToolbarTitle
      ></VCol>
      <VCol class="d-flex align-center justify-center"
        ><HeaderNavigation
      /></VCol>
      <VCol class="d-flex justify-end">
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
        <VAppBarNavIcon class="d-block d-md-none" @click="toggleSider"
      /></VCol>
    </VRow>
    <!-- </VContainer> -->
  </VAppBar>

  <HeaderSideNavigation v-model="isShowSider" />
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay, useLocale } from 'vuetify';
import useUser from '@/store/useUser';
import useToast from '@/store/useToast';
import { logout } from '@/api/user';
import HeaderLocaleSelect from '@/components/HeaderLocaleSelect.vue';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import HeaderSideNavigation from '@/components/HeaderSideNavigation.vue';

const locale = useLocale();
const isAtTop = ref(true);

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
onMounted(() =>
  window.addEventListener('scroll', function () {
    // console.log(this.window.scrollY);
    if (this.window.scrollY === 0) {
      isAtTop.value = true;
    } else {
      isAtTop.value = false;
    }
  }),
);
</script>

<style scoped>
.bg-black {
  background-color: black;
}

.bg-transparent {
  background-color: transparent;
}
</style>
