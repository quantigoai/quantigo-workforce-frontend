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
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

export const formatDate = (inputDate) => {
  if(!inputDate) return "Date is not available"
  const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
};

export const formatTime = (inputTime) => {
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const timeParts = inputTime.split(":");
  const formattedTime = new Date(0, 0, 0, timeParts[0], timeParts[1], timeParts[2]).toLocaleTimeString(
    "en-US",
    options
  );
  return formattedTime;
};

export const calculateTimeDifference = (timeDifferenceMs) => {
  if (!timeDifferenceMs) {
    return "Not Checked Out";
  }

  const totalSeconds = Math.floor(timeDifferenceMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  // TODO  remove comments  from time difference
  // const seconds = Math.floor((totalSeconds % 3600) % 60);
  // const formattedTimeDifference = `${hours} hrs ${minutes} mins ${seconds} secs`;

  const formattedTimeDifference = `${hours} hrs ${minutes} mins `;

  return formattedTimeDifference;
};

export const rangeDateFormatter = (date) => {
  const originalDate = new Date(date);
  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1 and pad with zeros
  const day = String(originalDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
