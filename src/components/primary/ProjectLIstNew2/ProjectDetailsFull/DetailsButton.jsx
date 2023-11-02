import { Button, Typography } from "@mui/material";
import React from "react";

const DetailsButton = ({ handleProjectDetailsOpen, handleDetailButton, role }) => {
  return (
    <Button
      onClick={handleProjectDetailsOpen}
      sx={{
        backgroundColor: "#F2F6FC",
        color: "#3C4D6B",
        fontSize: {
          lg: "10px",
          xl: "12px",
          xxl: "14px",
        },
        borderRadius: "6px",
        height: "30px",
        width: "86px",
        border: "1px solid #E6ECF5",
        "&:hover": { border: "1px solid #E6ECF5" },
        mr: 1,
      }}
      // variant="outlined"
    >
      <i className="ri-information-line"></i>
      <Typography variant="wpf_h7_medium" sx={{ color:"#3C4D6B", pl: 1, textTransform: "none" }}>
        Details
      </Typography>
    </Button>
  );
};

export default DetailsButton;
