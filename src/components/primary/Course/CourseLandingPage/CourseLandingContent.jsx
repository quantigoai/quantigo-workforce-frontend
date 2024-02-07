import { TabContext, TabList } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react';
import CourseLandingAbout from './CourseLandingAbout';

const CourseLandingContent = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Box sx={{ width: '60%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="About" value="1" />
              <Tab label="Courses" value="2" />
              <Tab label="Testimonial" value="3" />
            </TabList>
          </Box>
        </TabContext>
        <Box>
          <CourseLandingAbout />
        </Box>
      </Box>
      <Box sx={{ width: '20%' }}>
        {' '}
        <h4>certificate</h4>
      </Box>
    </Box>
  );
};

export default CourseLandingContent;
