import { Box, Button, Grid, Typography } from '@mui/material';
import parse from 'html-react-parser';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import nextIcon from '../../../../assets/images/NextIcon.svg';
import prevIcon from '../../../../assets/images/PrevIcon.svg';
import { setActiveChapterIndex } from '../../../../features/slice/activePathSlice';
import { getAChapterById } from '../../../../features/slice/courseSlice';
import { getAQuizById } from '../../../../features/slice/quizSlice';
import ChapterDeleteModal from '../../CourseNew/ChapterDeleteModal';
import useCourseDetails from '../hooks/courseDetailshooks/useCourseDetails';
import ChapterHeaderMenuIndex from './ChapterHeaderMenuIndex';

const ChapterViewIndex = () => {
  const {
    course,
    durationTime,
    isLoading,
    isInContent,
    isLightTheme,
    handleChapterClick,
    courseChapters,
    courseChapter,
    setDurationTime,
    setIsInContent,
  } = useCourseDetails();
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleChapterChangePre = () => {
    const activeChapterId = courseChapters.find((chapter, index) => {
      return index === activeChapterIndex - 1;
    });
    dispatch(setActiveChapterIndex(activeChapterIndex - 1));
    dispatch(getAChapterById(activeChapterId._id)).then(() => {});
  };
  const handleChapterChangeNext = () => {
    const activeChapterId = courseChapters.find((chapter, index) => {
      return index === activeChapterIndex + 1;
    });
    dispatch(setActiveChapterIndex(activeChapterIndex + 1));
    dispatch(getAChapterById(activeChapterId._id)).then(() => {});
  };

  const handleEditChapter = () => {
    // dispatch(setActiveChapterIndex(activeChapterIndex));
    dispatch(getAChapterById(courseChapter._id)).then(() => {
      navigate(`/update-chapter/${courseChapter._id}`);
    });
  };
  const handleDeleteChapter = () => {};
  const handleStartQuiz = () => {
    console.log(courseChapter);
    dispatch(getAQuizById(courseChapter.quiz.id)).then(() => {
      navigate(`/test-quiz-show`);
    });
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'neutral.N000',
          height: '90%',
        }}
      >
        <Box
          sx={{
            backgroundColor: isLightTheme ? '#F1F5F9' : '',
            height: { xl: '23%', xxl: '18%', lg: '25%' },
            // paddingLeft: "10%",
            // paddingRight: "10%",
            paddingTop: '1%',
            paddingBottom: '3%',
            borderBottom: '2px solid ##F8FAFC',
          }}
        >
          <Grid container sx={{ paddingLeft: '9.5%', paddingRight: '10%' }}>
            <Grid item xs={10}>
              <ChapterHeaderMenuIndex />
            </Grid>
            {(role === 'admin' || role === 'trainer') && (
              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button
                  sx={{
                    borderRadius: '2px',
                    // height:"10px"
                  }}
                  onClick={() => handleEditChapter()}
                >
                  {' '}
                  <i className="ri-edit-line"></i>
                </Button>
                {/* <ChapterDeleteModal /> */}
                <ChapterDeleteModal courseChapter={courseChapter} />
              </Grid>
            )}
          </Grid>

          <Grid container sx={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <Typography variant="wpf_h4_Bold">{courseChapter.title}</Typography>
          </Grid>
          <Grid container sx={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <Typography variant="wpf_p3_regular">
              {courseChapter.description?.length > 100
                ? courseChapter.description?.substring(0, 200) + '.....'
                : courseChapter.description}
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            // height: "82%",
            height: { xl: '77%', xxl: '82%', lg: '75%' },
            paddingLeft: '10%',
            paddingRight: '10%',
            overflow: 'auto',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              width: '0.4em',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }}
        >
          <Grid container sx={{}}>
            {/* <Typography> {courseChapter._id}</Typography> */}
            <Box
              // xs={12}
              sx={{
                // paddingLeft: "3%",
                // paddingRight: "3%",
                backgroundColor: 'red',
                // display: "flex",
                // alignItems: "center",
                width: '100%',
              }}
            >
              {courseChapter.content && parse(courseChapter.content)}
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '10%',
          backgroundColor: 'neutral.N000',
          borderTop: '1px solid #F1F5F9',
          justifyContent: 'center',
          paddingLeft: '10%',
          paddingRight: '11%',
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Button
              disabled={activeChapterIndex === 0 ? true : false}
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                backgroundColor: '#F4F7FE',
                height: {
                  lg: '30px',
                  xl: '40px',
                  xxl: '40px',
                },
                // marginLeft: "13px",
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
                lineHeight: '20px',
                // width: {
                //   lg: "128px",
                //   xl: "128px",
                //   xxl: "140px",
                // },
                width: '155px',
                color: '#2E58FF',
                '&:hover': {
                  // background: "#244EF5",
                  border: '1px solid #2E58FF',
                },
                '&:disabled': {
                  background: '#F4F7FE',
                  color: '#B6C9F0',
                },
                padding: '16px 10px',
              }}
              onClick={() => handleChapterChangePre()}
            >
              <img src={prevIcon} />
              <span style={{ marginLeft: '8px' }}>Prev. Chapter</span>
            </Button>
            <Button
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                backgroundColor: '#2E58FF',
                height: {
                  lg: '30px',
                  xl: '40px',
                  xxl: '40px',
                },
                marginLeft: '13px',
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
                lineHeight: '20px',
                // width: {
                //   lg: "128px",
                //   xl: "128px",
                //   xxl: "140px",
                // },
                color: 'white',
                '&:hover': {
                  background: '#244EF5',
                },
                '&:disabled': {
                  background: '#B6C9F0',
                  color: '#FFFFFF',
                },
                padding: '16px 10px',
              }}
              disabled={
                activeChapterIndex === courseChapters.length - 1 ? true : false
              }
              onClick={() => handleChapterChangeNext()}
            >
              <span style={{ marginRight: '8px' }}>Next Chapter</span>
              <img src={nextIcon} />
            </Button>
          </Grid>

          <Grid item xs={6} container sx={{ justifyContent: 'flex-end' }}>
            <Button
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                backgroundColor: '#36B37E',
                height: {
                  lg: '30px',
                  xl: '40px',
                  xxl: '40px',
                },
                marginLeft: '13px',
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
                lineHeight: '20px',
                width: {
                  lg: '128px',
                  xl: '128px',
                  xxl: '140px',
                },
                color: 'white',
                '&:hover': {
                  background: '#244EF5',
                },

                padding: '16px 10px',
              }}
              onClick={handleStartQuiz}
            >
              Start Quiz
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChapterViewIndex;
