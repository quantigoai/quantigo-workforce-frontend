import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const CourseContentSkills = ({ course }) => {
  console.log('🚀 ~ CourseContentSkills ~ course:', course);
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Box>
      <Box>
        <Typography variant="wpf_h5_Bold" color={'neutral.995'}>
          Skills you&apos;ll gain
        </Typography>
        <Box sx={{ mt: '16px', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gridGap: '8px' }}>
          {course?.skills?.map((skill) => (
            <Chip
              sx={{
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                color: isLightTheme ? '#344054' : '#fff',
                backgroundColor: isLightTheme ? '#F1F5F9' : '#000C1F',
              }}
              key={skill.id}
              label={skill.name}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseContentSkills;
