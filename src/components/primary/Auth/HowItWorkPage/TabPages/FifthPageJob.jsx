import { Box, Typography } from "@mui/material";
import React from "react";
import ActiveJobImage from "../../../../../assets/images/ActiveJob.png";
import ImageModal from "../ImageModal";
import ComingSoon from "../../../../shared/ComingSoon/ComingSoon";

const FifthPageJob = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          paddingLeft: "3%",
          paddingRight: "5%",
          height: "85vh",
          scrollBehavior: "smooth",
          overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.6em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}>
        <ComingSoon />
        {/* <Box sx={{ paddingBottom: "2%" }}>
          <Typography variant="wpf_h3_semiBold" sx={{ color: "#282F3D" }}>
            Coming Soon
          </Typography>
        </Box> */}
        {/* <>
          <Box sx={{ paddingBottom: "2%" }}>
            <Typography variant="wpf_h3_semiBold" sx={{ color: "#282F3D" }}>
              Job
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
              Available Job
            </Typography>
          </Box>

          <Box sx={{ paddingBottom: "0%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              Clicking on the <Typography variant="wpf_p3_semiBold"> Jobs </Typography> button in the Dashboard
              navigation will display the available jobs that match your skills. Here, you can view the job category,
              no. of images, time limit and other relevant details. If you are interested in taking a job, simply click
              on <Typography variant="wpf_p3_semiBold">"Take job" </Typography> and a confirmation pop-up message will
              appear. You can filter jobs based on your requirements by using the filtering options available on the
              Jobs page.
            </Typography>
          </Box>

          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
              Active Job
            </Typography>
          </Box>

          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              When you click on the <Typography variant="wpf_p3_semiBold"> "Take Job" </Typography> option, the job will
              be moved to the <Typography variant="wpf_p3_semiBold"> "Active Jobs" </Typography> section.Here, you can
              view the status of the job, the time left for submitting the job, the job link, and other relevant
              details.
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              When you take a job, it will move to the active jobs section, and the status will be shown as{" "}
              <Typography variant="wpf_p3_semiBold">"in progress" </Typography>. After finishing the job, when you click
              on the "submit" button, the status will change to
              <Typography variant="wpf_p3_semiBold"> "reviewing" </Typography>. If the work is not up to the mark, the
              status will turn into <Typography variant="wpf_p3_semiBold"> "recheck" </Typography>. If the work is
              already satisfactory, then it will be moved to the archived job section. You will have a maximum of 3
              attempts to complete the work. if you failed three times then that job will also move into{" "}
              <Typography variant="wpf_p3_semiBold"> "Archived job" </Typography> as expired. Once a job is archived, it
              cannot be worked on or resubmitted.
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              <Typography variant="wpf_p3_semiBold"> "Time Left" </Typography> refers to the remaining time you have to
              complete the job before the deadline.
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4%", paddingBottom: "3%" }}>
            <ImageModal Img={ActiveJobImage} />
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p1_semiBold" sx={{ color: "#47536B" }}>
              Archive Job
            </Typography>
          </Box>

          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              If you are able to successfully complete the job within the given three attempts, it will move to the
              archived section as a completed job, where you can see all the details of the job on{" "}
              <Typography variant="wpf_p3_semiBold"> “Details” </Typography>.{" "}
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "1%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              However, if you fail to complete the job within the given time limit or fail to meet the quality standards
              even after three attempts, the job status will be marked as{" "}
              <Typography variant="wpf_p3_semiBold"> "Expired" </Typography> and you will no longer be able to work on
              it.
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "5%" }}>
            <Typography variant="wpf_p3_medium" sx={{ color: "#47536B" }}>
              Job link will also be provided at "Job Link" section. This link will lead you to the job details and
              requirements, and you can use it to complete the job.
            </Typography>
          </Box>
        </> */}
      </Box>
    </>
  );
};

export default FifthPageJob;
