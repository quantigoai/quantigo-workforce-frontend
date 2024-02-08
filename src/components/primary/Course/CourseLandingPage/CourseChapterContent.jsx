import { Box, Typography } from '@mui/material';

import React from 'react';
import { useSelector } from 'react-redux';
import CourseChapterAccordion from './CourseChapterAccordion';

const CourseChapterContent = ({ course }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const arr = [0, 1, 2, 3, 4, 5];
  return (
    <Box>
      <Box>
        <Typography variant={'wpf_h5_Bold'} color="neutral.995">
          Professional Certificate - 6 course series
        </Typography>
        <br />
        <Box sx={{ mt: '8px' }}>
          <Typography variant="wpf_p3_regular" color={'grey.500'}>
            Prepare for a new career in the high-growth field of project management, no experience or degree required.
            Get professional training designed by Google and get on the fastrack to a competitively paid job.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ border: '1px solid #E2E8F0', borderRadius: '10px', mt: '20px' }}>
        <CourseChapterAccordion arr={arr} isLightTheme={isLightTheme} course={course} />
      </Box>
    </Box>
  );
};

export default CourseChapterContent;
