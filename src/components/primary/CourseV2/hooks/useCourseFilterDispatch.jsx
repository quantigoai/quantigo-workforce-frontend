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
import { getAllCoursesNew, getArchivedCourses, getMyCourses } from '../../../../features/slice/courseSlice';

const useCourseFilterDispatch = ({ setCourseCount }) => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [search, setSearch] = useState(null);
  const [pathLevel, setPathLevel] = useState('');
  const [filter, setFilter] = useState(null);
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  const [triggerFilter, setTriggerFilter] = useState(false);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  const handleChangeFilter = (event, label) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [label]: event.target.value,
    }));
  };

  const handleResetFilter = () => {
    setTriggerFilter(true);
    setFilter(null);
  };

  const handleFilterCourse = () => {
    setTriggerFilter(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('');
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };
  const handleDispatch = async (pathname) => {
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
      default:
        break;
    }
  };

  return {
    isCourseLoading,
    setIsCourseLoading,
    pathLevel,
    setPathLevel,
    handleDispatch,
    search,
    setSearch,
    filter,
    pagination,
    searchRef,
    handleSearch,
    clearSearch,
    handleChangeFilter,
    handleResetFilter,
    handleFilterCourse,
    triggerFilter,
  };
};
export default useCourseFilterDispatch;
