/*
 * File           : RelatedCourseIndex.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 01:34:49
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRelatedCourses } from '../../../../../features/slice/courseSlice';
import CourseCardSkeleton from '../../shared/CourseSkeleton/CourseCardSkeleton';
import BasicCard from '../CourseCard/BasicCard';

const RelatedCourseIndex = () => {
  const { course } = useSelector((state) => state.course);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [isRelatedCourseLoading, setIsRelatedCourseLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsRelatedCourseLoading(true);
    course._id &&
      dispatch(getAllRelatedCourses(course._id)).then((action) => {
        setRelatedCourses(action.payload.data.relatedCourses);
        setIsRelatedCourseLoading(false);
      });
  }, [course]);

  const skeletonArray = Array.from({ length: 4 }, (_, index) => index);

  return (
    <>
      {isRelatedCourseLoading ? (
        <>
          <Grid
            container
            sx={{
              height: '100%',
              width: '100%',
            }}
          >
            {skeletonArray?.map((item) => (
              <Grid key={course._id} item xs={12} sm={6} md={3} sx={{ py: 2, paddingRight: '2%' }}>
                <CourseCardSkeleton />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          {relatedCourses.length != 0 && (
            <Box>
              <Box>
                <Typography variant='wpf_h5_Bold' color={'grey.600'}>
                  Related Course
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: '20px',
                  width: '100%',
                  height: '10%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 3px 0px #09008014',
                }}
              >
                <Grid
                  container
                  sx={{
                    height: '100%',
                    width: '100%',
                  }}
                >
                  {relatedCourses &&
                    relatedCourses?.map((course) => (
                      <Grid key={course._id} item xs={12} sm={6} md={3} sx={{ py: 2, paddingRight: '2%' }}>
                        <BasicCard course={course} />
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default RelatedCourseIndex;