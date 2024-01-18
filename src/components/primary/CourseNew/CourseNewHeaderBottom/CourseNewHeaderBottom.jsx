import {Grid} from "@mui/material";
import CourseCategoryChip from "./CourseCategoryChip";
import CourseLevelChip from "./CourseLevelChip";
import CourseLiveSessionChip from "./CourseLiveSessionChip";
import CoursePrerequisiteChip from "./CoursePrerequisiteChip";
import CourseSkillChip from "./CourseSkillChip";

const CourseNewHeaderBottom = ({ course, isLightTheme }) => {
  return (
    <>
      <Grid container sx={{ backgroundColor: isLightTheme ? "#fff" : "#121212" }}>
        <Grid item xs={1} sx={{ borderRight: "1px solid #EBEDF5" }}>
          <CourseLevelChip level={course.level} />
        </Grid>

        <Grid item xs={2} sx={{ paddingLeft: "3%", borderRight: "1px solid #EBEDF5" }}>
          <CourseCategoryChip category={course.category} />
        </Grid>
        <Grid item xs={3} sx={{ paddingLeft: "3%", borderRight: "1px solid #EBEDF5" }}>
          <CourseSkillChip skills={course.skills} />
        </Grid>
        <Grid item xs={3} sx={{ paddingLeft: "3%", borderRight: "1px solid #EBEDF5" }}>
          <CoursePrerequisiteChip prerequisiteCourses={course.prerequisiteCourses} />
        </Grid>
        <Grid item xs={3} sx={{ paddingLeft: "3%" }}>
          <CourseLiveSessionChip course={course} />
        </Grid>
      </Grid>
    </>
  );
};

export default CourseNewHeaderBottom;
