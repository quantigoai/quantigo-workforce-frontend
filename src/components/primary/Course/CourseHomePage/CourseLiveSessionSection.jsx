import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LinkIcon from "../../../../assets/images/courses/LinkIcon.svg";
import fi_clock from "../../../../assets/images/courses/fi_clock.svg";
import fi_arrow from "../../../../assets/images/courses/fi_arrow-up-right.svg";
import { useSelector } from "react-redux";

const CourseLiveSessionSection = () => {
  const { course } = useSelector((state) => state.course);
  console.log("🚀 ~ CourseLiveSessionSection ~ course:", course);
  const date = new Date(course.liveSessionStartedAt);

  // Format the output in the desired format
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Dhaka", // BDT timezone
  };
  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "neutral.N000",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          justifyContent: "center",
          // paddingRight: "20px",

          paddingTop: ".5%",
          paddingBottom: ".5%",
          width: { xl: "60%", xxl: "60%", lg: "80%" },
        }}
      >
        <Grid container sx={{ paddingRight: "2%" }}>
          <Grid item xs={2} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <img src={fi_clock} alt='' />
          </Grid>
          <Grid item xs={10} sx={{ borderRight: "1px solid #E2E8F0" }}>
            <Typography color={"grey.600"} variant='wpf_p5_medium' sx={{ opacity: "0.6", textTransform: "uppercase" }}>
              Live session time
            </Typography>
            <br />
            <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
              {course.liveSessionStartedAt ? `${formattedDate} (BDT)` : "N/A"}
              {/* Fri Jul 7, 2023 8am – 8:30am (BDT) */}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <img src={LinkIcon} alt='' />
          </Grid>
          <Grid item xs={10}>
            <Typography color={"grey.600"} variant='wpf_p5_medium' sx={{ opacity: "0.6", textTransform: "uppercase" }}>
              Live session link
            </Typography>
            <br />
            <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
              {course.liveSessionLink ? course.liveSessionLink : "N/A"}
            </Typography>

            {course.liveSessionLink && <img src={fi_arrow} />}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseLiveSessionSection;
