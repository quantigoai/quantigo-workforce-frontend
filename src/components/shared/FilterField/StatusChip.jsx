/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/StatusChip.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 20th 2023, 2:47:44 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Chip, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

let jobStatus = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "In Progress",
    value: "inProgress",
  },
  {
    label: "Reviewing",
    value: "reviewing",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Rechecked",
    value: "rechecked",
  },
  {
    label: "Paused",
    value: "paused",
  },
  {
    label: "Expired",
    value: "expired",
  },
];

const StatusChip = () => {
  const [statusType, setStatusType, annotator, setAnnotator, reviewer, setReviewer, attemptLeft, setAttemptLeft, date, setDate, handleFilter, handleReset, handleClose, anchorEl, setAnchorEl, isClicked, setIsClicked, dateValue, setDateValue, setProjectIdFilter, projectIdFilter] = useOutletContext();
  const [updatedStatus, setUpdatedStatus] = React.useState(jobStatus);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/jobs/activejobs" || location.pathname === "/jobs/ongoingjobs") {
      const x = jobStatus.filter((status) => {
        return status.value !== "pending" && status.value !== "completed" && status.value !== "expired" && status.value !== "rejected";
      });
      setUpdatedStatus(x);
    }
    if (location.pathname === "/jobs/archivejob") {
      const x = jobStatus.filter((status) => {
        return status.value !== "pending" && status.value !== "inProgress" && status.value !== "paused" && status.value !== "rechecked" && status.value !== "reviewing";
      });

      setUpdatedStatus(x);
    }
    if (location.pathname === "/jobs/archivejobs") {
      const x = jobStatus.filter((status) => {
        return status.value !== "pending" && status.value !== "inProgress" && status.value !== "paused" && status.value !== "rechecked" && status.value !== "reviewing";
      });

      setUpdatedStatus(x);
    }
  }, [location.pathname]);

  const handleClick = (e) => {
    if (isClicked === e) {
      setIsClicked("");
      setStatusType("");
    } else if (e === statusType) {
      setIsClicked("");
      setStatusType("");
    } else {
      setIsClicked(e);
      setStatusType(e);
    }
  };

  const style = (e) => {
    if (isClicked === "" && statusType === e) {
      return {
        backgroundColor: "#2D58FF",
        color: "#FFFFF",
        width: "100%",
      };
    } else if (e === isClicked) {
      return {
        backgroundColor: "#2D58FF",
        color: "#FFFFFF",
        width: "100%",
      };
    } else {
      return {
        backgroundColor: "#fff",
        color: "#000",
        width: "100%",
      };
    }
  };

  return (
    <>
      <Grid container>
        {updatedStatus.map((status) => (
          <Grid key={status.value} item xs={3} sx={{ p: 1 }}>
            <Chip variant="outlined" sx={style(status.value)} label={status.label} value={statusType} onClick={() => handleClick(status.value)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StatusChip;
