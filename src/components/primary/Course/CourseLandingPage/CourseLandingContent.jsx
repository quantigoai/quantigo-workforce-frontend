import { TabContext, TabList } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useRef } from 'react';
import CourseLandingAbout from './CourseLandingAbout';
import CourseContentSkills from './CourseContentSkills';
import CourseChapterContent from './CourseChapterContent';
import CourseCertificate from './CourseCertificate';
import CourseTestimonial from './CourseTestimonial';
import CourseContentTab from './CourseContentTab';

const boxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '20px',
  position: 'relative',
};
const certificateStyle = {
  height: '40%',
  position: 'sticky',
  zIndex: '50',
  top: 0,
};
const CourseLandingContent = ({ course }) => {
  const [value, setValue] = React.useState();
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const testimonialRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === '1') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (newValue === '2') {
      coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (newValue === '3') {
      testimonialRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <Box sx={boxStyle}>
        <Box sx={{ width: { xxl: '70%', xl: '65%', lg: '70%' }, typography: 'body1' }}>
          <Box>
            <CourseContentTab handleChange={handleChange} value={value} />
          </Box>
          <Box ref={aboutRef} sx={{ mt: '20px' }}>
            <CourseLandingAbout />
          </Box>
          <Box sx={{ mt: '48px' }}>
            <CourseContentSkills course={course} />
          </Box>
          <Box ref={coursesRef} sx={{ mt: '48px' }}>
            <CourseChapterContent course={course} />
          </Box>
        </Box>
        <Box sx={{ ...certificateStyle, width: { xxl: '25%', xl: '30%', lg: '25%' } }}>
          <CourseCertificate />
        </Box>
      </Box>
      <Box ref={testimonialRef} sx={{ mt: '48px', padding: '24px' }}>
        <CourseTestimonial course={course} />
      </Box>
    </Box>
  );
};

export default CourseLandingContent;
