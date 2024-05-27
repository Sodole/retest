<template>
  <div class="d-flex align-end flex-wrap">
    <div style="width: 280px">
      <VTextField
        v-model="findTitle"
        variant="underlined"
        density="compact"
        label="검색"
        prepend-inner-icon="mdi-magnify"
        clearable
        hide-details
        @keyup.enter="fetchData"
        @click:clear="fetchData"
      />
    </div>

    <div v-if="user.token" class="ml-auto mt-2">
      <RouterLink :to="{ name: 'ClassroomWrite' }">
        <VBtn append-icon="mdi-pencil">작성</VBtn>
      </RouterLink>
    </div>
  </div>

  <VChipGroup
    v-model="type"
    @update:model-value="fetchData"
    class="mt-2"
    filter
    selected-class="text-primary"
  >
    <VChip value="all" class="rounded-pill">전체</VChip>
    <VChip value="free" class="rounded-pill">자유</VChip>
    <VChip value="notice" class="rounded-pill">공지</VChip>
    <VChip value="attach" class="rounded-pill">자료공유</VChip>
    <VChip value="question" class="rounded-pill">질문</VChip>
  </VChipGroup>

  <div
    v-if="classrooms.length < 1"
    class="d-flex justify-center align-center text-h5 py-16"
  >
    <VIcon icon="mdi-playlist-remove" class="mr-3" />
    <h5>조회된 글이 없습니다</h5>
  </div>

  <VList v-else class="rounded-lg pa-0 my-4">
    <VListItem v-for="item in classrooms" :key="item.classroomId" class="pa-0">
      <div :class="item.type === 'notice' && 'notice'" class="pa-4">
        <VChip
          size="x-small"
          :color="item.type === 'notice' ? 'success' : 'primary'"
          class="rounded-pill text-body-2"
        >
          {{ item.type }}
        </VChip>
        <VListItemTitle class="py-2">
          <VHover v-slot="{ props, isHovering }">
            <RouterLink
              :to="{
                name: 'ClassroomDetail',
                params: { id: item.classroomId },
              }"
              v-bind="props"
              class="hover-title font-weight-medium text-high-emphasis hover-transition"
              :class="isHovering && 'text-primary'"
            >
              {{ item.title }}
            </RouterLink>
          </VHover>
        </VListItemTitle>
        <VListItemSubtitle>
          <small>{{ item.email }}</small>
          <small class="mx-1">&middot;</small>
          <small>
            {{ timeText(item.createdAt) }}
          </small>
        </VListItemSubtitle>
      </div>
      <VDivider />
    </VListItem>
  </VList>

  <VPagination
    v-model="page"
    :length="pageLenght"
    :total-visible="smAndUp ? 6 : 4"
    :size="smAndUp ? 'small' : 'x-small'"
    @update:model-value="fetchData"
  />
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import { useDisplay } from 'vuetify';
import { onMounted } from 'vue';
import { getClassrooms } from '@/api/classroom';
import { devErrorLog } from '@/utils/common';
import useToast from '@/store/useToast';
import useUser from '@/store/useUser';

const { smAndUp } = useDisplay();

const user = useUser();

const type = ref('all');
const findTitle = ref();

const page = ref(1);
const itemsPerPage = ref(10);
const pageLenght = ref(1);

const timeText = (date) => {
  const now = dayjs();
  const createTime = dayjs(date);

  if (now.diff(createTime, 'hour') <= 12) {
    if (createTime.isSame(now, 'hour')) {
      if (createTime.isSame(now, 'minute')) {
        return '방금 전';
      }

      return `${now.diff(createTime, 'minute')}분 전`;
    }

    return `${now.diff(createTime, 'hour')}시간 전`;
  }

  return createTime.format('YYYY-MM-DD HH:mm');
};

const { popupSnackbar } = useToast();

const classrooms = ref([]);

const fetchData = async () => {
  try {
    const { data, pageLenght: length } = await getClassrooms(
      page.value,
      itemsPerPage.value,
      type.value !== 'all' ? type.value : null,
      findTitle.value,
    );

    classrooms.value = data;
    pageLenght.value = length;
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '조회를 실패했습니다');
  }
};

onMounted(async () => {
  await fetchData();
});
</script>

<style lang="scss" scoped>
.notice {
  background-color: rgba(
    var(--v-theme-primary),
    var(--v-activated-opacity)
  ) !important;
}

.hover-transition {
  transition: 0.3s ease-in-out;
}
</style>
