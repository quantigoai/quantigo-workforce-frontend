/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTable/CustomButton.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Wednesday, August 9th 2023, 11:35:51 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button } from "@mui/material";
import React from "react";
import MainModal from "./MainModal";

const CustomButton = ({
  params,
  handleClick,
  handleDelete,
  handleProjectDetailsOpen,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isEdit, setIsEdit] = React.useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Button
        sx={{ color: "#2E58FF", padding: "0px", minWidth: "35px" }}
        onClick={() => {
          setIsEdit(true);
          handleClick(params);
        }}
      >
        <i className="ri-edit-line"></i>
      </Button>

      <Button
        sx={{ color: "#F04438", padding: "0px", minWidth: "35px" }}
        onClick={() => {
          setIsEdit(false);
        }}
      >
        <i onClick={handleOpen} className="ri-delete-bin-6-line"></i>
      </Button>
      <Button
        onClick={handleProjectDetailsOpen}
        sx={{ color: "#2E58FF", padding: "0px", minWidth: "35px" }}
      >
        <i className="ri-eye-line"></i>
      </Button>

      <MainModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
        params={params}
        isEdit={isEdit}
      />
    </Box>
  );
};

export default CustomButton;
