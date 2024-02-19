import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import CourseChapterAccordion from "../CourseLandingPage/CourseChapterAccordion";
import { useDispatch, useSelector } from "react-redux";
import CoursePreIcon from "../../../../assets/images/courses/CoursePre.svg";
import arrowIcon from "../../../../assets/images/courses/arrowIcon.svg";
import course_Complete from "../../../../assets/images/courses/course_Complete.svg";
import editIcon from "../../../../assets/images/courses/EditIcon.svg";

import Rectangle from "../../../../assets/images/courses/Rectangle 257.svg";
import { useNavigate } from "react-router-dom";
import { setActiveChapterIndex } from "../../../../features/slice/activePathSlice";
import { getAChapterById } from "../../../../features/slice/courseSlice";
import ChapterProgressbar from "./ChapterProgressbar";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  gap: "14px",
  backgroundColor: "red",
};
const accordionBoxNumberStyle = {
  backgroundColor: "#E2E8F0",
  padding: "2px",
  borderRadius: "99px",
  display: "flex",
  width: "24px",
  height: "24px",
  justifyContent: "center",
  alignItems: "center",
};
const ChapterListShowIndex = () => {
  const { courseChapters, course } = useSelector((state) => state.course);
  const { role } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { isLightTheme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

  const handleChapter = (courseChapter, index) => {
    // navigate("/content");
    // navigate(`/content/${courseChapter._id}`);
    dispatch(setActiveChapterIndex(index));
    dispatch(getAChapterById(courseChapter._id)).then(() => {
      // navigate(`/course-details/${course._id}/index`);
      navigate(`/content/${courseChapter._id}`);
    });
    // if (
    //   user.role === "level_0_annotator" ||
    //   user.role === "level_1_annotator" ||
    //   user.role === "level_2_annotator" ||
    //   user.role === "level_3_annotator" ||
    //   user.role === "reviewer"
    // ) {
    //   !user.enrolledCourses.includes(courseChapter.rootCourse._id) &&
    //     dispatch(enrollACourse(courseChapter.rootCourse._id)).then((action) => {
    //       dispatch(updateUserEnrollCourse(action.payload.data._id));
    //     });
    // }
  };
  const handleCreateChapter = () => {
    navigate(`/create-chapter/${course._id}`);
  };
  const handleEditChapter = (id, index) => {
    dispatch(setActiveChapterIndex(index));
    dispatch(getAChapterById(id)).then(() => {
      // navigate(`/course-details/${course._id}/index`);
      navigate(`/update-chapter/${id}`);
    });
  };
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "red",
          backgroundColor: isLightTheme ? "#F8FAFC" : "",
          border: "2px solid #E2E8F0",
          borderRadius: "8px",
          maxHeight: 430,
          // overflowY: "auto",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0", // Hide the scrollbar
          },
        }}
      >
        {courseChapters &&
          courseChapters.map((item, index) => (
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                justifyContent: "center",
                // paddingRight: "20px",
                borderTop: index === 0 ? "" : "1px solid #E2E8F0",
                paddingTop: "1%",
                paddingBottom: "1%",
              }}
            >
              <Grid container>
                <Grid
                  item
                  // xs={0.5}
                  xs={12}
                  sm={1}
                  md={1}
                  xl={0.78}
                  sx={{ backgroundColor: "", alignItems: "center", justifyContent: "center", display: "flex" }}
                >
                  <ChapterProgressbar item={item} />
                  {/* <img src={course_Complete} alt='' /> */}
                </Grid>
                <Grid
                  item
                  // xs={9.5}
                  xs={12}
                  sm={7}
                  md={8.5}
                  xl={9}
                  sx={{ backgroundColor: "" }}
                >
                  <Typography
                    // color={"grey.600"}
                    variant='wpf_p3_semiBold'
                    onClick={() => handleChapter(item, index)}
                    sx={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </Typography>
                  {/* {(role === "admin" || role === "trainer") && (
                    <Button sx={{ height: "20px" }} onClick={() => handleEditChapter(item._id, index)}>
                      {" "}
                      <i className='ri-edit-line'></i>
                    </Button>
                  )} */}
                  <br />
                  <Typography variant='wpf_p4_regular' color={"grey.600"}>
                    {`Duration: ${item.estimatedTimeToRead} minutes`}
                    {"  "}
                  </Typography>
                  <img src={Rectangle} />
                  <Typography variant='wpf_p4_regular' color={"grey.600"}>
                    {"  "} Quiz Score: 15
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={2.5}
                  xl={2}
                  sx={{ px: "2%", alignItems: "center", justifyContent: "space-between", display: "flex" }}
                >
                  <Chip
                    sx={{
                      height: {
                        lg: "20px",
                        xl: "24px",
                        xxl: "28px",
                      },
                      borderRadius: "32px",
                      border: "2px solid  #E2E8F0",
                      color: "neutral.700",
                      backgroundColor: isLightTheme ? "#F8FAFC" : "",
                      fontSize: { xl: "12px", xxl: "14px", lg: "10px" },
                      fontFamily: "Inter",
                    }}
                    onClick={() => handleChapter(item, index)}
                    // key={item.value}
                    label={`Chapter ${index + 1}`}
                    // label='Chapter 01'
                  />
                  {role === "admin" || role === "trainer" ? (
                    <>
                      <img
                        src={editIcon}
                        alt=''
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEditChapter(item._id, index)}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={arrowIcon}
                        alt=''
                        style={{ cursor: "pointer" }}
                        onClick={() => handleChapter(item, index)}
                      />
                    </>
                  )}
                </Grid>
              </Grid>
            </Box>
          ))}
      </Box>

      {/* <CourseChapterAccordion arr={arr} isLightTheme={isLightTheme} course={course} /> */}
    </>
  );
};

export default ChapterListShowIndex;
