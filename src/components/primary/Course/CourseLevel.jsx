import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCourses } from '../../../features/slice/courseSlice';
import CustomCard from './CustomCard';
import useCourseManagement from './hooks/createCourseHook/useCourseMangement';

const CourseLevel = ({ title, courses, handleViewDetailsButton, seeMore, isActiveEnrolled, isActiveArchived }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    // courses,
    isDataLoading,
    search,
    filter,
  } = useCourseManagement();

  const handleSeeMore = () => {
    if (title === 'Basic Courses') {
      navigate(`/courses/all-course/basic`);
    } else if (title === 'Beginner Courses') {
      navigate('/courses/all-course/beginner');
    } else if (title === 'Intermediate Courses') {
      navigate('/courses/all-course/intermediate');
    } else {
      navigate('/courses/all-course/advanced');
    }
  };

  return (
    <Box sx={{ pr: '10px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: 2,
          mt: seeMore ? '40px' : '',
        }}
      >
        <Typography variant="wpf_h4_Bold" color={'neutral.995'}>
          {title}
        </Typography>
        {seeMore && (
          <Typography
            onClick={handleSeeMore}
            sx={{
              display: 'flex',
              cursor: 'pointer',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#266AED',
              mr: '25px',
            }}
            variant="wpf_p3_medium_3"
          >
            See more
            <ArrowForwardIosIcon sx={{ fontSize: '12px', ml: '5px', mt: '2px' }} />
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xxl: 'repeat(4,1fr)',
            xl: 'repeat(4,1fr)',
            lg: 'repeat(3,1fr)',
          },
          gridGap: '8px',
          mt: '16px',
          pr: '15px',
          // width: '100%',
          gap: { xxl: '20px', xl: '15px', lg: '12px' },
        }}
      >
        {courses?.map((course) => (
          <Box
            sx={{
              backgroundColor: isLightTheme ? '#fff' : '#000',
              width: { xxl: '368px', xl: '278px', lg: '250px' },
              borderRadius: '10px',
            }}
            key={course._id}
          >
            <CustomCard
              isActiveEnrolled={isActiveEnrolled}
              isActiveArchived={isActiveArchived}
              courseDirection={user.enrolledCourses.includes(course._id) ? 'MyCourse' : 'all'}
              handleViewDetailsButton={handleViewDetailsButton}
              course={course}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CourseLevel;
