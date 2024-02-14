import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import LanguageChip from "../LanguageChip";
import CategoryChip from "../CategoryChip";
import LevelChip from "../CourseCardActionLebel/LevelChip";
import CourseContent from "./CourseContent";
import { useNavigate } from "react-router-dom";
import CourseHeaderTitle from "./CourseHeaderTitle";
import editCourseIcon from "../../../../assets/images/edit.svg";
import EditCourseModal from "../CreateCourseModal/EditCourseModal";
import useCourseManagement from "../hooks/createCourseHook/useCourseMangement";
import useCourseDetails from "../hooks/courseDetailshooks/useCourseDetails";
import CourseDeleteModal from "../../../primary/Course/CourseDetailsPage/CourseDeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { enrollACourse } from "../../../../features/slice/courseSlice";
import { updateUserEnrollCourse } from "../../../../features/slice/userSlice";
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
const CourseLandingHeader = () => {
  const navigate = useNavigate();
  // const { course, courseChapter, courseChapters } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const {
    skill,
    course,
    open,
    handleOpen,
    handleClose,
    onSubmit,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    skills,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    checkedFeatured,
    outcomes,
    setOutcomes,
    dateTime,
    isFeatured,
    setIsFeatured,
    handleChangeFeatured,
    handleDateTime,
    hub,
    handleChangeHubs,
  } = useCourseDetails();
  const handleRouteChange = () => {
    if (
      user.role === "level_0_annotator" ||
      user.role === "level_1_annotator" ||
      user.role === "level_2_annotator" ||
      user.role === "level_3_annotator" ||
      user.role === "reviewer"
    ) {
      navigate(`/course-homepage/${course._id}`);
      !user.enrolledCourses.includes(course._id) &&
        dispatch(enrollACourse(course._id)).then((action) => {
          dispatch(updateUserEnrollCourse(action.payload.data.course._id));
        });
    } else {
      navigate(`/course-homepage/${course._id}`);
    }
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={{ width: { xxl: "70%", xl: "70%", lg: "80%" } }}>
        <Box sx={{ width: { xxl: "100%", xl: "90%", lg: "80%" } }}>
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
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ paddingY: "12px" }}>
              <CourseHeaderTitle course={course} />
            </Box>
            <Box>
              <Button
                // disabled={isLoading}
                type='submit'
                sx={{
                  //   width: "100%",
                  //   height: "45px",
                  //   backgroundColor: "#2D58FF",
                  //   color: "#FFFFFF",
                  //   "&:hover": {
                  //     backgroundColor: "#FF9A45",
                  //     color: "#1D1D1D",
                  //   },
                  borderRadius: "2px",
                }}
                onClick={handleOpen}
                // onClick={() => handleNavigation(customButton)}
              >
                <img src={editCourseIcon} />
              </Button>
              {/* <Button onClick={handleOpen}>Create Course</Button> */}
              <EditCourseModal
                open={open}
                handleClose={handleClose}
                onSubmit={onSubmit}
                course={course}
                preRequisiteCourses={preRequisiteCourses}
                handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
                skills={skills}
                handleChangeSkills={handleChangeSkills}
                coverImage={coverImage}
                removeImage={removeImage}
                handleImage={handleImage}
                // isLoading={isLoading}
                skill={skill}
                dateTime={dateTime}
                checkedFeatured={checkedFeatured}
                handleChangeFeatured={handleChangeFeatured}
                outcomes={outcomes}
                setOutcomes={setOutcomes}
                handleDateTime={handleDateTime}
                isFeatured={isFeatured}
                setIsFeatured={setIsFeatured}
                hub={hub}
                handleChangeHubs={handleChangeHubs}
              />

              <CourseDeleteModal
                course={course}
                // handleDeleteCourse={handleDeleteCourse}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px solid #EAECF0", borderBottom: "1px solid #EAECF0", marginTop: "20px" }}>
          <CourseContent course={course} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px", mb: "16px" }}>
          <Button sx={btnStyle} onClick={handleRouteChange}>
            Enroll Now
          </Button>
          <Typography variant='wpf_p3_regular' color={"grey.550"} sx={{ marginLeft: "20px" }}>
            <span style={{ color: "#344054", fontWeight: "600" }}>102</span> already enrolled
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "24%" }}>
        <img style={{ borderRadius: "8px", width: "100%" }} src={course.images} alt='' />
      </Box>
    </Box>
  );
};

export default CourseLandingHeader;
