import { Button, Typography } from "@mui/material";
import React from "react";

const DetailsUploadHourBUtton = () => {
  return (
    <Button
      sx={{
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "#FFAB00",
        borderRadius: "8px",
      }}
      variant="contained"
    >
      <i className="ri-upload-2-line"></i>
      <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
        Upload Effective Hour
      </Typography>
    </Button>
  );
};

export default DetailsUploadHourBUtton;
