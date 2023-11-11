/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/Header/GoBackButton.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 13th 2023, 2:19:20 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Button, Typography} from "@mui/material";
import React from "react";

import backIcon from "../../../assets/images/dashboardIcon/GoBackIcon.svg";

const GoBackButton = ({ handleGoBack }) => {
  return (
    <>
      <>
        <Button
          sx={{
            color: "neutral.800",
            width: {
              xl: "110px",
              lg: "110px",
            },
            height: {
              xl: "32px",
              lg: "100%",
            },
            textTransform: "none",
            display: "flex",
            gap :1,
          }}
          onClick={handleGoBack}
        >
          <img
            style={{
              width: "15px",
              height: "15px",
            }}
            src={backIcon}
          />

          <Typography variant="wpf_p3_medium" sx={{ paddingLeft: "0%" }}>
            Go Back
          </Typography>
        </Button>
      </>
    </>
  );
};

export default GoBackButton;
