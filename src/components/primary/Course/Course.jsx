/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/Course.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 21st 2022, 10:14:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Paper, Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePath } from '../../../features/slice/activePathSlice';
import { getAllCourses, getAllCoursesNew, getArchivedCourses, getMyCourses } from '../../../features/slice/courseSlice';
import { getAllSkills } from '../../../features/slice/skillSlice';
import LoadingSkeleton from '../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import LoadingComponent from '../../shared/Loading/LoadingComponent';
import PaginationTable from '../ProjectLIstNew2/PaginationTable';
import CourseHeader from './CourseHeader/CourseHeader';
import CourseLevel from './CourseLevel';
import CourseCreateModal from './CreateCourseModal/CourseCreateModal';
import FeaturedCourse from './FeaturedCourse';
import useCourseManagement from './hooks/createCourseHook/useCourseMangement';

const Course = () => {
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
  } = useCourseManagement();

  const [myCourseMeta, setMyCourseMeta] = useState({});

  // const [basicCourses,setBasicCourses]=useState([])
  const dispatch = useDispatch();
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
  const [allCount, setAllCount] = useState(0);
  const [MyCourseCount, setMyCourseCount] = useState(0);
  const [ArchiveCount, setArchiveCount] = useState(0);
  const [isPagination, setIsPagination] = useState(false);
  console.log('🚀 ~ Course ~ isPagination:', isPagination);
  useEffect(() => {
    dispatch(getMyCourses({ pagination })).then((action) => {
      setMyCourseCount(action.payload.data.searchedTotal);
    });
    dispatch(getArchivedCourses({ pagination })).then((action) => {
      setArchiveCount(action.payload.data.searchedTotal);
    });
    dispatch(getAllCoursesNew({})).then((action) => {
      setAllCount(action.payload.data.courses.count);
      // setAllCourses(action.payload.data.courses);
      // setFeatureCourses(action.payload.data.courses.featureCourseList);
      // setIsDataLoading(false);
    });
  }, [MyCourseCount, ArchiveCount, allCount, isActiveEnrolled, isActiveArchived]);

  useLayoutEffect(() => {
    dispatch(setActivePath('Course'));
    dispatch(getAllSkills());
    dispatch(getAllCourses()).then(() => {
      setIsDataLoading(false);
    });

    if (isActiveEnrolled) {
      setIsPagination(false);
      dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
        setCourseCount(action.payload.data.searchedTotal);
        setAllCourses(action.payload.data);
        setMyCourseMeta(action.payload.data.meta);
        setIsDataLoading(false);
        setIsPagination(true);
      });
    } else if (isActiveArchived) {
      dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
        setCourseCount(action.payload.data.total);
        setAllCourses(action.payload.data);
        // setMyCourseMeta(action.payload.data.meta);
        setIsDataLoading(false);
        setIsPagination(true);
      });
    } else {
      dispatch(getAllCoursesNew({ filter, search })).then((action) => {
        setCourseCount(action.payload.data.courses.count);
        setAllCourses(action.payload.data.courses);
        setFeatureCourses(action.payload.data.courses.featureCourseList);
        setIsDataLoading(false);
        setIsPagination(false);
      });
    }
  }, [pagination, search, isActiveEnrolled, isActiveArchived]);

  return (
    <>
      {isCourseLoading ? (
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
              allCount={allCount}
              setFilter={setFilter}
              pagination={pagination}
              setIsPagination={setIsPagination}
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
                                  handleViewDetailsButton={handleViewDetailsButton}
                                />
                              ))}
                            {allCourses.count === 0 ? (
                              <Box sx={{ mt: '20px' }}>
                                <Typography variant="wpf_h7_semiBold">No course Found</Typography>
                              </Box>
                            ) : allCourses?.enrolledCourses && allCourses.enrolledCourses.length > 0 ? (
                              <CourseLevel
                                isActiveEnrolled={isActiveEnrolled}
                                isActiveArchived={isActiveArchived}
                                isDataLoading={isDataLoading}
                                // title={'My Courses'}
                                seeMore={false}
                                courses={allCourses?.enrolledCourses}
                                handleViewDetailsButton={handleViewDetailsButton}
                              />
                            ) : allCourses?.archivedCourses && allCourses.archivedCourses.length > 0 ? (
                              <CourseLevel
                                isActiveEnrolled={isActiveEnrolled}
                                isActiveArchived={isActiveArchived}
                                isDataLoading={isDataLoading}
                                // title={'My Courses'}
                                seeMore={false}
                                courses={allCourses?.archivedCourses}
                                handleViewDetailsButton={handleViewDetailsButton}
                              />
                            ) : (
                              <Box
                              // sx={{ paddingX: '15px' }}
                              >
                                {allCourses.coursesByLevelList?.basic?.length > 0 && (
                                  <CourseLevel
                                    isDataLoading={isDataLoading}
                                    title={'Basic Courses'}
                                    seeMore={true}
                                    courses={allCourses.coursesByLevelList?.basic}
                                    handleViewDetailsButton={handleViewDetailsButton}
                                  />
                                )}
                                {allCourses.coursesByLevelList?.beginner?.length > 0 && (
                                  <CourseLevel
                                    title={'Beginner Courses'}
                                    seeMore={true}
                                    courses={allCourses.coursesByLevelList?.beginner}
                                    handleViewDetailsButton={handleViewDetailsButton}
                                  />
                                )}
                                {allCourses.coursesByLevelList?.intermediate?.length > 0 && (
                                  <CourseLevel
                                    title={'Intermediate Courses'}
                                    seeMore={true}
                                    courses={allCourses.coursesByLevelList?.intermediate}
                                    handleViewDetailsButton={handleViewDetailsButton}
                                  />
                                )}
                                {allCourses.coursesByLevelList?.advanced?.length > 0 && (
                                  <CourseLevel
                                    title={'Advance Courses'}
                                    seeMore={true}
                                    courses={allCourses.coursesByLevelList?.advanced}
                                    handleViewDetailsButton={handleViewDetailsButton}
                                  />
                                )}
                              </Box>
                            )}
                          </Box>

                          {isPagination && (
                            <PaginationTable
                              pagination={pagination}
                              setPagination={setPagination}
                              totalCourse={allCourses.total}
                              courseMeta={allCourses.meta}
                              // setFilterValue={setFilterValue}
                              // setFilteredCol={setFilteredCol}
                            />
                          )}
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

export default Course;
