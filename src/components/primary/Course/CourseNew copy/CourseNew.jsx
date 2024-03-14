import { Box, Paper, styled } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { setActivePath } from '../../../../features/slice/activePathSlice';
import {
  getAllCoursesNew,
  getArchivedCourses,
  getCoursesCount,
  getMyCourses,
} from '../../../../features/slice/courseSlice';
import PaginationTable from '../../ProjectLIstNew2/PaginationTable';
import CourseHeader from '../CourseHeader/CourseHeader';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';

const CourseNew = () => {
  const navigate = useNavigate();
  const {
    open,
    setOpen,
    handleOpen,
    isCourseLoading,
    isLoading,
    filterCourses,
    courses,
    handleViewDetailsButton,
    handleSubmit,
    methods,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    onSubmit,
    handleClose,
    skills,
    skill,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    isDataLoading,
    setIsDataLoading,
    role,
    isLightTheme,
    checkedFeatured,
    handleChangeFeatured,
    dateTime,
    handleDateTime,
    outcomes,
    setOutcomes,
    hub,
    handleChangeHub,
    search,
    setSearch,
    handleSearch,
    clearSearch,
    searchRef,
    featureCourses,
    setFeatureCourses,
    // courseCount,
    // setCourseCount,
    openModal,
    id,
    handleCloseFilter,
    filter,
    handleChange,
    handleClickFilter,
    handleResetFilter,
    handleFilterCourse,
    anchorE2,
    allCourses,
    setAllCourses,
    isActiveAll,
    setIsActiveAll,
    isActiveEnrolled,
    setIsActiveEnrolled,
    isActiveArchived,
    setIsActiveArchived,
    setFilter,
    pagination,
    setPagination,
  } = useCourseManagement();
  const { user } = useSelector((state) => state.user);
  const {
    isLoading: cLoading,
    total,
    courseMeta,
  } = useSelector((state) => state.course);
  const CoursePaper = styled(Paper)({
    width: '100%',
    height: '90%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    border: '0px 0px 1px 0px',
    backgroundColor: isLightTheme ? '#F2F6FC' : '#212121',
    boxShadow: '0px 1px 3px 0px #09008014',
  });
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
  }, []);
  const pathname = window.location.pathname;
  console.log('🚀 ~ CourseNew ~ pathname:', pathname);

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
        <CourseHeader
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
          // pagination={pagination}
          // setIsPagination={setIsPagination}
        />
      </Box>
      <Box>
        <Outlet
          context={[
            allCourses,
            setAllCourses,
            search,
            filter,
            isDataLoading,
            setIsDataLoading,
            role,
            pagination,
            setPagination,
          ]}
        />
        {!cLoading && (
          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            totalCourse={total}
            courseMeta={courseMeta}
            // setFilterValue={setFilterValue}
            // setFilteredCol={setFilteredCol}
          />
        )}
      </Box>
    </Box>
  );
};

export default CourseNew;
