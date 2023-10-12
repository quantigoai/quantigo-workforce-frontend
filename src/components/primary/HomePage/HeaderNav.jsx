/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/HomePage/HeaderNav.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 6th 2023, 12:20:32 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Grid, Link, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logoBlue from "../../../assets/images/rsz_logoblue.png";

const HeaderNav = ({ isForgetPassword, resetPassword, isEmailVerification }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLightTheme } = useSelector((state) => state.theme);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Grid
          sx={
            {
              // backgroundColor: "red",
            }
          }
          item
          xs={6}
          lg={6}
          xl={6}
        >
          <img
            onClick={() => navigate("/")}
            src={location.pathname === "/howitworks" ? logoBlue : logo}
            alt="logo"
            style={{
              // width: "175px",
              // height: "33px",
              // paddingTop: "52px",
              paddingLeft: "5%",
              // position: "absolute",
              cursor: "pointer",
            }}
          />
        </Grid>

        <Grid container item xs={6} md={6} lg={6}>
          <Grid
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "right",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  justifyContent: "flex-end",
                  backgroundColor: isForgetPassword || resetPassword || isEmailVerification ? "" : "#fff",
                  p: 4,
                }}
                gap={3}
              >
                <Link
                  color="neutral.850"
                  // onClick={() => navigate("/faq")}
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Typography color={isForgetPassword || resetPassword || isEmailVerification ? "#fff" : "neutral.850"}>
                    FAQ
                  </Typography>
                </Link>
                <Link
                  onClick={() => navigate("/howitworks")}
                  underline="hover"
                  sx={{
                    color: location.pathname === "/howitworks" && "#47536B",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    color={isForgetPassword || resetPassword || isEmailVerification ? "#fff" : "neutral.850"}
                    variant="body1"
                  >
                    How it works
                  </Typography>
                </Link>
                {/* <Typography sx={{ color: "#FFFFFF" }} variant="body1">
                  How it work
                </Typography> */}
                <Typography
                  color={isForgetPassword || resetPassword || isEmailVerification ? "#fff" : "neutral.850"}
                  // sx={{
                  //   color: location.pathname === "/howitworks" && " #47536B",
                  // }}
                  variant="body1"
                  sx={{ pr: 5 }}
                >
                  About Us
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderNav;
