/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/Course.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 10:14:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Grid, Paper, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllCourses } from "../../../features/slice/courseSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import LoadingSkeleton from "../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton";
import CourseHeader from "./CourseHeader/CourseHeader";
import CourseTab from "./CourseTab";
import CustomCard from "./CustomCard";
import CourseCreateModal from "./CreateCourseModal/CourseCreateModal";

import LoadingComponent from "../../shared/Loading/LoadingComponent";
import useCourseManagement from "./hooks/createCourseHook/useCourseMangement";
const Course = () => {
  const {
    open,
    setOpen,
    handleOpen,
    isCourseLoading,
    isLoading,
    filterCourses,
    courses,
    handleViewDetailsButton,
    handleSubmit,
    methods,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    onSubmit,
    handleClose,
    skills,
    skill,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    isDataLoading,
    setIsDataLoading,
    role,
    isLightTheme,
  } = useCourseManagement();

  const dispatch = useDispatch();
  const CoursePaper = styled(Paper)({
    width: "100%",
    height: "90%",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px",
    border: "0px 0px 1px 0px",
    backgroundColor: isLightTheme ? "#F2F6FC" : "#212121",
    boxShadow: "0px 1px 3px 0px #09008014",
  });
  useEffect(() => {
    dispatch(setActivePath("Course"));
    dispatch(getAllSkills());
    dispatch(getAllCourses()).then(() => {
      setIsDataLoading(false);
    });
  }, []);

  return (
    <>
      {isCourseLoading ? (
        <LoadingComponent />
      ) : (
        <Box className="content">
          <Box className="contentHeader">
            <CourseHeader open={open} setOpen={setOpen} handleOpen={handleOpen} />
          </Box>
          <CoursePaper>
            <>
              {isDataLoading ? (
                <>
                  <LoadingSkeleton />
                </>
              ) : (
                <>
                  {role === "level_0_annotator" ||
                  role === "level_1_annotator" ||
                  role === "level_2_annotator" ||
                  role === "level_3_annotator" ||
                  role === "reviewer" ? (
                    <>
                      {" "}
                      <CourseTab filterCourses={filterCourses} isLoading={isLoading} />
                    </>
                  ) : (
                    <>
                      {/* <CourseTab filterCourses={filterCourses} isLoading={isLoading} /> */}
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        {courses?.map((course) => (
                          <Grid key={course._id} item xs={12} px={1} sm={6} md={3} sx={{ height: "50%" }}>
                            <CustomCard handleViewDetailsButton={handleViewDetailsButton} course={course} />
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  )}
                </>
              )}
            </>
          </CoursePaper>
        </Box>
      )}

      <CourseCreateModal
        handleSubmit={handleSubmit}
        methods={methods}
        preRequisiteCourses={preRequisiteCourses}
        handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
        onSubmit={onSubmit}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        skills={skills}
        skill={skill}
        handleChangeSkills={handleChangeSkills}
        coverImage={coverImage}
        removeImage={removeImage}
        handleImage={handleImage}
        isLoading={isLoading}
      />
    </>
  );
};

export default Course;
