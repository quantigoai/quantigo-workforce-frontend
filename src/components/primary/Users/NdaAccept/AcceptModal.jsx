import {LoadingButton} from "@mui/lab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
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
const AcceptModal = ({ open, handleClose, handleAccept, user }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { isLoading } = useSelector((state) => state.user);
  return (
    <>
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
            sx={{ mt: "30%", color: isLightTheme ? "#091E42" : "#fff", fontSize: "18px", fontWeight: "600" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Confirm Verification
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2, color: isLightTheme ? "#3C4D6B" : "#fff" }}>
            Are you sure you want to modify {user.name} as a verified user?
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
                  backgroundColor: "#F2F6FC",
                  //   border: "1px solid #FFF0F2",
                  color: "black",
                  borderRadius: "10px",
                  width: "150px",
                  "&:hover": {
                    backgroundColor: "#F2F6FC",
                  },
                }}
                onClick={handleClose}
                // variant="contained"
              >
                No
              </Button>
            }
            <LoadingButton
              loading={isLoading}
              onClick={() => {
                handleAccept();
              }}
              disabled={isLoading}
              sx={{
                textTransform: "none",
                background: "#FFAB00",
                color: "#fff",
                borderRadius: "10px",
                width: "150px",
                ":hover": {
                  backgroundColor: "#F2A200",
                  color: "#fff",
                },
              }}
              // variant="contained"
            >
              Yes
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AcceptModal;
