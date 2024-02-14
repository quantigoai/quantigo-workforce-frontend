import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import levelIcon from "../../../../assets/images/courses/CourseLevelIcon.svg";
import categoryIcon from "../../../../assets/images/courses/CourseCategoryIcon.svg";
import courseDuration from "../../../../assets/images/courses/CourseDurationIcon.svg";

import courseSkillIcon from "../../../../assets/images/courses/SkillIcon.svg";
import CoursePreIcon from "../../../../assets/images/courses/CoursePre.svg";
import { useSelector } from "react-redux";
import MoreComponents from "./MoreComponents";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";

const CourseInfoIndex = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { course } = useSelector((state) => state.course);
  console.log("🚀 ~ CourseInfoIndex ~ course:", course);

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
      <Box sx={{ backgroundColor: isLightTheme ? "#F8FAFC" : "", border: "2px solid #E2E8F0", borderRadius: "8px" }}>
        {courseInfoItems.map((item, index) => (
          <Box
            sx={{
              // alignItems: "center",
              justifyContent: "center",
              display: "flex",
              // justifyContent: "center",
              // paddingRight: "20px",
              borderTop: index === 0 ? "" : "1px solid #E2E8F0",
              paddingTop: "3%",
              paddingBottom: "3%",
            }}
          >
            <Grid container>
              <Grid
                item
                //  xs={2}
                xs={3}
                sm={3}
                md={3}
                xl={3}
                sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
              >
                <img src={item.image} alt='' />
              </Grid>
              <Grid
                item
                // xs={10}
                xs={9}
                sm={9}
                md={9}
                xl={9}
              >
                <Typography
                  color={"grey.600"}
                  variant='wpf_p5_medium'
                  sx={{ opacity: "0.6", textTransform: "uppercase" }}
                >
                  {item.labelName}
                </Typography>
                <br />
                {item.labelName === "Skills" ? (
                  <>
                    <MoreComponents moreArray={course.skills} />
                    {/* <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
                        {course?.skills[0]?.name}
                      </Typography> */}
                  </>
                ) : item.labelName === "pre-requisite" ? (
                  <>
                    <MoreComponents moreArray={course.prerequisiteCourses} />
                  </>
                ) : (
                  <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
                    {capitalizeFirstLetter(item.value)}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CourseInfoIndex;
