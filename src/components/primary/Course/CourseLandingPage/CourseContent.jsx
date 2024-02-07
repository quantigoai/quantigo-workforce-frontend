import { Box, Typography } from '@mui/material';
import React from 'react';
import logo1 from '../../../../assets/images/courses/u_hourglass (1).png';
import logo2 from '../../../../assets/images/courses/u_lightbulb-alt.png';
import logo3 from '../../../../assets/images/courses/u_book-alt.png';

const CourseContent = ({ course }) => {
  console.log('🚀 ~ CourseContent ~ course:', course);
  return (
    <Box sx={{ display: 'flex', paddingY: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingRight: '20px' }}>
        <img src={logo1} alt="" />
        <Box sx={{ marginLeft: '18px' }}>
          <Typography color={'grey.600'} sx={{ fontSize: '10px', opacity: '0.6' }}>
            COURSE DURATION
          </Typography>
          <Typography variant="wpf_p3_medium_2" color={'grey.600'}>
            4 hr 32 minutes
          </Typography>
        </Box>
        <hr style={{ border: '1px solid #EAECF0', height: '28px', width: '1px', marginLeft: '20px' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingLeft: '20px' }}>
        <img src={logo2} alt="" />
        <Box sx={{ marginLeft: '18px' }}>
          <Typography sx={{ fontSize: '10px', opacity: '0.6' }} color={'grey.600'}>
            SKILLS
          </Typography>
          {course.skills.length ? (
            <Typography variant="wpf_p3_medium_2" color={'grey.600'}>
              {course.skills && course.skills?.length === 1
                ? `${course.skills?.[0]?.name}`
                : `${course.skills?.[0]?.name},+${course?.skills?.length - 1} more`}
            </Typography>
          ) : (
            <Typography variant="wpf_p3_medium_2" color={'grey.600'}>
              no skill found
            </Typography>
          )}
        </Box>
        <hr style={{ border: '1px solid #EAECF0', height: '28px', width: '1px', marginLeft: '20px' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingLeft: '20px' }}>
        <img src={logo3} alt="" />
        <Box sx={{ marginLeft: '18px' }}>
          <Typography color={'grey.600'} sx={{ fontSize: '10px', opacity: '0.6' }}>
            PREREQUISITES
          </Typography>
          <Typography variant="wpf_p3_medium_2" color={'grey.600'}>
            colors, Typography ,+2 more
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseContent;
