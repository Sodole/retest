<template>
  <VForm @submit.prevent="editClassroom">
    <VChipGroup
      v-model="editFrom.type"
      filter
      selected-class="text-primary"
      class="mb-2"
    >
      <VChip value="free" class="rounded-pill">자유</VChip>
      <VChip v-if="role === 'admin'" value="notice" class="rounded-pill">
        공지
      </VChip>
      <VChip value="attach" class="rounded-pill">자료공유</VChip>
      <VChip value="question" class="rounded-pill">질문</VChip>
    </VChipGroup>

    <VTextField
      v-model="editFrom.title"
      label="제목"
      placeholder="제목을 입력하세요"
      variant="underlined"
      class="mb-4"
    />

    <VTextarea
      v-model="editFrom.content"
      label="내용"
      placeholder="내용을 입력하세요"
      variant="outlined"
      hide-details
    />

    <div class="d-flex flex-wrap">
      <div style="width: 300px">
        <VFileInput
          v-model="editFrom.file"
          label="파일첨부"
          variant="underlined"
          multiple
          class="my-2"
        >
          <template #selection="{ fileNames }">
            <VChip
              v-for="fileName in fileNames"
              :key="fileName"
              size="small"
              label
              class="me-2 rounded-pill"
            >
              {{ fileName }}
            </VChip>
          </template>
        </VFileInput>
      </div>

      <VBtn
        type="submit"
        append-icon="mdi-check-circle"
        class="ml-auto my-auto"
      >
        작성완료
      </VBtn>
    </div>
  </VForm>
</template>

<script setup>
import useToast from '@/store/useToast';
import useUser from '@/store/useUser';
import { devErrorLog } from '@/utils/common';
import { onMounted, ref } from 'vue';
import { detailClassroom, upsertClassroom } from '@/api/classroom';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
});

const { role, email } = storeToRefs(useUser());
const { popupSnackbar } = useToast();
const router = useRouter();

const editFrom = ref({
  title: null,
  content: null,
  type: 'free',
  file: null,
});

const fetchClassroom = async (classroomId) => {
  try {
    return await detailClassroom(classroomId);
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '조회를 실패했습니다');
  }
};

onMounted(async () => {
  if (props?.id) {
    editFrom.value = await fetchClassroom(props.id);
  }
});

const editClassroom = async () => {
  try {
    const { classroomId, title, content, type, file } = editFrom.value;

    let uploadFile;
    if (Array.isArray(file)) uploadFile = file[0];

    if (uploadFile?.size > 5 * 1024 * 1024) {
      popupSnackbar('warning', '최대 5MB의 파일만 등록 가능합니다');
      return;
    }

    const res = await upsertClassroom(
      classroomId,
      title,
      content,
      type,
      uploadFile?.name,
      uploadFile,
      email.value,
    );

    if (res.status > 299) throw new Error('Edit failed');

    const popupMessage =
      res.status === 201 ? '등록되었습니다' : '수정되었습니다';

    popupSnackbar('success', popupMessage);

    router.push({ name: 'ClassroomList' });
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '저장을 실패했습니다');
  }
};
</script>
