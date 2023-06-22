/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/JobStatusBox/JobStatusField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, February 28th 2023, 2:03:43 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Chip } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";

const JobStatusField = ({ jobStatus }) => {
  const jobStatusColor = (jobStatus) => {
    switch (jobStatus) {
      case "pending":
        return "#D8514B";
      case "rechecked":
        return "#090080";
      case "paused":
        return "#D8514B";
      case "inProgress":
        return "#2D58FF";
      case "completed":
        return "#00A671";
      case "expired":
        return "#FF7803";
      case "rejected":
        return "#D8514B";
      default:
        return "#2D58FF";
    }
  };

  const backgroundColor = () => {
    switch (jobStatus) {
      case "pending":
        return "rgba(216, 81, 75, 0.12)";
      case "rechecked":
        return "rgba(9, 0, 128, 0.1)";
      case "paused":
        return "rgba(216, 81, 75, 0.1)";
      case "inProgress":
        return "rgba(45, 88, 255, 0.1)";
      case "completed":
        return "rgba(0, 166, 113, 0.12)";
      case "expired":
        return "rgba(250, 147, 53, 0.14)";
      case "rejected":
        return "rgba(216, 81, 75, 0.1)";
      default:
        return "rgba(250, 147, 53, 0.14)";
    }
  };

  return (
    <>
      <Chip
        sx={{
          color: jobStatusColor(jobStatus),
          background: backgroundColor(jobStatus),
        }}
        label={
          jobStatus === "rechecked"
            ? "Recheck"
            : jobStatus === "inProgress"
            ? "Inprogress"
            : capitalizeFirstLetter(jobStatus)
        }
      />
    </>
  );
};

export default JobStatusField;
