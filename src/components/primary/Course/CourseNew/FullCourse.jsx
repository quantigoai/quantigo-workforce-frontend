import React, { useEffect, useLayoutEffect } from 'react';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
import { getAllCourses } from '../../../../features/slice/courseSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CourseLevel from '../CourseLevel';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import { Box } from '@mui/material';

const FullCourse = () => {
  const {
    // courses,
    handleViewDetailsButton,
    isDataLoading,
    search,
    filter,
  } = useCourseManagement();
  const { level } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // useLayoutEffect(() => {
  //   dispatch(getAllCourses({ level, search, filter })).then((action) => {
  //     //   setAllCoursesFull(action.payload.data.courses);
  //     //   setCourseCountFull(action.payload.data.count);
  //     //   setIsDataLoading(false);
  //   });
  // }, []);
  const { isLoading: cLoading, total, courseMeta, courses } = useSelector((state) => state.course);

  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : (
        <Box sx={{ paddingLeft: '25px' }}>
          <CourseLevel
            isDataLoading={isDataLoading}
            // courses={courses || []}
            handleViewDetailsButton={handleViewDetailsButton}
            // courses={courses}
          />
        </Box>
      )}
    </>
  );
};

export default FullCourse;
