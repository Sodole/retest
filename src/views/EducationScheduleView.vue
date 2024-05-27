<template>
  <AppTitleBanner> 교육일정 </AppTitleBanner>

  <VContainer class="py-16">
    <section v-if="role === 'admin'" class="mb-8">
      <div class="d-flex justify-end mb-2">
        <VBtn append-icon="mdi-calendar" @click="openEditModal">
          교육등록
        </VBtn>
      </div>
      <VDivider />
    </section>

    <VRow>
      <VCol
        v-if="lectures.length < 1"
        class="d-flex justify-center align-center text-h5"
      >
        <VIcon icon="mdi-calendar-remove" class="mr-3" />
        <h5>등록 된 교육이 없습니다</h5>
      </VCol>

      <VCol
        v-else
        v-for="lecture in lectures"
        :key="lecture.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <VCard
          class="elevation-3 pa-2"
          @click="openModalAndSetLecture(lecture)"
        >
          <VCardItem>
            <div class="d-flex justify-space-between align-end">
              <div class="d-flex align-end">
                <h4>{{ dayjs(lecture.startDate).format('MM.DD') }}</h4>
                <small>{{ dayjs(lecture.startDate).format('(ddd)') }}</small>
              </div>

              <div class="d-flex flex-column">
                <small class="font-weight-medium">
                  {{ lecture.startTime }}
                </small>
                <div class="text-caption text-medium-emphasis">
                  {{ lecture.endTime }}
                </div>
              </div>

              <div>
                <b>{{ lecture.capacity }}</b>
                <small class="text-medium-emphasis"> 명</small>
              </div>
            </div>
          </VCardItem>

          <!-- <VCardItem class="pb-1">
            <VChip class="rounded-pill" size="small" color="primary">
              {{ `#${lecture.tag}` }}
            </VChip>
          </VCardItem> -->

          <VCardTitle class="pb-1">
            <b>{{ lecture.title }}</b>
          </VCardTitle>
          <VCardSubtitle>
            {{ lecture.type }}
          </VCardSubtitle>

          <VCardText>
            <div class="d-flex justify-space-between align-center">
              <VChip class="rounded-lg" :color="statusColor(lecture.status)">
                {{ findTitleByValue(LECTURE_STATUS, lecture.status) }}
              </VChip>
              <div>
                <small class="text-medium-emphasis">
                  {{ `~${dayjs(lecture.endDate).format('YY.MM.DD')}` }}
                </small>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>

  <VDialog v-model="idEditModal" max-width="1000">
    <VSheet class="py-6 px-8">
      <VForm @submit.prevent="editLecture">
        <h5>교육등록</h5>
        <VDivider class="mb-4" />
        <VRow dense>
          <VCol cols="12" sm="6">
            <VTextField v-model="editForm.type" label="유형" />
          </VCol>
          <VCol cols="12" sm="6">
            <VSelect
              v-model="editForm.status"
              label="상태"
              :items="LECTURE_STATUS"
            />
          </VCol>
          <VCol cols="12">
            <VTextField v-model="editForm.title" label="제목" />
          </VCol>
          <VCol cols="12">
            <VTextarea v-model="editForm.content" label="내용" />
          </VCol>
          <VCol cols="12" sm="6">
            <VTextField
              v-model="editForm.startDate"
              type="date"
              label="시작일"
            />
          </VCol>
          <VCol cols="12" sm="6">
            <VTextField v-model="editForm.endDate" type="date" label="종료일" />
          </VCol>
          <VCol cols="12" sm="6">
            <VTextField
              v-model="editForm.startTime"
              type="time"
              label="시작시간"
            />
          </VCol>
          <VCol cols="12" sm="6">
            <VTextField
              v-model="editForm.endTime"
              type="time"
              label="종료시간"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="editForm.capacity"
              type="number"
              label="정원"
            />
          </VCol>
          <VCol cols="12" class="d-flex justify-end">
            <VBtn type="submit" append-icon="mdi-check-circle">저장</VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VSheet>
  </VDialog>

  <VDialog v-model="isDetailModal" max-width="1000">
    <VCard class="pa-4">
      <VWindow v-model="modalState" class="overflow-visible">
        <VWindowItem :value="MODAL_DETAIL_PAGE">
          <VCardTitle class="d-flex align-end mb-4 overflow-visible">
            <VChip class="rounded-pill mr-2" size="small">
              {{ selectedLecture.type }}
            </VChip>
            <h4 class="font-weight-bold">{{ selectedLecture.title }}</h4>
            <div class="ml-auto">
              <VBtn
                variant="text"
                color="on-surface"
                class="mr-3"
                @click="openSignupCheckModal"
              >
                신청조회
              </VBtn>

              <VBtn
                append-icon="mdi-calendar-cursor"
                @click="toRegistrationPage"
              >
                신청하기
              </VBtn>
            </div>
          </VCardTitle>

          <VCardSubtitle class="d-flex">
            <VChip
              class="rounded-lg mr-2"
              :color="statusColor(selectedLecture.status)"
            >
              {{ findTitleByValue(LECTURE_STATUS, selectedLecture.status) }}
            </VChip>
            <VChip class="rounded-lg font-weight-bold">
              {{ `${selectedLecture.capacity}명` }}
            </VChip>
            <div class="d-flex flex-column align-end ml-auto">
              <small>
                {{
                  `${dayjs(selectedLecture.startDate).format(
                    'YYYY.MM.DD(ddd)',
                  )} 
                  ~ ${dayjs(selectedLecture.endDate).format('YYYY.MM.DD(ddd)')}`
                }}
              </small>
              <small>
                {{
                  `${selectedLecture.startTime} ~ ${selectedLecture.endTime}`
                }}
              </small>
            </div>
          </VCardSubtitle>

          <VCardText class="py-10">
            {{ selectedLecture.content }}
          </VCardText>

          <!-- <VCardItem class="px-4 py-2">
            <VChip class="rounded-pill" size="small" color="primary">
              {{ `#${selectedLecture.tag}` }}
            </VChip>
          </VCardItem> -->

          <VCardActions v-if="role === 'admin'" class="d-flex justify-end">
            <VBtn
              variant="text"
              color="error"
              @click="removeLecture(selectedLecture.educationId)"
            >
              삭제
            </VBtn>
            <VBtn
              variant="text"
              color="on-surface"
              @click="toEditLecture(selectedLecture)"
            >
              수정
            </VBtn>

            <VBtn
              variant="elevated"
              color="secondary"
              append-icon="mdi-list-box"
              class="px-4"
              @click="toApplicantsPage()"
            >
              신청자조회
            </VBtn>
          </VCardActions>
        </VWindowItem>

        <VWindowItem :value="MODAL_REGISTRATION_PAGE">
          <VCardTitle class="d-flex align-center overflow-visible">
            <VBtn
              icon="mdi-arrow-left"
              variant="text"
              color="on-surface"
              class="mr-3"
              @click="setModalStatus(MODAL_DETAIL_PAGE)"
            />

            <h6>교육 신청</h6>

            <div class="ml-auto">
              <VBtn append-icon="mdi-check-circle" @click="signupLecture">
                신청완료
              </VBtn>
            </div>
          </VCardTitle>

          <VCardText>
            <div class="d-flex">
              <VTextField
                v-model="nameField"
                label="성명"
                variant="underlined"
                class="mr-4"
              />
              <VTextField
                v-model="emailField"
                label="이메일"
                variant="underlined"
              />
            </div>
            <div class="d-flex">
              <VTextField
                v-model="phoneField"
                label="핸드폰"
                variant="underlined"
                class="mr-4"
              />
              <VTextField
                v-model="companyField"
                label="회사명"
                variant="underlined"
              />
            </div>
            <div class="d-flex">
              <VTextField
                v-model="positonField"
                label="포지션"
                variant="underlined"
                class="mr-4"
              />
              <VTextField
                v-model="applicationField"
                label="적용분야"
                variant="underlined"
              />
            </div>
          </VCardText>
        </VWindowItem>

        <VWindowItem :value="MODAL_APPLICANTS_PAGE">
          <VCardTitle class="d-flex align-center">
            <VBtn
              icon="mdi-arrow-left"
              variant="text"
              color="on-surface"
              class="mr-3"
              @click="setModalStatus(MODAL_DETAIL_PAGE)"
            />

            <h6>신청자 조회</h6>

            <div class="ml-auto">
              <span class="text-body-2">
                {{
                  `신청 ${applicantsCount} / 정원 ${selectedLecture?.capacity}`
                }}
              </span>
            </div>
          </VCardTitle>

          <VCardItem>
            <VDataTable
              :headers="applicantsHeaders"
              :items="applicants"
              class="overflow-auto text-no-wrap"
            >
              <template #item.status="{ item: { status } }">
                <VBadge
                  dot
                  inline
                  :color="status === 'signup' ? 'success' : 'error'"
                />
                {{ status }}
              </template>
            </VDataTable>
          </VCardItem>
        </VWindowItem>
      </VWindow>
    </VCard>
  </VDialog>

  <VDialog v-model="signupCheckModal" max-width="600">
    <VSheet class="py-6 px-8">
      <VForm @submit.prevent="searchUser">
        <VTextField v-model="searchEmail" label="이메일" />
        <VList v-if="userRecord">
          <VListItem>
            <VListItemSubtitle>이메일</VListItemSubtitle>
            <VListItemTitle>{{ userRecord.email }}</VListItemTitle>
          </VListItem>
          <VListItem>
            <VListItemSubtitle>이름</VListItemSubtitle>
            <VListItemTitle>{{ userRecord.name }}</VListItemTitle>
          </VListItem>
          <VListItem>
            <VListItemSubtitle>전화번호</VListItemSubtitle>
            <VListItemTitle>{{ userRecord.phoneNumber }}</VListItemTitle>
          </VListItem>
          <VListItem>
            <VListItemSubtitle>회사</VListItemSubtitle>
            <VListItemTitle>{{ userRecord?.company }}</VListItemTitle>
          </VListItem>
          <VListItem>
            <VListItemSubtitle>포지션</VListItemSubtitle>
            <VListItemTitle>{{ userRecord?.position }}</VListItemTitle>
          </VListItem>
          <VListItem>
            <VListItemSubtitle>적용분야</VListItemSubtitle>
            <VListItemTitle>{{ userRecord?.application }}</VListItemTitle>
          </VListItem>
          <VListItem>
            <VListItemSubtitle>신청시간</VListItemSubtitle>
            <VListItemTitle>
              {{ dayjs(userRecord.createdAt).format('YYYY.MM.DD HH:mm') }}
            </VListItemTitle>
          </VListItem>
        </VList>
        <div class="d-flex justify-end">
          <VBtn
            v-if="userRecord"
            variant="text"
            class="mr-3"
            color="on-surface"
            @click="cancleSignup"
          >
            신청취소
          </VBtn>
          <VBtn type="submit" append-icon="mdi-magnify">검색</VBtn>
        </div>
      </VForm>
    </VSheet>
  </VDialog>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import dayjs from 'dayjs';
import AppTitleBanner from '@/components/AppTitleBanner.vue';
import {
  getEducations,
  signupEducation,
  upsertEducation,
  getSignupRecords,
  getUserRecord,
  cancelUserRecord,
  removeEducation,
} from '@/api/education';
import { getUserByEmail } from '@/api/user';
import useUser from '@/store/useUser';
import { storeToRefs } from 'pinia';
import useToast from '@/store/useToast';
import { devErrorLog } from '@/utils/common';

const MODAL_DETAIL_PAGE = 'detail';
const MODAL_REGISTRATION_PAGE = 'registration';
const MODAL_APPLICANTS_PAGE = 'applicants';

const LECTURE_STATUS = [
  {
    title: '모집중',
    value: 'recruiting',
  },
  {
    title: '모집종료',
    value: 'completed',
  },
];

const findTitleByValue = (array, value) =>
  array.find((item) => item.value === value)?.title;

const { popupSnackbar } = useToast();

const lectures = ref([]);

onMounted(async () => {
  try {
    lectures.value = await getEducations();
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '조회를 실패했습니다');
  }
});

const { email: currentUserEmail, token, role } = storeToRefs(useUser());

const statusColor = (status) => {
  switch (status) {
    case 'recruiting':
      return 'success';
    case 'completed':
      return 'primary';
    default:
      return 'error';
  }
};

const isDetailModal = ref(false);
const selectedLecture = ref(null);
const modalState = ref(MODAL_DETAIL_PAGE);

watch(
  () => isDetailModal.value,
  (value, oldValue) => {
    if (!value && oldValue) {
      setTimeout(() => {
        modalState.value = MODAL_DETAIL_PAGE;
      }, 300);
    }
  },
);

const setModalStatus = (status) => {
  modalState.value = status;
};

const openModalAndSetLecture = (lecture) => {
  selectedLecture.value = lecture;
  isDetailModal.value = true;
};

const getUserDetail = async (userEmail) => {
  try {
    return await getUserByEmail(userEmail);
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '유저 정보 조회를 실패했습니다');
  }
};

const nameField = ref(null);
const emailField = ref(null);
const phoneField = ref(null);
const companyField = ref(null);
const positonField = ref(null);
const applicationField = ref(null);

const toRegistrationPage = async () => {
  setModalStatus(MODAL_REGISTRATION_PAGE);

  if (!token.value) return;

  await setRegistrationInfo();
};

const setRegistrationInfo = async () => {
  const { email, name, phoneNumber, company } = await getUserDetail(
    currentUserEmail.value,
  );

  nameField.value = name;
  emailField.value = email;
  phoneField.value = phoneNumber;
  companyField.value = company;
};

const signupLecture = async () => {
  try {
    // TODO: 유효성
    const res = await signupEducation(
      selectedLecture.value.educationId,
      emailField.value,
      nameField.value,
      phoneField.value,
      companyField.value,
      positonField.value,
      applicationField.value,
    );

    if (!res) throw new Error('Failed signup');

    isDetailModal.value = false;
    popupSnackbar('success', '신청을 성공했습니다');
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '신청을 실패했습니다');
  }
};

const idEditModal = ref(false);
const openEditModal = () => {
  if (role.value !== 'admin') return;

  idEditModal.value = true;
};

const editForm = ref({
  educationId: null,
  title: null,
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
  content: null,
  type: null,
  status: 'recruiting',
  capacity: null,
});

const editLecture = async () => {
  try {
    if (role.value !== 'admin') return;

    // TODO: 유효성
    const {
      educationId,
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      content,
      type,
      status,
      capacity,
    } = editForm.value;

    const res = await upsertEducation(
      educationId,
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      content,
      type,
      status,
      capacity,
      currentUserEmail.value,
    );

    lectures.value = await getEducations();

    editForm.value = {
      educationId: null,
      title: null,
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
      content: null,
      type: null,
      status: 'recruiting',
      capacity: null,
    };

    idEditModal.value = false;

    const popupMessage =
      res.status === 201 ? '등록되었습니다' : '수정되었습니다';

    popupSnackbar('success', popupMessage);
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '저장을 실패했습니다');
  }
};

const removeLecture = async (educationId) => {
  try {
    if (role.value !== 'admin') return;

    const res = await removeEducation(educationId);

    if (res === 0) throw new Error('Failed remove');

    lectures.value = await getEducations();

    isDetailModal.value = false;
    popupSnackbar('success', '삭제되었습니다');
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '삭제를 실패했습니다');
  }
};

const toEditLecture = (lecture) => {
  editForm.value = {
    educationId: lecture.educationId,
    title: lecture.title,
    startDate: dayjs(lecture.startDate).format('YYYY-MM-DD'),
    endDate: dayjs(lecture.endDate).format('YYYY-MM-DD'),
    startTime: lecture.startTime,
    endTime: lecture.endTime,
    content: lecture.content,
    type: lecture.type,
    status: lecture.status,
    capacity: lecture.capacity,
  };

  isDetailModal.value = false;
  openEditModal();
};

const applicants = ref([]);
const applicantsHeaders = ref([]);
const applicantsCount = ref(0);

const getApplicants = async (educationId) => {
  try {
    return await getSignupRecords(educationId);
  } catch (error) {
    popupSnackbar('error', '신청자 조회를 실패했습니다');
  }
};

const toApplicantsPage = async () => {
  if (role.value !== 'admin') return;

  setModalStatus(MODAL_APPLICANTS_PAGE);

  await setApplicantsTableData();
};

const setApplicantsTableData = async () => {
  const data = await getApplicants(selectedLecture.value.educationId);

  applicantsCount.value = 0;

  const items = data.map((item) => {
    if (item.status === 'signup') applicantsCount.value++;

    return {
      status: item.status,
      name: item.name,
      email: item.email,
      phoneNumber: item.phoneNumber,
      company: item?.company,
      position: item?.position,
      application: item?.application,
      createdAt: dayjs(item.createdAt).format('YYYY.MM.DD HH:mm'),
    };
  });

  applicants.value = items;

  if (items.length === 0) return;

  applicantsHeaders.value = Object.keys(items[0]).map((item) => ({
    title: item,
    value: item,
    key: item,
  }));
};

const signupCheckModal = ref(false);
const openSignupCheckModal = () => {
  signupCheckModal.value = true;
};

const userRecord = ref(null);
const searchEmail = ref(null);
const searchUser = async () => {
  try {
    const user = await getUserRecord(
      selectedLecture.value.educationId,
      searchEmail.value,
    );

    if (!user) {
      popupSnackbar('warning', '조회 된 정보가 없습니다');
      return;
    }

    userRecord.value = user;

    searchEmail.value = null;
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '검색을 실패했습니다');
  }
};

const cancleSignup = async () => {
  try {
    if (!userRecord.value) {
      popupSnackbar('warning', '유저 정보가 없습니다');
      return;
    }

    const { educationId, email } = userRecord.value;

    const res = await cancelUserRecord(educationId, email);

    if (res.status > 299) {
      throw new Error('Failed update');
    }

    popupSnackbar('success', '신청을 취소했습니다');
    signupCheckModal.value = false;
  } catch (error) {
    devErrorLog(error);
    popupSnackbar('error', '취소를 실패했습니다');
  }
};

watch(
  () => signupCheckModal.value,
  (value, oldValue) => {
    if (!value && oldValue) {
      setTimeout(() => {
        userRecord.value = null;
      }, 300);
    }
  },
);
</script>

<style scoped>
td sapn {
  font-size: 0.875rem !important;
}
</style>
