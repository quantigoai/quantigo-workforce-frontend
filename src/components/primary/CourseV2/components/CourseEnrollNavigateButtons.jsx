import { Box, Button } from '@mui/material';
import React from 'react';

const CourseEnrollNavigateButtons = () => {
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
            // backgroundColor: pathname === '/courses/all-course' ? '#244EF5' : '#FFF',
            backgroundColor: '#FFF',
            //   color: pathname === '/courses/all-course' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          // onClick={() => (isLevel ? navigate('/courses/all-course') : navigate('all-course'))}
        >
          All Courses(0)
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            // backgroundColor: pathname === '/courses/my-course' ? '#244EF5' : '#FFF',
            backgroundColor: '#FFF',
            // color: pathname === '/courses/my-course' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          //   onClick={() => (isLevel ? navigate('/courses/my-course') : navigate('my-course'))}
        >
          {' '}
          My Courses(0)
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            // backgroundColor: pathname === '/courses/archive-course' ? '#244EF5' : '#FFF',
            backgroundColor: '#FFF',
            // color: pathname === '/courses/archive-course' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          //   onClick={() => (isLevel ? navigate('/courses/archive-course') : navigate('archive-course'))}
        >
          {' '}
          Archive Courses(0)
        </Button>
      </Box>
    </Box>
  );
};

export default CourseEnrollNavigateButtons;
