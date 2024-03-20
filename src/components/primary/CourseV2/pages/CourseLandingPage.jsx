/*
 * File           : CourseLandingPage.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 02:16:05
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Thu Mar 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setActiveChapterIndex, setActiveCourseId } from "../../../../features/slice/activePathSlice";
import { getACourseByID, getAllChapterFromACourse } from "../../../../features/slice/courseSlice";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import CourseLandingContent from "../../Course/CourseLandingPage/CourseLandingContent";
import CourseLandingHeader from "../../Course/CourseLandingPage/CourseLandingHeader";

// import { setActiveChapterIndex, setActiveCourseId } from "../../../../features/slice/activePathSlice";
// import {
//   getACourseByID,
//   getAllChapterFromACourse,
//   getCourseQuizzesResults,
// } from "../../../../features/slice/courseSlice";
// import LoadingComponent from "../../../shared/Loading/LoadingComponent";
// import CourseLandingContent from "./CourseLandingContent";
// import CourseLandingHeader from "./CourseLandingHeader";

const CourseLandingPage = () => {
  const params = useParams();
  const { courseId: id } = params;
  console.log("🚀 ~ CourseLandingPage ~ params:", params);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, course } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  // const { handleViewDetailsButton, isCourseLoading } = useCourseManagement();
  console.log("🚀 ~ CourseLandingPageIndex ~ isLoading:", isLoading);

  const handleViewDetailsButton = async (id, courseDirection) => {
    setIsCourseLoading(true);
    // if (courseDirection === 'MyCourse') {
    //   navigate(`/course-homepage/${id}`);
    //   setIsCourseLoading(false);
    // } else {
    //   navigate(`/course-landing/${id}`);
    //   setIsCourseLoading(false);
    // }
    dispatch(getACourseByID(id))
      .then((res) => {
        dispatch(setActiveCourseId(id));
        dispatch(setActiveChapterIndex(0));
        dispatch(getAllChapterFromACourse(id)).then((res) => {
          if (courseDirection === "MyCourse") {
            navigate(`/course-homepage/${id}`);
            setIsCourseLoading(false);
          } else {
            navigate(`/course-landing/${id}`);
            setIsCourseLoading(false);
          }
        });
      })
      .catch(() => {
        setIsCourseLoading(false);
      });
  };

  useEffect(() => {
    dispatch(getACourseByID(id))
      .then((res) => {
        dispatch(setActiveCourseId(id));
        dispatch(setActiveChapterIndex(0));
        dispatch(getAllChapterFromACourse(id)).then((res) => {
          // if (courseDirection === "MyCourse") {
          //   navigate(`/course-homepage/${id}`);
          //   setIsCourseLoading(false);
          // } else {
          //   navigate(`/course-landing/${id}`);
          //   setIsCourseLoading(false);
          // }
        });
      })
      .catch(() => {
        setIsCourseLoading(false);
      })
      .finally(() => {
        setIsCourseLoading(false);
      });
  }, [id]);

  return (
    <Box>
      {isCourseLoading ? (
        <>
          <LoadingComponent />{" "}
        </>
      ) : (
        <>
          <Box>
            <CourseLandingHeader course={course} />
          </Box>
          <Box sx={{ backgroundColor: isLightTheme ? "#fff" : "#000" }}>
            <CourseLandingContent course={course} handleViewDetailsButton={handleViewDetailsButton} />
          </Box>
        </>
      )}

      {/* <Box sx={{ backgroundColor: isLightTheme ? '#fff' : '#000' }}>
        <CourseRelated />
      </Box> */}
    </Box>
  );
};

export default CourseLandingPage;
