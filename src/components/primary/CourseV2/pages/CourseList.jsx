import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import { getArchivedCourses, getMyCourses } from '../../../../features/slice/courseSlice';
import { Box } from '@mui/material';
import BasicCard from '../components/CourseCard/BasicCard';
import CourseCardSkeleton from '../shared/CourseSkeleton/CourseCardSkeleton';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import CourseHeader from '../shared/courseHeader/CourseHeader';

const CourseList = () => {
  const dispatch = useDispatch();
  const [myContext] = useOutletContext();
  const { courseFilterDispatch } = myContext;
  const { search, setSearch } = courseFilterDispatch;
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  const { type } = useParams();
  console.log('🚀 ~ type:', type);

  useEffect(() => {
    const fetchAllCoursesByLevel = () => {
      if (type === 'my-courses') {
        console.log('hit');
        dispatch(getMyCourses({ search })).finally(() => {
          setIsCourseLoading(false);
        });
      } else {
        console.log('hit222222222');
        dispatch(getArchivedCourses({ search })).finally(() => {
          setIsCourseLoading(false);
        });
      }
    };
    if (isCourseLoading || search || search === '') {
      // if (isCourseLoading || search) {
      fetchAllCoursesByLevel();
      if (search === '') {
        setSearch(null);
      }
    }
  }, [isCourseLoading, search, type]);
  const { isLoading, myCourses, myArchivedCourses } = useSelector((state) => state.course);

  return isCourseLoading ? (
    <>
      <LoadingComponent />
    </>
  ) : (
    <>
      <CourseHeader />
      <Box
        sx={{
          display: 'grid',
          p: '25px',
          gridTemplateColumns: {
            xxl: 'repeat(4,1fr)',
            xl: 'repeat(4,1fr)',
            lg: 'repeat(3,1fr)',
          },
          gridGap: '8px',
          mt: '16px',
          gap: { xxl: '20px', xl: '15px', lg: '12px' },
        }}
      >
        {type === 'my-courses'
          ? myCourses?.map((course) => (
              <Box
                sx={{
                  //   backgroundColor: isLightTheme ? '#fff' : '#000',
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
                  //   backgroundColor: isLightTheme ? '#fff' : '#000',
                  width: { xxl: '368px', xl: '278px', lg: '250px' },
                  borderRadius: '10px',
                }}
                key={course._id}
              >
                {isLoading ? <CourseCardSkeleton /> : <BasicCard isFeaturedShow={true} course={course} />}
              </Box>
            ))}
      </Box>
    </>
  );
};

export default CourseList;
