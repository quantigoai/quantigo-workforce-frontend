import React from "react";

import { Grid, Typography } from "@mui/material";
import CourseLevelChip from "./CourseLevelChip";
import CourseCategoryChip from "./CourseCategoryChip";
import CourseSkillChip from "./CourseSkillChip";
import CoursePrerequisiteChip from "./CoursePrerequisiteChip";
import CourseLiveSessionChip from "./CourseLivesessionChip";

const CourseNewHeaderBottom = ({ course }) => {
  console.log(
    "🚀 ~ file: CourseNewHeaderBottom.jsx:11 ~ CourseNewHeaderBottom ~ course:",
    course
  );
  return (
    <>
      <Grid container>
        <Grid item xs={1} sx={{ borderRight: "1px solid #EBEDF5" }}>
          <CourseLevelChip level={course.level} />
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ paddingLeft: "3%", borderRight: "1px solid #EBEDF5" }}>
          <CourseCategoryChip category={course.category} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ paddingLeft: "3%", borderRight: "1px solid #EBEDF5" }}>
          <CourseSkillChip skills={course.skills} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ paddingLeft: "3%", borderRight: "1px solid #EBEDF5" }}>
          <CoursePrerequisiteChip
            prerequisiteCourses={course.prerequisiteCourses}
          />
        </Grid>
        <Grid item xs={3} sx={{ paddingLeft: "3%" }}>
          <CourseLiveSessionChip course={course} />
        </Grid>
      </Grid>
    </>
  );
};

export default CourseNewHeaderBottom;
