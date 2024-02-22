import React, { useEffect, useState } from 'react';
import CourseTab from './CourseTab';
import LoadingSkeleton from '../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseHeader from './CourseHeader/CourseHeader';
import { Box, Paper, Typography, styled } from '@mui/material';
import LoadingComponent from '../../shared/Loading/LoadingComponent';
import useCourseManagement from './hooks/createCourseHook/useCourseMangement';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSkills } from '../../../features/slice/skillSlice';
import { getAllCourses, getAllCoursesNew } from '../../../features/slice/courseSlice';
import CustomCard from './CustomCard';
import CourseCreateModal from './CreateCourseModal/CourseCreateModal';
import { useParams } from 'react-router-dom';

const CourseAllPage = () => {
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
    openModal,
    id,
    handleCloseFilter,
    filter,
    handleChange,
    handleClickFilter,
    handleResetFilter,
    handleFilterCourse,
    anchorE2,
    allCoursesFull,
    setAllCoursesFull,
    courseCountFull,
    setCourseCountFull,
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
  const { level } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setActivePath('Course'));
    dispatch(getAllSkills());
    dispatch(getAllCourses({ level: level, search, filter })).then((action) => {
      setAllCoursesFull(action.payload.data.courses);
      setCourseCountFull(action.payload.data.count);
      setIsDataLoading(false);
    });
  }, [courseCountFull, search]);

  return (
    <>
      {isCourseLoading ? (
        <LoadingComponent />
      ) : (
        <Box
          className="content"
          sx={{
            pl: '30px',
          }}
        >
          <Box className="contentHeader">
            <CourseHeader
              search={search}
              searchRef={searchRef}
              clearSearch={clearSearch}
              courseCount={courseCountFull}
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
              handleFilterCourse={handleFilterCourse}
              level={level}
              role={user.role}
            />
          </Box>
          <CoursePaper>
            <>
              {isDataLoading ? (
                <>
                  <LoadingSkeleton />
                </>
              ) : (
                <>
                  {role === '' ? (
                    <></>
                  ) : (
                    <Box
                    // sx={{ padding: '30px' }}
                    >
                      <Typography variant="wpf_h4_Bold" color={'neutral.995'}>
                        {level === 'basic'
                          ? 'Basic Courses'
                          : level === 'beginner'
                          ? 'Beginner Courses'
                          : level === 'intermediate'
                          ? 'Intermediate Courses'
                          : 'Advanced Courses'}
                      </Typography>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xxl: 'repeat(4,1fr)', xl: 'repeat(4,1fr)', lg: 'repeat(3,1fr)' },
                          gridGap: '8px',
                          mt: '16px',
                          // width: '100%',
                          gap: { xxl: '20px', xl: '15px', lg: '12px' },
                        }}
                      >
                        {allCoursesFull.length === 0 ? (
                          <>
                            <Typography variant="wpf_h6_semiBold">No course Found</Typography>
                          </>
                        ) : (
                          allCoursesFull?.map((course) => (
                            <Box
                              sx={{
                                backgroundColor: isLightTheme ? '#fff' : '#000',
                                width: { xxl: '368px', xl: '278px', lg: '250px' },
                                borderRadius: '10px',
                              }}
                              key={course._id}
                            >
                              <CustomCard
                                level={level}
                                courseDirection="all"
                                handleViewDetailsButton={handleViewDetailsButton}
                                course={course}
                              />
                            </Box>
                          ))
                        )}
                      </Box>
                    </Box>
                  )}
                </>
              )}
            </>
          </CoursePaper>
        </Box>
      )}
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
    </>
  );
};

export default CourseAllPage;
