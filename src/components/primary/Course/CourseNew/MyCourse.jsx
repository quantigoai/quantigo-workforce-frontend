import { Box, Paper, Typography, styled } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
import { getMyCourses } from '../../../../features/slice/courseSlice';
import { useDispatch, useSelector } from 'react-redux';
import PaginationTable from '../../ProjectLIstNew2/PaginationTable';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import CourseLevel from '../CourseLevel';

const MyCourse = () => {
  //   search,
  //   pagination,
  //   setPagination,
  //   filter,
  //   isDataLoading,
  //   setIsDataLoading,
  //   role,
  //   isLightTheme,
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
    //   setIsPagination(false);
    dispatch(getMyCourses({ filter, search, pagination })).then((action) => {
      //   setCourseCount(action.payload.data.searchedTotal);
      setAllCourses(action.payload.data);
      // setMyCourseMeta(action.payload.data.meta);
      setIsDataLoading(false);
      // setIsPagination(true);
    });
  }, [pagination]);
  return (
    //     <>
    //       {isCourseLoading ? (
    //         <LoadingComponent />
    //       ) : (
    //         <Box
    //           className="content"
    //           sx={
    //             {
    //               // pl: '30px',
    //             }
    //           }
    //         >
    //           {/* <Box className="contentHeader">
    //         <></>
    //       </Box> */}
    //           <CoursePaper>
    //             <>
    //               {isDataLoading ? (
    //                 <>
    //                   <LoadingSkeleton />
    //                 </>
    //               ) : (
    //                 <>
    //                   {role === '' ? (
    //                     <> </>
    //                   ) : (
    //                     <>
    //                       {isDataLoading ? (
    //                         <>
    //                           <LoadingSkeleton />
    //                         </>
    //                       ) : (
    //                         <></>
    //                       )}
    //                     </>
    //                   )}
    //                 </>
    //               )}
    //             </>
    //           </CoursePaper>
    //         </Box>
    //       )}

    //       {/* <CourseCreateModal
    //     handleSubmit={handleSubmit}
    //     methods={methods}
    //     preRequisiteCourses={preRequisiteCourses}
    //     handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
    //     onSubmit={onSubmit}
    //     open={open}
    //     setOpen={setOpen}
    //     handleClose={handleClose}
    //     skills={skills}
    //     skill={skill}
    //     handleChangeSkills={handleChangeSkills}
    //     coverImage={coverImage}
    //     removeImage={removeImage}
    //     handleImage={handleImage}
    //     isLoading={isLoading}
    //     checkedFeatured={checkedFeatured}
    //     handleChangeFeatured={handleChangeFeatured}
    //     dateTime={dateTime}
    //     handleDateTime={handleDateTime}
    //     outcomes={outcomes}
    //     setOutcomes={setOutcomes}
    //     hub={hub}
    //     handleChangeHub={handleChangeHub}
    //   /> */}
    //     </>
    <>
      <CourseLevel
        // isActiveEnrolled={isActiveEnrolled}
        // isActiveArchived={isActiveArchived}
        isDataLoading={isDataLoading}
        // title={'My Courses'}
        seeMore={false}
        courses={allCourses?.enrolledCourses}
        // handleViewDetailsButton={handleViewDetailsButton}
      />

      <PaginationTable
        pagination={pagination}
        setPagination={setPagination}
        totalCourse={allCourses.total}
        courseMeta={allCourses.meta}
        // setFilterValue={setFilterValue}
        // setFilteredCol={setFilteredCol}
      />
    </>
  );
};

export default MyCourse;
