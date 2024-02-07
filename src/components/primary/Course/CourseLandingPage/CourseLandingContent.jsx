import { TabContext, TabList } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';
import React from 'react';
import CourseLandingAbout from './CourseLandingAbout';
import certificate from '../../../../assets/images/courses/image 36.png';
import medal from '../../../../assets/images/courses/medal.png';
import { useSelector } from 'react-redux';
import CourseContentSkills from './CourseContentSkills';
const tabStyle = {
  textTransform: 'none',
  color: '#667085',
  fontWeight: '600',
};
const CourseLandingContent = ({ course }) => {
  const [value, setValue] = React.useState('1');
  const { isLightTheme } = useSelector((state) => state.theme);
  const imgBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isLightTheme ? '#F8FAFC' : '#101828',

    paddingX: '24px',
    borderRadius: '8px',
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '20px' }}>
      <Box sx={{ width: { xxl: '70%', xl: '65%', lg: '70%' }, typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{ ...tabStyle, fontSize: { xxl: '14px', xl: '14px', lg: '12px' } }} label="About" value="1" />
              <Tab sx={{ ...tabStyle, fontSize: { xxl: '14px', xl: '14px', lg: '12px' } }} label="Courses" value="2" />
              <Tab
                sx={{ ...tabStyle, fontSize: { xxl: '14px', xl: '14px', lg: '12px' } }}
                label="Testimonial"
                value="3"
              />
            </TabList>
          </Box>
        </TabContext>
        <Box sx={{ mt: '20px' }}>
          <CourseLandingAbout />
        </Box>
        <Box sx={{ mt: '48px' }}>
          <CourseContentSkills course={course} />
        </Box>
      </Box>
      <Box
        sx={{
          ...imgBoxStyle,
          width: { xxl: '25%', xl: '30%', lg: '25%' },
        }}
      >
        {' '}
        <img src={medal} alt="" />
        <img src={certificate} alt="" />
        <Box sx={{ textAlign: 'center', paddingBottom: '48px', mt: '32px' }}>
          <Typography variant="wpf_h5_Bold" color={'neutral.995'}>
            Earn a career certificate
          </Typography>
          <br />
          <Typography color="neutral.996" variant="wpf_p3_regular">
            Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in your
            performance review
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseLandingContent;
