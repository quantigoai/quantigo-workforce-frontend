import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import LanguageChip from '../LanguageChip';
import CategoryChip from '../CategoryChip';
import LevelChip from '../CourseCardActionLebel/LevelChip';
import CourseContent from './CourseContent';

const CourseLandingHeader = ({ course }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', width: '100%' }}>
      <Box sx={{ width: { xxl: '70%', xl: '70%', lg: '80%' } }}>
        <Box sx={{ width: { xxl: '60%', xl: '70%', lg: '80%' } }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ paddingRight: '6px' }}>
              <LanguageChip language={course.language} />
            </Box>
            <Box sx={{ paddingRight: '6px' }}>
              <CategoryChip category={course.category} />
            </Box>
            <Box sx={{ padding: '0%' }}>
              <LevelChip level={course.level} />
            </Box>
          </Box>
          <Box sx={{ paddingY: '12px' }}>
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
        </Box>
        <Box sx={{ borderTop: '1px solid #EAECF0', borderBottom: '1px solid #EAECF0', marginTop: '20px' }}>
          <CourseContent course={course} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <Button
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              backgroundColor: '#2E58FF',
              padding: '10px 24px',
              color: '#fff',
              '&:hover': { backgroundColor: '#244EF5' },
            }}
          >
            Enroll Now
          </Button>
          <Typography variant="wpf_p3_regular" color={'grey.550'} sx={{ marginLeft: '20px' }}>
            <span style={{ color: '#344054', fontWeight: '600' }}>102</span> already enrolled
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '24%' }}>
        <img style={{ borderRadius: '8px', width: '100%' }} src={course.images} alt="" />
      </Box>
    </Box>
  );
};

export default CourseLandingHeader;
