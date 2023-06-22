/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CourseDetails.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:02:38 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { setActiveChapterIndex } from "../../../features/slice/activePathSlice";
import { getAChapterById } from "../../../features/slice/courseSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import CourseDrawer from "./CourseDrawer";

const CourseDetails = () => {
  const { course, courseChapter, isLoading } = useSelector(
    (state) => state.course
  );

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isInContent, setIsInContent] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/course-details/${course._id}/index`);
  }, [course._id]);
  // },[]); zayed branch

  useEffect(() => {
    location.pathname === `/course-details/${courseChapter?._id}/content`
      ? setIsInContent(true)
      : setIsInContent(false);
  }, [location.pathname]);

  const handleChapterClick = (courseChapter, index) => {
    dispatch(setActiveChapterIndex(index));
    dispatch(getAChapterById(courseChapter._id)).then((res) => {
      navigate(`/course-details/${course._id}/index`);
    });
  };

  return (
    <>
      <Paper sx={{ width: "100%" }} elevation={0}>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Grid
            container
            sx={{
              paddingBottom: "2%",
            }}
          >
            <CommonHeader
              title={course.name}
              description={course.description}
              isLoading={isLoading}
              customButton="Edit Course"
            />
            {/* <CommonHeaderForCourse
              title={course.name}
              description={course.description}
              isLoading={isLoading}
              customButton="Edit Course"
            /> */}
          </Grid>
        </Box>
      </Paper>
      <Box sx={{ paddingTop: "1%" }}>
        <Grid container>
          {!isInContent && (
            <Grid item xs={3} sx={{ paddingRight: "1%" }}>
              <CourseDrawer handleChapterClick={handleChapterClick} />
            </Grid>
          )}
          <Grid item xs={isInContent ? 12 : 9}>
            <Outlet context={[handleChapterClick]} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseDetails;
