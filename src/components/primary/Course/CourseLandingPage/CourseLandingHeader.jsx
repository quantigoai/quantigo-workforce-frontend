import { Alert, Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import LanguageChip from '../LanguageChip';
import CategoryChip from '../CategoryChip';
import LevelChip from '../CourseCardActionLebel/LevelChip';
import CourseContent from './CourseContent';
import { Link, useNavigate } from 'react-router-dom';
import CourseHeaderTitle from './CourseHeaderTitle';
import editCourseIcon from '../../../../assets/images/courses/editCourse.svg';
import EditCourseModal from '../CreateCourseModal/EditCourseModal';
import useCourseManagement from '../hooks/createCourseHook/useCourseMangement';
import useCourseDetails from '../hooks/courseDetailshooks/useCourseDetails';
import CourseDeleteModal from '../../../primary/Course/CourseDetailsPage/CourseDeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import { enrollACourse } from '../../../../features/slice/courseSlice';
import { updateUserEnrollCourse } from '../../../../features/slice/userSlice';
import CourseSubmitReviewModal from './CourseSubmitReviewModal';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CertificatePdf from '../Certificate/CertificatePdf';
const boxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  width: '100%',
};
const btnStyle = {
  textTransform: 'none',
  borderRadius: '8px',
  backgroundColor: '#2E58FF',
  padding: '10px 24px',
  color: '#fff',
  height: '40px',
  '&:hover': { backgroundColor: '#244EF5' },
  '&:disabled': { backgroundColor: '#B6C9F0', color: '#FFFFFF' },
};
const CourseLandingHeader = () => {
  const screenSize = window.innerWidth;
  const navigate = useNavigate();
  // const { course, courseChapter, courseChapters } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isEnrollAble, enrolmentMessage } = useSelector((state) => state.course);

  const {
    skill,
    course,
    open,
    handleOpen,
    handleClose,
    onSubmit,
    preRequisiteCourses,
    handleChange_Pre_Requisite_Course,
    skills,
    handleChangeSkills,
    coverImage,
    removeImage,
    handleImage,
    checkedFeatured,
    outcomes,
    setOutcomes,
    dateTime,
    isFeatured,
    setIsFeatured,
    handleChangeFeatured,
    handleDateTime,
    hub,
    handleChangeHubs,
  } = useCourseDetails();

  const handleRouteChange = () => {
    if (
      user.role === 'level_0_annotator' ||
      user.role === 'level_1_annotator' ||
      user.role === 'level_2_annotator' ||
      user.role === 'level_3_annotator' ||
      user.role === 'reviewer'
    ) {
      navigate(`/course-homepage/${course._id}`);
      !user.enrolledCourses.includes(course._id) &&
        dispatch(enrollACourse(course._id)).then((action) => {
          dispatch(updateUserEnrollCourse(action.payload.data.course._id));
        });
    } else {
      navigate(`/course-homepage/${course._id}`);
    }
  };

  let width = '90%';
  let height = '90%';
  if (screenSize >= 1500) {
    // Extra-large screens
    width = 400;
    height = 300;
  } else if (screenSize === 1440) {
    // Large screens
    width = 340;
    height = 248;
  } else if (screenSize >= 992) {
    // Large screens
    width = 300;
    height = 200;
  }

  return (
    <Box sx={boxStyle}>
      <Box sx={{ width: { xxl: '72%', xl: '68%', lg: '80%' }, paddingY: '16px' }}>
        <Box sx={{ width: { xxl: '100%', xl: '80%', lg: '95%' } }}>
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ paddingRight: '6px' }}>
                  <LanguageChip language={course.language || ''} />
                </Box>
                <Box sx={{ paddingRight: '6px' }}>
                  <CategoryChip category={course.category || ''} />
                </Box>
                <Box sx={{ padding: '0%' }}>
                  <LevelChip level={course.level || ''} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4}>
              {user.role === 'admin' || user.role === 'reviewer' ? (
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <Button
                    // disabled={isLoading}

                    sx={{
                      textTransform: 'none',
                      width: '150px',
                      height: '40px',
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      border: '1px solid #F4F7FE',
                      // color: "red",
                      //   "&:hover": {
                      //     backgroundColor: "#FF9A45",
                      //     color: "#1D1D1D",
                      //   },
                    }}
                    onClick={handleOpen}
                    // onClick={() => handleNavigation(customButton)}
                  >
                    <img src={editCourseIcon} />
                    <span style={{ paddingLeft: '8px' }}>
                      <Typography variant="wpf_p4_medium" sx={{ color: '#2D58FF' }}>
                        Edit Course
                      </Typography>
                    </span>
                  </Button>
                  {/* <Button onClick={handleOpen}>Create Course</Button> */}
                  <EditCourseModal
                    open={open}
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                    course={course}
                    preRequisiteCourses={preRequisiteCourses}
                    handleChange_Pre_Requisite_Course={handleChange_Pre_Requisite_Course}
                    skills={skills}
                    handleChangeSkills={handleChangeSkills}
                    coverImage={coverImage}
                    removeImage={removeImage}
                    handleImage={handleImage}
                    // isLoading={isLoading}
                    skill={skill}
                    dateTime={dateTime}
                    checkedFeatured={checkedFeatured}
                    handleChangeFeatured={handleChangeFeatured}
                    outcomes={outcomes}
                    setOutcomes={setOutcomes}
                    handleDateTime={handleDateTime}
                    isFeatured={isFeatured}
                    setIsFeatured={setIsFeatured}
                    hub={hub}
                    handleChangeHubs={handleChangeHubs}
                  />

                  <CourseDeleteModal
                    course={course}
                    // handleDeleteCourse={handleDeleteCourse}
                  />
                </Box>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <Box sx={{ paddingY: '12px' }}>
              <CourseHeaderTitle course={course} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderTop: '1px solid #EAECF0', borderBottom: '1px solid #EAECF0', marginTop: '10px' }}>
          <CourseContent course={course} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px', mb: '16px' }}>
          <Button disabled={!isEnrollAble} sx={btnStyle} onClick={handleRouteChange}>
            {(user.role === 'level_0_annotator' &&
              user.completedCourses.includes(course._id) &&
              !user.completedCourses.includes(course._id)) ||
            (user.role === 'level_1_annotator' && !user.completedCourses.includes(course._id)) ||
            (user.role === 'level_2_annotator' && !user.completedCourses.includes(course._id)) ||
            (user.role === 'level_3_annotator' && !user.completedCourses.includes(course._id)) ||
            (user.role === 'reviewer' && user.completedCourses.includes(course._id))
              ? 'Enroll Now'
              : 'View Course'}
          </Button>

          {user.completedCourses.includes(course._id) && (
            // <PDFDownloadLink document={<CertificatePdf />} fileName="Certificate">
            // </PDFDownloadLink>
            // <Button onClick={handleDownloadCertificate} disabled={!isEnrollAble} sx={{ ...btnStyle, ml: 1 }}>
            //   Download Certificate
            // </Button>
            <Link to="/certificate" target="blank">
              <Button disabled={!isEnrollAble} sx={{ ...btnStyle, ml: 1 }}>
                Download Certificate
              </Button>
            </Link>
          )}
          {/* {user.completedCourses.includes(course._id) && (
          <Button 
          disabled={!isEnrollAble} 
          sx={{ ...btnStyle, ml: 1 }} onClick={handleRouteChange}>
            Submit Review
          </Button>
          )} */}
          <CourseSubmitReviewModal user={user} course={course} isEnrollAble={isEnrollAble} />
          <Typography variant="wpf_p3_regular" color={'grey.550'} sx={{ marginLeft: '20px' }}>
            <span style={{ color: '#344054', fontWeight: '600' }}>{course.totalCurrentEnrolledStudents}</span> already
            enrolled
          </Typography>
        </Box>
        {!isEnrollAble && (
          <Box>
            <Alert
              variant="filled"
              severity="warning"
              sx={{
                border: '1px solid #F2A200',
                color: 'warning.400',
                backgroundColor: 'warning.100',
                borderRadius: '6px',
                // height: "48px",
                // fontSize: "12px",
              }}
            >
              {enrolmentMessage}
            </Alert>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: { xxl: '390px', xl: '340px', lg: '300px' },
          height: { xxl: '270px', xl: '40px', lg: '200px' },
        }}
      >
        <img
          style={{
            width,
            height,
            borderRadius: '8px',
            // width: { xxl: '390px', xl: '340px', lg: '300px' },
            // height: { xxl: '270px', xl: '40px', lg: '200px' },
          }}
          src={course.images}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default CourseLandingHeader;
