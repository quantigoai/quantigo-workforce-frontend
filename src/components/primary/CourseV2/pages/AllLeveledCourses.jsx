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
import { Box } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import { getAllCourses } from '../../../../features/slice/courseSlice';
import BasicCard from '../components/CourseCard/BasicCard';
import CourseCardSkeleton from '../shared/CourseSkeleton/CourseCardSkeleton';
import CourseIndexCardSkeleton from '../shared/CourseSkeleton/CourseIndexCardSkeleton';
import CourseHeader from '../shared/courseHeader/CourseHeader';
import '../shared/styles/index.css';
const AllLeveledCourses = () => {
  const dispatch = useDispatch();
  const [myContext] = useOutletContext();
  const { courseFilterDispatch } = myContext;
  const { triggerFilter, filter, search, setSearch } = courseFilterDispatch;
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  const { level } = useParams();
  const { isLightTheme } = useSelector((state) => state.theme);

  const fetchAllCoursesByLevel = () => {
    dispatch(getAllCourses({ level, search, filter })).finally(() => {
      setIsCourseLoading(false);
    });
  };

  useLayoutEffect(() => {
    if (isCourseLoading || search || search === '' || triggerFilter) {
      fetchAllCoursesByLevel();
      if (search === '') {
        setSearch(null);
      }
    }
  }, [isCourseLoading, search, filter, triggerFilter]);

  const { isLoading, courses } = useSelector((state) => state.course);
  return isCourseLoading ? (
    <>
      <CourseIndexCardSkeleton />
    </>
  ) : (
    <Box sx={{ height: '100%' }}>
      <CourseHeader level={level} />

      <Box
        className="courseContainer"
        sx={{
          height: '91%',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            // height: '91%',
            px: { xxl: '25px', xl: '14px', lg: '25px' },
            overflow: 'auto',
            display: 'grid',
            py: '15px',
            gridTemplateColumns: {
              xxl: 'repeat(4,1fr)',
              xl: 'repeat(4,1fr)',
              lg: 'repeat(3,1fr)',
            },
            gridGap: '8px',
            // mt: '16px',
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
              {isLoading ? <CourseCardSkeleton /> : <BasicCard isFeaturedShow={true} course={course} />}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AllLeveledCourses;
