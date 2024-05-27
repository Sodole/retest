import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('user', () => {
  const token = ref(null);
  const email = ref(null);
  const name = ref(null);
  const role = ref(null);
  // const phonenumber = ref(null)
  const reset = () => {
    token.value = null;
    email.value = null;
    name.value = null;
    role.value = null;
    // phonenumber.value = null;
  };

  return {
    token,
    email,
    name,
    role,
    // phonenumber,
    reset,
  };
});
