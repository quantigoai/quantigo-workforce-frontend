/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/CourseNew/useCoursedispatch.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, March 15th 2024, 12:08:11 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getAllCourses,
  getAllCoursesNew,
  getArchivedCourses,
  getMyCourses,
} from '../../../../features/slice/courseSlice';

const useCourseFilterDispatch = ({ setCourseCount }) => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({});

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const clearSearch = () => {
    setSearch('');
    searchRef.current.value = '';
  };
  const handleDispatch = async (pathname, level) => {
    console.log('🚀 ~ handleDispatch ~ pathname:', pathname);
    switch (true) {
      case pathname === '/courses/my-course':
        dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
        });
        break;
      case pathname === '/courses/archive-course':
        dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
          setCourseCount(action.payload.data.searchedTotal);
        });
        break;
      case pathname === '/course-new' || pathname === '/course-new/all-courses':
        dispatch(getAllCoursesNew({ filter, search })).then((action) => {
          setCourseCount(action.payload.data.courses.count);
        });
        break;

      case level !== undefined:
        dispatch(getAllCourses({ level }));
        break;

      default:
        break;
    }
  };
  return { handleDispatch, search, filter, pagination, searchRef, handleSearch, clearSearch };
};

export default useCourseFilterDispatch;
