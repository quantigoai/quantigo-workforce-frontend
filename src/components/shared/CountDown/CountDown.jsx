/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CountDown/CountDown.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 27th 2022, 11:27:28 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkJobExpiration } from "../../../features/slice/jobSlice";

const formatTime = (time) => {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  if (!hours && !minutes) {
    return (
      <span style={{ color: "red" }}>
        {padZero(hours)}h:{padZero(minutes)}m:{padZero(seconds)}s Left
      </span>
    );
  }
  return `${padZero(hours)}h:${padZero(minutes)}m:${padZero(seconds)}s Left`;
};

const padZero = (value) => {
  return String(value).padStart(2, "0");
};

const CountDown = ({ job }) => {
  const {
    _id,
    takenAt,
    timeLimit,
    status,
    annotatorTime,
    submittedAt,
    reviewedAt,
  } = job;
  const id = _id;
  const x = new Date().getTime();
  const [timeNow, setTimeNow] = useState(x);

  const [currentEpochWorkTime, setCurrentEpochWorkTime] = React.useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "inProgress" || status === "rechecked") {
      if (!submittedAt) {
        const takenAtTime = new Date(takenAt).getTime();
        setCurrentEpochWorkTime(timeNow - takenAtTime);
        if (currentEpochWorkTime * 1.6667e-5 > timeLimit) {
          dispatch(checkJobExpiration(id));
        }
      }
      if (submittedAt) {
        if (status === "rechecked" || status === "inProgress") {
          const lastReviewedTime = new Date(reviewedAt).getTime();
          setCurrentEpochWorkTime(timeNow - lastReviewedTime);
          const totalTime = annotatorTime + currentEpochWorkTime * 1.6667e-5;
          if (totalTime > timeLimit) {
            dispatch(checkJobExpiration(id));
          }
        }
      }
    }
    if (status === "rechecked" || status === "inProgress") {
      const interval = setInterval(() => {
        setTimeNow(new Date().getTime());
        submittedAt
          ? setCurrentEpochWorkTime(timeNow - new Date(submittedAt).getTime())
          : setCurrentEpochWorkTime(timeNow - new Date(takenAt).getTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeNow, job]);

  return (
    <>
      <span>
        {status === "rechecked" || status === "inProgress"
          ? status === "rechecked"
            ? formatTime(
                timeLimit * 60000 -
                  (annotatorTime * 60000 + currentEpochWorkTime)
              )
            : formatTime(
                timeLimit * 60000 -
                  (annotatorTime * 60000 || 0 + currentEpochWorkTime)
              )
          : formatTime(timeLimit * 60000 - annotatorTime * 60000)}
      </span>
    </>
  );
};

export default CountDown;
