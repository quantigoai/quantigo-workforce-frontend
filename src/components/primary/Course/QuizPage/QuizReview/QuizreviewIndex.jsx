/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/QuizShow.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 3:06:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PendingIcon from '@mui/icons-material/Pending';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useToaster from '../../../../../customHooks/useToaster';
import { getSingleSubmittedQuiz, getSubmittedQuiz, submitReviewQuiz } from '../../../../../features/slice/quizSlice';
import { capitalizeFirstLetter } from '../../../../../helper/capitalizeFirstWord';

const PdTextField = styled(TextField)(() => ({
  borderRadius: '5px',

  '& .MuiOutlinedInput-root': {
    height: '35px',
    fontSize: '14px',
    // border: "2px solid #E6ECF5 !important",
    borderRadius: '8px',

    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 0px',
  },
  '& .MuiOutlinedInput-notchedOutline ': {},
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#56627a',
  },
  '& .MuiFormHelperText-root': {
    color: '#12B76A',
    '&.Mui-error': {
      color: '#F04438',
    },
  },
}));
const QuizreviewIndex = () => {
  const { quiz, isLoading } = useSelector((state) => state.quiz);
  // console.log('🚀 ~ QuizShow ~ quiz:', quiz);
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [data, setData] = React.useState({});
  const [reviewerSubmissionFeedback, setReviewerSubmissionFeedback] = React.useState('');

  const { isLightTheme } = useSelector((state) => state.theme);
  const toast = useToaster();
  const { course } = useSelector((state) => state.course);
  const [submittedId, setSubmittedId] = React.useState();
  const [tempData, setTempData] = React.useState({});
  const [submitAnswer, setSubmitAnswer] = React.useState([]);
  const [quizQuestions, setQuizQuestions] = React.useState([]);

  const handleQuizResult = (possibleIndex, id, possibleText, isFromRadio = true) => {
    isFromRadio
      ? setData((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            submittedIndex: possibleIndex,
          },
        }))
      : setData((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            submittedText: possibleText,
          },
        }));

    // setData((prev) => ({
    //   ...prev,
    //   ...x,
    // }));
  };

  useEffect(() => {
    dispatch(getSingleSubmittedQuiz(id)).then((action) => {
      console.log(action.payload.data);
      setQuizQuestions(action.payload.data.submission.questionAndAnswer);
      setSubmittedId(action.payload.data.submission._id);
    });
  }, []);

  const handleQuizResultTextField = (textValue, id, isFromRadio = true) => {
    console.log('🚀 ~ handleQuizResultTextField ~ isFromRadio:', isFromRadio);

    isFromRadio
      ? setData((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            questionStatus: textValue,
          },
        }))
      : setData((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            reviewerFeedback: textValue,
          },
        }));
  };

  const handleReviewerSubmissionFeedback = (e) => {
    setReviewerSubmissionFeedback(e.target.value);
  };

  const handleQuizEdit = () => {
    navigate('/edit-quiz');
  };

  const handleQuizSubmit = () => {
    const BodyData = {
      reviewerSubmissionFeedback: reviewerSubmissionFeedback,
      questionAndAnswer: data,
    };
    const finalData = {
      BodyData,
      id: submittedId,
    };
    console.log('🚀 ~ handleQuizSubmit ~ finalData:', finalData);
    // console.log(reviewerSubmissionFeedback);

    dispatch(submitReviewQuiz(finalData)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger('Quiz Review Submitted', 'success');
      } else {
        toast.trigger('Quiz can not submit', 'error');
      }
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
          <Grid container sx={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <Typography variant="wpf_h4_Bold">{quiz.name}</Typography>
          </Grid>
          <Grid container sx={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <Typography variant="wpf_p3_regular">Duration : {quiz.duration}</Typography>
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
          <Box
            sx={{
              borderTop: '2px solid #E2E8F0',
              borderRadius: '8px',
              backgroundColor: '#fff',
              padding: '20px',
            }}
          >
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: 'neutral.N300',
              }}
            >
              Reviewer Submission Feedback
            </Typography>
            <PdTextField
              fullWidth
              // variant='outlined'
              placeholder="Write your thougts..."
              onChange={(e) => handleReviewerSubmissionFeedback(e)}
              // onChange={(e) => handleQuizResult(null, item._id, e.target.value, false)}
            />
          </Box>
          <Box sx={{ paddingTop: '20px' }}>
            {quizQuestions.length &&
              // quiz?.questionAndAnswer.map((item, i) => (
              quizQuestions.map((item, i) => (
                <>
                  <Box>
                    <Box
                      key={i}
                      sx={{
                        border: '2px solid #E2E8F0',
                        borderRadius: '8px',
                        mb: '50px',
                        backgroundColor: isLightTheme ? '#F1F5F9' : '',
                      }}
                    >
                      <Grid container>
                        <Grid
                          xs={8}
                          sx={{
                            paddingLeft: '2%',
                            paddingRight: '2%',
                            // paddingBottom: "1%",
                            paddingTop: '1%',
                          }}
                        >
                          <Typography variant="wpf_p2_semiBold" sx={{ color: '#090080' }}>
                            Q{i + 1}. {item.question.questionText} ?
                          </Typography>
                        </Grid>
                        <Grid
                          xs={4}
                          sx={{
                            paddingLeft: '2%',
                            paddingRight: '2%',
                            // paddingBottom: "1%",
                            paddingTop: '1%',
                          }}
                        >
                          {(item.isTextFieldEnabled && user.role === 'admin') || user.role === 'reviewer' ? (
                            <>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={(e) => handleQuizResultTextField(e.target.value, item._id)}
                              >
                                <FormControlLabel value="accepted" control={<Radio />} label="Accept" />
                                <FormControlLabel value="rejected" control={<Radio />} label="Reject" />
                              </RadioGroup>
                              {/* <Button>
                                <CloseIcon />
                              </Button>
                              <Button>
                                <AssignmentTurnedInIcon />
                              </Button> */}
                            </>
                          ) : (
                            <>
                              <Typography
                                variant="wpf_h6_semiBold"
                                sx={{ color: item.questionStatus === 'accepted' ? '#36B37E' : 'red' }}
                              >
                                {' '}
                                {capitalizeFirstLetter(item.questionStatus)}
                              </Typography>

                              {/* <AssignmentTurnedInIcon /> */}
                            </>
                          )}
                        </Grid>
                      </Grid>
                      {item.questionType === 'imageAndOptions' ? (
                        <>
                          <Grid container>
                            <Grid xs={6} sx={{ paddingLeft: '2%', paddingTop: '2%' }}>
                              {item.possibleAnswers.map((posibleAnswer, i) => (
                                <Grid key={i} xs={12}>
                                  <FormControlLabel
                                    key={i}
                                    onChange={() => handleQuizResult(i, item._id)}
                                    value={i}
                                    // control={<Radio />}
                                    control={<Radio checked={item.userGivenCorrectAnswerIndex === i} />}
                                    label={posibleAnswer}
                                    // label={item.questionType === "imageInOptions" ? <img /> : posibleAnswer}
                                  />
                                </Grid>
                              ))}
                            </Grid>

                            <Grid
                              xs={6}
                              sx={{
                                paddingLeft: '2%',
                                paddingRight: '2%',
                                // paddingBottom: "1%",
                                paddingTop: '1%',
                              }}
                            >
                              {item.question.questionImage.endsWith('.jpeg') && (
                                <img
                                  src={item.question.questionImage}
                                  style={{ borderRadius: '8px' }}
                                  height={224}
                                  width="100%"
                                />
                              )}
                              <>
                                {/* for Audio */}
                                {/* <audio controls>
                                  <source src='horse.ogg' type='audio/ogg' />
                                  <source
                                    src='https://soundcloud.com/51beats/sets/51bts073-joao-ceser-brz?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252F51beats%252Fsets%252F51bts073-joao-ceser-brz'
                                    type='audio/mpeg'
                                  />
                                  Your browser does not support the audio element.
                                </audio> */}
                                {item.question.questionImage.endsWith('.mp4') && (
                                  <video
                                    width="100%"
                                    height="240"
                                    controls
                                    style={{ borderRadius: '8px' }}
                                    src="https://storage.googleapis.com/quantigo-workforce-image-storage/test%20video/production_id_4124024%20(2160p).mp4"
                                  ></video>
                                )}
                              </>
                            </Grid>
                          </Grid>
                        </>
                      ) : (
                        <>
                          {' '}
                          <RadioGroup
                          //  value={value}
                          >
                            <Grid container sx={{ paddingLeft: '2%', paddingBottom: '2%' }}>
                              {item.possibleAnswers.map((posibleAnswer, i) => (
                                <>
                                  {item.questionType === 'imageInOptions' ? (
                                    <>
                                      <Grid item xs={3} sx={{ paddingRight: '2%', borderRadius: '8px' }}>
                                        <Box
                                          sx={{
                                            border: '1px solid #E2E8F0',
                                            // borderRadius: "8px",
                                          }}
                                        >
                                          {/* <Grid item> */}
                                          <Box sx={{}}>
                                            {posibleAnswer.endsWith('.jpeg') ? (
                                              <>
                                                <img
                                                  src={posibleAnswer}
                                                  style={{ borderRadius: '8px' }}
                                                  height={160}
                                                  width="100%"
                                                />
                                              </>
                                            ) : posibleAnswer.endsWith('.mpeg') ? (
                                              <>
                                                <audio height={160} width="60%" src={posibleAnswer} controls></audio>
                                              </>
                                            ) : (
                                              <>
                                                <iframe
                                                  height={160}
                                                  src={posibleAnswer}
                                                  alt=""
                                                  width="100%"
                                                  style={{ borderRadius: '8px' }}
                                                ></iframe>
                                              </>
                                            )}
                                          </Box>
                                          {/* </Grid> */}
                                          {/* <Grid item> */}
                                          <Box sx={{ backgroundColor: '#fff', paddingLeft: '5%', borderRadius: '8px' }}>
                                            <FormControlLabel
                                              key={i}
                                              onChange={() => handleQuizResult(i, item._id)}
                                              value={i}
                                              control={<Radio checked={item.userGivenCorrectAnswerIndex === i} />}
                                              label={
                                                i === 0
                                                  ? 'Option A'
                                                  : i === 1
                                                  ? 'Option B'
                                                  : i === 2
                                                  ? 'Option C'
                                                  : 'Option D'
                                              }
                                            />
                                          </Box>
                                        </Box>
                                        {/* </Grid> */}
                                      </Grid>
                                    </>
                                  ) : (
                                    <>
                                      {/* <Box style={{ display: "flex", flexDirection: "column" }}> */}
                                      <Grid xs={12}>
                                        <FormControlLabel
                                          key={i}
                                          // onChange={() => handleQuizResult(i, item._id)}
                                          value={i}
                                          control={<Radio checked={item.userGivenCorrectAnswerIndex === i} />}
                                          label={posibleAnswer}
                                          // label={item.questionType === "imageInOptions" ? <img /> : posibleAnswer}
                                        />
                                      </Grid>

                                      {/* </Box> */}
                                    </>
                                  )}
                                </>
                              ))}
                            </Grid>
                          </RadioGroup>
                        </>
                      )}

                      <Grid item xs={12}>
                        {item.isTextFieldEnabled && (
                          <>
                            <Box
                              sx={{
                                borderTop: '2px solid #E2E8F0',
                                borderRadius: '8px',
                                backgroundColor: '#fff',
                                padding: '20px',
                              }}
                            >
                              <Typography
                                variant="wpf_h7_medium"
                                sx={{
                                  mb: 0,
                                  color: 'neutral.N300',
                                }}
                              >
                                User Given Text
                              </Typography>
                              <PdTextField
                                fullWidth
                                disabled
                                // variant='outlined'
                                placeholder="Write your thougts..."
                                defaultValue={item.userGivenText}
                                // onChange={(e) => handleQuizResultTextField(e.target.value, item._id)}
                                // onChange={(e) => handleQuizResult(null, item._id, e.target.value, false)}
                              />
                            </Box>
                          </>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <>
                          <Box
                            sx={{
                              borderTop: '2px solid #E2E8F0',
                              borderRadius: '8px',
                              backgroundColor: '#fff',
                              padding: '20px',
                            }}
                          >
                            <Typography
                              variant="wpf_h7_medium"
                              sx={{
                                mb: 0,
                                color: 'neutral.N300',
                              }}
                            >
                              Reviewer Feedback
                            </Typography>
                            <PdTextField
                              fullWidth
                              // variant='outlined'
                              placeholder="Write your thougts..."
                              onChange={(e) => handleQuizResultTextField(e.target.value, item._id, false)}
                            />
                          </Box>
                        </>
                      </Grid>
                    </Box>
                  </Box>
                </>
              ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '9%',
          backgroundColor: 'neutral.N000',
          borderTop: '1px solid #F1F5F9',
          justifyContent: 'center',
          paddingLeft: '10%',
          paddingRight: '11%',
        }}
      >
        <Grid
          container
          gap={2}
          sx={{
            justifyContent: 'right',
            paddingRight: '3%',
            paddingTop: '2%',
            paddingBottom: '2%',
          }}
        >
          {user.role === 'trainer' || user.role === 'admin' ? (
            <>
              {' '}
              <Button
                disabled={isLoading}
                sx={{
                  borderRadius: '8px',
                  width: '150px',
                  backgroundColor: '#2D58FF',
                  color: '#FFFFFF',
                  '&:hover': {
                    // backgroundColor: "#FF9A45",
                    color: '#1D1D1D',
                  },
                }}
                onClick={handleQuizSubmit}
                // onClick={handleQuizEdit}

                variant="contained"
              >
                Submit Review
              </Button>
            </>
          ) : (
            <></>
          )}

          {user.role === 'trainer' || user.role === 'admin' ? (
            <></>
          ) : (
            <>
              <Button
                disabled={isLoading}
                sx={{
                  borderRadius: '2px',
                  width: '128px',
                  backgroundColor: '#2D58FF',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#FF9A45',
                    color: '#1D1D1D',
                  },
                }}
                onClick={handleQuizSubmit}
                variant="contained"
              >
                Submit
              </Button>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default QuizreviewIndex;
