<template lang="">
  <VWindow>
    <VWindowItem v-model="currentIndex">
      <div class="d-flex align-center mt-16 mb-16">
        <v-card
          class="mx-auto mb-16"
          max-width="500"
          v-for="(item, index) in newsDetail"
          :key="item.newsId"
        >
          <v-img
            class="align-end text-white mt-16 mb-16"
            height="200"
            :src="`https://oioproject-bucket.s3.ap-northeast-2.amazonaws.com/${item.thumbnailPath}`"
            width="450"
            cover
          >
            <v-card-title class="text-black">{{
              (item.title, item.newsId)
            }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> {{ item.updatedAt }}</v-card-subtitle>

          <v-card-text>
            <div>{{ item.content }}</div>
            <div>{{ item.email }}</div>
          </v-card-text>
        </v-card>
      </div>
      <div class="text-center">
        <VPagination
          v-model="page"
          :length="end"
          rounded="circle"
        ></VPagination>
      </div>
    </VWindowItem>
  </VWindow>
</template>
<!-- <VPagination
v-model="page"
:length="pageLenght"
:total-visible="smAndUp ? 6 : 4"
:size="smAndUp ? 'small' : 'x-small'"
@update:model-value="fetchData"
/> -->
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { getNews } from '@/api/news';
const newsDetail = ref([]);
const page = ref(1);
const end = ref(5);
const currentIndex = ref(0);
const total = ref(0);
const prevAble = ref(true);

const fetchNews = async () => {
  try {
    const res = await getNews({ page: page.value, itemsPerPage: 2 });

    newsDetail.value = res.data;
    page.value++;
    console.log(res);

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
watch(page, (newPage) => {
  console.log('Page changed to:', newPage);
  page.value = newPage;
});
// 컴포넌트가 마운트되었을 때 데이터 가져오기
onMounted(() => {
  fetchNews();
});
</script>

<style lang=""></style>
