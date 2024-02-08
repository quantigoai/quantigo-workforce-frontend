import { Box, Typography } from '@mui/material';
import React from 'react';
import ReviewSwipper from './ReviewSwipper';

const CourseTestimonial = () => {
  return (
    <Box>
      <Box>
        <Typography variant="wpf_h5_Bold" color={'grey.600'}>
          Why people choose Quantigo.AI for their career
        </Typography>
      </Box>
      <Box sx={{ mt: '20px' }}>
        <ReviewSwipper />
      </Box>
    </Box>
  );
};

export default CourseTestimonial;
