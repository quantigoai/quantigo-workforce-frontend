import { Button, Typography } from "@mui/material";
import React from "react";

const DetailsButton = ({ handleProjectDetailsOpen, handleDetailButton, role }) => {
  return (
    <Button
      onClick={role === "admin" ? handleProjectDetailsOpen : handleDetailButton}
      sx={{
        backgroundColor: "#F2F6FC",
        color: "black",
        fontSize: "14px",
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
