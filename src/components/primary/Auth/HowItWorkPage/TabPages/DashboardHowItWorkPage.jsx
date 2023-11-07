import React from "react";
import { Box, Typography } from "@mui/material";
import DashBoardPageImage from "../../../../../assets/images/DashBoardPage.png";
import ImageModal from "../ImageModal";

const DashboardHowItWorkPage = () => {
  var checkmark = "✔";
  return (
    <>
      <Box sx={{ paddingBottom: "3%" }}>
        <Typography variant="h6" sx={{ color: "#47536B" }}>
          DashBoard
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: "1%" }}>
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          You can find the following information in the dashboard :
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "2%" }}>
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          {checkmark}
          <Typography variant="wpf_p3_semiBold">Total available jobs: </Typography>The total number of jobs available on
          the platform.
        </Typography>
        <br />
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          {checkmark} <Typography variant="wpf_p3_semiBold"> My active jobs:</Typography> Jobs that you have taken and
          are currently working on.
        </Typography>
        <br />
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          {checkmark} <Typography variant="wpf_p3_semiBold">Total working hours:</Typography> Total number of hours you
          have worked on the platform.
        </Typography>
        <br />
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          {checkmark} <Typography variant="wpf_p3_semiBold"> My completed jobs: </Typography>This displays the jobs that
          you have completed.
        </Typography>
        <br />
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          {checkmark} <Typography variant="wpf_p3_semiBold"> My available jobs:</Typography> This displays the jobs that
          are available for you to take.
        </Typography>
        <br />
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          {checkmark} <Typography variant="wpf_p3_semiBold">Total completed courses:</Typography> This displays the
          total number of courses that you have completed.
        </Typography>
        <br />
      </Box>
      <Box sx={{ paddingBottom: "3%" }}>
        <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
          When you reach Level 1, you will see two new options in the dashboard navigation:{" "}
          <Typography variant="wpf_p3_semiBold">"Jobs" </Typography> and{" "}
          <Typography variant="wpf_p3_semiBold">"Payment" </Typography>, in addition to the{" "}
          <Typography variant="wpf_p3_semiBold">"Course" </Typography> option. This allows you to browse and apply for
          available jobs that match your skills, and to receive payments for the work you complete.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "4%", paddingBottom: "3%" }}>
        <ImageModal Img={DashBoardPageImage} />
      </Box>
    </>
  );
};

export default DashboardHowItWorkPage;
