import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomCard from './CustomCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CourseLevel = ({ title, courses, handleViewDetailsButton }) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
        <Typography variant="wpf_h4_Bold">{title}</Typography>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#266AED' }}
          variant="wpf_p3_medium_3"
        >
          See more
          <ArrowForwardIosIcon sx={{ fontSize: '14px', ml: '5px' }} />
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          spacing={1}
          sx={{
            height: '100%',
            width: '100%',
            // marginX: '20px',
            // gap: { xxl: '0px', xl: '10px', lg: '0px' },
          }}
        >
          {courses?.map((course) => (
            <Grid key={course._id} item xs={12} xxl={3} xl={2.8} lg={4} sx={{ height: '50%' }}>
              <CustomCard courseDirection="all" handleViewDetailsButton={handleViewDetailsButton} course={course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CourseLevel;
