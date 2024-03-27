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
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import FeaturedCourseSection from '../components/FeaturedCourseSection';
import LevelBasedSection from '../components/LevelBasedSection';
import CourseIndexPageSkeleton from '../shared/CourseSkeleton/CourseIndexPageSkeleton';
import CourseHeader from '../shared/courseHeader/CourseHeader';

const AllCourses = () => {
  const [myContext] = useOutletContext();
  const { level, courseFilterDispatch, dataLoading } = myContext;
  const { isLightTheme } = useSelector((state) => state.theme);

  return dataLoading ? (
    <>
      <CourseIndexPageSkeleton />
    </>
  ) : (
    <Box sx={{ px: { xxl: '25px', xl: '14px', lg: '25px' }, height: ' 100%' }}>
      {/* TODO implement header here */}

      <CourseHeader />

      <Box sx={{ height: '91%', overflow: 'auto' }}>
        <Box>
          <FeaturedCourseSection />
        </Box>

        {level?.map((level) => (
          <LevelBasedSection title={level} key={level} />
        ))}
      </Box>
    </Box>
  );
};

export default AllCourses;
