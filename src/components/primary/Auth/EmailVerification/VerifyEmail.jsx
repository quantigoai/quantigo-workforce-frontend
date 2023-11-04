/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Auth/EmailVerification/VerifyEmail.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Sunday, October 15th 2023, 2:57:15 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../../customHooks/useToaster";
import { setActivePath } from "../../../../features/slice/activePathSlice";
import { resendEmailVarification } from "../../../../features/slice/userSlice";
import { LoadingButtonStyle } from "../Login/Login";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.user);
  const toast = useToaster();
  const [sendMessage, setSendMessage] = React.useState("");

  const handleresendEmail = () => {
    dispatch(resendEmailVarification()).then((action) => {
      if (action.payload?.status === 200 || action.payload?.status === 201) {
        toast.trigger(action.payload.data, "success");
        setSendMessage(action.payload.data);
      } else {
        toast.trigger("Email Not Send", "error");
      }
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setActivePath("Verify Email"));
    if (user?.isEmailVerified) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#F5F5F5",
          height: "100%",
          // width: "100%",
          padding: "1%",
        }}
      >
        <Paper elevation={0}>
          {/* <Grid container sx={{ justifyContent: "center", paddingTop: "7%" }}> */}
          <Grid container sx={{ padding: "1%", width: "100%" }}>
            <Box>
              <Typography variant="wpf_h4_semiBold">Please check your email</Typography>
              <br />
              <br />
              <Typography variant="wpf_p2_medium">
                We have sent you an email with a link to verify your account. If you do not receive the email within a
                few minutes, please check your spam folder or please click below to resend.if you are still facing any
                issues, please{" "}
                {
                  <Link target={"blank"} href="https://discord.gg/YarPssHr6y">
                    contact our support team
                  </Link>
                }{" "}
                for assistance. We apologize for any inconvenience.
              </Typography>
            </Box>
          </Grid>

          <LoadingButtonStyle
            fullWidth
            color="inherit"
            size="medium"
            variant="contained"
            loading={isLoading}
            sx={{
              pl: 1,
              ml: {
                lg: 1,
                xl: 1,
                xxl: 2,
              },

              textTransform: "none",
              borderRadius: "8px",
              width: {
                lg: "16%",
                xl: "12%",
                xxl: "10% ",
              },
            }}
            onClick={handleresendEmail}
          >
            Resend Email
          </LoadingButtonStyle>

          <Grid container sx={{ justifyContent: "center", paddingTop: "2%" }}>
            <Typography variant="h6" sx={{ color: "#090080" }}>
              {sendMessage}
            </Typography>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default VerifyEmail;
