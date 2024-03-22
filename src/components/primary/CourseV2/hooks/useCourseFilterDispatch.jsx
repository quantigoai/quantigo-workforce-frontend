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
  const [search, setSearch] = useState(false);
  const [pathLevel, setPathLevel] = useState('');
  const [filter, setFilter] = useState({});
  const [isCourseLoading, setIsCourseLoading] = useState(true);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

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
      // case pathname === `/course-new/course-level/${pathLevel}`:
      //   console.log(pathLevel);
      //   if (pathLevel) {
      //     setIsCourseLoading(true);
      //     dispatch(getAllCourses({ level: pathLevel, search })).finally(() => {
      //       setIsCourseLoading(false);
      //     });
      //   }
      //   break;

      // case level !== undefined:
      //   dispatch(getAllCourses({ level }));
      //   break;

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
    filter,
    pagination,
    searchRef,
    handleSearch,
    clearSearch,
  };
};
export default useCourseFilterDispatch;
