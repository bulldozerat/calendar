export const calendarDaysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const convertNumberToDayStirng = dayNumber => {
  return calendarDaysOfTheWeek.filter((day, index) => index === dayNumber)[0];
};

export const convertNumberToMonthStirng = monthdayNumber => {
  return months.filter((day, index) => index === monthdayNumber)[0];
};

export const getDaysInMonth = (month, isPrevMonth) => {
  const returnMonth = isPrevMonth ? month : month + 1;
  // January is 0
  return new Date(2020, returnMonth, 0).getDate();
};

export const getFirstDayOfMonth = month => {
  return new Date(2020, month, 1).getDay();
};
