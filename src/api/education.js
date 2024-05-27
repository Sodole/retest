import { education, authEducation } from '.';

export const getEducations = async () => {
  try {
    const res = await education.get('/view');

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const upsertEducation = async (
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
  email,
) => {
  try {
    const res = await authEducation.post('/edit', {
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
      email,
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const removeEducation = async (educationId) => {
  try {
    const res = await authEducation.delete('/remove', {
      params: {
        educationId,
      },
    });

    if (res.data === 0) throw new Error('No data');

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const signupEducation = async (
  educationId,
  email,
  name,
  phoneNumber,
  company,
  position,
  application,
) => {
  try {
    const res = await authEducation.post('/signup', {
      educationId,
      email,
      name,
      phoneNumber,
      company,
      position,
      application,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getSignupRecords = async (educationId) => {
  try {
    const res = await authEducation.get('/signup-records', {
      params: {
        educationId,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserRecord = async (educationId, email) => {
  try {
    const res = await education.get('/search-record', {
      params: {
        educationId,
        email,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const cancelUserRecord = async (educationId, email) => {
  try {
    const res = await education.patch('/cancel-signup', {
      educationId,
      email,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
