import { TabContext, TabList } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react';
const tabStyle = {
  textTransform: 'none',
  color: '#667085',
  fontWeight: '600',
};
const CourseContentTab = ({ value, handleChange }) => {
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab sx={{ ...tabStyle, fontSize: { xxl: '14px', xl: '14px', lg: '12px' } }} label="About" value="1" />
          <Tab sx={{ ...tabStyle, fontSize: { xxl: '14px', xl: '14px', lg: '12px' } }} label="Courses" value="2" />
          <Tab sx={{ ...tabStyle, fontSize: { xxl: '14px', xl: '14px', lg: '12px' } }} label="Testimonial" value="3" />
        </TabList>
      </Box>
    </TabContext>
  );
};

export default CourseContentTab;
