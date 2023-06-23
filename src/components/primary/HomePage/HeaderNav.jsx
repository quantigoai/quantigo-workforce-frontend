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
import {useLocation, useNavigate} from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logoBlue from "../../../assets/images/rsz_logoblue.png";

const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Grid
        container
        sx={{
          // backgroundColor: "rgba(45, 88, 255, 1)",
          height: "100px",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          paddingX: "5%",
        }}>
        <Grid
          sx={
            {
              // backgroundColor: "red",
            }
          }
          item
          xs={6}
          lg={6}
          xl={6}>
          <img
            onClick={() => navigate("/")}
            src={location.pathname === "/howitworks" ? logoBlue : logo}
            alt="logo"
            style={{
              // width: "175px",
              // height: "33px",
              // paddingTop: "52px",
              // paddingLeft: "64px",
              // position: "absolute",
              cursor: "pointer",
            }}
          />
        </Grid>

        <Grid container item xs={6} md={6} lg={6}>
          <Grid
            container
            sx={{
              // backgroundColor: "green",
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "right",
            }}>
            <Grid item xs={4}></Grid>
            <Grid item xs={7}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }} gap={3}>
                <Typography sx={{ color: "#FFFFFF" }} variant="body1">
                  <Link
                    // onClick={() => navigate("/faq")}
                    underline="hover"
                    sx={{
                      color:
                        location.pathname === "/howitworks"
                          ? " #47536B"
                          : "#FFFFFF",
                      cursor: "pointer",
                    }}>
                    FAQ
                  </Link>
                </Typography>
                <Typography sx={{ color: "#FFFFFF" }} variant="body1">
                  <Link
                    onClick={() => navigate("/howitworks")}
                    underline="hover"
                    sx={{
                      color:
                        location.pathname === "/howitworks"
                          ? " #47536B"
                          : "#FFFFFF",
                      cursor: "pointer",
                    }}>
                    How it works
                  </Link>
                </Typography>
                {/* <Typography sx={{ color: "#FFFFFF" }} variant="body1">
                  How it work
                </Typography> */}
                <Typography
                  sx={{
                    color:
                      location.pathname === "/howitworks"
                        ? " #47536B"
                        : "#FFFFFF",
                  }}
                  variant="body1">
                  About Us
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderNav;
