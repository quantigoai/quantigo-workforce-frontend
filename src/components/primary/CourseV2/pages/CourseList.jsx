import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import { getArchivedCourses, getCoursesCount, getMyCourses } from '../../../../features/slice/courseSlice';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import BasicCard from '../components/CourseCard/BasicCard';
import CourseCardSkeleton from '../shared/CourseSkeleton/CourseCardSkeleton';
import CourseHeader from '../shared/courseHeader/CourseHeader';

const CourseList = () => {
  const dispatch = useDispatch();
  const [myContext] = useOutletContext();
  const { isLightTheme } = useSelector((state) => state.theme);
  const { courseFilterDispatch } = myContext;
  const { triggerFilter, filter, pagination, search, setSearch } = courseFilterDispatch;
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  const { type } = useParams();
  const [previousType, setPreviousType] = useState(null);

  const fetchAllCoursesByLevel = () => {
    if (type === 'my-courses') {
      dispatch(getMyCourses({ pagination, search, filter })).finally(() => {
        setIsCourseLoading(false);
      });
    } else {
      dispatch(getArchivedCourses({ pagination, search, filter })).finally(() => {
        setIsCourseLoading(false);
      });
    }
  };

  useEffect(() => {
    dispatch(getCoursesCount());
    if (previousType !== type) {
      setIsCourseLoading(true);
      setPreviousType(type);
    }
    if (isCourseLoading || search || search === '' || triggerFilter) {
      fetchAllCoursesByLevel();
      if (search === '') {
        setSearch(null);
      }
    }
  }, [isCourseLoading, search, type, previousType, filter, triggerFilter]);

  const { isLoading, myCourses, myArchivedCourses } = useSelector((state) => state.course);

  return isCourseLoading ? (
    <>
      <LoadingComponent />
    </>
  ) : (
    <Box sx={{ height: ' 100%' }}>
      <CourseHeader />
      <Box sx={{ height: '91%', overflow: 'auto' }}>
        <Box
          sx={{
            display: 'grid',
            px: { xxl: '25px', xl: '14px', lg: '25px' },
            // p: '25px',
            gridTemplateColumns: {
              xxl: 'repeat(4,1fr)',
              xl: 'repeat(4,1fr)',
              lg: 'repeat(3,1fr)',
            },
            gridGap: '8px',
            // mt: '16px',
            gap: { xxl: '20px', xl: '15px', lg: '12px' },
          }}
        >
          {type === 'my-courses'
            ? myCourses?.map((course) => (
                <Box
                  sx={{
                    backgroundColor: isLightTheme ? '#fff' : '#000',
                    width: { xxl: '368px', xl: '278px', lg: '250px' },
                    borderRadius: '10px',
                  }}
                  key={course._id}
                >
                  {isLoading ? <CourseCardSkeleton /> : <BasicCard isFeaturedShow={true} course={course} />}
                </Box>
              ))
            : myArchivedCourses?.map((course) => (
                <Box
                  sx={{
                    backgroundColor: isLightTheme ? '#fff' : '#000',
                    width: { xxl: '368px', xl: '278px', lg: '250px' },
                    borderRadius: '10px',
                  }}
                  key={course._id}
                >
                  {isLoading ? <CourseCardSkeleton /> : <BasicCard isFeaturedShow={true} course={course} />}
                </Box>
              ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseList;