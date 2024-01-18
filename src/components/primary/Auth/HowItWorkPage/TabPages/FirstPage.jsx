import {Box, Typography} from "@mui/material";
import React from "react";

const FirstPage = () => {
  return (
    <>
      <Box sx={{ position: "absolute", paddingLeft: "2%", paddingRight: "7%" }}>
        <Box sx={{ paddingBottom: "2%" }}>
          <Typography variant="wpf_h3_semiBold" sx={{ color: "#282F3D" }}>
            What is QAI Workforce?
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            <Typography variant="wpf_p3_semiBold"> QAI Workforce</Typography> is an innovative online platform designed
            to eliminate barriers between job searchers and employers.We connect freelancers with remote jobs, giving
            them an efficient way to locate employment options that complement their skills and interests.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
            We offer individuals the opportunity to receive training through various   <Typography variant="wpf_p3_semiBold">courses</Typography>, thereby enhancing
            their qualifications and preparing them for{" "}
            <Typography variant="wpf_p3_semiBold">employment opportunities.</Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FirstPage;
