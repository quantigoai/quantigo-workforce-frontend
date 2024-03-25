/*
 * File           : CourseInfoIndex.jsx
 * Project        : wmpfrontv2
 * Created Date   : Mo 25 Mar 2024 12:51:51
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Mon Mar 25 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import categoryIcon from '../../../../../assets/images/courses/CourseCategoryIcon.svg';
import courseDuration from '../../../../../assets/images/courses/CourseDurationIcon.svg';
import levelIcon from '../../../../../assets/images/courses/CourseLevelIcon.svg';

import { useSelector } from 'react-redux';
import CoursePreIcon from '../../../../../assets/images/courses/CoursePre.svg';
import courseSkillIcon from '../../../../../assets/images/courses/SkillIcon.svg';
import { capitalizeFirstLetter } from '../../../../../helper/capitalizeFirstWord';
import MoreComponents from './MoreComponents';

const CourseInfoIndex = () => {
  const [durationTime, setDurationTime] = useState(0);
  const { isLightTheme } = useSelector((state) => state.theme);
  const { course, courseChapters } = useSelector((state) => state.course);

  useEffect(() => {
    const duration = courseChapters?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.estimatedTimeToRead || 0;
    }, 0);
    const hours = Math.floor(duration / 60) || 0;
    const minutes = duration % 60 || 0;
    if (hours === 0) {
      if (minutes === 0) {
        setDurationTime(minutes + ' minute');
      } else {
        setDurationTime(minutes + ' minutes');
      }
    } else {
      setDurationTime(hours + ' hours ' + minutes + ' minutes');
    }
  }, [course._id, courseChapters?.length]);

  const courseInfoItems = [
    {
      image: levelIcon,
      labelName: 'Level',
      value: course.level,
    },
    {
      image: categoryIcon,
      labelName: 'Category',
      value: course.category,
    },
    {
      image: courseDuration,
      labelName: 'Course Duration',
      value: durationTime,
    },
    {
      image: courseSkillIcon,
      labelName: 'Skills',
      value: 'courseSkillIcon',
    },
    {
      image: CoursePreIcon,
      labelName: 'pre-requisite',
      value: 'courseSkillIcon',
    },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: isLightTheme ? '#F8FAFC' : '', border: '2px solid #E2E8F0', borderRadius: '8px' }}>
        {courseInfoItems.map((item, index) => (
          <Box
            key={{ index }}
            sx={{
              justifyContent: 'center',
              display: 'flex',
              borderTop: index === 0 ? '' : '1px solid #E2E8F0',
              paddingTop: '3%',
              paddingBottom: '3%',
            }}
          >
            <Grid container>
              <Grid
                item
                xs={3}
                sm={3}
                md={3}
                xl={3}
                sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
              >
                <img src={item.image} alt='' />
              </Grid>
              <Grid item xs={9} sm={9} md={9} xl={9}>
                <Typography
                  color={'grey.600'}
                  variant='wpf_p5_medium'
                  sx={{ opacity: '0.6', textTransform: 'uppercase' }}
                >
                  {item.labelName}
                </Typography>
                <br />
                {item.labelName === 'Skills' ? (
                  <>
                    <MoreComponents moreArray={course.skills} />
                  </>
                ) : item.labelName === 'pre-requisite' ? (
                  <>
                    <MoreComponents moreArray={course.prerequisiteCourses} />
                  </>
                ) : (
                  <Typography variant='wpf_p3_medium_2' color={'grey.600'}>
                    {item.labelName === 'Course Duration' ? item?.value : capitalizeFirstLetter(item?.value)}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CourseInfoIndex;
