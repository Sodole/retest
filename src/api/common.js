import { common, authCommon } from '.';

export const sendEmail = async (
  name,
  type,
  phone,
  emailAddress,
  title,
  content,
) => {
  try {
    const res = await authCommon.post('/email/send', {
      name,
      type,
      phone,
      emailAddress,
      title,
      content,
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const sendSMWP = async (
  name,
  phone,
  email,
  applyDate,
  title,
  content,
) => {
  try {
    const res = await authCommon.post('/email/apply', {
      name,
      phone,
      email,
      applyDate,
      title,
      content,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
