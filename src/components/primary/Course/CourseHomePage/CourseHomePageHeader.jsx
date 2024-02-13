import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import LanguageChip from "../LanguageChip";
import CategoryChip from "../CategoryChip";
import LevelChip from "../CourseCardActionLebel/LevelChip";

import { useNavigate } from "react-router-dom";
import groupIcon from "../../../../assets/images/courses/Group.svg";

import editCourseIcon from "../../../../assets/images/edit.svg";
import EditCourseModal from "../CreateCourseModal/EditCourseModal";
import CourseHeaderTitle from "../CourseLandingPage/CourseHeaderTitle";
import CourseContent from "../CourseLandingPage/CourseContent";
const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  width: "100%",
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
  const handleRouteChange = () => {
    navigate(`/course-homepage/${course._id}`);
  };
  return (
    <Box sx={boxStyle}>
      <Box sx={{ width: { xxl: "70%", xl: "70%", lg: "80%" } }}>
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
            <Box
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
            </Box>
            <Box
              sx={{
                backgroundColor: "neutral.N000",
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                border: "1px solid #E6ECF5",
                padding: "1%",
              }}
            >
              <Box sx={{ position: "relative", alignItems: "center", display: "flex" }}>
                <CircularProgress
                  variant='determinate'
                  sx={{
                    color: (theme) => (theme.palette.mode === "light" ? "#D2DFFA" : "#D2DFFA"),
                    // backgroundColor: "red",
                  }}
                  size='25px'
                  thickness={5}
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
                  size='25px'
                  value={25}
                  thickness={5}
                />
              </Box>
              <span style={{ paddingLeft: "8px" }}>
                <Typography variant='wpf_p2_semiBold'>25%</Typography>
              </span>
              <span style={{ paddingLeft: "5px" }}>
                {" "}
                <Typography variant='wpf_p3_regular'>Course Completed</Typography>
              </span>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ width: "24%" }}>
        <img style={{ borderRadius: "8px", width: "100%" }} src={course.images} alt='' />
      </Box>
    </Box>
  );
};

export default CourseHomePageHeader;
