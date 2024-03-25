import { Box, Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const CourseEnrollNavigateButtons = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { coursesCount } = useSelector((state) => state.course);
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
          All Courses ({coursesCount?.allCourseCount})
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: pathname === '/course-new/course-list/my-courses' ? '#244EF5' : '#FFF',
            // backgroundColor: '#FFF',
            color: pathname === '/course-new/course-list/my-courses' ? '#fff' : '#667085',

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
          My Courses ({coursesCount?.myCourseCount})
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: pathname === '/course-new/course-list/archive-courses' ? '#244EF5' : '#FFF',
            // backgroundColor: '#FFF',
            color: pathname === '/course-new/course-list/archive-courses' ? '#fff' : '#667085',

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
          Archive Courses ({coursesCount?.myArchivedCourseCount})
        </Button>
      </Box>
    </Box>
  );
};

export default CourseEnrollNavigateButtons;
