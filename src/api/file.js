import { file } from '.';

export const fileDownload = async (filePath) => {
  try {
    // index의 common 인스턴스 호출하여 사용
    const res = await file.get('/download', {
      params: {
        filePath,
      },
      responseType: 'blob',
    });

    if (!res.data) {
      throw Error('undifined file');
    }
    return new Blob([res.data]);
  } catch (error) {
    throw error;
  }
};
