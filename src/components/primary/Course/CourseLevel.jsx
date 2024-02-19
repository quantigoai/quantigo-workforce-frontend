import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomCard from './CustomCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CourseLevel = ({ title, courses, handleViewDetailsButton }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
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
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, mt: '40px' }}>
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
            mr: { xxl: '50px', xl: '0px', lg: '' },
          }}
          variant="wpf_p3_medium_3"
        >
          See more
          <ArrowForwardIosIcon sx={{ fontSize: '12px', ml: '5px', mt: '2px' }} />
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xxl: 'repeat(4,1fr)', xl: 'repeat(4,1fr)', lg: 'repeat(3,1fr)' },
          gridGap: '8px',
          mt: '16px',
          // width: '100%',
          gap: { xxl: '20px', xl: '15px', lg: '12px' },
        }}
      >
        {courses?.map((course) => (
          <Box
            sx={{
              backgroundColor: isLightTheme ? '#fff' : '#000',
              width: { xxl: '328px', xl: '278px', lg: '250px' },
              borderRadius: '10px',
            }}
            key={course._id}
          >
            <CustomCard courseDirection="all" handleViewDetailsButton={handleViewDetailsButton} course={course} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CourseLevel;
