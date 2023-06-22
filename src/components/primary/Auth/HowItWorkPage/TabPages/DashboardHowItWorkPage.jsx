import { Box, Typography } from "@mui/material";
import React from "react";
import DashBoardPageImage from "../../../../../assets/images/DashBoardPage.PNG";
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
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          You can find the following information in the dashboard :
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "3%", paddingBottom: "2%" }}>
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          {checkmark} <b>Total available jobs: </b>The total number of jobs
          available on the platform.
        </Typography>
        <br />
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          {checkmark} <b> My active jobs:</b> Jobs that you have taken and are
          currently working on.
        </Typography>
        <br />
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          {checkmark} <b>Total working hours:</b> Total number of hours you have
          worked on the platform.
        </Typography>
        <br />
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          {checkmark} <b> My completed jobs: </b>This displays the jobs that you
          have completed.
        </Typography>
        <br />
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          {checkmark} <b> My available jobs:</b> This displays the jobs that are
          available for you to take.
        </Typography>
        <br />
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          {checkmark} <b> Total completed courses:</b> This displays the total
          number of courses that you have completed.
        </Typography>
        <br />
      </Box>
      <Box sx={{ paddingBottom: "3%" }}>
        <Typography variant="subtitle2" sx={{ color: "#47536B" }}>
          When you reach Level 1, you will see two new options in the dashboard
          navigation: <b>"Jobs" </b> and <b>"Payment" </b>, in addition to the{" "}
          <b>"Course" </b> option. This allows you to browse and apply for
          available jobs that match your skills, and to receive payments for the
          work you complete.
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "4%", paddingBottom: "3%" }}>
        <ImageModal Img={DashBoardPageImage} />
      </Box>
    </>
  );
};

export default DashboardHowItWorkPage;
