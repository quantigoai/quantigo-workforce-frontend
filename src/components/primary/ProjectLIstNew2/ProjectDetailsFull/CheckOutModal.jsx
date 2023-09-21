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
const CheckOutModal = ({ open, handleClose, handleCheckOutButton, projectDrawer }) => {
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
            left: "45%",
            textAlign: "center",
            padding: "15px",
            fontSize: "25px",
            background: "#FFAB00",
            borderRadius: "100px",
            color: "white",
          }}
        >
          {" "}
          <i style={{ marginBottom: "4px" }} className="ri-alert-line"></i>
        </Box>
        <Typography sx={{ mt: "15%" }} id="modal-modal-title" variant="h6" component="h2">
          Stop
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to checkout of this project {projectDrawer.project_drawer_name} ?
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
                backgroundColor: "#FFAB00",
                borderRadius: "10px",
                color: "white",
                padding: " 10px 16px",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#F2A200",
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
