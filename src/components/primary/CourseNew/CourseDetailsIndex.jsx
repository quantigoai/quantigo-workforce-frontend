/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CourseDetailsIndex.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 13th 2023, 10:14:54 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Grid, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CourseNewDetailsIndex from "./CourseNewDetailsIndex";

const CourseDetailsIndex = () => {
  //   TODO Need to fix the height of the paper
  const paperStyle = {
    padding: "1%",
    height: "85vh",
  };

  const { course, isLoading } = useSelector((state) => state.course);

  return (
    <>
      <Paper elevation={0} sx={paperStyle}>
        <Grid container spacing={2}>
          <CourseNewDetailsIndex />
        </Grid>
      </Paper>
    </>
  );
};

export default CourseDetailsIndex;
