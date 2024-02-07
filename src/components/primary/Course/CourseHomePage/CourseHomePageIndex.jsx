import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CourseLandingHeader from "../CourseLandingPage/CourseLandingHeader";
import { useNavigate } from "react-router-dom";
import ChapterListShowIndex from "./ChapterListShowIndex";
import CourseInfoIndex from "./CourseInfoIndex";

const CourseHomePageIndex = () => {
  const { course } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const handleChapter = () => {
    navigate("/content");
  };
  return (
    <>
      <Box>
        <CourseLandingHeader course={course} />
      </Box>
      <Button onClick={() => handleChapter()}>chapter </Button>
      <Box sx={{ backgroundColor: "#fff" }}>
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
