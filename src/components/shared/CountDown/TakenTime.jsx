import React from "react";

const TakenTime = ({ takenAt }) => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const expiredTime = new Date(takenAt).toLocaleDateString("en-US", options);
  return (
    <>
      <span>{expiredTime}</span>
    </>
  );
};

export default TakenTime;
