import { Box, Typography } from '@mui/material';
import React from 'react';
import { capitalizeFirstLetter } from '../../../../helper/capitalizeFirstWord';

const CourseHeaderTitle = ({ course }) => {
  return (
    <Box>
      <Typography variant="wpf_h3_Bold" color={'neutral.995'}>
        {' '}
        {course?.name?.length > 1 && course?.name?.length > 60
          ? course.name?.substring(0, 50) + '...'
          : capitalizeFirstLetter(course.name)}
      </Typography>
      <br />
      <Box sx={{ mt: '12px' }}>
        <Typography variant="wpf_p3_regular" color={'neutral.996'}>
          {course.description?.length > 100 ? course.description?.substring(0, 120) + '.....' : course.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseHeaderTitle;
