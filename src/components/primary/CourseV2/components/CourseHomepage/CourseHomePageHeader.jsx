/*
 * File           : CourseHomePageHeader.jsx
 * Project        : wmpfrontv2
 * Created Date   : Mo 25 Mar 2024 11:41:00
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Mon Mar 25 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// import LevelChip from '../CourseCardActionLebel/LevelChip';
// import LanguageChip from '../LanguageChip';

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllCourseChapterWithMark } from "../../../../../features/slice/quizSlice";
import CategoryChip from "../../../Course/CategoryChip";
import LevelChip from "../../../Course/CourseCardActionLebel/LevelChip";
import CourseLiveSessionSection from "../../../Course/CourseHomePage/CourseLiveSessionSection";
import CourseHeaderTitle from "../../../Course/CourseLandingPage/CourseHeaderTitle";
import LanguageChip from "../../../Course/LanguageChip";
// import CourseHeaderTitle from '../CourseLandingPage/CourseHeaderTitle';
// import CourseLiveSessionSection from './CourseLiveSessionSection';

const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  width: "100%",
  backgroundColor: "neutral.N000",
  position: "relative",
};

const CourseHomePageHeader = ({ course }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

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
      <Grid container>
        <Grid xs={9}>
          <Box
            sx={{
              // width: { xxl: '70%', xl: '70%', lg: '70%' },
              padding: "10px",
            }}
          >
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
                <CourseLiveSessionSection />
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid xs={3}>
          <Box
            sx={{
              // width: { xxl: '30%', xl: '30%', lg: '30%' },
              height: { xxl: "270px", xl: "240px", lg: "220px" },
              paddingLeft: "3%",
              position: "relative",
            }}
          >
            <img style={{ width: "100%", height, borderRadius: "8px" }} src={course.images} alt='' />
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
                  left: "10%",
                  top: { xxl: "80%", xl: "80%", lg: "60%" },
                }}
              >
                <Box sx={{ position: "relative", alignItems: "center", display: "flex" }}>
                  <CircularProgress
                    variant='determinate'
                    sx={{
                      color: (theme) => (theme.palette.mode === "light" ? "#D2DFFA" : "#D2DFFA"),
                      paddingTop: "2px",
                    }}
                    size='20px'
                    thickness={7}
                    value={100}
                  />
                  <CircularProgress
                    variant='determinate'
                    disableShrink
                    sx={{
                      paddingTop: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      color: (theme) => (theme.palette.mode === "light" ? "#2D58FF" : "#2D58FF"),
                      animationDuration: "550ms",
                      position: "absolute",
                    }}
                    size='20px'
                    value={courseCompletedPercentage}
                    thickness={7}
                  />

                  <span style={{ paddingLeft: "8px" }}>
                    <Typography variant='wpf_p2_semiBold'>
                      {courseCompletedPercentage ? Math.floor(courseCompletedPercentage) : 0}%
                    </Typography>
                  </span>
                  <span style={{ paddingLeft: "5px" }}>
                    <Typography variant='wpf_p3_regular'>Course Completed</Typography>
                  </span>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseHomePageHeader;
