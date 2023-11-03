import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../../../customHooks/useToaster";
import { changePassword, logout } from "../../../../../features/slice/userSlice";
import ConfirmPassword from "../../Password/ConfirmPassword";
import CurrentPasswordfield from "../../Password/CurrentPasswordfield";
import ResetPassword from "../../Password/ResetPassword";

const PasswordChangeIndex = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCurrnetPassword = (currentPassword) => {
    setCurrentPassword(currentPassword);
  };
  const handleResetPassword = (newPassword) => {
    setNewPassword(newPassword);
    setButtonDisable(newPassword !== confirmPassword && currentPassword !== newPassword);
  };
  const handleConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    setButtonDisable(confirmPassword !== newPassword && currentPassword !== confirmPassword);
  };

  const toast = useToaster();

  const handleChangePassword = () => {
    const data = {
      oldPassword: currentPassword,
      newPassword: confirmPassword,
    };

    dispatch(changePassword(data)).then((action) => {
      if (action.error) {
        console.log("hit");
        toast.trigger(action.error.message, "error");
      } else {
        dispatch(logout()).then(() => {
          navigate("/");
        });
        toast.trigger("Password changed successfully", "success");
      }
    });
  };
  return (
    <>
      <Box
        sx={{
          width: { lg: "70%", xl: "60%", xxl: "50%" },
          padding: "2%",
        }}
      >
        <Grid container sx={{ padding: "1%" }}>
          <CurrentPasswordfield
            handlePassword={handleCurrnetPassword}
            setCurrentPassword={setCurrentPassword}
            CurrentPassword={currentPassword}
          />
        </Grid>
        <Grid container sx={{ padding: "1%" }}>
          <ResetPassword
            handlePassword={handleResetPassword}
            setResetPassword={setNewPassword}
            resetPassword={newPassword}
          />
        </Grid>
        <Grid container sx={{ padding: "1%" }}>
          <ConfirmPassword
            handlePassword={handleConfirmPassword}
            setConfirmPassword={setConfirmPassword}
            confirmPassword={confirmPassword}
          />
        </Grid>
        <Grid container sx={{ justifyContent: "start", paddingTop: "2%" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              // width: { lg: "990px", xl: "100%", xxl: "422px" },
              width: "100%",
              borderRadius: "8px",
              height: "40px",
              backgroundColor: "#2E58FF",
              fontSize: { lg: "12px", xl: "14px", xxl: "14px" },
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#244EF5",
                color: "#FFFFFF",
              },
            }}
            disabled={buttonDisable}
            onClick={() => handleChangePassword()}
          >
            Change Password
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default PasswordChangeIndex;
