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
  // width: "400px",
  // height: "336px",
  textAlign: "center",
  bgcolor: "background.paper",
  // backgroundColor: "red",
  borderRadius: "10px",
  boxShadow: 24,
  // p: 6,
};

const PaymentApproveModal = ({ open, handleClose, handleApprovePayment }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={{ backgroundColor: "", width: "400px", height: "336px", padding: "48px" }}>
            <Box sx={{ paddingBottom: "25px" }}>
              {" "}
              <img src={buttonIcon} />
            </Box>
            <Box sx={{ paddingBottom: "20px" }}>
              <Typography sx={{ mt: "0%" }} id="modal-modal-title" variant="wpf_p1_semiBold">
                Payment Approve
              </Typography>
              <br />
              <Typography variant="wpf_p3_regular" sx={{ mt: 1, color: "#3C4D6B" }}>
                Are you sure you want to change  payment approve ?
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}>
              {/* #F2F6FC */}
              <Box sx={{ paddingRight: "4%" }}>
                <Button
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#F2F6FC",
                    borderRadius: "10px",
                    color: "#253E5C",
                    // padding: " 10px 16px",
                    fontSize: "14px",
                    width: "150px",
                    "&:hover": {
                      background: "#F2F6FC",
                    },
                  }}
                  onClick={handleClose}>
                  No
                </Button>
              </Box>

              <Button
                onClick={() => handleApprovePayment()}
                sx={{
                  textTransform: "none",
                  background: "#FFAB00",
                  color: "#fff",
                  borderRadius: "10px",
                  width: "150px",
                  "&:hover": {
                    background: "#FFAB00",
                    // color: user.active ? "#F04438" : "#36B37E",
                  },
                }}>
                Yes
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PaymentApproveModal;
