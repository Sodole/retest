<template>
  <VCard>
    <VCardTitle class="d-flex align-end mb-4">
      <VChip
        class="rounded-pill mr-2"
        size="small"
        :color="classroom?.type === 'notice' ? 'success' : 'primary'"
      >
        {{ classroom?.type }}
      </VChip>
      <h5 class="font-weight-medium">{{ classroom?.title }}</h5>
    </VCardTitle>

    <VCardSubtitle class="d-flex justify-space-between flex-wrap">
      <span>
        {{ classroom?.email }}
      </span>
      <small>
        {{ dayjs(classroom?.createdAt).format('YYYY-MM-DD(ddd) HH:mm') }}
      </small>
    </VCardSubtitle>

    <VDivider class="my-4" />

    <VCardText
      v-if="classroom?.fileName && classroom?.filePath"
      class="d-flex align-center"
    >
      <VIcon icon="mdi-paperclip" class="mr-1 text-body-1" />
      <a
        class="file-download"
        @click="download(classroom.filePath, classroom.fileName)"
      >
        {{ classroom.fileName }}
      </a>
    </VCardText>

    <VCardText class="py-10">
      <span>
        {{ classroom?.content }}
      </span>
    </VCardText>

    <VDivider
      v-if="isAdmin(role) || isMine(classroom.email, email)"
      class="mt-4"
    />

    <VCardActions
      v-if="isAdmin(role) || isMine(classroom.email, email)"
      class="d-flex justify-end"
    >
      <VBtn
        v-if="isAdmin(role) || isMine(classroom.email, email)"
        color="error"
        @click="remove(classroom.classroomId, email, classroom.filePath)"
      >
        삭제
      </VBtn>
      <VBtn
        v-if="isMine(classroom.email, email)"
        color="on-surface"
        @click="
          router.push({
            name: 'ClassroomEdit',
            params: { id: props.id },
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
import { detailClassroom, removeClassroom } from '@/api/classroom';
import { devErrorLog, fileSave } from '@/utils/common';
import useToast from '@/store/useToast';
import useUser from '@/store/useUser';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { fileDownload } from '@/api/file';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
});

const { popupSnackbar } = useToast();

const classroom = ref({});

const fetchClassroom = async (classroomId) => {
  try {
    return await detailClassroom(classroomId);
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '조회를 실패했습니다');
  }
};

onMounted(async () => {
  classroom.value = await fetchClassroom(props.id);
});

const { email, role } = storeToRefs(useUser());

const isAdmin = (userRole) => userRole === 'admin';
const isMine = (classroomEmail, userEmail) => classroomEmail === userEmail;

const router = useRouter();

const remove = async (classroomId, userEmail, filePath) => {
  try {
    const res = await removeClassroom(classroomId, userEmail, filePath);

    if (res === 0) throw new Error('Failed remove');

    popupSnackbar('success', '삭제되었습니다');

    router.replace({ name: 'ClassroomList' });
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
