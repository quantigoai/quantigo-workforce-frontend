/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CourseDetails.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:02:38 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getACourseByID } from "../../../features/slice/courseSlice";
import CommonHeaderForCourse from "../../shared/CustomComponenet/CommonHeader/CommonHeaderForCourse";
import CourseDrawerNew from "./CourseDrawerNew";
import useCourseDetails from "../Course/hooks/courseDetailshooks/useCourseDetails";

const CourseDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    course,
    durationTime,
    isLoading,
    isInContent,
    isLightTheme,
    handleChapterClick,
    courseChapters,
    courseChapter,
    setDurationTime,
    setIsInContent,
  } = useCourseDetails();

  useEffect(() => {
    if (!course._id) {
      dispatch(getACourseByID(params.id));
    }
    const duration = courseChapters?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.estimatedTimeToRead || 0;
    }, 0);
    const hours = Math.floor(duration / 60) || 0;
    const minutes = duration % 60 || 0;
    if (hours === 0) {
      if (minutes === 0) {
        setDurationTime(minutes + " minute");
      } else {
        setDurationTime(minutes + " minutes");
      }
    } else {
      setDurationTime(hours + " hours " + minutes + " minutes");
    }
  }, [course._id, params.id, courseChapters?.length]);

  useEffect(() => {
    navigate(`/course-details/${course._id}/index`);
  }, [course._id]);

  useEffect(() => {
    location.pathname === `/course-details/${courseChapter?._id}/content`
      ? setIsInContent(true)
      : setIsInContent(false);
  }, [location.pathname]);

  return (
    <>
      <Box className="projectBox">
        <Box className="courseHeader">
          <CommonHeaderForCourse
            course={course}
            durationTime={durationTime}
            title={course.name}
            description={course.description}
            isLoading={isLoading}
            isLightTheme={isLightTheme}
            customButton="Edit Course"
          />
        </Box>
        <Box className="courseContent">
          <Box sx={{ height: "100%", mt: { lg: 4, xl: 5, xxl: 0 } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              {!isInContent && (
                <Box
                  sx={{
                    backgroundColor: isLightTheme ? "#fff" : "#212121",
                    width: {
                      lg: "32%",
                      xl: "30%",
                      xxl: "24% ",
                    },
                  }}
                >
                  {/* <CourseDrawer handleChapterClick={handleChapterClick} /> */}
                  <CourseDrawerNew durationTime={durationTime} handleChapterClick={handleChapterClick} />
                </Box>
              )}
              <Box
                sx={{
                  width: {
                    lg: "67%",
                    xl: "69%",
                    xxl: "75% ",
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
