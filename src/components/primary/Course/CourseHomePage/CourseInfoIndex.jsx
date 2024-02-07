import { Box, Typography } from "@mui/material";
import React from "react";

const CourseInfoIndex = () => {
  return (
    <>
      <Box>
        <Typography variant='wpf_h5_Bold'>Course Info</Typography>
        <br />
        <Typography variant='wpf_p3_regular'>Gain insight into a topic and learn the fundamentals</Typography>
      </Box>
      <Box sx={{ backgroundColor: "", border: "2px solid #E2E8F0", borderRadius: "8px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingRight: "20px" }}>
          {/* <img src={logo1} alt='' /> */}
          <Box sx={{ marginLeft: "18px" }}>
            <Typography color={"grey.600"} sx={{ fontSize: "10px", opacity: "0.6" }}>
              LEVEL
            </Typography>
            <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
              4 hr 32 minutes
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingRight: "20px",borderTop:"1px solid #E2E8F0" }}>
          {/* <img src={logo1} alt='' /> */}
          <Box sx={{ marginLeft: "18px" }}>
            <Typography color={"grey.600"} sx={{ fontSize: "10px", opacity: "0.6" }}>
              COURSE DURATION
            </Typography>
            <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
              4 hr 32 minutes
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CourseInfoIndex;
