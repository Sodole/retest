export const devErrorLog = (error) => {
  if (import.meta.env.DEV) console.error(error);
};

export const checkYn = (ynData) => ynData?.toUpperCase() === 'Y';

export const fileSave = (file, fileName) => {
  try {
    const fileObjectUrl = window.URL.createObjectURL(file);

    const element = document.createElement('a');
    element.href = fileObjectUrl;
    element.download = `${fileName}`;
    element.click();

    // 가상 Url 삭제
    window.URL.revokeObjectURL(fileObjectUrl);
  } catch (error) {
    throw error;
  }
};
