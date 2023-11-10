/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/Course.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 10:14:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Button, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setActivePath} from "../../../features/slice/activePathSlice";
import {getAllCourses} from "../../../features/slice/courseSlice";
import {getAllSkills} from "../../../features/slice/skillSlice";
import LoadingSkeleton from "../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton";
import CourseHeader from "./CourseHeader/CourseHeader";
import CourseTab from "./CourseTab";
import CreateCourseModal from "./CreateCourseModal/CreateCourseModal";
import CustomCard from "./CustomCard";

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
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={handleOpen}>Create Course</Button>
      <Button
        onClick={() => {
          navigate("/quiz-page");
        }}
      >
        show quiz
      </Button>

      <CreateCourseModal open={open} handleClose={handleClose} />

      <Box className="content">
        <Box className="contentHeader">
          <CourseHeader handleOpen={handleOpen} />
        </Box>

        <Box sx={{ height: "85%", overflow: "auto" }}>
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
        </Box>
      </Box>
    </>
  );
};

export default Course;
