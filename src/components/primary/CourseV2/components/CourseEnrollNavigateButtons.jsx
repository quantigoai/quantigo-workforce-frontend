import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CourseEnrollNavigateButtons = () => {
  const { pathname } = useParams();
  const navigate = useNavigate();
  return (
    <Box>
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
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: pathname === '/course-new/all-courses' ? '#244EF5' : '#FFF',
            // backgroundColor: '#FFF',
            color: pathname === '/course-new/all-courses' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          onClick={() => navigate('/course-new/all-courses')}
        >
          All Courses(0)
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: pathname === 'course-list/my-courses' ? '#244EF5' : '#FFF',
            // backgroundColor: '#FFF',
            color: pathname === '/course-new/my-courses' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          onClick={() => navigate('/course-new/course-list/my-courses')}
        >
          {' '}
          My Courses(0)
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: pathname === '/course-new/archive-course' ? '#244EF5' : '#FFF',
            // backgroundColor: '#FFF',
            color: pathname === '/course-new/archive-course' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          onClick={() => navigate('/course-new/course-list/archive-courses')}
        >
          {' '}
          Archive Courses(0)
        </Button>
      </Box>
    </Box>
  );
};

export default CourseEnrollNavigateButtons;
