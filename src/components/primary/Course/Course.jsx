/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/Course.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 10:14:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { getAllCourses } from "../../../features/slice/courseSlice";
import { getAllSkills } from "../../../features/slice/skillSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import LoadingSkeleton from "../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton";
import CourseTab from "./CourseTab";
import CustomCard from "./CustomCard";
import CreateCourseModal from "./CreateCourseModal/CreateCourseModal";

const Course = () => {
  const { role } = useSelector((state) => state.user.user);
  const { courses } = useSelector((state) => state.course);
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

  return (
    <>
      <Button onClick={handleOpen}>Create Course</Button>

      <CreateCourseModal open={open} handleClose={handleClose} />
      <Box
        sx={{
          display: "flex",
          mb: "2%",
        }}>
        <Grid
          container
          sx={{
            paddingBottom: "0%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}>
          <CommonHeader
            title="Courses"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            isLoading={isLoading}
            customButton="Create Course"
          />
        </Grid>
      </Box>

      <Box>
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
                <Grid container spacing={4}>
                  {courses.map((course) => (
                    <Grid key={course._id} item xs={12} sm={6} md={3} gap={1}>
                      <CustomCard course={course} />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Course;
