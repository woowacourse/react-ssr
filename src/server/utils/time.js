export const checkIsWithinFiveMinutes = (date1, date2) => {
  const fiveMinutes = 5 * 60 * 1000;
  const timeDifference = Math.abs(date1.getTime() - date2.getTime());

  return timeDifference <= fiveMinutes;
};
