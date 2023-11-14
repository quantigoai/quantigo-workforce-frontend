/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Dashboard/AnnotatorLandingPage/MiniStepCard.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 2:08:54 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Box, Typography} from "@mui/material";
import React from "react";
import confirmIcon from "../../../../assets/images/confirmprocess.svg";
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
    title: "Create an Account",
    description: "This is the initial step to join.",
    logo: step1,
  },
  {
    title: "Verify Email",
    description: "Verify your email.",
    logo: step2,
  },
  {
    title: "Upload Document",
    description: "Verify your identity",
    logo: step3,
  },
  {
    title: "Start Course",
    description: "Start Course to learn.",
    logo: step4,
  },
  {
    title: "Achieve Skills",
    description: "Achieve skills by completing course",
    logo: step5,
  },
  {
    title: "Start Job",
    description: "Start your job",
    logo: step6,
  },
  {
    title: "Submit Job",
    description: "Submit your assigned job",
    logo: step7,
  },
  {
    title: "Earn Money",
    description: "Earn money by completing job",
    logo: step8,
  },
];

const MiniStepCard = ({ index }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "neutral.N100",
          height: "170px",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ display: "flex", height: "20%", justifyContent: "flex-end", paddingRight: "2%" }}>
          {index === 0 || index === 1 || index === 2 ? (
            <img style={{ width: "20px" }} src={confirmIcon} />
          ) : (
            <Typography variant="wpf_h7_semiBold" sx={{ color: "green.800" }}>
              Coming Soon
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            borderRadius: "20px",
            pt: 2,
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
