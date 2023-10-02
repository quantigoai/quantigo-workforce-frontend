/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/HomePage/CommonDesign.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 16th 2023, 12:54:41 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CommonDesign = ({ children }) => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "90.5vh",
        }}
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          sx={{
            // backgroundColor: "rgba(45, 88, 255, 1)",

            display: "flex",
            alignItems: "flex-end",
            alignContent: "center",
            paddingRight: { sm: "0%", lg: "2%", md: "4%", xl: "7%" },
            paddingLeft: { lg: "6%", md: "4%", sm: "4%" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", mb: "100px" }}>
            <Typography
              variant="wpf_h1_regular"
              sx={{
                color: "#FFFFFF",
                align: "left",
              }}
            >
              Take your{" "}
              <Typography sx={{ color: "#fff" }} variant="wpf_h1_semiBold">
                Productivity
              </Typography>
              <Typography sx={{ color: "#fff", ml: 1 }} variant="wpf_h1_regular">
                to
              </Typography>
            </Typography>

            <Typography
              variant="wpf_h1_regular"
              sx={{
                color: "#FFFFFF",
                align: "left",
              }}
            >
              the{" "}
              <Typography sx={{ color: "#fff" }} variant="wpf_h1_semiBold">
                Next Level
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            // backgroundColor: "red",
            display: "flex",

            alignItems: "start",
            justifyContent: "flex-end",
            paddingRight: { sm: "0%", lg: "8%", md: "4%", xl: "8%" },
            alignContent: "center",
            backgroundColor: "#fff",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default CommonDesign;
