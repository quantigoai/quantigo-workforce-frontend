import { Box, Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CoursePageFilter = ({ MyCourseCount, ArchiveCount, allCourseCount, isLevel }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
            backgroundColor: pathname === '/courses2/allCourse' ? '#244EF5' : '#FFF',
            color: pathname === '/courses2/allCourse' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          onClick={() => (isLevel ? navigate('/courses2/allCourse') : navigate('allCourse'))}
        >
          All Courses({allCourseCount})
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: pathname === '/courses2/myCourse' ? '#244EF5' : '#FFF',
            color: pathname === '/courses2/myCourse' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          onClick={() => (isLevel ? navigate('/courses2/myCourse') : navigate('myCourse'))}
        >
          {' '}
          My Courses({MyCourseCount})
        </Button>
        <Button
          sx={{
            height: '36px',

            textTransform: 'none',
            borderRadius: '8px',
            backgroundColor: pathname === '/courses2/archiveCourse' ? '#244EF5' : '#FFF',
            color: pathname === '/courses2/archiveCourse' ? '#fff' : '#667085',

            fontSize: { xl: '12px', xxl: '14px', lg: '8px' },
            fontWeight: '500',
            '&:hover': {
              background: '#244EF5',
              color: '#fff',
            },
          }}
          onClick={() => (isLevel ? navigate('/courses2/archiveCourse') : navigate('archiveCourse'))}
        >
          {' '}
          Archive Courses({ArchiveCount})
        </Button>
      </Box>
      {/* <Box
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
          My Courses({MyCourseCount})
        </Button>
      </Box> */}
    </Box>
  );
};

export default CoursePageFilter;
