<template>
  <VCard>
    <VCardTitle class="d-flex align-end mb-4">
      <VChip
        class="rounded-pill mr-2"
        size="small"
        :color="news?.type === 'notice' ? 'success' : 'primary'"
      >
        {{ news?.type }}{{ $route.params.id }}
      </VChip>
      <h5 class="font-weight-medium">{{ news?.title }}</h5>
    </VCardTitle>

    <VCardSubtitle class="d-flex justify-space-between flex-wrap">
      <span>
        {{ news?.email }}
      </span>
      <small>
        {{ dayjs(news?.createdAt).format('YYYY-MM-DD(ddd) HH:mm') }}
      </small>
    </VCardSubtitle>

    <VDivider class="my-4" />

    <VCardText
      v-if="news?.fileName && news?.filePath"
      class="d-flex align-center"
    >
      <VIcon icon="mdi-paperclip" class="mr-1 text-body-1" />
      <a class="file-download" @click="download(news.filePath, news.fileName)">
        {{ news.fileName }}
      </a>
    </VCardText>

    <VCardText class="py-10">
      <span>
        {{ news?.content }}
      </span>
    </VCardText>

    <VDivider v-if="isAdmin(role) || isMine(news.email, email)" class="mt-4" />

    <VCardActions
      v-if="isAdmin(role) || isMine(news.email, email)"
      class="d-flex justify-end"
    >
      <VBtn
        v-if="isAdmin(role) || isMine(news.email, email)"
        color="error"
        @click="remove(news.newsId, news.originalPath, news.thumbnailPath)"
      >
        삭제
      </VBtn>
      <VBtn
        v-if="isMine(news.email, email)"
        color="on-surface"
        @click="
          router.push({
            name: 'newsEdit',
            params: { id: news.newsId },
          })
        "
      >
        수정
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import { devErrorLog, fileSave } from '@/utils/common';
import useToast from '@/store/useToast';
import useUser from '@/store/useUser';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { fileDownload } from '@/api/file';
import { detailNews, removeNews } from '@/api/news';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
});

const { popupSnackbar } = useToast();
const route = useRoute();
const news = ref({});
const newsId = ref(0);
const fetchNews = async (newsId) => {
  try {
    return await detailNews(newsId);
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '조회를 실패했습니다');
  }
};

onMounted(async () => {
  newsId.value = route.params.id;
  console.log('routeid', route.params.id);
  news.value = await fetchNews(newsId.value);
  console.log(news.value.newsId);
});

const { email, role } = storeToRefs(useUser());

const isAdmin = (userRole) => userRole === 'admin';
const isMine = (newsEmail, userEmail) => newsEmail === userEmail;

const router = useRouter();

const remove = async (newsId, thumbnailPath, originalPath) => {
  try {
    const res = await removeNews(newsId, thumbnailPath, originalPath);

    if (res === 0) throw new Error('Failed remove');

    popupSnackbar('success', '삭제되었습니다');

    router.replace({ name: 'list' });
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '삭제를 실패했습니다');
  }
};

const download = async (filePath, fileName) => {
  try {
    const file = await fileDownload(filePath);
    fileSave(file, fileName);
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '다운로드를 실패했습니다');
  }
};
</script>

<style lang="scss" scoped>
.file-download:hover {
  color: rgb(var(--v-theme-primary));
  transition: 0.3s ease-in-out;
}
</style>
