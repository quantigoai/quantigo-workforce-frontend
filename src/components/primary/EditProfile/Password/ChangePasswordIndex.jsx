import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import ChangePasswordModal from "./ChangePasswordModal";

const ChangePasswordIndex = () => {
  const [open, setOpen] = useState(false);
  const alert = useAlert();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const handleCreateModal = () => {
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Box>
        <Button
          variant="contained"
          sx={{
            height: "45px",
            backgroundColor: "#2D58FF",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#FF9A45",
              color: "#1D1D1D",
            },
            borderRadius: "2px",
          }}
          onClick={() => handleCreateModal()}
          // onClick={() => handleChangePassword()}
        >
          Change Password
        </Button>
      </Box>
      <ChangePasswordModal openModal={openModal} handleClose={handleClose} setOpenModal={setOpenModal}/>
    </>
  );
};

export default ChangePasswordIndex;
