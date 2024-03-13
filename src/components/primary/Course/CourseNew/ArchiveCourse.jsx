import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseLevel from '../CourseLevel';
import { useOutletContext } from 'react-router-dom';

const ArchiveCourse = () => {
  // const { allCourses, setAllCourses } = useCourseManagement();
  // const [filter, setFilter] = useState({});
  // const [search, setSearch] = useState('');
  // const [isDataLoading, setIsDataLoading] = useState(true);

  const [
    allCourses,
    setAllCourses,
    search,
    filter,
    isDataLoading,
    setIsDataLoading,
    role,
    pagination,
    setPagination,
  ] = useOutletContext();
  const { isLoading: cLoading } = useSelector((state) => state.course);
  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : (
        <Box>
          <CourseLevel
            isDataLoading={isDataLoading}
            courses={allCourses?.archivedCourses}
          />

          {/* <PaginationTable
        pagination={pagination}
        setPagination={setPagination}
        totalCourse={allCourses.total}
        courseMeta={allCourses.meta}
        // setFilterValue={setFilterValue}
        // setFilteredCol={setFilteredCol}
      /> */}
        </Box>
      )}
    </>
  );
};

export default ArchiveCourse;
