import { Box, Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CoursePageFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleChangeAllCourse = () => {
    navigate('/course');
  };
  const handleChangeAMyCourse = () => {
    navigate('/all-course/basic');
  };
  const handleChangeArchieveCourse = () => {
    navigate('/all-course/basic');
  };
  const isActive = (path) => location.pathname === path;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <Button
        onClick={handleChangeAllCourse}
        sx={{
          textTransform: 'none',
          borderRadius: '8px',

          backgroundColor: isActive('/course') ? '#244EF5' : '#FFF',
          color: isActive('/course') ? '#fff' : '#667085',

          fontSize: '14px',
          fontWeight: '500',
          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
        variant="contained"
      >
        All Courses (32)
      </Button>
      <Button
        onClick={handleChangeAMyCourse}
        sx={{
          textTransform: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          backgroundColor: isActive('/all-course/basic') ? '#244EF5' : '#FFF',
          color: isActive('/all-course/basic') ? '#fff' : '#667085',

          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
        variant="contained"
      >
        My Courses (32)
      </Button>
      <Button
        onClick={handleChangeArchieveCourse}
        sx={{
          textTransform: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          backgroundColor: isActive('/all-course/intermediate') ? '#244EF5' : '#FFF',
          color: isActive('/all-course/intermediate') ? '#fff' : '#667085',

          '&:hover': {
            background: '#244EF5',
            color: '#fff',
          },
        }}
        variant="contained"
      >
        Archived Courses (03)
      </Button>
    </Box>
  );
};

export default CoursePageFilter;
