import { Button, Typography } from "@mui/material";
import React from "react";

const DetailChartarButton = () => {
  return (
    <Button
      sx={{
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "8px",
      }}
      variant="contained"
    >
      <i className="ri-download-2-line"></i>
      <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
        Download Charter
      </Typography>
    </Button>
  );
};

export default DetailChartarButton;
