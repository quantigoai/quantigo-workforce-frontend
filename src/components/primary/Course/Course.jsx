/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/Course.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 10:14:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Button, Grid, Paper, styled } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllCourses } from "../../../features/slice/courseSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import LoadingSkeleton from "../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton";
import CourseHeader from "./CourseHeader/CourseHeader";
import CourseTab from "./CourseTab";
import CreateCourseModal from "./CreateCourseModal/CreateCourseModal";
import CustomCard from "./CustomCard";
import CourseCreateModal from "./CreateCourseModal/CourseCreateModal";

const Course = () => {
  const { role } = useSelector((state) => state.user.user);
  const { courses } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const [filterCourses, setFilterCourses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    dispatch(setActivePath("Course"));
    dispatch(getAllSkills());
    dispatch(getAllCourses()).then(() => {
      setIsLoading(false);
    });
  }, [isLoading]);
  const navigate = useNavigate();
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
  return (
    <>
      <CourseCreateModal open={open} handleClose={handleClose} />
      <Box className="content">
        <Box className="contentHeader">
          <CourseHeader handleOpen={handleOpen} />
        </Box>
        <CoursePaper>
          <>
            {isLoading ? (
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
                      {courses.map((course) => (
                        <Grid key={course._id} item xs={12} px={1} sm={6} md={3} sx={{ height: "50%" }}>
                          <CustomCard course={course} />
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
    </>
  );
};

export default Course;
