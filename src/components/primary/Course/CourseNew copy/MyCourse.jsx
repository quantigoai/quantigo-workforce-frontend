import { Box } from '@mui/material';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { getMyCourses } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseLevel from '../CourseLevel';

const MyCourse = () => {
  const [
    allCourses,
    setAllCourses,
    search,
    filter,
    isDataLoading,
    setIsDataLoading,
    role,
    pagination,
    setPagination,
  ] = useOutletContext();

  const {
    isLoading: cLoading,
    courses,
    courseMeta,
    total,
  } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
      setAllCourses(action.payload.data);
      setIsDataLoading(false);
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
            courses={allCourses.enrolledCourses}
            // courses={courses}
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
