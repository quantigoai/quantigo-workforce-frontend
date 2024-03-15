/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/BasicCourses.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, March 15th 2024, 11:30:54 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCourses } from '../../../features/slice/courseSlice';
import CustomCard from './CustomCard';
import useCourseManagement from './hooks/createCourseHook/useCourseMangement';
const BasicCourses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoading: cLoading, courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { level } = useParams();

  const { isLightTheme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const {
    // courses,
    handleViewDetailsButton,
    isDataLoading,
    search,
    filter,
  } = useCourseManagement();

  useEffect(() => {
    dispatch(getAllCourses({ level })).then((action) => {
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <>Loading........</>
  ) : (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xxl: 'repeat(4,1fr)',
          xl: 'repeat(4,1fr)',
          lg: 'repeat(3,1fr)',
        },
        gridGap: '8px',
        mt: '16px',
        pr: '15px',
        gap: { xxl: '20px', xl: '15px', lg: '12px' },
      }}
    >
      {courses?.map((course) => (
        <Box
          sx={{
            backgroundColor: isLightTheme ? '#fff' : '#000',
            width: { xxl: '368px', xl: '278px', lg: '250px' },
            borderRadius: '10px',
          }}
          key={course._id}
        >
          <CustomCard
            //   isActiveEnrolled={isActiveEnrolled}
            //   isActiveArchived={isActiveArchived}
            courseDirection={
              user.enrolledCourses.includes(course._id) ? 'MyCourse' : 'all'
            }
            handleViewDetailsButton={handleViewDetailsButton}
            course={course}
          />
        </Box>
      ))}
    </Box>
  );
};

export default BasicCourses;
