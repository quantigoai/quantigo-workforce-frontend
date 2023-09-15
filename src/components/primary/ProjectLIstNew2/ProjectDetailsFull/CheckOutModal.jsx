import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "center",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const CheckOutModal = ({ open, handleClose, handleCheckOutButton }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "42%",
            width: "32px",
            textAlign: "center",
            fontSize: "32px",
            padding: "16px",
            background: "#FFAB00",
            borderRadius: "80px",
            color: "white",
          }}
        >
          {" "}
          <i className="ri-delete-bin-6-line"></i>
        </Box>
        <Typography sx={{ mt: "28%" }} id="modal-modal-title" variant="h6" component="h2">
          Stop
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to CheckOut of this Project ?
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "#FFF0F2",
                borderRadius: "10px",
                border: "1px solid #FFF0F2",
                color: "black",
                padding: " 10px 16px",
                width: "150px",
                "&:hover": {
                  border: "1px solid #FF4757",
                  backgroundColor: "#FFF0F2",
                },
              }}
              onClick={handleCheckOutButton}
              variant="contained"
            >
              I underStand
            </Button>
          }
        </Box>
      </Box>
    </Modal>
  );
};

export default CheckOutModal;
