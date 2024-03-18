/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/CourseNew/useCoursedispatch.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, March 15th 2024, 12:08:11 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { useDispatch } from 'react-redux';
import {
  getAllCourses,
  getAllCoursesNew,
  getArchivedCourses,
  getMyCourses,
} from '../../../../features/slice/courseSlice';

const useCourseDispatch = ({
  setCourseCount,
  search,
  filter,
  pagination,
  seePagination,
}) => {
  const dispatch = useDispatch();

  const handleDispatch = async (pathname, level) => {
    switch (true) {
      case pathname === '/courses2/myCourse':
        dispatch(getMyCourses({ filter, search, pagination })).then(
          (action) => {
            setCourseCount(action.payload.data.searchedTotal);
          },
        );
        break;
      case pathname === '/courses2/archiveCourse':
        dispatch(getArchivedCourses({ filter, search, pagination })).then(
          (action) => {
            setCourseCount(action.payload.data.searchedTotal);
          },
        );
        break;
      case pathname === '/courses2' || pathname === '/courses2/allCourse':
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
  return { handleDispatch };
};

export default useCourseDispatch;
