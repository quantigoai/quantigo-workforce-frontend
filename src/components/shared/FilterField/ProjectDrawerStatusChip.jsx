/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/StatusChip.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 20th 2023, 2:47:44 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Chip } from "@mui/material";

let drawerStatus = (status) => {
  switch (status) {
    case "not-Started":
      return "Not Started";
    case "in-Progress":
      return "In Progress";
    case "hours-added":
      return "Hours Added";
    case "completed":
      return "Completed";
    case "hours-approved":
      return "Hours Approved";
    case "payment-done":
      return "Payment Done";
    default:
      return status;
  }
};

const ProjectDrawerStatusChip = ({ value, isPopper = false }) => {
  const style = (status) => {
    switch (status) {
      case "not-Started":
        return {
          backgroundColor: "rgba(242, 246, 252, 1)",
          color: "rgba(60, 77, 107, 1)",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid rgba(230, 236, 245, 1)",
        };
      case "in-Progress":
        return {
          backgroundColor: "rgba(244, 247, 254, 1)",
          color: "rgba(46, 88, 255, 1)",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid rgba(46, 88, 255, 0.12)",
        };
      case "hours-added":
        return {
          backgroundColor: "rgba(250, 228, 195, 1)",
          color: "rgba(247, 144, 9, 1)",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid rgba(250, 228, 195, 1)",
        };
      case "completed":
        return {
          backgroundColor: "#C4F5DF",
          color: "#12B76A",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid #C4F5DF",
        };
      case "hours-approved":
        return {
          backgroundColor: "#C4F5DF",
          color: "#12B76A",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid #C4F5DF",
        };
      case "payment-done":
        return {
          backgroundColor: "#C4F5DF",
          color: "#12B76A",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid #C4F5DF",
        };
      case "Active":
        return {
          backgroundColor: "#C4F5DF",
          color: "#12B76A",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid #C4F5DF",
        };
      case "Inactive":
        return {
          backgroundColor: "#FFF1F0",
          color: "#F04438",
          // width: "90px",
          fontFamily: "Inter",
          height: "24px",
          border: "1px solid #FFD9D6",
        };
      default:
        return {
          textAlign: "center",
          backgroundColor: "rgba(242, 246, 252, 1)",
          color: "rgba(60, 77, 107, 1)",
          fontFamily: "Inter",
          // fontSize: isPopper ? "10px" : "60px",
          height: "24px",
          padding: "0px",
          border: "1px solid rgba(230, 236, 245, 1)",
          marginLeft: isPopper ? "0px" : "10px",
        };
    }
  };

  return (
    <>
      <Chip variant="outlined" sx={{ ...style(value), fontSize: "11px" }} label={drawerStatus(value)} value={value} />
    </>
  );
};

export default ProjectDrawerStatusChip;
