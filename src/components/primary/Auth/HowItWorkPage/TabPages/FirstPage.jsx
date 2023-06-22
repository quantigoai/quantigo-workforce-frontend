import { Box, Typography } from "@mui/material";
import React from "react";

const FirstPage = () => {
  return (
    <>
      <Box sx={{ position: "absolute", paddingLeft: "2%", paddingRight: "7%" }}>
        <Box sx={{ paddingBottom: "3%" }}>
          <Typography variant="h4" sx={{ color: "#282F3D" }}>
            What is QAI Workforce?
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle1" sx={{ color: "#47536B" }}>
            <b> QAI Workforce </b> is an innovative online platform designed to
            eliminate barriers between job searchers and employers.We connect
            freelancers with remote jobs, giving them an efficient way to locate
            employment options that complement their skills and interests.
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "1%" }}>
          <Typography variant="subtitle1" sx={{ color: "#47536B" }}>
            We offer individuals the opportunity to receive training through
            various <b>courses </b>, thereby enhancing their qualifications and
            preparing them for <b> employment opportunities.</b>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FirstPage;
