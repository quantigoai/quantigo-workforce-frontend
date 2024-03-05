import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMyCourses } from '../../../../features/slice/courseSlice';

const CoursePageFilter = ({ setAllCourses, setCourseCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleChangeAllCourse = () => {
    navigate('/course');
  };
  const handleChangeAMyCourse = () => {
    // navigate('/all-course/basic');
    dispatch(getMyCourses()).then((action) => {
      console.log('🚀 ~ dispatch ~ action:', action.payload.data);
      setCourseCount(action.payload.data.total);
      setAllCourses(action.payload.data);
      // setFeatureCourses(action.payload.data.courses.featureCourseList);
      // setIsDataLoading(false);
    });
  };
  const handleChangeArchieveCourse = () => {
    navigate('/all-course/basic');
  };
  const isActive = (path) => location.pathname === path;
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
          backgroundColor: isActive('/course') ? '#244EF5' : '#FFF',
          color: isActive('/course') ? '#fff' : '#667085',

          fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
          fontWeight: '500',
          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
      >
        All Courses(32)
      </Button>
      <Button
        onClick={handleChangeAMyCourse}
        sx={{
          height: '36px',
          textTransform: 'none',
          borderRadius: '8px',
          fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
          fontWeight: '500',
          backgroundColor: isActive('/all-course/basic') ? '#244EF5' : '#FFF',
          color: isActive('/all-course/basic') ? '#fff' : '#667085',

          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
      >
        My Courses(32)
      </Button>

      <Button
        onClick={handleChangeArchieveCourse}
        sx={{
          height: '36px',

          textTransform: 'none',
          borderRadius: '8px',
          fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
          fontWeight: '500',
          backgroundColor: isActive('/all-course/intermediate') ? '#244EF5' : '#FFF',
          color: isActive('/all-course/intermediate') ? '#fff' : '#667085',

          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
      >
        Archived Courses (03)
      </Button>
    </Box>
  );
};

export default CoursePageFilter;
