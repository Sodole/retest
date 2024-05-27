import { classroom } from '.';

export const getClassrooms = async (page, itemsPerPage, type, title) => {
  try {
    const res = await classroom.get('/view', {
      params: {
        page,
        itemsPerPage,
        type,
        title,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const detailClassroom = async (classroomId) => {
  try {
    const res = await classroom.get('/detail', {
      params: {
        classroomId,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const upsertClassroom = async (
  classroomId,
  title,
  content,
  type,
  fileName,
  file,
  email,
) => {
  try {
    const res = await classroom.post(
      '/edit',
      {
        classroomId,
        title,
        content,
        type,
        fileName,
        file,
        email,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return res;
  } catch (error) {
    throw error;
  }
};

export const removeClassroom = async (classroomId, email, filePath) => {
  try {
    const res = await classroom.delete('/remove', {
      params: {
        classroomId,
        email,
        filePath,
      },
    });

    if (res.data === 0) throw new Error('No data');

    return res.data;
  } catch (error) {
    throw error;
  }
};
