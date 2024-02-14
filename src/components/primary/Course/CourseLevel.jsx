import { Box, Typography } from '@mui/material';
import React from 'react';

const CourseLevel = ({ title }) => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="wpf_h4_Bold">{title}</Typography>
          <Typography variant="wpf_p3_medium_3">See more </Typography>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default CourseLevel;
