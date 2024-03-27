/*
 * File           : AllCourses.jsx
 * Project        : wmpfrontv2
 * Created Date   : We 20 Mar 2024 11:43:00
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Wed Mar 20 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box } from '@mui/material';
import { default as React } from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import FeaturedCourseSection from '../components/FeaturedCourseSection';
import LevelBasedSection from '../components/LevelBasedSection';
import CourseIndexPageSkeleton from '../shared/CourseSkeleton/CourseIndexPageSkeleton';
import CourseHeader from '../shared/courseHeader/CourseHeader';

import '../shared/styles/index.css';
import CourseCreateModal from '../../Course/CreateCourseModal/CourseCreateModal';
const AllCourses = () => {
  const [myContext] = useOutletContext();
  const {
    level,
    courseFilterDispatch,
    dataLoading,
    handleSubmit,
    methods,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    onSubmit,
    open,
    setOpen,
    handleClose,
    skills,
    skill,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    isLoading,
    checkedFeatured,
    handleChangeFeatured,
    dateTime,
    handleDateTime,
    outcomes,
    setOutcomes,
    hub,
    handleChangeHub,
    isBtnLoading,
  } = myContext;
  const { isLightTheme } = useSelector((state) => state.theme);

  return dataLoading ? (
    <>
      <CourseIndexPageSkeleton />
    </>
  ) : (
    <Box sx={{ height: ' 100%' }}>
      {/* TODO implement header here */}

      <CourseHeader />

      <Box
        className='courseContainer'
        sx={{
          px: { xxl: '25px', xl: '14px', lg: '25px' },
          height: '91%',
          overflow: 'auto',
          // scrollbarWidth: 'thin',
        }}
      >
        <Box>
          <FeaturedCourseSection />
        </Box>

        {level?.map((level) => (
          <LevelBasedSection title={level} key={level} />
        ))}
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
        isBtnLoading={isBtnLoading}
      />
    </Box>
  );
};

export default AllCourses;
