import { Box, Paper, Typography, styled } from '@mui/material';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { getAllCoursesNew } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import PaginationTable from '../../ProjectLIstNew2/PaginationTable';
import CourseLevel from '../CourseLevel';
import CourseCreateModal from '../CreateCourseModal/CourseCreateModal';
import FeaturedCourse from '../FeaturedCourse';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';

const AllCourse = () => {
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
    isLightTheme,
    checkedFeatured,
    handleChangeFeatured,
    dateTime,
    handleDateTime,
    outcomes,
    setOutcomes,
    hub,
    handleChangeHub,
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
    handleChange,
    handleClickFilter,
    handleResetFilter,
    handleFilterCourse,
    anchorE2,
    isActiveAll,
    setIsActiveAll,
    isActiveEnrolled,
    setIsActiveEnrolled,
    isActiveArchived,
    setIsActiveArchived,
    setFilter,
  } = useCourseManagement();

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
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getAllCoursesNew({ filter, search })).then((action) => {
      setCourseCount(action.payload.data.courses.count);
      setAllCourses(action.payload.data.courses);
      setFeatureCourses(action.payload.data.courses.featureCourseList);
      setIsDataLoading(false);
    });
  }, [pagination]);
  const { isLoading: cLoading } = useSelector((state) => state.course);
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

  return (
    <>
      {cLoading ? (
        <LoadingComponent />
      ) : (
        <Box
          className="content"
          sx={
            {
              // pl: '30px',
            }
          }
        >
          {/* <Box className="contentHeader">
            <></>
          </Box> */}
          <CoursePaper>
            <>
              {isDataLoading ? (
                <>
                  <LoadingSkeleton />
                </>
              ) : (
                <>
                  {role === '' ? (
                    <> </>
                  ) : (
                    <>
                      {isDataLoading ? (
                        <>
                          <LoadingSkeleton />
                        </>
                      ) : (
                        <>
                          <Box sx={{ paddingLeft: '25px' }}>
                            {isActiveEnrolled ||
                              (isActiveArchived ? (
                                <></>
                              ) : (
                                <FeaturedCourse
                                  courses={featureCourses}
                                  handleViewDetailsButton={
                                    handleViewDetailsButton
                                  }
                                />
                              ))}
                            {allCourses.count === 0 ? (
                              <Box sx={{ mt: '20px' }}>
                                <Typography variant="wpf_h7_semiBold">
                                  No course Found
                                </Typography>
                              </Box>
                            ) : allCourses?.enrolledCourses &&
                              allCourses.enrolledCourses.length > 0 ? (
                              <CourseLevel
                                isActiveEnrolled={isActiveEnrolled}
                                isActiveArchived={isActiveArchived}
                                isDataLoading={isDataLoading}
                                // title={'My Courses'}
                                seeMore={false}
                                courses={allCourses?.enrolledCourses}
                                handleViewDetailsButton={
                                  handleViewDetailsButton
                                }
                              />
                            ) : allCourses?.archivedCourses &&
                              allCourses.archivedCourses.length > 0 ? (
                              <CourseLevel
                                isActiveEnrolled={isActiveEnrolled}
                                isActiveArchived={isActiveArchived}
                                isDataLoading={isDataLoading}
                                // title={'My Courses'}
                                seeMore={false}
                                courses={allCourses?.archivedCourses}
                                handleViewDetailsButton={
                                  handleViewDetailsButton
                                }
                              />
                            ) : (
                              <Box
                              // sx={{ paddingX: '15px' }}
                              >
                                {allCourses.coursesByLevelList?.basic?.length >
                                  0 && (
                                  <CourseLevel
                                    isDataLoading={isDataLoading}
                                    title={'Basic Courses'}
                                    seeMore={true}
                                    courses={
                                      allCourses.coursesByLevelList?.basic
                                    }
                                    handleViewDetailsButton={
                                      handleViewDetailsButton
                                    }
                                  />
                                )}
                                {allCourses.coursesByLevelList?.beginner
                                  ?.length > 0 && (
                                  <CourseLevel
                                    title={'Beginner Courses'}
                                    seeMore={true}
                                    courses={
                                      allCourses.coursesByLevelList?.beginner
                                    }
                                    handleViewDetailsButton={
                                      handleViewDetailsButton
                                    }
                                  />
                                )}
                                {allCourses.coursesByLevelList?.intermediate
                                  ?.length > 0 && (
                                  <CourseLevel
                                    title={'Intermediate Courses'}
                                    seeMore={true}
                                    courses={
                                      allCourses.coursesByLevelList
                                        ?.intermediate
                                    }
                                    handleViewDetailsButton={
                                      handleViewDetailsButton
                                    }
                                  />
                                )}
                                {allCourses.coursesByLevelList?.advanced
                                  ?.length > 0 && (
                                  <CourseLevel
                                    title={'Advance Courses'}
                                    seeMore={true}
                                    courses={
                                      allCourses.coursesByLevelList?.advanced
                                    }
                                    handleViewDetailsButton={
                                      handleViewDetailsButton
                                    }
                                  />
                                )}
                              </Box>
                            )}
                          </Box>

                          <PaginationTable
                            pagination={pagination}
                            setPagination={setPagination}
                            totalCourse={allCourses.total}
                            courseMeta={allCourses.meta}
                            // setFilterValue={setFilterValue}
                            // setFilteredCol={setFilteredCol}
                          />
                        </>
                      )}
                    </>
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

export default AllCourse;
