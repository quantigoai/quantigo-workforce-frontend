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
import CourseLiveSessionSection from "./CourseLiveSessionSection";
import CourseHomePageHeader from "./CourseHomePageHeader";
import CourseHomePageCertificate from "./CourseHomePageCertificate";

const CourseHomePageIndex = () => {
  const { course } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  console.log("🚀 ~ CourseHomePageIndex ~ user:", user);
  const navigate = useNavigate();

  const handleCreateChapter = () => {
    navigate(`/create-chapter/${course._id}`);
  };
  return (
    <>
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0", // Hide the scrollbar
          },
        }}
      >
        <Box>
          {/* <CourseLandingHeader course={course} /> */}
          <CourseHomePageHeader course={course} />
        </Box>
        <Box
          sx={{ backgroundColor: "neutral.N000", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
        >
          <CourseLiveSessionSection />
        </Box>
        <Box sx={{ backgroundColor: "neutral.N000", paddingTop: "5px" }}>
          <Grid container>
            <Grid item xs={9} sx={{ padding: "1%" }}>
              <Grid container>
                <Box
                  sx={{
                    width:
                      user.role === "admin" || user.role === "trainer" ? { xxl: "80%", xl: "80%", lg: "70%" } : "100%",
                  }}
                >
                  <Typography variant='wpf_h5_Bold'>All Chapters</Typography>
                  <br />
                  <Typography variant='wpf_p3_regular'>
                    {" "}
                    Prepare for a new career in the high-growth field of project management, no experience or degree
                    required. Get professional training designed by Google and get on the fastrack to a competitively
                    paid job.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width:
                      user.role === "admin" || user.role === "trainer" ? { xxl: "20%", xl: "20%", lg: "30%" } : "0%",
                    justifyContent: "end",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  {(user.role === "admin" || user.role === "trainer") && (
                    <Button
                      sx={{
                        textTransform: "none",
                        borderRadius: "8px",

                        backgroundColor: "#2E58FF",
                        color: "white",

                        "&:hover": {
                          background: "#244EF5",
                        },
                      }}
                      variant='contained'
                      onClick={() => handleCreateChapter()}
                    >
                      <i style={{ fontSize: "17px", marginRight: "6px" }} className='ri-add-fill'></i> Create Chapter
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={3} sx={{ padding: "1%" }}>
              <Box sx={{}}>
                <Typography variant='wpf_h5_Bold'>Course Info</Typography>
                <br />
                <Typography variant='wpf_p3_regular'>Gain insight into a topic and learn the fundamentals</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={9} sx={{ padding: "1%" }}>
              <ChapterListShowIndex />
            </Grid>
            <Grid item xs={3} sx={{ padding: "1%" }}>
              <CourseInfoIndex />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ paddingTop: "5px" }}>
          <CourseHomePageCertificate />
        </Box>
      </Box>
    </>
  );
};

export default CourseHomePageIndex;
