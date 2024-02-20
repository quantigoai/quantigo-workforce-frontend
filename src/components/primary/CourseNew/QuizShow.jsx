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
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  RadioGroup,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useToaster from '../../../customHooks/useToaster';
const PdTextField = styled(TextField)(() => ({
  borderRadius: '5px',

  '& .MuiOutlinedInput-root': {
    height: '35px',
    fontSize: '14px',
    border: '2px solid #E6ECF5 !important',
    borderRadius: '8px',

    '@media (max-width: 1439px)': {
      fontSize: '12px',
    },
    '@media (mix-width: 1920px)': {
      fontSize: '14px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px 0px 0px 8px',
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
  console.log('🚀 ~ QuizShow ~ quiz:', quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [data, setData] = React.useState({});

  const toast = useToaster();
  const { course } = useSelector((state) => state.course);

  const handleQuizResult = (possibleIndex, id, possibleText) => {
    console.log('🚀 ~ handleQuizResult ~ possibleIndex:', possibleIndex);
    console.log('🚀 ~ handleQuizResult ~ id:', id);
    console.log('🚀 ~ handleQuizResult ~ possibleText:', possibleText);
    const x = {
      [id]: {
        submittedIndex: possibleIndex,
        submittedText: '',
      },
    };

    setData((prev) => ({
      ...prev,
      ...x,
    }));
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
    // dispatch(submitQuizById(bulkData)).then((action) => {
    //   if (action.payload?.status === 200) {
    //     toast.trigger("Quiz Submitted", "success");
    //     navigate(`/course-details/${course._id}/quiz-result`);
    //     dispatch(manuallySetCourseChapterResult(action.payload.data.isPreviouslyAttempted));
    //     dispatch(updateUserCompletedCourse(action.payload.data.user));
    //   } else {
    //     toast.trigger("Quiz can not submit", "error");
    //   }
    // });
  };

  return (
    <>
      <Paper elevation={0} sx={{ width: '100%' }}>
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
      </Paper>
    </>
  );
};

export default QuizShow;
