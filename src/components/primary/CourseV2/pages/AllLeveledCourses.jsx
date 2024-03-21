/*
 * File           : AllLeveledCourses.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 11:06:47
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Thu Mar 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCourses } from '../../../../features/slice/courseSlice';
import { Box } from '@mui/material';
import BasicCard from '../components/CourseCard/BasicCard';
import CourseHeader from '../shared/courseHeader/CourseHeader';

const AllLeveledCourses = () => {
  const dispatch = useDispatch();
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  const { level } = useParams();
  const { isLightTheme } = useSelector((state) => state.theme);
  useEffect(() => {
    dispatch(getAllCourses({ level })).then((res) => {
      setIsCourseLoading(false);
    });
  }, [isCourseLoading]);
  const { courses } = useSelector((state) => state.course);

  return isCourseLoading ? (
    <div>loading...</div>
  ) : (
    <>
      <CourseHeader />
      <Box
        sx={{
          display: 'grid',
          p: '25px',
          gridTemplateColumns: {
            xxl: 'repeat(4,1fr)',
            xl: 'repeat(4,1fr)',
            lg: 'repeat(3,1fr)',
          },
          gridGap: '8px',
          mt: '16px',
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
            <BasicCard isFeaturedShow={true} course={course} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AllLeveledCourses;
