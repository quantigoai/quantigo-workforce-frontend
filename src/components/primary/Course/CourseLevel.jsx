import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomCard from './CustomCard';

const CourseLevel = ({ title, courses, handleViewDetailsButton }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSeeMore = () => {
    if (title === 'Basic Courses') {
      navigate(`/all-course/basic`);
    } else if (title === 'Beginner Courses') {
      navigate('/all-course/beginner');
    } else if (title === 'Intermediate Courses') {
      navigate('/all-course/intermediate');
    } else {
      navigate('/all-course/advanced');
    }
  };
  return (
    <Box sx={{ pr: '10px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: 2,
          mt: '40px',
        }}
      >
        <Typography variant="wpf_h4_Bold" color={'neutral.995'}>
          {title}
        </Typography>
        <Typography
          onClick={handleSeeMore}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#266AED',
            // mr: { xxl: '20px', xl: '0px', lg: '' },
          }}
          variant="wpf_p3_medium_3"
        >
          See more
          <ArrowForwardIosIcon
            sx={{ fontSize: '12px', ml: '5px', mt: '2px' }}
          />
        </Typography>
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
          // width: '100%',
          gap: { xxl: '0px', xl: '10px', lg: '10px' },
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
              courseDirection={
                user.enrolledCourses.includes(course._id) ? 'MyCourse' : 'all'
              }
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
