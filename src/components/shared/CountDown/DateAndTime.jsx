import React from "react";

const DateAndTime = ({ takenAt }) => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const liveTime = new Date(takenAt).toLocaleTimeString("en-US");

  return (
    <>
      <span>,{liveTime}</span>
    </>
  );
};

export default DateAndTime;
