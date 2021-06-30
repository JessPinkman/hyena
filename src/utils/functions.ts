export const getTwoDigitNumberString = (num: number) => {
  return num < 10 ? `0${num}` : num.toString();
};
