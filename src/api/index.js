import axios from 'axios';
import { storeToRefs } from 'pinia';
import useUser from '@/store/useUser';

const defaultOptions = {
  withCredentials: true,
};

const createIstance = (baseURL, options) => {
  const instance = axios.create({
    baseURL,
    ...defaultOptions,
    ...options,
  });
  return instance;
};

const createInstanceAndInterceptor = (baseURL, options) => {
  const instance = axios.create({
    baseURL,
    ...defaultOptions,
    ...options,
  });

  // request interCeptor config
  instance.interceptors.request.use((request) => {
    const { token } = useUser();
    if (token) request.headers.Authorization = `Bearer ${token}`;

    return request;
  });

  // response interCeptor config
  instance.interceptors.response.use(
    async (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API}/user/refresh`,
            null,
            {
              withCredentials: true,
            },
          );

          if (!data) return error;

          const { email, name, role, token } = storeToRefs(useUser());

          email.value = data.email;
          name.value = data.name;
          role.value = data.role;
          token.value = data.accessToken;

          return await axios({
            ...error.config,
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          });
        } catch (err) {
          return err;
        }
      }
      return error;
    },
  );

  return instance;
};

export const common = createIstance(import.meta.env.VITE_API);
export const authCommon = createInstanceAndInterceptor(
  `${import.meta.env.VITE_API}`,
);

export const user = createIstance(`${import.meta.env.VITE_API}/user`);
export const authUser = createInstanceAndInterceptor(
  `${import.meta.env.VITE_API}/user`,
);

export const education = createIstance(`${import.meta.env.VITE_API}/education`);
export const authEducation = createInstanceAndInterceptor(
  `${import.meta.env.VITE_API}/education`,
);

export const news = createIstance(`${import.meta.env.VITE_API}/news`);
export const authNews = createInstanceAndInterceptor(
  `${import.meta.env.VITE_API}/news`,
);
export const file = createInstanceAndInterceptor(
  `${import.meta.env.VITE_API}/file`,
);

export const classroom = createInstanceAndInterceptor(
  `${import.meta.env.VITE_API}/classroom`,
);
