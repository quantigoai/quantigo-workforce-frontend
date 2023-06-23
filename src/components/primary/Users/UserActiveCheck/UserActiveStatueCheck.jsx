import {Chip} from "@mui/material";
import React from "react";

const UserActiveStatueCheck = ({ user }) => {
  const dateObj = new Date(user.lastJobTakenAt);
  const today = new Date();
  const diffInMs = Math.abs(today - dateObj);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <>
      {user.role === "delivery_manager" ||
      user.role === "project_lead" ||
      user.role === "recruitment_manager" ||
      user.role === "admin" ||
      user.role === "trainer" ||
      user.role === "reviewer" ? (
        <>
          <Chip
            sx={{
              color: "#00A671",
              background: "rgba(0, 166, 113, 0.12)",
            }}
            label={"Active"}
          />
        </>
      ) : user.lastJobTakenAt && diffInDays <= 15 ? (
        <>
          {" "}
          <Chip
            sx={{
              color: "#00A671",
              background: "rgba(0, 166, 113, 0.12)",
            }}
            label={"Active"}
          />
        </>
      ) : (
        <>
          {" "}
          <Chip
            sx={{
              color: "#D8514B",
              background: "rgba(216, 81, 75, 0.1)",
            }}
            label={"Inactive"}
          />
        </>
      )}
    </>
  );
};

export default UserActiveStatueCheck;
