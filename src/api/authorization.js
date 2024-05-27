import { common } from '.';

export const authorization = async () => {
  try {
    const res = await common.post('/auth/refresh', null, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
