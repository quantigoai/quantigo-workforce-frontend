/*
 * File           : CourseNewIndex.jsx
 * Project        : wmpfrontv2
 * Created Date   : We 20 Mar 2024 11:34:32
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

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { setActivePath } from '../../../../features/slice/activePathSlice';
import { getAllCoursesNew } from '../../../../features/slice/courseSlice';
import useCourseFilterDispatch from '../hooks/useCourseFilterDispatch';

const CourseNewIndex = () => {
  const navigate = useNavigate();
  const [courseCount, setCourseCount] = React.useState(0);
  const courseFilterDispatch = useCourseFilterDispatch({ setCourseCount });
  const { pathLevel, handleDispatch, search } = courseFilterDispatch;

  const dispatch = useDispatch();
  const [level, setLevel] = React.useState([]);

  const [dataLoading, setDataLoading] = React.useState(true);
  const { pathname } = useLocation();

  const fetchAllCoursesAndSetLevel = () => {
    dispatch(getAllCoursesNew({})).then((res) => {
      setLevel(Object.keys(res.payload.data.courses.coursesByLevelList));
      setDataLoading(false);
    });
  };

  useEffect(() => {
    dispatch(setActivePath('Course-new'));
    if (dataLoading) {
      if (pathname === '/course-new/all-courses') {
        fetchAllCoursesAndSetLevel();
      }
    }
  }, [dataLoading, level, pathname]);

  useEffect(() => {
    pathname === '/course-new' && navigate('/course-new/all-courses');
    handleDispatch(pathname, level);
  }, [search, pathname, level, pathLevel]);

  const myContext = {
    level,
    courseFilterDispatch,
    dataLoading,
  };
  return (
    <>
      <Outlet context={[myContext]} />
    </>
  );
};

export default CourseNewIndex;
