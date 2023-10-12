import {Box, Button, Grid, Modal, Paper, Typography} from "@mui/material";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import useToaster from "../../../../customHooks/useToaster";
import {changePassword, logout} from "../../../../features/slice/userSlice";
import ConfirmPassword from "./ConfirmPassword";
import CurrentPasswordfield from "./CurrentPasswordfield";
import ResetPassword from "./ResetPassword";

const paperstyle = { width: 500 };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //    paddingLeft :"20%",
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 0,
  // p: 1,
};

const ChangePasswordModal = ({ openModal, handleClose, setOpenModal }) => {
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toast = useToaster();
  const handleChangePassword = () => {
    const data = {
      oldPassword: CurrentPassword,
      newPassword: confirmPassword,
    };

    dispatch(changePassword(data)).then((action) => {
      if (action.payload.status === 200) {
        dispatch(logout()).then(() => {
          navigate("/");
        });
        setOpenModal(false);
        toast.trigger("Password changed successfully", "success");
      } else {
        setOpenModal(false);
        toast.trigger("Password can not change", "error");
      }
    });
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Paper elevation={5} style={paperstyle} sx={{}}>
            <Grid container sx={{ justifyContent: "center", paddingTop: "4%" }}>
              <Typography variant="h4">Change Password</Typography>
            </Grid>
            <Grid container sx={{ padding: "3%" }}>
              <CurrentPasswordfield setCurrentPassword={setCurrentPassword} CurrentPassword={CurrentPassword} />
            </Grid>
            <Grid container sx={{ padding: "3%" }}>
              <ResetPassword setResetPassword={setResetPassword} resetPassword={resetPassword} />
            </Grid>
            <Grid container sx={{ padding: "3%" }}>
              <ConfirmPassword setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword} />
            </Grid>
            <Grid container sx={{ justifyContent: "center", paddingBottom: "3%" }}>
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
                onClick={() => handleChangePassword()}
              >
                Save
              </Button>
            </Grid>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
