<template>
  <v-app>
    <Vcontainer>
      <VDataTable
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="news"
        :items-length="total"
        @click:row="handleRowClick"
      ></VDataTable>
    </Vcontainer>
    <v-col cols="auto" class="text-right">
      <v-btn append-icon="mdi-pencil" @click="routerHandler('NewsWrite')"
        >작성하기</v-btn
      >
    </v-col>
  </v-app>
</template>
<script setup>
import { getAllNews } from '@/api/news';
import { ref, onMounted, computed, watch } from 'vue';
import { VDataTable } from 'vuetify/lib/components/index.mjs';
import { useRouter } from 'vue-router';
import useUser from '@/store/useUser';

const user = useUser();

const router = useRouter();
const routerHandler = (name) => {
  if (!user.token) {
    alert('로그인이 필요합니다.');
    return;
  }
  router.push({ name });
};

const news = ref([]);
const newsId = ref(null);
const headers = ref([
  { title: 'Title', key: 'content', align: 'start' },
  { title: 'No', key: 'newsId', align: 'start' },
  { title: 'Contnet', key: 'content', align: 'center' },
  { title: 'Email', key: 'email', align: 'center' },
  { title: 'Date', key: 'startDate', align: 'end' },
]);

const fetchNews = async () => {
  try {
    const res = await getAllNews({ page: 1, itemsPerPage: 12 });
    console.log(res);
    news.value = res.data;

    //우선 이부분 확인
  } catch (error) {
    console.error(error);
  }
};

const handleRowClick = (e, { item }) => {
  console.log(item.newsId);
  newsId.value = item.newsId;
  if (newsId.value !== null) {
    router.push({ name: 'NewsDetail', params: { id: newsId.value } });
  }
};

onMounted(() => {
  fetchNews();
});
</script>
