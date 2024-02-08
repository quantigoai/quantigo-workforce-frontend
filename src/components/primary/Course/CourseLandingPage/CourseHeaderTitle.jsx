import { Box, Typography } from '@mui/material';
import React from 'react';

const CourseHeaderTitle = ({ course }) => {
  return (
    <Box>
      <Typography variant="wpf_h3_Bold" color={'neutral.995'}>
        {' '}
        {course.name}
      </Typography>
      <br />
      <Box sx={{ mt: '12px' }}>
        <Typography variant="wpf_p3_regular" color={'neutral.996'}>
          {course.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseHeaderTitle;
