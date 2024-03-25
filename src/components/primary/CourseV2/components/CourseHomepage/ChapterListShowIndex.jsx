/*
 * File           : ChapterListShowIndex.jsx
 * Project        : wmpfrontv2
 * Created Date   : Mo 25 Mar 2024 11:57:41
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Mon Mar 25 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { Box, Chip, Grid, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editIcon from '../../../../../assets/images/courses/EditIcon.svg';
import arrowIcon from '../../../../../assets/images/courses/arrowIcon.svg';

import { useNavigate } from 'react-router-dom';
import Rectangle from '../../../../../assets/images/courses/Rectangle 257.svg';
import { setActiveChapterIndex } from '../../../../../features/slice/activePathSlice';
import { getAChapterById } from '../../../../../features/slice/courseSlice';
import { getAllCourseChapterWithMark } from '../../../../../features/slice/quizSlice';
import ChapterProgressbar from './ChapterProgressbar';

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  gap: '14px',
  backgroundColor: 'red',
};
const accordionBoxNumberStyle = {
  backgroundColor: '#E2E8F0',
  padding: '2px',
  borderRadius: '99px',
  display: 'flex',
  width: '24px',
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center',
};
const ChapterListShowIndex = () => {
  const { courseChapters, course } = useSelector((state) => state.course);

  const { role } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [allCourseChapterWithMark, setAllCourseChapterWithMark] = useState([]);

  const [loadingForMarks, setLoadingForMarks] = useState(true);
  const { isLightTheme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

  const handleSubmittedQuiz = (courseChapter, index) => {
    navigate(`/submitted/${courseChapter?.quiz?.id}`);
  };

  useEffect(() => {
    setLoadingForMarks(true);
    course._id &&
      dispatch(getAllCourseChapterWithMark(course._id))
        .then((action) => {
          setAllCourseChapterWithMark(action.payload.data.chapters);
        })
        .finally(() => {
          setLoadingForMarks(false);
        });
  }, [course]);

  const handleChapter = (courseChapter, index) => {
    dispatch(setActiveChapterIndex(index));
    dispatch(getAChapterById(courseChapter._id)).then(() => {
      navigate(`/content/${courseChapter._id}`);
    });
    // if (
    //   user.role === "level_0_annotator" ||
    //   user.role === "level_1_annotator" ||
    //   user.role === "level_2_annotator" ||
    //   user.role === "level_3_annotator" ||
    //   user.role === "reviewer"
    // ) {
    //   !user.enrolledCourses.includes(courseChapter.rootCourse._id) &&
    //     dispatch(enrollACourse(courseChapter.rootCourse._id)).then((action) => {
    //       dispatch(updateUserEnrollCourse(action.payload.data._id));
    //     });
    // }
  };
  const handleCreateChapter = () => {
    navigate(`/create-chapter/${course._id}`);
  };
  const handleEditChapter = (id, index) => {
    dispatch(setActiveChapterIndex(index));
    dispatch(getAChapterById(id)).then(() => {
      // navigate(`/course-details/${course._id}/index`);
      // navigate(`/update-chapter/${id}`);
      navigate(`/course-new/update-chapter/${id}`);
    });
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: isLightTheme ? '#F8FAFC' : '',
          border: '2px solid #E2E8F0',
          borderRadius: '8px',
          maxHeight: 430,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '0', // Hide the scrollbar
          },
        }}
      >
        {loadingForMarks ? (
          <>
            <Box sx={{ width: '100%', height: '430px', padding: '1%' }}>
              <Skeleton />
              <Skeleton animation='wave' />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation='wave' />
              <Skeleton animation={false} />
              <Skeleton animation='wave' />
              <Skeleton animation={false} />
              <Skeleton animation={'wave'} />
              <Skeleton animation='wave' />
              <Skeleton animation={false} />
              <Skeleton animation='wave' />
              <Skeleton animation={false} />
              <Skeleton animation='wave' />
              <Skeleton animation={false} />
              <Skeleton animation={'wave'} />
            </Box>
            {/* <LoadingComponent /> */}
          </>
        ) : (
          <>
            {courseChapters &&
              courseChapters.map((item, index) => {
                const submissionStatus = allCourseChapterWithMark[index]?.submissionStatus || '';
                const score = allCourseChapterWithMark[index]?.score || 0;
                const passMarkThreshold = allCourseChapterWithMark[index]?.passMarkThreshold;

                return (
                  <Box
                    key={index}
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      borderTop: index === 0 ? '' : '1px solid #E2E8F0',
                      paddingTop: '1%',
                      paddingBottom: '1%',
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        sm={1}
                        md={1}
                        xl={0.78}
                        sx={{
                          backgroundColor: '',
                          alignItems: 'center',
                          justifyContent: 'center',
                          display: 'flex',
                        }}
                      >
                        {role === 'admin' || role === 'trainer' ? (
                          <>
                            <Box sx={accordionBoxNumberStyle}>
                              <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>{index + 1}</Typography>
                            </Box>
                          </>
                        ) : (
                          <>
                            {' '}
                            <ChapterProgressbar item={item} score={score} passMarkThreshold={passMarkThreshold} />
                          </>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={7} md={5.5} xl={8} sx={{ backgroundColor: '' }}>
                        <Typography
                          // color={"grey.600"}
                          variant='wpf_p3_semiBold'
                          onClick={() => handleChapter(item, index)}
                          sx={{ cursor: 'pointer' }}
                        >
                          {item.title}
                        </Typography>
                        <br />
                        <Typography variant='wpf_p4_regular' color={'grey.600'}>
                          {`Duration: ${item.estimatedTimeToRead} minutes`}
                        </Typography>

                        {!(role === 'admin' || role === 'trainer') && (
                          <>
                            <img src={Rectangle} />
                            <Typography variant='wpf_p4_regular' color={'grey.600'}>
                              {'  '} Quiz Score: {Math.floor(score)} %
                            </Typography>
                          </>
                        )}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={2.5}
                        xl={3.2}
                        sx={{
                          px: '2%',
                          alignItems: 'center',
                          justifyContent: 'end',

                          display: 'flex',
                        }}
                      >
                        <Box>
                          {role === 'admin' || role === 'trainer' ? (
                            <>
                              <Chip
                                sx={{
                                  height: {
                                    lg: '20px',
                                    xl: '24px',
                                    xxl: '28px',
                                    textTransform: 'none',
                                  },
                                  borderRadius: '32px',
                                  border: '2px solid  #E2E8F0',
                                  color: 'neutral.700',
                                  backgroundColor: isLightTheme ? '#F8FAFC' : '',
                                  fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
                                  fontFamily: 'Inter',
                                }}
                                label={'Submission'}
                                onClick={() => handleSubmittedQuiz(item, index)}
                              />
                            </>
                          ) : (
                            <>
                              {submissionStatus === 'notSubmitted' ? (
                                <></>
                              ) : (
                                <>
                                  {' '}
                                  <Chip
                                    sx={{
                                      height: {
                                        lg: '20px',
                                        xl: '24px',
                                        xxl: '28px',
                                        textTransform: 'none',
                                      },
                                      borderRadius: '32px',
                                      border: '2px solid  #E2E8F0',
                                      color: 'neutral.700',
                                      backgroundColor: isLightTheme ? '#F8FAFC' : '',
                                      fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
                                      fontFamily: 'Inter',
                                    }}
                                    label={'Submission'}
                                    onClick={() => handleSubmittedQuiz(item, index)}
                                  />
                                </>
                              )}
                            </>
                          )}
                        </Box>
                        <Box sx={{ paddingLeft: '5%' }}>
                          <Chip
                            sx={{
                              height: {
                                lg: '20px',
                                xl: '24px',
                                xxl: '28px',
                              },
                              borderRadius: '32px',
                              border: '2px solid  #E2E8F0',
                              color: 'neutral.700',
                              backgroundColor: isLightTheme ? '#F8FAFC' : '',
                              fontSize: { xl: '12px', xxl: '14px', lg: '10px' },
                              fontFamily: 'Inter',
                            }}
                            onClick={() => handleChapter(item, index)}
                            // key={item.value}
                            label={`Chapter ${index + 1}`}
                            // label='Chapter 01'
                          />
                        </Box>
                        <Box sx={{ paddingLeft: '5%' }}>
                          {role === 'admin' || role === 'trainer' ? (
                            <>
                              <img
                                src={editIcon}
                                alt=''
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleEditChapter(item._id, index)}
                              />
                            </>
                          ) : (
                            <>
                              <img
                                src={arrowIcon}
                                alt=''
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleChapter(item, index)}
                              />
                            </>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
          </>
        )}
      </Box>
      {/* <CourseChapterAccordion arr={arr} isLightTheme={isLightTheme} course={course} /> */}
    </>
  );
};

export default ChapterListShowIndex;
