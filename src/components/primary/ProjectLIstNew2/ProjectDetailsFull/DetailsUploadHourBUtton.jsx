import { Button, Typography } from "@mui/material";
import React from "react";
import DetailsUploadHourModal from "./DetailsUploadHourModal";

const DetailsUploadHourBUtton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#FFAB00",
          color: "#FFF",
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "6px",
          border: "1px solid #FFAB00",
          "&:hover": {
            backgroundColor: "#F2A200",
          },
          mr: 2,
        }}
        variant="contained"
        onClick={handleOpen}
      >
        <i className="ri-upload-2-line"></i>
        <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
          Upload Effective Hour
        </Typography>
      </Button>

      <DetailsUploadHourModal openModal={open} handleClose={handleClose} />
    </>
  );
};

export default DetailsUploadHourBUtton;
