import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  getACourseByID,
  getAllChapterFromACourse,
  getCourseQuizzesResults,
} from "../../../../features/slice/courseSlice";
import CourseLandingHeader from "./CourseLandingHeader";
import CourseLandingContent from "./CourseLandingContent";
import CourseChapterContent from "./CourseChapterContent";
import CourseRelated from "./CourseRelated";
import useCourseManagement from "../hooks/createCourseHook/useCourseMangement";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import { setActiveChapterIndex, setActiveCourseId } from "../../../../features/slice/activePathSlice";

const CourseLandingPageIndex = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, course } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const [isCourseLoading, setIsCourseLoading] = useState(false);
  // const { handleViewDetailsButton, isCourseLoading } = useCourseManagement();

  const handleViewDetailsButton1 = (id, courseDirection) => {
    console.log("123");

    setIsCourseLoading(true);
    dispatch(getACourseByID(id))
      .then((res) => {
        dispatch(setActiveCourseId(id));
        dispatch(setActiveChapterIndex(0));
        dispatch(getAllChapterFromACourse(id)).then((res) => {
          dispatch(getCourseQuizzesResults(id)).then((results) => {
            // navigate(`/course-details/${id}/index`);
            if (courseDirection === "MyCourse") {
              navigate(`/course-homepage/${id}`);
              // setIsCourseLoading(false);
            } else {
              // setIsCourseLoading(false);
              navigate(`/course-landing/${id}`);
            }
          });
        });
      })
      .catch(() => {
        setIsCourseLoading(false);
      });
  };

  // useEffect(() => {
  //   if (!course._id) {
  //     dispatch(getACourseByID(params.id));
  //   }
  // }, []);
  return (
    <Box>
      {isCourseLoading ? (
        <>
          {" "}
          <LoadingComponent />{" "}
        </>
      ) : (
        <>
          <Box>
            <CourseLandingHeader course={course} />
          </Box>
          <Box sx={{ backgroundColor: isLightTheme ? "#fff" : "#000" }}>
            <CourseLandingContent course={course} handleViewDetailsButton={handleViewDetailsButton1} />
          </Box>
        </>
      )}

      {/* <Box sx={{ backgroundColor: isLightTheme ? '#fff' : '#000' }}>
        <CourseRelated />
      </Box> */}
    </Box>
  );
};

export default CourseLandingPageIndex;
