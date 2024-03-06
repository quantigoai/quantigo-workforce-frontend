import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCoursesNew, getArchivedCourses, getMyCourses } from '../../../../features/slice/courseSlice';

const CoursePageFilter = ({
  setAllCourses,
  setCourseCount,
  search,
  filter,
  setIsDataLoading,
  setFeatureCourses,
  isActiveAll,
  setIsActiveAll,
  isActiveEnrolled,
  setIsActiveEnrolled,
  isActiveArchived,
  setIsActiveArchived,
  courseCount,
  MyCourseCount,
  ArchiveCount,
  allCount,
}) => {
  const dispatch = useDispatch();

  const handleChangeAllCourse = () => {
    dispatch(getAllCoursesNew({ filter, search })).then((action) => {
      setCourseCount(action.payload.data.courses.count);
      setAllCourses(action.payload.data.courses);
      setFeatureCourses(action.payload.data.courses.featureCourseList);
      setIsDataLoading(false);
    });
    setIsActiveAll(true);
    setIsActiveEnrolled(false);
    setIsActiveArchived(false);
  };
  const handleChangeAMyCourse = () => {
    // navigate('/all-course/basic');
    setIsActiveEnrolled(false);
    dispatch(getMyCourses({ filter, search })).then((action) => {
      setCourseCount(action.payload.data.searchedTotal);
      setAllCourses(action.payload.data);
      setIsDataLoading(false);
    });
    setIsActiveEnrolled(true);
    setIsActiveAll(false);
    setIsActiveArchived(false);
  };
  const handleChangeArchieveCourse = () => {
    // setIsActiveEnrolled(false);
    dispatch(getArchivedCourses({ filter, search })).then((action) => {
      if (action.payload?.data) {
        setCourseCount(action.payload?.data?.total);
        setAllCourses(action.payload.data);
        setIsDataLoading(false);
      } else {
        setAllCourses([]);
      }
    });

    setIsActiveAll(false);
    setIsActiveEnrolled(false);
    setIsActiveArchived(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        // height: '36px',
      }}
    >
      <Button
        onClick={handleChangeAllCourse}
        sx={{
          height: '36px',

          textTransform: 'none',
          borderRadius: '8px',
          backgroundColor: isActiveAll ? '#244EF5' : '#FFF',
          color: isActiveAll ? '#fff' : '#667085',

          fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
          fontWeight: '500',
          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
      >
        All Courses({allCount})
      </Button>
      <Button
        onClick={handleChangeAMyCourse}
        sx={{
          height: '36px',
          textTransform: 'none',
          borderRadius: '8px',
          fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
          fontWeight: '500',
          backgroundColor: isActiveEnrolled ? '#244EF5' : '#FFF',
          color: isActiveEnrolled ? '#fff' : '#667085',

          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
      >
        My Courses({MyCourseCount})
      </Button>

      <Button
        onClick={handleChangeArchieveCourse}
        sx={{
          height: '36px',

          textTransform: 'none',
          borderRadius: '8px',
          fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
          fontWeight: '500',
          backgroundColor: isActiveArchived ? '#244EF5' : '#FFF',
          color: isActiveArchived ? '#fff' : '#667085',

          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
      >
        Archived Courses ({ArchiveCount})
      </Button>
    </Box>
  );
};

export default CoursePageFilter;
