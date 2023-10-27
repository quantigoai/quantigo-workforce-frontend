/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Dashboard/AnnotatorLandingPage/MiniStepCard.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 2:08:54 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Typography } from "@mui/material";
import React from "react";
import step1 from "../../../../assets/images/stepsLogo/0.png";
import step2 from "../../../../assets/images/stepsLogo/1.png";
import step3 from "../../../../assets/images/stepsLogo/2.png";
import step4 from "../../../../assets/images/stepsLogo/3.png";
import step5 from "../../../../assets/images/stepsLogo/4.png";
import step6 from "../../../../assets/images/stepsLogo/5.png";
import step7 from "../../../../assets/images/stepsLogo/6.png";
import step8 from "../../../../assets/images/stepsLogo/7.png";

const steps = [
  {
    title: "Step 1",
    description: "Create an account",
    logo: step1,
  },
  {
    title: "Step 2",
    description: "Complete your profile",
    logo: step2,
  },
  {
    title: "Step 3",
    description: "Complete your training",
    logo: step3,
  },
  {
    title: "Step 4",
    description: "Start working",
    logo: step4,
  },
  {
    title: "Step 5",
    description: "Start working",
    logo: step5,
  },
  {
    title: "Step 6",
    description: "Start working",
    logo: step6,
  },
  {
    title: "Step 7",
    description: "Start working",
    logo: step7,
  },
  {
    title: "Step 8",
    description: "Start working",
    logo: step8,
  },
];

const MiniStepCard = ({ index }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "neutral.N000",
          // height: "100%",
          // width: "100%",
          // borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderRadius: "20px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={steps[index].logo} />
          </Box>
          <Box>
            <Typography variant="wpf_h6_Bold" sx={{ color: "neutral.N300" }}>
              {steps[index].title}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ padding: "2%", textAlign: "center" }}>
          <Typography variant="wpf_p3_regular" sx={{ color: "neutral.N300" }}>
            {steps[index].description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MiniStepCard;
