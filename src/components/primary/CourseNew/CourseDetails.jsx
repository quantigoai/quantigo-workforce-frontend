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
import CommonHeaderForCourse from "../../shared/CustomComponenet/CommonHeader/CommonHeaderForCourse";
import CourseDrawerNew from "./CourseDrawerNew";
const CourseDetails = () => {
  const { course, courseChapter, isLoading } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
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
            isLightTheme={isLightTheme}
            customButton="Edit Course"
          />
        </Box>
        <Box className="courseContent">
          <Box sx={{ height: "100%", mt: { lg: 9, xl: 2, xxl: 0 } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              {!isInContent && (
                <Box
                  sx={{
                    backgroundColor: isLightTheme ? "#fff" : "#212121",
                    width: {
                      lg: "30%",
                      xl: "25%",
                      xxl: "22% ",
                    },
                  }}
                >
                  {/* <CourseDrawer handleChapterClick={handleChapterClick} /> */}
                  <CourseDrawerNew handleChapterClick={handleChapterClick} />
                </Box>
              )}
              <Box
                sx={{
                  width: {
                    lg: "69%",
                    xl: "74%",
                    xxl: "77% ",
                  },
                  height: "100%",
                }}
              >
                <Outlet context={[handleChapterClick]} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CourseDetails;
