/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/HomePage/CommonDesign.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 16th 2023, 12:54:41 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Grid, Typography } from "@mui/material";
import React from "react";

const CommonDesign = ({ children }) => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "85vh",
        }}
      >
        <Grid
          item
          xs={5}
          sm={5}
          md={5}
          lg={5}
          sx={{
            // backgroundColor: "rgba(45, 88, 255, 1)",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            paddingRight: { sm: "0%", lg: "2%", md: "4%", xl: "7%" },
            paddingLeft: { lg: "6%", md: "4%", sm: "4%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              align: "left",
              fontSize: { lg: "3.5rem", md: "3rem", sm: "2rem", xl: "4rem" },
            }}
          >
            Take your Productivity to the next level
          </Typography>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            // backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: { sm: "0%", lg: "8%", md: "4%", xl: "8%" },
            alignContent: "center",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default CommonDesign;
