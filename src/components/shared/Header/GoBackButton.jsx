/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/Header/GoBackButton.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 13th 2023, 2:19:20 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, Typography } from "@mui/material";
import React from "react";

import backIcon from "../../../assets/images/dashboardIcon/GoBackIcon.svg";

const GoBackButton = ({handleGoBack}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button
          sx={{
            color: "neutral.800",
            width: {
              xl: "100px",
              lg: "100px",
            },
            height: {
              xl: "100%",
              lg: "100%",
            },
            textTransform: "none",
          }}
          onClick={handleGoBack}
        >
          <img src={backIcon} />

          <Typography variant="wpf_p3_semiBold" sx={{ paddingLeft: "12%" }}>
            Go Back
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default GoBackButton;
