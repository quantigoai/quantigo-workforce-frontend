/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/QuizShow.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 3:06:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useToaster from '../../../customHooks/useToaster';
import { submitQuizById } from '../../../features/slice/quizSlice';
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
const QuizShow = () => {
  const { quiz, isLoading } = useSelector((state) => state.quiz);
  // console.log('🚀 ~ QuizShow ~ quiz:', quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [data, setData] = React.useState({});
  const { isLightTheme } = useSelector((state) => state.theme);
  const toast = useToaster();
  const { course } = useSelector((state) => state.course);

  const [tempData, setTempData] = React.useState({});

  const handleQuizResult = (
    possibleIndex,
    id,
    possibleText,
    isFromRadio = true,
  ) => {
    // console.log('🚀 ~ handleQuizResult ~ possibleIndex:', possibleIndex);
    // console.log('🚀 ~ handleQuizResult ~ id:', id);
    // console.log('🚀 ~ handleQuizResult ~ possibleText:', possibleText);
    // const x = {
    //   [id]: {

    //     submittedIndex: possibleIndex,
    //     submittedText: possibleText,
    //   },
    // };
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

  const handleQuizResultTextField = (textValue, id) => {
    const x = {
      [id]: {
        submittedIndex: null,
        submittedText: textValue,
      },
    };

    setData((prev) => ({
      ...prev,
      ...x,
    }));
  };

  // const handleQuizResult = (possibleAnswer, id) => {
  //   const x = {};
  //   x[id] = possibleAnswer;
  //   setData((prev) => Object.assign(prev, x));
  // };
  // const handleQuizResultTextField = (textValue, id) => {
  //   console.log("🚀 ~ handleQuizResultTextField ~ id:", id);
  //   console.log("🚀 ~ handleQuizResultTextField ~ textValue:", textValue);
  //   const x = {};
  //   x[id] = {
  //     submittedText : textValue,
  //     submittedIndex :
  //   };
  //   // setData((prev) => Object.assign(prev, x));
  // };

  const handleQuizEdit = () => {
    navigate('/edit-quiz');
  };

  const handleQuizSubmit = () => {
    const bulkData = {
      data,
      id: quiz._id,
    };
    console.log('🚀 ~ handleQuizSubmit ~ bulkData:', bulkData);
    dispatch(submitQuizById(bulkData)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger('Quiz Submitted', 'success');
        // TODO : Redirect to quiz result page
        // navigate(`/course-details/${course._id}/quiz-result`);
        // dispatch(
        //   manuallySetCourseChapterResult(
        //     action.payload.data.isPreviouslyAttempted,
        //   ),
        // );
        // dispatch(updateUserCompletedCourse(action.payload.data.user));
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
            <Typography variant="wpf_p3_regular">
              Duration : {quiz.duration}
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
          <Box sx={{ paddingTop: '20px' }}>
            {Object.keys(quiz).length &&
              quiz?.questionAndAnswer.map((item, i) => (
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
                      <Grid
                        xs={12}
                        sx={{
                          paddingLeft: '2%',
                          paddingRight: '2%',
                          // paddingBottom: "1%",
                          paddingTop: '1%',
                        }}
                      >
                        <Typography
                          variant="wpf_p2_semiBold"
                          sx={{ color: '#090080' }}
                        >
                          Q{i + 1}. {item.question.questionText} ?
                        </Typography>
                      </Grid>
                      {item.questionType === 'imageAndOptions' && (
                        <Grid
                          xs={12}
                          sx={{
                            paddingLeft: '2%',
                            paddingRight: '2%',
                            // paddingBottom: "1%",
                            paddingTop: '1%',
                          }}
                        >
                          <img
                            src={item.question.questionImage}
                            height={224}
                            width={750}
                          />
                        </Grid>
                      )}
                      <Grid item xs={12} sx={{ paddingLeft: '2%' }}>
                        <RadioGroup
                        //  value={value}
                        >
                          {item.possibleAnswers.map((posibleAnswer, i) => (
                            <>
                              <FormControlLabel
                                key={i}
                                onChange={() => handleQuizResult(i, item._id)}
                                value={posibleAnswer}
                                control={<Radio />}
                                label={posibleAnswer}
                                // label= { item.questionType === "imageAndOptions" ?  :posibleAnswer}
                              />
                            </>
                          ))}
                        </RadioGroup>
                      </Grid>
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
                                Label
                              </Typography>
                              <PdTextField
                                fullWidth
                                // variant='outlined'
                                placeholder="Write your thougts..."
                                // onChange={(e) => handleQuizResultTextField(e.target.value, item._id)}
                                onChange={(e) =>
                                  handleQuizResult(
                                    null,
                                    item._id,
                                    e.target.value,
                                    false,
                                  )
                                }
                              />
                            </Box>
                          </>
                        )}
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
                // onClick={handleQuizEdit}

                variant="contained"
              >
                Edit Quiz
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

      {/* <Paper elevation={0} sx={{ width: "100%" }}>
        <Grid
          container
          sx={{
            overflowX: 'hidden',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            // height: "900px",
          }}
        >
          <Grid
            container
            xs={12}
            sx={{ padding: '2%', justifyContent: 'center' }}
          >
            <Typography variant="h5" sx={{ color: '#090080' }}>
              {' '}
              {quiz.name}
            </Typography>
          </Grid>
          <Grid container sx={{ padding: '2%' }}>
            <Typography variant="h5" sx={{ color: '#090080' }}>
              {' '}
              Quiz Instruction
            </Typography>
          </Grid>

          {Object.keys(quiz).length &&
            quiz?.questionAndAnswer.map((item, i) => (
              <Box>
                <Box key={i}>
                  <Grid
                    xs={12}
                    sx={{
                      paddingLeft: '2%',
                      paddingRight: '2%',
                      paddingBottom: '1%',
                      paddingTop: '1%',
                    }}
                  >
                    <Typography variant="h5" sx={{ color: '#090080' }}>
                      Q{i + 1}. {item.question.questionText} ?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ paddingLeft: '2%' }}>
                    <RadioGroup
                    //  value={value}
                    >
                      {item.possibleAnswers.map((posibleAnswer, i) => (
                        <>
                          <FormControlLabel
                            key={i}
                            onChange={() => handleQuizResult(i, item._id)}
                            value={posibleAnswer}
                            control={<Radio />}
                            label={posibleAnswer}
                          />
                        </>
                      ))}
                      {item.isTextFieldEnabled && (
                        <PdTextField
                          variant="outlined"
                          // onChange={(e) => handleQuizResultTextField(e.target.value, item._id)}
                          onChange={(e) =>
                            handleQuizResult(null, item._id, e.target.value)
                          }
                        />
                      )}
                    </RadioGroup>
                  </Grid>
                </Box>
              </Box>
              // <Box key={i}>
              //   <Grid
              //     xs={12}
              //     sx={{
              //       paddingLeft: "2%",
              //       paddingRight: "2%",
              //       paddingBottom: "1%",
              //       paddingTop: "1%",
              //     }}
              //   >
              //     <Typography variant='h5' sx={{ color: "#090080" }}>
              //       Q{i + 1}. {item.question} ?
              //     </Typography>
              //   </Grid>
              //   <Grid item xs={12} sx={{ paddingLeft: "2%" }}>
              //     <RadioGroup
              //     //  value={value}
              //     >
              //       {item.possibleAnswers.map((posibleAnswer, i) => (
              //         <>
              //           <FormControlLabel
              //             key={i}
              //             onChange={() => handleQuizResult(posibleAnswer, item._id)}
              //             value={posibleAnswer}
              //             control={<Radio />}
              //             label={posibleAnswer}
              //           />
              //         </>
              //       ))}
              //     </RadioGroup>
              //   </Grid>
              // </Box>
            ))}
        </Grid>

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
                // onClick={handleQuizEdit}

                variant="contained"
              >
                Edit Quiz
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
      </Paper> */}
    </>
  );
};

export default QuizShow;
