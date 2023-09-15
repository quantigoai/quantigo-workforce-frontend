import { Box } from "@mui/material";
import React from "react";
import CheckInButton from "./CheckInButton";
import CheckOutButton from "./CheckOutButton";
import DetailsButton from "./DetailsButton";

const CheckINOutButton = ({
  handleDetailButton,
  fromDetails,
  handleCheckInButton,
  isDisable,
  handleCheckOutButton,
  checkOutDisable,
  handleOpen,
}) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      {!fromDetails && <DetailsButton handleDetailButton={handleDetailButton} />}
      <CheckInButton isDisable={isDisable} handleCheckInButton={handleCheckInButton} />
      <CheckOutButton
        handleOpen={handleOpen}
        checkOutDisable={checkOutDisable}
        handleCheckOutButton={handleCheckOutButton}
      />
    </Box>
  );
};

export default CheckINOutButton;
