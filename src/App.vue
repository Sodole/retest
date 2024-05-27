<template>
  <VApp>
    <!-- <TheHeader /> -->
    <Header />
    <VMain :class="mainClass">
      <RouterView />
    </VMain>

    <!-- <TheFooter /> -->
    <Footer />
    <VSnackbar
      :model-value="showSnackbar"
      :timeout="snackbarTimeout"
      :color="snackbarColor"
      rounded="pill"
      class="d-flex align-center"
    >
      <VIcon :icon="snackbarIcon" class="mr-2" />
      <span>{{ snackbarText }}</span>
    </VSnackbar>
  </VApp>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import useUser from '@/store/useUser';
import useToast from '@/store/useToast';
import { refresh } from '@/api/user';
import TheHeader from '@/layouts/TheHeader.vue';
import Header from '@/test/Header.vue';
import TheFooter from '@/layouts/TheFooter.vue';
import Footer from '@/test/Footer.vue';
import { devErrorLog } from './utils/common';

const {
  showSnackbar,
  snackbarText,
  snackbarTimeout,
  snackbarColor,
  snackbarIcon,
} = storeToRefs(useToast());

const { email, name, role, token } = storeToRefs(useUser());

onMounted(async () => {
  if (!token.value) {
    try {
      const { data } = await refresh();
      if (!data) return;

      email.value = data.email;
      name.value = data.name;
      role.value = data.role;
      token.value = data.accessToken;
    } catch (error) {
      devErrorLog(error);
    }
  }
});

const route = useRoute();
const isRootPath = computed(() => route.path === '/');
const mainClass = computed(() =>
  isRootPath.value ? 'main root-padding' : 'main',
);
</script>

<style scoped>
.root-padding {
  padding: 0px;
}
</style>
