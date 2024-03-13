import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { setActivePath } from '../../../../features/slice/activePathSlice';
import { getCoursesCount } from '../../../../features/slice/courseSlice';
import CHeader from './CHeader';
import useCourse from './useCourse';

const CourseNew = () => {
  const navigate = useNavigate();
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
  const { user } = useSelector((state) => state.user);
  const {
    isLoading: cLoading,
    total,
    courseMeta,
  } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const [courseCount, setCourseCount] = useState(0);
  const [MyCourseCount, setMyCourseCount] = useState(0);
  const [ArchiveCount, setArchiveCount] = useState(0);
  useEffect(() => {
    dispatch(setActivePath('Course2'));
    dispatch(getCoursesCount()).then((action) => {
      setMyCourseCount(action.payload.data.coursesCount.myCourseCount);
      setArchiveCount(action.payload.data.coursesCount.myArchivedCourseCount);
      setCourseCount(action.payload.data.coursesCount.allCourseCount);
    });
    navigate('/courses2/allCourse');
  }, []);

  const pathname = window.location.pathname;

  // useLayoutEffect(() => {
  //   console.log('sss');
  //   if (pathname === '/courses2/allCourse') {
  //     dispatch(getAllCoursesNew({ filter, search })).then((action) => {
  //       setCourseCount(action.payload.data.courses.count);
  //       setAllCourses(action.payload.data.courses);
  //       setFeatureCourses(action.payload.data.courses.featureCourseList);
  //       setIsDataLoading(false);
  //       // setIsPagination(false);
  //     });
  //   }
  //   if (pathname === '/courses2/myCourse') {
  //     dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
  //       setAllCourses(action.payload.data);
  //       setIsDataLoading(false);
  //     });
  //   }
  //   if (pathname === '/courses2/archiveCourse') {
  //     dispatch(getArchivedCourses({ filter, search, pagination })).then(
  //       (action) => {
  //         setAllCourses(action.payload.data);
  //         setIsDataLoading(false);
  //       },
  //     );
  //   }
  // }, [pagination, search, pathname]);
  return (
    <Box className="content">
      <Box className="contentHeader">
        {/* <CourseHeader
          search={search}
          searchRef={searchRef}
          clearSearch={clearSearch}
          courseCount={courseCount}
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          setSearch={setSearch}
          handleSearch={handleSearch}
          openModal={openModal}
          anchorE2={anchorE2}
          id={id}
          handleCloseFilter={handleCloseFilter}
          filter={filter}
          handleChange={handleChange}
          handleClickFilter={handleClickFilter}
          handleResetFilter={handleResetFilter}
          role={user.role}
          handleFilterCourse={handleFilterCourse}
          setAllCourses={setAllCourses}
          setCourseCount={setCourseCount}
          setIsDataLoading={setIsDataLoading}
          setFeatureCourses={setFeatureCourses}
          isActiveAll={isActiveAll}
          setIsActiveAll={setIsActiveAll}
          isActiveEnrolled={isActiveEnrolled}
          setIsActiveEnrolled={setIsActiveEnrolled}
          isActiveArchived={isActiveArchived}
          setIsActiveArchived={setIsActiveArchived}
          MyCourseCount={MyCourseCount}
          ArchiveCount={ArchiveCount}
          // allCount={allCount}
          setFilter={setFilter}
        /> */}
        <CHeader />
      </Box>
      <Box>
        <Outlet
          // context={[
          //   allCourses,
          //   setAllCourses,
          //   search,
          //   filter,
          //   isDataLoading,
          //   setIsDataLoading,
          //   role,
          //   pagination,
          //   setPagination,
          // ]}
        />
        {/* {!cLoading && (
          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            totalCourse={total}
            courseMeta={courseMeta}
            // setFilterValue={setFilterValue}
            // setFilteredCol={setFilteredCol}
          />
        )} */}
      </Box>
    </Box>
  );
};

export default CourseNew;
