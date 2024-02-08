import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CourseLandingHeader from "../CourseLandingPage/CourseLandingHeader";
import { useNavigate } from "react-router-dom";
import ChapterListShowIndex from "./ChapterListShowIndex";
import CourseInfoIndex from "./CourseInfoIndex";
import CoursePreIcon from "../../../../assets/images/courses/CoursePre.svg";
import LinkIcon from "../../../../assets/images/courses/LinkIcon.svg";
import fi_clock from "../../../../assets/images/courses/fi_clock.svg";
import fi_arrow from "../../../../assets/images/courses/fi_arrow-up-right.svg";

const CourseHomePageIndex = () => {
  const { course } = useSelector((state) => state.course);

  return (
    <>
      <Box>
        <CourseLandingHeader course={course} />
      </Box>
      <Box sx={{ backgroundColor: "#fff", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            justifyContent: "center",
            // paddingRight: "20px",

            paddingTop: ".5%",
            paddingBottom: ".5%",
            width: "50%",
          }}
        >
          <Grid container sx={{ paddingRight:"2%" }}>
            <Grid item xs={2} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
              <img src={fi_clock} alt='' />
            </Grid>
            <Grid item xs={10} sx={{borderRight:"1px solid #E2E8F0"}}>
              <Typography
                color={"grey.600"}
                variant='wpf_p5_medium'
                sx={{ opacity: "0.6", textTransform: "uppercase" }}
              >
                Live session time
              </Typography>
              <br />
              <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
                Fri Jul 7, 2023 8am – 8:30am (BDT)
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
              <img src={LinkIcon} alt='' />
            </Grid>
            <Grid item xs={10}>
              <Typography
                color={"grey.600"}
                variant='wpf_p5_medium'
                sx={{ opacity: "0.6", textTransform: "uppercase" }}
              >
                Live session link
              </Typography>
              <br />
              <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
                https://meet.google.com/sdf97-3h4
              </Typography>
              <img src={fi_arrow}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#fff",paddingTop:"5px" }}>
        <Grid container>
          <Grid item xs={9} sx={{ padding: "1%" }}>
            <ChapterListShowIndex />
          </Grid>
          <Grid item xs={3} sx={{ padding: "1%" }}>
            <CourseInfoIndex />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseHomePageIndex;
