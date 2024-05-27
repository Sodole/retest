<template>
  <VRow class="section-margin mt-16 mb-16" no-gutters>
    <!-- tabs -->
    <VCol cols="12" class="d-flex flex-column align-center mb-10">
      <VTabs
        v-model="office"
        color="on-surface"
        @update:model-value="officeChangeHandler(office)"
      >
        <VTab :value="OFFICE_LIST.SEOUL" rounded="sm">
          {{ locale.t('$vuetify.home.locationSection.magok.title') }}
        </VTab>
        <VTab :value="OFFICE_LIST.HEAD" rounded="sm">
          {{ locale.t('$vuetify.home.locationSection.namyangju.title') }}
        </VTab>
      </VTabs>
      <VDivider></VDivider>
    </VCol>

    <!-- kakao map -->
    <VCol cols="12" md="6">
      <div
        id="map"
        class="overflow-hidden h-100"
        style="min-height: 316px"
        :class="mdAndUp && 'mr-5'"
      />
    </VCol>

    <!-- section -->
    <VCol cols="12" md="6">
      <VWindow :model-value="office.key" :class="!mdAndUp && 'mt-5'">
        <VWindowItem :value="OFFICE_LIST.SEOUL.key">
          <VCard
            color="background"
            class="pa-0 mb-8"
            :class="mdAndUp && 'pl-5'"
          >
            <VCardTitle class="text-h5 font-weight-bold text-wrap pa-0">
              {{ locale.t('$vuetify.home.locationSection.magok.title') }}
            </VCardTitle>

            <VCardSubtitle class="px-0 py-4 text-body-1 text-wrap">
              <span>
                {{ locale.t('$vuetify.home.locationSection.magok.address') }}
              </span>

              <VTooltip location="bottom">
                {{ locale.t('$vuetify.home.locationSection.copyAddress') }}
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    variant="text"
                    icon="mdi-content-copy"
                    size="x-small"
                    color="on-surface"
                    class="ml-4"
                    @click="
                      copyClipboardHandler(
                        locale.t('$vuetify.home.locationSection.magok.address'),
                      )
                    "
                  />
                </template>
              </VTooltip>
            </VCardSubtitle>

            <VCardText class="text-body-1 text-medium-emphasis pa-0">
              <p>TEL: {{ TEL }}</p>
              <p>FAX: {{ FAX }}</p>
              <p>EMAIL: {{ EMAIL }}</p>
            </VCardText>
          </VCard>

          <VCard color="background" class="pa-0" :class="mdAndUp && 'pl-5'">
            <VCardTitle class="pa-0 text-subtitle-1 font-weight-bold">
              {{ locale.t('$vuetify.header.navigationMenu.contact') }}
            </VCardTitle>

            <VCardSubtitle class="text-body-1 px-0 py-2">
              <p>
                {{
                  locale.t('$vuetify.home.locationSection.magok.subwaySation')
                }}
              </p>
            </VCardSubtitle>

            <VCardSubtitle class="text-body-1 px-0">
              <p>
                {{ locale.t('$vuetify.home.locationSection.magok.busStation') }}
              </p>
              <p>
                {{ locale.t('$vuetify.home.locationSection.magok.busNum') }}
              </p>
            </VCardSubtitle>
          </VCard>
        </VWindowItem>

        <VWindowItem :value="OFFICE_LIST.HEAD.key">
          <VCard
            color="background"
            class="pa-0 mb-8"
            :class="mdAndUp && 'pl-5'"
          >
            <VCardTitle class="text-h5 font-weight-bold text-wrap pa-0">
              {{ locale.t('$vuetify.home.locationSection.namyangju.title') }}
            </VCardTitle>

            <VCardSubtitle class="px-0 py-4 text-body-1 text-wrap">
              <span>
                {{
                  locale.t('$vuetify.home.locationSection.namyangju.address')
                }}
              </span>

              <VTooltip location="bottom">
                {{ locale.t('$vuetify.home.locationSection.copyAddress') }}
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    variant="text"
                    icon="mdi-content-copy"
                    size="x-small"
                    color="on-surface"
                    class="ml-4 mt-6"
                    @click="
                      copyClipboardHandler(
                        locale.t(
                          '$vuetify.home.locationSection.namyangju.address',
                        ),
                      )
                    "
                  />
                </template>
              </VTooltip>
            </VCardSubtitle>

            <VCardText class="text-body-1 text-medium-emphasis pa-0">
              <p>TEL: {{ TEL }}</p>
              <p>FAX: {{ FAX }}</p>
              <p>EMAIL: {{ EMAIL }}</p>
            </VCardText>
          </VCard>

          <VCard color="background" class="pa-0" :class="mdAndUp && 'pl-5'">
            <VCardTitle class="pa-0 text-subtitle-1 font-weight-bold">
              {{ locale.t('$vuetify.header.navigationMenu.contact') }}
            </VCardTitle>

            <VCardSubtitle class="text-body-1 px-0 pt-2">
              <p>
                {{
                  locale.t('$vuetify.home.locationSection.namyangju.busStation')
                }}
              </p>
              <p>
                {{ locale.t('$vuetify.home.locationSection.namyangju.busNum') }}
              </p>
            </VCardSubtitle>
          </VCard>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>

<script setup>
import { watch, onMounted, ref } from 'vue';
import { useDisplay, useLocale } from 'vuetify';

const locale = useLocale();

const OFFICE_LIST = {
  HEAD: {
    key: 'namyangju',
    lat: 37.59775244116486,
    lng: 127.17428928078346,
  },
  SEOUL: {
    key: 'magok',
    lat: 37.55818205774833,
    lng: 126.8280891110435,
  },
};

const TEL = '02-6956-3035';
const FAX = '070-7966-3045';
const EMAIL = 'smartfactory@sainti.co.kr';

const office = ref(OFFICE_LIST.SEOUL);

const { mdAndUp } = useDisplay();

const copyClipboardHandler = (text) => {
  try {
    navigator.clipboard.writeText(text);
    // TODO: 추후 알림 팝업 표시 필요
  } catch (error) {
    // TODO: 추후 알림 팝업 표시 필요
    console.error(error);
  }
};

const initMap = (currentOffice) => {
  const { key, lat: latitude, lng: Longtitude } = currentOffice;

  const mapElement = document.getElementById('map');

  const div = document.createElement('div');
  const mapContainer = mapElement.appendChild(div);
  mapContainer.setAttribute('id', key);
  mapContainer.setAttribute('style', 'height: 100%');

  const options = {
    center: new kakao.maps.LatLng(latitude, Longtitude),
    level: 3,
  };

  const map = new kakao.maps.Map(mapContainer, options);

  // marker setup
  const markerPosition = new kakao.maps.LatLng(latitude, Longtitude);

  const marker = new kakao.maps.Marker({
    map,
    position: markerPosition,
  });

  // return marker.setMap(map, marker);

  const content = `<div class="customoverlay d-block bg-primary text-on-primary pa-1 rounded-lg elevation-4">
    <span class="title">
      ${locale.t(`$vuetify.home.locationSection.${key}.title`)}
    </span>
    </div>`;

  const overlay = new kakao.maps.CustomOverlay({
    content,
    map,
    position: marker.getPosition(),
    xAnchor: 0.5,
    yAnchor: 2.4,
  });

  overlay.setMap(map);
};

const changeMapVisible = (key) => {
  const currentElement = document.getElementById('map');
  const childElements = currentElement.childNodes;
  childElements.forEach((element) => {
    if (element.id !== key) {
      element.classList.add('d-none');
    } else {
      element.classList.remove('d-none');
    }
  });
};

const officeChangeHandler = (currentOffice) => {
  const currentElement = document.getElementById(currentOffice.key);
  if (currentElement) {
    changeMapVisible(currentOffice.key);
    return;
  }

  initMap(currentOffice);
  changeMapVisible(currentOffice.key);
};

onMounted(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src =
    '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c4af19b2d5af06c9e3b90345e34edfaa';
  script.addEventListener('load', () => {
    kakao.maps.load(() => {
      initMap(office.value);
    });
  });
  document.head.appendChild(script);
});

watch(
  () => locale.current.value,
  () => {
    const currentElement = document.getElementById('map');
    currentElement.innerHTML = null;

    initMap(office.value);
    changeMapVisible(office.value.key);
  },
);
</script>
