import { Button, Typography } from "@mui/material";
import React from "react";

const DetailsButton = ({ handleProjectDetailsOpen, handleDetailButton, role }) => {
  return (
    <Button
      onClick={handleProjectDetailsOpen}
      sx={{
        backgroundColor: "neutral.N400",
        color: "#3C4D6B",
        fontWeight: "500",
        borderRadius: "6px",
        fontSize: "12px",
        height: "30px",
        width: "86px",
        border: "1px solid #E6ECF5",
        "&:hover": { border: "1px solid #E6ECF5" },
        mr: 2,
      }}
      variant="outlined"
    >
      <i className="ri-information-line"></i>
      <Typography variant="wpf_h7_medium" sx={{ ml: 1, textTransform: "none" }}>
        Details
      </Typography>
    </Button>
  );
};

export default DetailsButton;
