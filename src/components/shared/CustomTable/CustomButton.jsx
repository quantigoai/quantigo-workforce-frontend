/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTable/CustomButton.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Wednesday, August 9th 2023, 11:35:51 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Button } from "@mui/material";
import React from "react";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const CustomButton = ({ params, handleClick, handleDelete }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isEdit, setIsEdit] = React.useState(true);
  return (
    <>
      <Button
        sx={{ color: "#2E58FF" }}
        onClick={() => {
          setIsEdit(true);
          handleClick(params);
        }}
      >
        <i onClick={handleOpen} className="ri-edit-line"></i>
      </Button>

      <Button
        sx={{ color: "#F04438" }}
        onClick={() => {
          setIsEdit(false);
        }}
      >
        <i onClick={handleOpen} className="ri-delete-bin-6-line"></i>
      </Button>

      {isEdit ? (
        <UpdateModal
          open={open}
          handleClose={handleClose}
          handleClick={handleClick}
          params={params}
        />
      ) : (
        <DeleteModal
          open={open}
          handleClose={handleClose}
          button={"delete"}
          handleDelete={handleDelete}
          params={params}
        />
      )}
    </>
  );
};

export default CustomButton;
