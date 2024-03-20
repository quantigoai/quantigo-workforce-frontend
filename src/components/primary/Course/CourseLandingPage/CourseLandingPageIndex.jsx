import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { setActiveChapterIndex, setActiveCourseId } from "../../../../features/slice/activePathSlice";
import {
  getACourseByID,
  getAllChapterFromACourse,
  getCourseQuizzesResults,
} from '../../../../features/slice/courseSlice';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import CourseLandingContent from './CourseLandingContent';
import CourseLandingHeader from './CourseLandingHeader';

const CourseLandingPageIndex = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, course } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const [isCourseLoading, setIsCourseLoading] = useState(false);
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
          if (courseDirection === 'MyCourse') {
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

  const handleViewDetailsButton1 = (id, courseDirection) => {
    setIsCourseLoading(true);
    dispatch(getACourseByID(id))
      .then((res) => {
        dispatch(setActiveCourseId(id));
        dispatch(setActiveChapterIndex(0));
        dispatch(getAllChapterFromACourse(id)).then((res) => {
          dispatch(getCourseQuizzesResults(id)).then((results) => {
            // navigate(`/course-details/${id}/index`);
            if (courseDirection === 'MyCourse') {
              navigate(`/course-homepage/${id}`);
            } else {
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
          {' '}
          <LoadingComponent />{' '}
        </>
      ) : (
        <>
          <Box>
            <CourseLandingHeader course={course} />
          </Box>
          <Box sx={{ backgroundColor: isLightTheme ? '#fff' : '#000' }}>
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

export default CourseLandingPageIndex;
