import { Box } from "@mui/material";
import React from "react";
import CheckInButton from "./CheckInButton";
import CheckOutButton from "./CheckOutButton";
import DetailsButton from "./DetailsButton";

const CheckINOutButton = ({ handleDetailButton, fromDetails, handleCheckInButton, isDisable, handleCheckOutButton }) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      {!fromDetails && <DetailsButton handleDetailButton={handleDetailButton} />}
      <CheckInButton isDisable={isDisable} handleCheckInButton={handleCheckInButton} />
      <CheckOutButton handleCheckOutButton={handleCheckOutButton} />
    </Box>
  );
};

export default CheckINOutButton;
