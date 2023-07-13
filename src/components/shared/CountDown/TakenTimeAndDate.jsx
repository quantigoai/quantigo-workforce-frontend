import React from "react";

const TakenTimeAndDate = ({ takenAt }) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    // timeZone: "Bangladesh/Dhaka",
    // timeZoneName: "short",
  };
  //   const expiredDate = new Date(takenAt).toLocaleDateString("en-US", options);
  const expiredTime = new Date(takenAt).toLocaleTimeString("en-US", options);
  return (
    <>
      <span>
        <b>{expiredTime}</b>
      </span>
    </>
  );
};

export default TakenTimeAndDate;
