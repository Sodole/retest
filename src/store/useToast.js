import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export default defineStore('toast', () => {
  const showSnackbar = ref(false);
  const snackbarType = ref('info');
  const snackbarText = ref(null);
  const snackbarTimeout = ref(2000);

  const snackbarColor = computed(() => {
    switch (snackbarType.value) {
      case 'success':
      case 'warning':
      case 'error':
        return snackbarType.value;
      default:
        return 'info';
    }
  });

  const snackbarIcon = computed(() => {
    switch (snackbarType.value) {
      case 'success':
        return 'mdi-check-circle';
      case 'warning':
        return 'mdi-alert';
      case 'error':
        return 'mdi-alert-circle';
      default:
        return 'mdi-information';
    }
  });

  let timeoutId;

  const popupSnackbar = (type, text) => {
    if (snackbarType.value === type && snackbarText.value === text)
      clearTimeout(timeoutId);

    showSnackbar.value = true;
    snackbarType.value = type;
    snackbarText.value = text;

    if (snackbarTimeout.value > 2100) {
      snackbarTimeout.value = 2000;
    } else {
      snackbarTimeout.value += 1;
    }

    timeoutId = setTimeout(() => {
      showSnackbar.value = false;
    }, snackbarTimeout.value);
  };

  return {
    showSnackbar,
    snackbarText,
    snackbarTimeout,
    snackbarColor,
    snackbarIcon,
    popupSnackbar,
  };
});
