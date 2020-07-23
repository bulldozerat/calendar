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
