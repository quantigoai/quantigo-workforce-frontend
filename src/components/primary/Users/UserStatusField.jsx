import { Chip } from "@mui/material";
import React from "react";

const UserStatusField = ({ userStatus }) => {
  const jobStatusColor = (userStatus) => {
    switch (userStatus) {
      case true:
        return "#00A671";
      case false:
        return "#D8514B";

      default:
        return "#2D58FF";
    }
  };

  const backgroundColor = () => {
    switch (userStatus) {
      case true:
        return "rgba(0, 166, 113, 0.12)";
      case false:
        return "rgba(216, 81, 75, 0.1)";

      default:
        return "rgba(250, 147, 53, 0.14)";
    }
  };

  return (
    <>
      <Chip
        sx={{
          color: jobStatusColor(userStatus),
          background: backgroundColor(userStatus),
        }}
        label={userStatus ? "Active" : "Inactive"}
      />
    </>
  );
};

export default UserStatusField;
