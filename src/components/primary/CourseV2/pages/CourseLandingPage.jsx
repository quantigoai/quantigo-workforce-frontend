/*
 * File           : CourseLandingPage.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 02:16:05
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
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setActiveChapterIndex, setActiveCourseId } from '../../../../features/slice/activePathSlice';
import { getACourseByID, getAllChapterFromACourse } from '../../../../features/slice/courseSlice';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import LandingPageContent from '../components/LandingPageContent';
import LandingPageHeader from '../components/LandingPageHeader';

const CourseLandingPage = () => {
  const params = useParams();
  const { courseId: id } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { course } = useSelector((state) => state.course);
  const { isLightTheme } = useSelector((state) => state.theme);
  const [isCourseLoading, setIsCourseLoading] = useState(true);

  const refContainer = useRef(null);

  useEffect(() => {
    setIsCourseLoading(true);
    refContainer?.current?.scrollIntoView({ behavior: 'smooth' });
    dispatch(getACourseByID(id))
      .then(() => {
        dispatch(setActiveCourseId(id));
        dispatch(setActiveChapterIndex(0));
        dispatch(getAllChapterFromACourse(id)).then((res) => {});
      })
      .finally(() => {
        setIsCourseLoading(false);
      });
  }, [id]);

  return (
    <Box>
      {isCourseLoading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
          <Box ref={refContainer}>
            <LandingPageHeader course={course} />
          </Box>
          <Box sx={{ backgroundColor: isLightTheme ? '#fff' : '#000' }}>
            <LandingPageContent course={course} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default CourseLandingPage;
