import { Box, Button, colors } from "@mui/material";
import React from "react";

const CheckInButton = () => {
  return (
    <Button sx={{ border: "1px solid rgba(54, 179, 126, 0.12)", background: "rgba(54, 179, 126, 0.12)", borderRadius: "6px", fontSize: "14px", textTransform: "none", color: "#36B37E", fontWeight: "bold" }}>
      <i style={{ marginRight: "5px" }} className="ri-logout-box-r-line"></i>
      Check-in
    </Button>
  );
};

export default CheckInButton;
