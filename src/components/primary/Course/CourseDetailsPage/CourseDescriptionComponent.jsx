import {Grid} from "@mui/material";
import React from "react";
import ChapterDescriptionComponents from "./ChapterDescriptionComponents";
import CourseScheduleComponent from "./CourseScheduleComponent";

const CourseDescriptionComponent = () => {
  return (
    <>
      <Grid xs={8} sx={{ paddingRight: "2%" }}>
        <ChapterDescriptionComponents/>
      </Grid>
      <Grid xs={4}>
        <CourseScheduleComponent/>
      </Grid>
    </>
  );
};

export default CourseDescriptionComponent;
