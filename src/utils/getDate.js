const getDate = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const month = months[date.getMonth()];
  const utcDay = date.getUTCDay();
  const utcMonthDay = date.getUTCDate();

  let dayValue = utcDay;
  let monthDay = utcMonthDay;

  let arrDay = [];
  let arrDayName = [];
  let arrMonthDay = [];

  let fullDate = [`${days[utcDay]},${utcMonthDay} ${month}`];

  for (let i = 1; i <= 5; i++) {
    dayValue++;
    monthDay++;

    if (dayValue > 6) {
      dayValue = 0;
    }

    arrDay.push(dayValue);
    arrDayName.push(days[dayValue]);
    arrMonthDay.push(monthDay);
    fullDate.push(`${days[dayValue]},${monthDay} ${month}`);
  }

  return fullDate;
};

export default getDate;
