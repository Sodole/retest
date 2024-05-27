export const ruleRequired = (value) => {
  if (!value) {
    return '값을 입력하세요';
  }

  return true;
};
