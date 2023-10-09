import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrentPasswordfield from "../../Password/CurrentPasswordfield";
import ResetPassword from "../../Password/ResetPassword";
import ConfirmPassword from "../../Password/ConfirmPassword";
import {
  changePassword,
  logout,
} from "../../../../../features/slice/userSlice";
const PasswordChangeIndex = () => {
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
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
        alert.show("Password changed successfully", {
          type: "success",
        });
      } else {
        alert.show("Password can not change", {
          type: "error",
        });
      }
    });
  };
  return (
    <>
      <Box
        sx={{
          width: "50%",
          padding: "2%",
        }}>
        <Grid container sx={{ padding: "1%" }}>
          <CurrentPasswordfield
            setCurrentPassword={setCurrentPassword}
            CurrentPassword={CurrentPassword}
          />
        </Grid>
        <Grid container sx={{ padding: "1%" }}>
          <ResetPassword
            setResetPassword={setResetPassword}
            resetPassword={resetPassword}
          />
        </Grid>
        <Grid container sx={{ padding: "1%" }}>
          <ConfirmPassword
            setConfirmPassword={setConfirmPassword}
            confirmPassword={confirmPassword}
          />
        </Grid>
        <Grid container sx={{ justifyContent: "center", paddingTop: "2%" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              width: "100%",
              borderRadius: "8px",
              height: "40px",
              backgroundColor: "#2E58FF",
              fontSize: "14px",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#FF9A45",
                color: "#1D1D1D",
              },
            }}
            onClick={() => handleChangePassword()}>
            Change Password
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default PasswordChangeIndex;
