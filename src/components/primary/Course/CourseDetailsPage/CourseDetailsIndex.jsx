import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { setActiveChapterIndex } from '../../../../features/slice/activePathSlice';
import { getAllChapterFromACourse } from '../../../../features/slice/courseSlice';
import CourseContentIndex from './CourseContentIndex';

const CourseDetailsIndex = () => {
  let [redirectParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const id = params.id;

  const isRedirect = redirectParams.get('isRedirect');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChapterFromACourse(id)).then((res) => {
      !isRedirect && dispatch(setActiveChapterIndex(0));
    });
  }, []);

  return (
    <>
      <CourseContentIndex />
    </>
  );
};

export default CourseDetailsIndex;
