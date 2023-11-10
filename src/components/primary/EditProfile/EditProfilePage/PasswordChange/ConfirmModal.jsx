import { LoadingButton } from "@mui/lab";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const ConfirmModal = ({ open, handleClose, handleChangePasswordSubmit, isLoading }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    textAlign: "center",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              position: "absolute",
              top: "12%",
              left: "42%",
              width: "60px",
              textAlign: "center",
              fontSize: "32px",
              background: "#FFAB00",
              borderRadius: "55%",
              height: "60px",
              paddingTop: "4px",
              color: "white",
            }}
          >
            {" "}
            <i style={{ width: "60px", height: "60px" }} className="ri-alert-line"></i>
          </Box>
          <Typography
            sx={{ mt: "22%", textAlign: "center" }}
            id="modal-modal-title"
            variant="wpf_h6_medium"
            component="h2"
          >
            Change Password
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: "14px",

              fontWeight: "400",
              lineHeight: "20px",
            }}
          >
            After successfully changing your password,you will be logged out from all devices, and you will need to log
            in again
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "#FFF0F2",
                border: "1px solid #FFF0F2",
                color: "black",
                borderRadius: "10px",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#F4F7FE",
                },
              }}
              onClick={handleClose}
              // variant="contained"
            >
              Cancel
            </Button>

            <LoadingButton
              loading={isLoading}
              onClick={handleChangePasswordSubmit}
              sx={{
                textTransform: "none",
                background: "#FFAB00",
                borderRadius: "10px",
                color: "#fff",
                width: "150px",
                "&.Mui-disabled": {
                  background: "#F0D8A8",
                  color: "#FFFFFF",
                },
                ":hover": {
                  backgroundColor: "#F2A200",
                },
              }}
              // variant="contained"
            >
              Confirm
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ConfirmModal;
