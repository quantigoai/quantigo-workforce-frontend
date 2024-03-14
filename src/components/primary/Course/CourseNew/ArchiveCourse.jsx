import { Box, Button } from '@mui/material';
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
  const handleNewCourses = () => {
    const seePagination = { currentPage: 1, pageSize: courseMeta.limit + 10 };

    dispatch(getArchivedCourses({ filter, search, pagination: seePagination })).then((action) => {
      // setAllCourses(action.payload.data);
      // setIsDataLoading(false);
    });
  };
  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : (
        <Box>
          <CourseLevel
            isDataLoading={isDataLoading}
            courses={courses}
            handleViewDetailsButton={handleViewDetailsButton}
          />
          {total > 10 && archivedCourseMeta.currentPage !== archivedCourseMeta.pageNumber && (
            <Button onClick={handleNewCourses}> see more</Button>
          )}
          {/* <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            totalCourse={total}
            courseMeta={archivedCourseMeta}
            // setFilterValue={setFilterValue}
            // setFilteredCol={setFilteredCol}
          /> */}
        </Box>
      )}
    </>
  );
};

export default ArchiveCourse;
