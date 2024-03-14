import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCourses } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseLevel from '../CourseLevel';
import NewPagination from './NewPagination';
import useCourse from './useCourse';
import PaginationTable from '../../ProjectLIstNew2/PaginationTable';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';

const MyCourse = () => {
  const { handleViewDetailsButton, isDataLoading, search, filter } = useCourseManagement();
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  const { isLoading: cLoading, myCourses: courses, courseMeta, total } = useSelector((state) => state.course);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMyCourses({ filter, search })).then((action) => {
  //     // setAllCourses(action.payload.data);
  //     // setIsDataLoading(false);
  //   });
  // }, [search]);

  const handleNewCourses = () => {
    const seePagination = { currentPage: 1, pageSize: courseMeta.limit + 10 };

    dispatch(getMyCourses({ filter, search, pagination: seePagination })).then((action) => {
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
        <Box sx={{ paddingLeft: '25px' }}>
          <CourseLevel
            isDataLoading={isDataLoading}
            courses={courses}
            handleViewDetailsButton={handleViewDetailsButton}
            // courses={courses}
          />
          {/* {total > 10 && courseMeta.currentPage !== courseMeta.pageNumber && (
            <Button onClick={handleNewCourses}> see more</Button>
          )} */}
          {/* <NewPagination
            pagination={pagination}
            setPagination={setPagination}
            totalCourse={total}
            courseMeta={courseMeta}
          /> */}
          {/* <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            // totalCourse={total}
            // courseMeta={courseMeta}
            // setFilterValue={setFilterValue}
            // setFilteredCol={setFilteredCol}
          /> */}
        </Box>
      )}
    </>
  );
};

export default MyCourse;
