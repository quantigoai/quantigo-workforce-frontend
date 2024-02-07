import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getACourseByID } from '../../../../features/slice/courseSlice';
import CourseLandingHeader from './CourseLandingHeader';
import CourseLandingContent from './CourseLandingContent';
import CourseChapterContent from './CourseChapterContent';

const CourseLandingPageIndex = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (!course._id) {
      dispatch(getACourseByID(params.id));
    }
  });
  return (
    <div>
      <Box>
        <CourseLandingHeader course={course} />
      </Box>
      <Box sx={{ backgroundColor: isLightTheme ? '#fff' : '#000' }}>
        <CourseLandingContent course={course} />
      </Box>
    </div>
  );
};

export default CourseLandingPageIndex;
