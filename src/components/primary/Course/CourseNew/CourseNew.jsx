import { Box, Button, Paper, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { setActivePath } from '../../../../features/slice/activePathSlice';
import {
  getAllCoursesNew,
  getArchivedCourses,
  getCoursesCount,
  getMyCourses,
} from '../../../../features/slice/courseSlice';
import CHeader from './CHeader';
import useCourse from './useCourse';
import CourseHeader from '../CourseHeader/CourseHeader';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
import CourseCreateModal from '../CreateCourseModal/CourseCreateModal';

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
  const { user } = useSelector((state) => state.user);
  const { isLoading: cLoading, total, courseMeta } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const [allCourseCount, setAllCourseCount] = useState(0);
  const [MyCourseCount, setMyCourseCount] = useState(0);
  const [ArchiveCount, setArchiveCount] = useState(0);

  const { pathname } = useLocation();
  const CoursePaper = styled(Paper)({
    width: '100%',
    height: pathname === '/courses2/myCourse' ? '87%' : '90%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    border: '0px 0px 1px 0px',
    backgroundColor: isLightTheme ? '#F2F6FC' : '#212121',
    boxShadow: '0px 1px 3px 0px #09008014',
  });
  useEffect(() => {
    dispatch(setActivePath('Course2'));
    dispatch(getCoursesCount()).then((action) => {
      setMyCourseCount(action.payload.data.coursesCount.myCourseCount);
      setArchiveCount(action.payload.data.coursesCount.myArchivedCourseCount);
      setAllCourseCount(action.payload.data.coursesCount.allCourseCount);
    });
    navigate('/courses2/allCourse');
  }, []);
  useEffect(() => {
    if (pathname === '/courses2/myCourse') {
      dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
        setCourseCount(action.payload.data.courses.count);
      });
    } else if (pathname === '/courses2/archiveCourse') {
      dispatch(getArchivedCourses({ filter, search, pagination })).then((action) => {
        setCourseCount(action.payload.data.courses.count);
      });
    } else {
      dispatch(getAllCoursesNew({ filter, search })).then((action) => {
        setCourseCount(action.payload.data.courses.count);
        //   setAllCourses(action.payload.data.courses);
        // setFeatureCourses(action.payload.data.courses.featureCourseList);
        //   setIsDataLoading(false);
      });
    }
  }, [search, pathname]);
  const handleNewCourses = () => {
    const seePagination = { currentPage: 1, pageSize: courseMeta.limit + 10 };

    dispatch(getMyCourses({ filter, search, pagination: seePagination })).then((action) => {
      // setAllCourses(action.payload.data);
      // setIsDataLoading(false);
    });
  };
  return (
    <>
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
            pathname={pathname}
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
          />
          {/* <CHeader /> */}
        </Box>
        <CoursePaper>
          <Outlet />
        </CoursePaper>
        {pathname === '/courses2/myCourse' && (
          <Box sx={{ px: 5 }}>
            {total > 10 && courseMeta.currentPage !== courseMeta.pageNumber && (
              <Button onClick={handleNewCourses}> see more</Button>
            )}
          </Box>
        )}
      </Box>
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

export default CourseNew;
