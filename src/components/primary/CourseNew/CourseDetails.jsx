/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CourseDetails.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:02:38 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { setActiveChapterIndex } from "../../../features/slice/activePathSlice";
import { getAChapterById, getACourseByID } from "../../../features/slice/courseSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import CourseDrawer from "./CourseDrawer";
import CommonHeaderForCourse from "../../shared/CustomComponenet/CommonHeader/CommonHeaderForCourse";
import CourseDrawerNew from "./CourseDrawerNew";

const CourseDetails = () => {
  const { course, courseChapter, isLoading } = useSelector((state) => state.course);
  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isInContent, setIsInContent] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!course._id) {
      dispatch(getACourseByID(params.id));
    }
    // navigate(`/course-details/${course._id}/index`);
  }, []);

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
    dispatch(getAChapterById(courseChapter._id)).then(() => {
      navigate(`/course-details/${course._id}/index`);
    });
  };

  return (
    <>
      <Box className="projectBox">
        <Box className="courseHeader">
          <CommonHeaderForCourse
            title={course.name}
           
            description={course.description}
            isLoading={isLoading}
            customButton="Edit Course"
          />
        </Box>
        <Box className="courseContent">
          <Box sx={{ height: "100%",backgroundColor: "" }}>
            <Grid container sx={{  }}>
              {!isInContent && (
                <Grid item xs={3} sx={{ paddingRight: "1%" }}>
                  {/* <CourseDrawer handleChapterClick={handleChapterClick} /> */}
                  <CourseDrawerNew handleChapterClick={handleChapterClick} />
                </Grid>
              )}
              <Grid item xs={isInContent ? 12 : 9}>
              <Outlet context={[handleChapterClick]} />
            </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CourseDetails;
