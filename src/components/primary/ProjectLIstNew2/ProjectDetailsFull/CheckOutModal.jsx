import { LoadingButton } from "@mui/lab";
import {Box, Button, Modal, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";

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
  const { isLightTheme } = useSelector((state) => state.theme);
  const{isLoading} = useSelector((state) => state.projectDrawer);
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
            top: "12%",
            left: "42%",
            textAlign: "center",
            fontSize: "35px",
            width: "60px",
            height: "60px",
            background: "#FFAB00",
            borderRadius: "50%",
            color: "white",
          }}
        >
          {" "}
          <i style={{ width: "29px", height: "20px" }} className="ri-alert-line"></i>
        </Box>
        <Typography
          sx={{
            mt: "27%",
            color: isLightTheme ? "#3C4D6B" : "#fff",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "28px",
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Stop
        </Typography>

        <Typography
          id="modal-modal-description"
          sx={{ color: isLightTheme ? "#3C4D6B" : "#fff", fontSize: "14px", fontWeight: "400", lineHeight: "20px" }}
        >
          Are you sure you want to checked out from this project {projectDrawer.project_drawer_name} ?
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
            <LoadingButton
              loading={isLoading}
              sx={{
                textTransform: "none",
                backgroundColor: "#FFAB00",
                borderRadius: "10px",
                color: "white",
                marginTop: "28px",
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
            </LoadingButton>
          }
        </Box>
      </Box>
    </Modal>
  );
};

export default CheckOutModal;
