import {Button} from "@mui/material";
import React from "react";

const CheckOutButton = ({ checkOutDisable, handleCheckOutButton, handleOpen }) => {
  return (
    <Button
      disabled={checkOutDisable}
      onClick={handleOpen}
      sx={{
        border: "1px solid rgba(255, 71, 87, 0.12)",
        background: "rgba(255, 71, 87, 0.12)",
        borderRadius: "6px",
        fontSize: "14px",
        textTransform: "none",
        color: "#FF4757",
        fontWeight: "bold",
        ml: 3,
      }}
    >
      <i style={{ marginRight: "5px" }} className="ri-logout-box-line"></i>
      Check-out
    </Button>
  );
};

export default CheckOutButton;
