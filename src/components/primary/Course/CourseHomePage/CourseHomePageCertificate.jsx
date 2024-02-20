import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import certificate from '../../../../assets/images/courses/Group 423.svg';
import certificate1 from '../../../../assets/images/courses/image 37.png';

const CourseHomePageCertificate = () => {
  return (
    <>
      <Box sx={{ width: { xxl: '100%', xl: '90%', lg: '75%' } }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid item xs={1}>
            <img src={certificate1} />
          </Grid>
          <Grid item xs={8} sx={{ paddingX: '%', paddingRight: '2%' }}>
            <Typography variant="wpf_h3_Bold" color={'neutral.995'}>
              Earn a career certificate
            </Typography>
            <br />
            <Box style={{ paddingTop: '2%' }}>
              <Typography color="neutral.996" variant="wpf_h6_regular">
                Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in your
                performance review
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: 'flex', alignItems: 'center', paddingX: '24px', paddingY: '24px', borderRadius: '8px' }}
          >
            <img src={certificate} alt="" style={{ width: { xxl: '350px', xl: '200px', lg: '350px' } }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseHomePageCertificate;
