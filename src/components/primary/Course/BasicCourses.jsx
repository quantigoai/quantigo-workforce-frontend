/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/BasicCourses.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, March 15th 2024, 11:30:54 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Box, Paper, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCourses, getCoursesCount } from '../../../features/slice/courseSlice';
import CustomCard from './CustomCard';
import useCourseManagement from './hooks/createCourseHook/useCourseMangement';
import CourseHeader from './CourseHeader/CourseHeader';
import LoadingSkeleton from '../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseCreateModal from './CreateCourseModal/CourseCreateModal';
import { getAllSkills } from '../../../features/slice/skillSlice';
const BasicCourses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoading: cLoading, courses, total } = useSelector((state) => state.course);

  const dispatch = useDispatch();

  const { isLightTheme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const {
    open,
    setOpen,
    handleOpen,
    isCourseLoading,
    // isLoading,
    filterCourses,
    // courses,
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
    // isLightTheme,
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
    courseCount,
    setCourseCount,
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
    setIsCourseLoading,
    level,
  } = useCourseManagement();

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
  const [allCourseCount, setAllCourseCount] = useState(0);
  const [MyCourseCount, setMyCourseCount] = useState(0);
  const [ArchiveCount, setArchiveCount] = useState(0);
  useEffect(() => {
    // dispatch(setActivePath('Course2'));
    dispatch(getAllSkills());
    dispatch(getCoursesCount()).then((action) => {
      setMyCourseCount(action.payload.data.coursesCount.myCourseCount);
      setArchiveCount(action.payload.data.coursesCount.myArchivedCourseCount);
      setAllCourseCount(action.payload.data.coursesCount.allCourseCount);
    });
  }, []);
  useEffect(() => {
    dispatch(getAllCourses({ level, search })).then((action) => {
      setIsLoading(false);
      setCourseCount(action.payload.data.count);
    });
  }, [search, level]);

  return isLoading ? (
    <>
      <LoadingSkeleton />
    </>
  ) : (
    <Box className="content">
      <Box className="contentHeader">
        <CourseHeader
          search={search}
          searchRef={searchRef}
          clearSearch={clearSearch}
          courseCount={courseCount}
          open={open}
          isLevel={true}
          setOpen={setOpen}
          handleOpen={handleOpen}
          setSearch={setSearch}
          handleSearch={handleSearch}
          openModal={openModal}
          anchorE2={anchorE2}
          id={id}
          handleCloseFilter={handleCloseFilter}
          filter={filter}
          // pathname={pathname}
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
          allCourseCount={allCourseCount}
          setFilter={setFilter}
          level={level}
        />
        {/* <CHeader /> */}
      </Box>
      <CoursePaper>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xxl: 'repeat(4,1fr)',
              xl: 'repeat(4,1fr)',
              lg: 'repeat(3,1fr)',
            },
            gridGap: '8px',
            mt: '16px',
            pr: '15px',
            gap: { xxl: '20px', xl: '15px', lg: '12px' },
            paddingLeft: '25px',
          }}
        >
          {courses.length === 0 ? (
            <>
              <Typography>No course found</Typography>
            </>
          ) : (
            courses?.map((course) => (
              <Box
                sx={{
                  backgroundColor: isLightTheme ? '#fff' : '#000',
                  width: { xxl: '368px', xl: '278px', lg: '250px' },
                  borderRadius: '10px',
                }}
                key={course._id}
              >
                <CustomCard
                  //   isActiveEnrolled={isActiveEnrolled}
                  //   isActiveArchived={isActiveArchived}
                  courseDirection={user.enrolledCourses.includes(course._id) ? 'MyCourse' : 'all'}
                  handleViewDetailsButton={handleViewDetailsButton}
                  course={course}
                />
              </Box>
            ))
          )}
        </Box>
      </CoursePaper>
      {open && (
        <CourseCreateModal
          handleSubmit={handleSubmit}
          methods={methods}
          preRequisiteCourses={preRequisiteCourses}
          handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
          onSubmit={onSubmit}
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          skills={skills}
          skill={skill}
          handleChangeSkills={handleChangeSkills}
          coverImage={coverImage}
          removeImage={removeImage}
          handleImage={handleImage}
          isLoading={isLoading}
          checkedFeatured={checkedFeatured}
          handleChangeFeatured={handleChangeFeatured}
          dateTime={dateTime}
          handleDateTime={handleDateTime}
          outcomes={outcomes}
          setOutcomes={setOutcomes}
          hub={hub}
          handleChangeHub={handleChangeHub}
        />
      )}
    </Box>
  );
};

export default BasicCourses;
