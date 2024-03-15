import { Box } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSkeleton from '../../../shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton';
import CourseLevel from '../CourseLevel';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
const FullCourse = () => {
  const {
    // courses,
    handleViewDetailsButton,
    isDataLoading,
    search,
    filter,
  } = useCourseManagement();
  const { level } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   // dispatch(getAllCourses({ level, search, filter })).then((action) => {
  //     //   setAllCoursesFull(action.payload.data.courses);
  //     //   setCourseCountFull(action.payload.data.count);
  //     //   setIsDataLoading(false);
  //   });
  // }, []);
  const {
    isLoading: cLoading,
    //   total,
    //   courseMeta,
    courses,
  } = useSelector((state) => state.course);

  return (
    <>
      {cLoading ? (
        <>
          <LoadingSkeleton />
        </>
      ) : (
        // <>Nothing </>
        <Box sx={{ paddingLeft: '25px' }}>
          <CourseLevel
            isDataLoading={isDataLoading}
            // courses={courses || []}
            handleViewDetailsButton={handleViewDetailsButton}
            // courses={courses}
          />
        </Box>
      )}
    </>
  );
};

export default FullCourse;
