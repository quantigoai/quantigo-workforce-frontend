/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/Error/MobileErrorPage.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, October 17th 2023, 11:39:31 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import error from "../../shared/CustomSvgIcons/wired-lineal-1140-error.json";

const lottieOptions = {
  loop: true,
  style: {
    height: 180,
  },
};

const MobileErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Lottie animationData={error} {...lottieOptions} />
      <Typography variant="h5" color="error.800">
        Not Available
      </Typography>

      <Typography variant="h6" color="neutral.N300" sx={{ textAlign: "center", marginTop: "10%" }}>
        There is no mobile version of this application. This application is only accessible with a PC/ Laptop.
      </Typography>
    </Box>
  );
};

export default MobileErrorPage;
