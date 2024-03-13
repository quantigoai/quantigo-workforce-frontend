import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCourses } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseLevel from '../CourseLevel';
import NewPagination from './NewPagination';
import useCourse from './useCourse';

const MyCourse = () => {
  const {
    isDataLoading,
    setIsDataLoading,
    search,
    setSearch,
    // pagination,
    // setPagination,
    searchRef,
    filter,
    setFilter,
    isCourseLoading,
    setIsCourseLoading,
  } = useCourse();
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  console.log('🚀 ~ MyCourse ~ pagination:', pagination);
  const {
    isLoading: cLoading,
    myCourses: courses,
    courseMeta,
    total,
  } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
      // setAllCourses(action.payload.data);
      // setIsDataLoading(false);
    });
  }, [pagination]);
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
            // courses={courses}
          />
          <NewPagination
            pagination={pagination}
            setPagination={setPagination}
            totalCourse={total}
            courseMeta={courseMeta}
          />
          {/* <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            totalCourse={total}
            courseMeta={courseMeta}
            // setFilterValue={setFilterValue}
            // setFilteredCol={setFilteredCol}
          /> */}
        </Box>
      )}
    </>
  );
};

export default MyCourse;
