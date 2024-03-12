import React, { useEffect, useState } from 'react';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Paper, styled } from '@mui/material';
import { getArchivedCourses } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseLevel from '../CourseLevel';

const ArchiveCourse = () => {
  const { allCourses, setAllCourses } = useCourseManagement();
  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isCourseLoading, setIsCourseLoading] = useState(false);
  const { role } = useSelector((state) => state.user.user);
  const [myCourse, setMyCourse] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const dispatch = useDispatch();
  const CoursePaper = styled(Paper)({
    width: '100%',
    height: '90%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    border: '0px 0px 1px 0px',
    // backgroundColor: isLightTheme ? '#F2F6FC' : '#212121',
    boxShadow: '0px 1px 3px 0px #09008014',
  });
  useEffect(() => {
    dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
      setAllCourses(action.payload.data);
      setIsDataLoading(false);
    });
  }, [pagination]);
  const { isLoading: cLoading } = useSelector((state) => state.course);
  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : (
        <Box>
          <CourseLevel isDataLoading={isDataLoading} courses={allCourses?.archivedCourses} />

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
