import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal";

const ChangePasswordIndex = () => {
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
      <ChangePasswordModal
        openModal={openModal}
        handleClose={handleClose}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default ChangePasswordIndex;
