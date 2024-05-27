import { authUser, user } from '.';

export const login = async (email, password) => {
  try {
    const res = await user.post('/signin', {
      email,
      password,
    });
    if (!res?.data) throw Error('No data');

    return res.data;
  } catch (error) {
    throw Error(error.message, error);
  }
};

export const logout = async () => {
  try {
    await user.post('/signout');
  } catch (error) {
    throw Error(error.message, error);
  }
};

export const signup = async (
  email,
  password,
  name,
  birthDate,
  gender,
  phoneNumber,
  company,
) => {
  try {
    const res = await user.post('/signup', {
      email,
      password,
      name,
      birthDate,
      gender,
      phoneNumber,
      company,
    });

    return res.data;
  } catch (error) {
    throw Error(error.message, error);
  }
};

export const refresh = async () => {
  try {
    const res = await user.post('/refresh');

    return res;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const res = await authUser.get('/detail', {
      params: {
        email,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
