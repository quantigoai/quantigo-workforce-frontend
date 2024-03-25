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
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  styled,
  useRadioGroup,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { submitQuizById } from "../../../../features/slice/quizSlice";
import { youtubeLinkEmbed } from "../../../../helper/youtubeLinkEmbed";
import QuizQuestionShowIndex from "../components/Quiz/QuizShow/QuizQuestionShowIndex";
import useToaster from "../../../../customHooks/useToaster";

export const PdTextField = styled(TextField)(() => ({
  borderRadius: "5px",

  "& .MuiOutlinedInput-root": {
    height: "35px",
    fontSize: "14px",
    // border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",

    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 0px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {},
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const QuizShowPage = () => {
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
  const [submitAnswer, setSubmitAnswer] = React.useState([]);
  const [quizQuestions, setQuizQuestions] = React.useState(quiz?.questionAndAnswer);

  const [alignment, setAlignment] = React.useState();

  const handleAlignment = (event, newAlignment, item) => {
    setAlignment(newAlignment);
  };

  const handleQuizResult = (possibleIndex, id, possibleText, isFromRadio = true) => {
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

  // useEffect(() => {
  //   dispatch(getSubmittedQuiz(quiz._id));
  // }, []);

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

  const handleQuizEdit = () => {
    navigate("/edit-quiz");
  };

  const handleQuizSubmit = () => {
    const bulkData = {
      data,
      id: quiz._id,
    };

    dispatch(submitQuizById(bulkData)).then((action) => {
      if (action.payload?.status === 200) {
        // setSubmitAnswer(action.payload.data.submissionResult.questionAndAnswer);
        setQuizQuestions(action.payload.data.submissionResult.questionAndAnswer);

        toast.trigger("Quiz Submitted", "success");
        // TODO : Redirect to quiz result page
        navigate("/course-new/get-submission-result");
        // dispatch(
        //   manuallySetCourseChapterResult(
        //     action.payload.data.isPreviouslyAttempted,
        //   ),
        // );
        // dispatch(updateUserCompletedCourse(action.payload.data.user));
      } else {
        toast.trigger("Quiz can not submit", "error");
      }
    });
  };

  const audioStyle = {
    height: "160px",
    width: "100%",
    // backgroundColor: "red",
  };

  const handleSwitchContent = (value) => {
    console.log("🚀 ~ handleSwitchContent ~ value:", value);
    switch (true) {
      case value?.endsWith(".png"):
      case value?.endsWith(".jpeg"):
      case value?.endsWith(".jpg"):
        return <img src={value} style={{ borderRadius: "8px 8px 0px 0px" }} height={160} width='100%' />;
      case value?.endsWith(".mp3"):
      case value?.endsWith(".mpeg"):
        return <audio style={audioStyle} src={value} controls></audio>;
      case value?.endsWith(".mp4"):
        return (
          <iframe height={160} src={value} alt='' width='100%' style={{ borderRadius: "8px 8px 0px 0px" }}></iframe>
        );
      case value?.includes("youtube.com/watch"):
        // Extracting the video ID from the YouTube URL
        // const videoId = value.split("v=")[1];
        const videoId = youtubeLinkEmbed(value);

        return (
          // <figure class='media'>
          <div data-oembed-url={value}>
            {/* <div data-oembed-url="https://www.youtube.com/watch?v=PEWP9nbqG9Q&list=RDPEWP9nbqG9Q&start_radio=1"> */}
            {/* <div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"> */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameborder='0'
              allow='autoplay; encrypted-media'
              // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen=''
              width='100%'
              height='160px'
              style={{ borderRadius: "8px 8px 0px 0px" }}
            ></iframe>
            {/* </div> */}
          </div>
          // </figure>
        );

      default:
        return <p>Unsupported file </p>;
    }
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "neutral.N000",
          height: "90%",
        }}
      >
        <Box
          sx={{
            backgroundColor: isLightTheme ? "#F1F5F9" : "",
            height: { xl: "23%", xxl: "18%", lg: "25%" },
            // paddingLeft: "10%",
            // paddingRight: "10%",
            // paddingTop: "1%",
            // paddingBottom: "3%",
            display: "flex",
            // justifyContent: "center",
            // alignContent: "center",
            alignItems: "center",
            borderBottom: "2px solid ##F8FAFC",
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
              <Typography variant='wpf_h4_Bold'>{quiz.name}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
              <Typography variant='wpf_p3_regular'>Pass Mark Threshold : {quiz?.passMarkThreshold}% </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            // height: "82%",
            height: { xl: "77%", xxl: "82%", lg: "75%" },
            paddingLeft: "10%",
            paddingRight: "10%",
            overflow: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          <Box sx={{ paddingTop: "20px" }}>
            {Object.keys(quiz).length &&
              // quiz?.questionAndAnswer.map((item, i) => (
              quizQuestions?.map((item, i) => (
                <>
                  <QuizQuestionShowIndex
                    item={item}
                    i={i}
                    handleQuizResult={handleQuizResult}
                    setData={setData}
                    handleSwitchContent={handleSwitchContent}
                  />
                </>
              ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "9%",
          backgroundColor: "neutral.N000",
          borderTop: "1px solid #F1F5F9",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "11%",
        }}
      >
        <Grid
          container
          gap={2}
          sx={{
            justifyContent: "right",
            paddingRight: "3%",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          {/* {user.role === 'trainer' || user.role === 'admin' ? (
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
            )} */}

          {user.role === "trainer" || user.role === "admin" ? (
            <></>
          ) : (
            <>
              <Button
                disabled={isLoading}
                sx={{
                  borderRadius: "8px",
                  width: "128px",
                  backgroundColor: "#2D58FF",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#244EF5",
                    color: "#FFFFFF",
                  },
                }}
                onClick={handleQuizSubmit}
                variant='contained'
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

export default QuizShowPage;
