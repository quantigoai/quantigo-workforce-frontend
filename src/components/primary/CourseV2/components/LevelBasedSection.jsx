/*
 * File           : LevelBasedSection.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 12:29:14
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

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../helper/capitalizeFirstWord';
import BasicCard from './CourseCard/BasicCard';
import CourseIndexCardSkeleton from '../shared/CourseSkeleton/CourseIndexCardSkeleton';
import CourseIndexPageSkeleton from '../shared/CourseSkeleton/CourseIndexPageSkeleton';

const LevelBasedSection = ({ title }) => {
  const {
    isLoading,
    initialCourses: { coursesByLevelList },
  } = useSelector((state) => state.course);

  const { isLightTheme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/course-new/course-level/${title}`);
  };

  return isLoading ? (
    // TODO Update loader here
    <> {/* <CourseIndexPageSkeleton />{' '} */}</>
  ) : (
    <Box sx={{ pr: '10px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: 2,
          mt: '40px',
        }}
      >
        <Typography variant="wpf_h4_Bold" color={'neutral.995'}>
          {capitalizeFirstLetter(title)} Courses
        </Typography>

        <Typography
          onClick={handleSeeMore}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#266AED',
            // mr: '15px',
          }}
          variant="wpf_p3_medium_3"
        >
          See more
          <ArrowForwardIosIcon sx={{ fontSize: '12px', ml: '5px', mt: '2px' }} />
        </Typography>
      </Box>

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
        {coursesByLevelList?.[title]?.map((course) => (
          <Box
            sx={{
              backgroundColor: isLightTheme ? '#fff' : '#000',
              width: { xxl: '368px', xl: '278px', lg: '250px' },
              borderRadius: '10px',
            }}
            key={course.createdAt}
          >
            <BasicCard course={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LevelBasedSection;
