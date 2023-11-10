import {Box, Button, Grid} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import useToaster from "../../../../../customHooks/useToaster";
import {changePassword, logout} from "../../../../../features/slice/userSlice";
import ConfirmPassword from "../../Password/ConfirmPassword";
import CurrentPasswordfield from "../../Password/CurrentPasswordfield";
import ResetPassword from "../../Password/ResetPassword";
import ConfirmModal from "./ConfirmModal";

const PasswordChangeIndex = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [newPassHelperText, setNewPassHelperText] = useState("Password must be at least 6 characters long");
  const [confirmPassHelperText, setConfirmPassHelperText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isLoading } = useSelector((state) => state.user);

  const handleCurrentPassword = (currentPassword) => {
    setCurrentPassword(currentPassword);
  };
  // 2nd input
  const handleNewPassword = (newPassword) => {
    setNewPassword(newPassword);
    if (newPassword.length >= 6) {
      if (currentPassword !== newPassword) {
        if (confirmPassword === newPassword) {
          setButtonDisable(false);
          setNewPassHelperText("");
          setConfirmPassHelperText("");
        } else {
          setButtonDisable(true);
          setConfirmPassHelperText("Confirm Password is not same as New Password");
        }
      } else {
        setButtonDisable(true);
        setNewPassHelperText("New password and Old password must be different");
      }
    } else {
      setNewPassHelperText("Password must be at least 6 characters long");
    }
  };
  // 3rd input
  const handleConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    if (confirmPassword.length >= 6) {
      if (currentPassword !== confirmPassword) {
        if (confirmPassword === newPassword) {
          setButtonDisable(false);
          setNewPassHelperText("");
          setConfirmPassHelperText("");
        } else {
          setButtonDisable(true);
          setConfirmPassHelperText("Confirm Password is not same as New Password");
        }
      } else {
        setButtonDisable(true);
      }
    }
  };

  const toast = useToaster();

  const handleChangePasswordSubmit = () => {
    const data = {
      oldPassword: currentPassword,
      newPassword: confirmPassword,
    };
    dispatch(changePassword(data)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
        setOpen(false);
      } else {
        dispatch(logout()).then(() => {
          navigate("/");
        });
        toast.trigger("Password changed successfully", "success");
        setOpen(false);
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
            handlePassword={handleCurrentPassword}
            setCurrentPassword={setCurrentPassword}
            CurrentPassword={currentPassword}
          />
        </Grid>
        <Grid container sx={{ padding: "1%" }}>
          <ResetPassword
            handlePassword={handleNewPassword}
            setResetPassword={setNewPassword}
            resetPassword={newPassword}
            helperText={newPassHelperText}
          />
        </Grid>
        <Grid container sx={{ padding: "1%" }}>
          <ConfirmPassword
            handlePassword={handleConfirmPassword}
            setConfirmPassword={setConfirmPassword}
            confirmPassword={confirmPassword}
            helperText={confirmPassHelperText}
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
            onClick={() => handleOpen()}
          >
            Change Password
          </Button>
        </Grid>
      </Box>
      <ConfirmModal
        open={open}
        handleClose={handleClose}
        handleChangePasswordSubmit={handleChangePasswordSubmit}
        isLoading={isLoading}
      />
    </>
  );
};

export default PasswordChangeIndex;
