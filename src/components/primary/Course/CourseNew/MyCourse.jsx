import { Box, Paper, Typography, styled } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
import { getMyCourses } from '../../../../features/slice/courseSlice';
import { useDispatch, useSelector } from 'react-redux';
import PaginationTable from '../../ProjectLIstNew2/PaginationTable';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import CourseLevel from '../CourseLevel';
import { useOutletContext } from 'react-router-dom';

const MyCourse = () => {
  //   search,
  //   pagination,
  //   setPagination,
  //   filter,
  //   isDataLoading,
  //   setIsDataLoading,
  //   role,
  //   isLightTheme,
  const [allCourses, setAllCourses, search, filter, isDataLoading, setIsDataLoading, role, pagination, setPagination] =
    useOutletContext();
  const dispatch = useDispatch();
  const CoursePaper = styled(Paper)({
    width: '100%',
    height: '90%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    border: '0px 0px 1px 0px',
    // backgroundColor: isLightTheme ? '#F2F6FC' : '#212121',
    boxShadow: '0px 1px 3px 0px #09008014',
  });
  useEffect(() => {
    console.log('hit');
    dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
      console.log('🚀 ~ dispatch ~ action:', action);
      setAllCourses(action.payload.data);
      setIsDataLoading(false);
    });
  }, [pagination, search]);

  const { isLoading: cLoading, courses, courseMeta, total } = useSelector((state) => state.course);

  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : (
        <Box sx={{ paddingLeft: '25px' }}>
          <CourseLevel isDataLoading={isDataLoading} courses={allCourses.enrolledCourses} />

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
