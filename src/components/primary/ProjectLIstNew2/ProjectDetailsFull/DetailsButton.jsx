import { Button, Typography } from "@mui/material";
import React from "react";

const DetailsButton = ({ handleProjectDetailsOpen, handleDetailButton, role }) => {
  return (
    <Button
      onClick={handleProjectDetailsOpen}
      sx={{
        backgroundColor: "#F2F6FC",
        color: "#3C4D6B",
        fontSize: "14px",
        fontWeight: "500",
        border: "1px solid #E6ECF5",
        "&:hover": { border: "1px solid #E6ECF5" },
        mr: 2,
      }}
      variant="outlined"
    >
      <i className="ri-information-line"></i>
      <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
        {" "}
        Details
      </Typography>
    </Button>
  );
};

export default DetailsButton;
