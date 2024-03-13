import { Box } from '@mui/material';
import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArchivedCourses } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import PaginationTable from '../../ProjectLIstNew2/PaginationTable';
import CourseLevel from '../CourseLevel';
import useCourse from './useCourse';

const ArchiveCourse = () => {
  // const { allCourses, setAllCourses } = useCourseManagement();
  // const [filter, setFilter] = useState({});
  // const [search, setSearch] = useState('');
  // const [isDataLoading, setIsDataLoading] = useState(true);
  const {
    isDataLoading,
    setIsDataLoading,
    search,
    setSearch,
    pagination,
    setPagination,
    searchRef,
    filter,
    setFilter,
    isCourseLoading,
    setIsCourseLoading,
  } = useCourse();
  const dispatch = useDispatch();
  console.log('🚀 ~ MyCourse ~ pagination:', pagination);

  useLayoutEffect(() => {
    dispatch(getArchivedCourses({ filter, search, pagination })).then(
      (action) => {
        // setAllCourses(action.payload.data);
        // setIsDataLoading(false);
      },
    );
  }, [pagination]);

  const {
    isLoading: cLoading,
    myArchivedCourses: courses,
    total,
    courseMeta,
    archivedCourseMeta,
  } = useSelector((state) => state.course);

  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : (
        <Box>
          <CourseLevel isDataLoading={isDataLoading} courses={courses} />

          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            totalCourse={total}
            courseMeta={archivedCourseMeta}
            // setFilterValue={setFilterValue}
            // setFilteredCol={setFilteredCol}
          />
        </Box>
      )}
    </>
  );
};

export default ArchiveCourse;
