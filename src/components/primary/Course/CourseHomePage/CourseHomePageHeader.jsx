import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LanguageChip from "../LanguageChip";
import CategoryChip from "../CategoryChip";
import LevelChip from "../CourseCardActionLebel/LevelChip";

import { useNavigate } from "react-router-dom";
import groupIcon from "../../../../assets/images/courses/Group.svg";

import editCourseIcon from "../../../../assets/images/edit.svg";
import EditCourseModal from "../CreateCourseModal/EditCourseModal";
import CourseHeaderTitle from "../CourseLandingPage/CourseHeaderTitle";
import CourseContent from "../CourseLandingPage/CourseContent";
import CourseLiveSessionSection from "./CourseLiveSessionSection";
import { getAllCourseChapterWithMark } from "../../../../features/slice/quizSlice";
import { useDispatch, useSelector } from "react-redux";
const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  width: "100%",
  backgroundColor: "neutral.N000",
  position: "relative",
};
const btnStyle = {
  textTransform: "none",
  borderRadius: "8px",
  backgroundColor: "#2E58FF",
  padding: "10px 24px",
  color: "#fff",
  "&:hover": { backgroundColor: "#244EF5" },
};
const CourseHomePageHeader = ({ course }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log("🚀 ~ CourseHomePageHeader ~ user:", user.role);
  const [courseCompletedPercentage, setCourseCompletedPercentage] = useState();
  const handleRouteChange = () => {
    navigate(`/course-homepage/${course._id}`);
  };

  useEffect(() => {
    // setLoadingForMarks(true);
    course._id &&
      dispatch(getAllCourseChapterWithMark(course._id)).then((action) => {
        setCourseCompletedPercentage(action.payload.data.courseCompletedPercentage);
        // setLoadingForMarks(false);
      });
  }, [course]);
  const screenSize = window.innerWidth;
  let width = "90%";
  let height = "90%";
  if (screenSize >= 1500) {
    // Extra-large screens
    width = 400;
    height = 280;
  } else if (screenSize === 1440) {
    // Large screens
    width = 340;
    height = 248;
  } else if (screenSize >= 992) {
    // Large screens
    width = 300;
    height = 200;
  }
  return (
    <Box sx={boxStyle}>
      <Box sx={{ width: { xxl: "70%", xl: "70%", lg: "70%" }, padding: "10px" }}>
        <Box sx={{ height: "60%", width: { xxl: "80%", xl: "90%", lg: "80%" } }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ paddingRight: "6px" }}>
              <LanguageChip language={course.language} />
            </Box>
            <Box sx={{ paddingRight: "6px" }}>
              <CategoryChip category={course.category} />
            </Box>
            <Box sx={{ padding: "0%" }}>
              <LevelChip level={course.level} />
            </Box>
          </Box>
          <Box sx={{ paddingY: "12px" }}>
            <CourseHeaderTitle course={course} />
          </Box>
        </Box>

        <Box sx={{ height: "40%", display: "flex", alignItems: "center", marginTop: "20px", mb: "16px" }}>
          <Grid container gap={1}>
            {/* <Box
              sx={{
                backgroundColor: "neutral.N000",
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                border: "1px solid #E6ECF5",
                padding: "1%",
              }}
            >
              <img src={groupIcon} />
              <span style={{ paddingLeft: "8px" }}>
                {" "}
                <Typography variant='wpf_p3_regular'>Start Date : 12 Dec,2023</Typography>
              </span>
            </Box> */}

            {!(user.role === "admin" || user.role === "trainer") && (
              <Box
                sx={{
                  backgroundColor: "neutral.N000",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "1px solid #E6ECF5",
                  padding: "12px",
                  position: "absolute",
                  top: { xxl: 230, xl: 200, lg: 150 },
                  left: { xxl: 1200, xl: 860, lg: 550 },
                }}
              >
                <Box sx={{ position: "relative", alignItems: "center", display: "flex" }}>
                  <CircularProgress
                    variant='determinate'
                    sx={{
                      color: (theme) => (theme.palette.mode === "light" ? "#D2DFFA" : "#D2DFFA"),
                      // backgroundColor: "red",
                    }}
                    size='20px'
                    thickness={7}
                    // {...props}
                    value={100}
                  />
                  <CircularProgress
                    variant='determinate'
                    disableShrink
                    sx={{
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      color: (theme) => (theme.palette.mode === "light" ? "#2D58FF" : "#2D58FF"),
                      animationDuration: "550ms",
                      position: "absolute",
                      left: 0,
                      top: 0,
                    }}
                    size='20px'
                    value={courseCompletedPercentage}
                    thickness={7}
                  />
                </Box>

                <span style={{ paddingLeft: "8px" }}>
                  <Typography variant='wpf_p2_semiBold'>
                    {courseCompletedPercentage ? Math.floor(courseCompletedPercentage) : 0}%
                  </Typography>
                </span>
                <span style={{ paddingLeft: "5px" }}>
                  <Typography variant='wpf_p3_regular'>Course Completed</Typography>
                </span>
              </Box>
            )}
            <CourseLiveSessionSection />
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xxl: "390px", xl: "340px", lg: "300px" },
          height: { xxl: "270px", xl: "40px", lg: "200px" },
        }}
      >
        <img style={{ width, height, borderRadius: "8px" }} src={course.images} alt='' />
      </Box>
    </Box>
  );
};

export default CourseHomePageHeader;
