import { Box, Paper, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesNew } from '../../../../features/slice/courseSlice';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import CourseLevel from '../CourseLevel';
import FeaturedCourse from '../FeaturedCourse';
import useCourse from './useCourse';

const AllCourse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoursesNew({ filter, search })).then((action) => {
      //   setCourseCount(action.payload.data.courses.count);
      //   setAllCourses(action.payload.data.courses);
      // setFeatureCourses(action.payload.data.courses.featureCourseList);
      //   setIsDataLoading(false);
    });
  }, []);
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
    isActiveEnrolled,
    setIsActiveEnrolled,
    isActiveArchived,
    setIsActiveArchived,
  } = useCourse();

  const { isLoading: cLoading, courses } = useSelector((state) => state.course);
  console.log('🚀 ~ AllCourse ~ cLoading:', cLoading);
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

  return (
    <>
      {cLoading ? (
        <LoadingComponent />
      ) : (
        <Box className="content">
          <CoursePaper>
            <>
              {cLoading ? (
                <>
                  <LoadingSkeleton />
                </>
              ) : (
                <>
                  <>
                    <Box sx={{ paddingLeft: '25px' }}>
                      <FeaturedCourse
                        courses={courses.featureCourseList}
                        // handleViewDetailsButton={handleViewDetailsButton}
                      />

                      {courses.count === 0 ? (
                        <Box sx={{ mt: '20px' }}>
                          <Typography variant="wpf_h7_semiBold">
                            No course Found
                          </Typography>
                        </Box>
                      ) : courses?.enrolledCourses &&
                        courses.enrolledCourses.length > 0 ? (
                        <CourseLevel
                          isActiveEnrolled={isActiveEnrolled}
                          isActiveArchived={isActiveArchived}
                          isDataLoading={isDataLoading}
                          // title={'My Courses'}
                          seeMore={false}
                          courses={courses?.enrolledCourses}
                          handleViewDetailsButton={handleViewDetailsButton}
                        />
                      ) : courses?.archivedCourses &&
                        courses.archivedCourses.length > 0 ? (
                        <CourseLevel
                          isActiveEnrolled={isActiveEnrolled}
                          isActiveArchived={isActiveArchived}
                          isDataLoading={isDataLoading}
                          // title={'My Courses'}
                          seeMore={false}
                          courses={courses?.archivedCourses}
                          // handleViewDetailsButton={handleViewDetailsButton}
                        />
                      ) : (
                        <Box>
                          {courses.coursesByLevelList?.basic?.length > 0 && (
                            <CourseLevel
                              isDataLoading={isDataLoading}
                              title={'Basic Courses'}
                              seeMore={true}
                              courses={courses.coursesByLevelList?.basic}
                              // handleViewDetailsButton={handleViewDetailsButton}
                            />
                          )}
                          {courses.coursesByLevelList?.beginner?.length > 0 && (
                            <CourseLevel
                              title={'Beginner Courses'}
                              seeMore={true}
                              courses={courses.coursesByLevelList?.beginner}
                              // handleViewDetailsButton={handleViewDetailsButton}
                            />
                          )}
                          {courses.coursesByLevelList?.intermediate?.length >
                            0 && (
                            <CourseLevel
                              title={'Intermediate Courses'}
                              seeMore={true}
                              courses={courses.coursesByLevelList?.intermediate}
                              // handleViewDetailsButton={handleViewDetailsButton}
                            />
                          )}
                          {courses.coursesByLevelList?.advanced?.length > 0 && (
                            <CourseLevel
                              title={'Advance Courses'}
                              seeMore={true}
                              courses={courses.coursesByLevelList?.advanced}
                              // handleViewDetailsButton={handleViewDetailsButton}
                            />
                          )}
                        </Box>
                      )}
                    </Box>

                    {/* <PaginationTable
                            pagination={pagination}
                            setPagination={setPagination}
                            totalCourse={allCourses.total}
                            courseMeta={allCourses.meta}
                            // setFilterValue={setFilterValue}
                            // setFilteredCol={setFilteredCol}
                          /> */}
                  </>
                </>
              )}
            </>
          </CoursePaper>
        </Box>
      )}

      {/* <CourseCreateModal
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
      /> */}
    </>
  );
};

export default AllCourse;
