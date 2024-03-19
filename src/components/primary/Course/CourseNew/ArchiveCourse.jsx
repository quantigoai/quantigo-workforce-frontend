import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArchivedCourses } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import PaginationTable from '../../ProjectLIstNew2/PaginationTable';
import CourseLevel from '../CourseLevel';
import useCourse from './useCourse';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';

const ArchiveCourse = () => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const { handleViewDetailsButton, isDataLoading, search, filter } = useCourseManagement();
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
  //     // setAllCourses(action.payload.data);
  //     // setIsDataLoading(false);
  //   });
  // }, [search]);

  const {
    isLoading: cLoading,
    myArchivedCourses: courses,
    total,
    courseMeta,
    archivedCourseMeta,
  } = useSelector((state) => state.course);

  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : courses.length === 0 ? (
        <Typography sx={{ pl: 5, fontSize: '18px', fontWeight: '700', textAlign: 'left' }}>No course found</Typography>
      ) : (
        <Box sx={{ paddingLeft: '25px' }}>
          <CourseLevel
            isDataLoading={isDataLoading}
            courses={courses}
            handleViewDetailsButton={handleViewDetailsButton}
          />
        </Box>
      )}
    </>
  );
};

export default ArchiveCourse;
