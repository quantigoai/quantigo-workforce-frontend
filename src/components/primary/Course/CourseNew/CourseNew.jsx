import { Box, Button, Paper, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
import CourseHeader from '../CourseHeader/CourseHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesNew, getArchivedCourses, getMyCourses } from '../../../../features/slice/courseSlice';

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
    dispatch(getMyCourses({ pagination })).then((action) => {
      setMyCourseCount(action.payload.data.searchedTotal);
    });
    dispatch(getArchivedCourses({ pagination })).then((action) => {
      setArchiveCount(action.payload.data.searchedTotal);
    });
    dispatch(getAllCoursesNew({})).then((action) => setCourseCount(action.payload.data.courses.count));
  }, []);
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
        <Outlet />
      </Box>
    </Box>
  );
};

export default CourseNew;
