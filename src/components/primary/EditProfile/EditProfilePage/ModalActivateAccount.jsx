import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";
import buttonIcon from "../../../../assets/images/Buttons.svg";
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

const ModalActivateAccount = ({ open, handleDelete, params, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
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
              background: "#FF4757",
              borderRadius: "80px",
              color: "white",
            }}>
            {" "}
            {/* <img src={buttonIcon} /> */}
            <i className="ri-delete-bin-6-line"></i>
          </Box>
          <Typography
            sx={{ mt: "28%" }}
            id="modal-modal-title"
            variant="h6"
            component="h2">
            Account Deactivation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to deactivate your account?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "20px",
            }}>
            {/* #F2F6FC */}
            <Button
              sx={{
                textTransform: "none",
                background: "#F2F6FC",
                borderRadius: "10px",
                color: "#253E5C",
                padding: " 10px 16px",
                width: "150px",
              }}
              onClick={handleClose}
              variant="contained">
              Cancel
            </Button>
            <Button
              //   onClick={() => handleDelete(params)}
              sx={{
                textTransform: "none",
                background: "#FFAB00",
                borderRadius: "10px",
                width: "150px",
              }}
              variant="contained">
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalActivateAccount;
