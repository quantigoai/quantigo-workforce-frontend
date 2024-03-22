/*
 * File           : AllCourses.jsx
 * Project        : wmpfrontv2
 * Created Date   : We 20 Mar 2024 11:43:00
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed Mar 20 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box } from '@mui/material';
import { default as React } from 'react';
import { useOutletContext } from 'react-router-dom';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import FeaturedCourseSection from '../components/FeaturedCourseSection';
import LevelBasedSection from '../components/LevelBasedSection';
import CourseHeader from '../shared/courseHeader/CourseHeader';

const AllCourses = () => {
  const [myContext] = useOutletContext();
  const { level, courseFilterDispatch, dataLoading } = myContext;

  return dataLoading ? (
    <>
      <LoadingComponent />
    </>
  ) : (
    <Box sx={{ px: '25px' }}>
      {/* TODO implement header here */}
      <CourseHeader />
      <FeaturedCourseSection />
      {level?.map((level) => (
        <LevelBasedSection title={level} key={level} />
      ))}
    </Box>
  );
};

export default AllCourses;
