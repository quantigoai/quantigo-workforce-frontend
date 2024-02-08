import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import levelIcon from "../../../../assets/images/courses/CourseLevelIcon.svg";
import categoryIcon from "../../../../assets/images/courses/CourseCategoryIcon.svg";
import courseDuration from "../../../../assets/images/courses/CourseDurationIcon.svg";

import courseSkillIcon from "../../../../assets/images/courses/SkillIcon.svg";
import CoursePreIcon from "../../../../assets/images/courses/CoursePre.svg";

const CourseInfoIndex = () => {
  const courseInfoItems = [
    {
      image: levelIcon,
      labelName: "Level",
      value: "Basic",
    },
    {
      image: categoryIcon,
      labelName: "Category",
      value: "categoryIcon",
    },
    {
      image: courseDuration,
      labelName: "Course Duration",
      value: "courseDuration",
    },
    {
      image: courseSkillIcon,
      labelName: "Skills",
      value: "courseSkillIcon",
    },
    {
      image: CoursePreIcon,
      labelName: "pre-requisite",
      value: "courseSkillIcon",
    },
  ];
  return (
    <>
      <Box sx={{paddingBottom:"5%"}}>
        <Typography variant='wpf_h5_Bold'>Course Info</Typography>
        <br />
        <Typography variant='wpf_p3_regular'>Gain insight into a topic and learn the fundamentals</Typography>
      </Box>
      <Box sx={{ backgroundColor: "#F8FAFC", border: "2px solid #E2E8F0", borderRadius: "8px" }}>
        {courseInfoItems.map((item, index) => (
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              justifyContent: "center",
              // paddingRight: "20px",
              borderTop: index === 0 ? "" : "1px solid #E2E8F0",
              paddingTop: "3%",
              paddingBottom: "3%",
            }}
          >
            <Grid container>
              <Grid item xs={2} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <img src={item.image} alt='' />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  color={"grey.600"}
                  variant='wpf_p5_medium'
                  sx={{ opacity: "0.6", textTransform: "uppercase" }}
                >
                  {item.labelName}
                </Typography>
                <br />
                <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
                  {item.value}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CourseInfoIndex;
