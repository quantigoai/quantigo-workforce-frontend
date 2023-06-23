/*
 * File           : dateConverter.js
 * Project        : wmpv2
 * Created Date   : Fr 30 Dec 2022 10:29:22
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Dec 30 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

export const daysAndMonths = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[new Date(date).getDay()];
  const month = months[new Date(date).getMonth()];
  const dateNumber = new Date(date).getDate();
  return { day, month, dateNumber };
};
