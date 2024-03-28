/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/QuizShow.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 3:06:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PendingIcon from "@mui/icons-material/Pending";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useToaster from "../../../../customHooks/useToaster";
import { getSingleSubmittedQuiz, submitReviewQuiz } from "../../../../features/slice/quizSlice";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import { youtubeLinkEmbed } from "../../../../helper/youtubeLinkEmbed";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";

const PdTextField = styled(TextField)(() => ({
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
const QuizReviewPage = () => {
  const { quiz, isLoading } = useSelector((state) => state.quiz);

  const params = useParams();
  const { submissionId: id } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [data, setData] = React.useState({});
  const [responses, setResponses] = React.useState();
  const [dataLoading, setDataLoading] = React.useState(false);

  const [reviewerSubmissionFeedback, setReviewerSubmissionFeedback] = React.useState("");

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
    setDataLoading(true);
    dispatch(getSingleSubmittedQuiz(id)).then((action) => {
      setQuizQuestions(action.payload.data.submission.questionAndAnswer);
      setResponses(action.payload.data.submission);
      setSubmittedId(action.payload.data.submission._id);
      setReviewerSubmissionFeedback(action.payload.data.submission.reviewerSubmissionFeedback);
      setDataLoading(false);
    });
  }, []);

  const handleQuizResultTextField = (textValue, id, isFromRadio = true) => {
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
    navigate("/edit-quiz");
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

    dispatch(submitReviewQuiz(finalData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        toast.trigger("Quiz Review Submitted", "success");
        navigate(`/course-new/get-all-submission/${responses?.quizId}`);
      }
    });
  };
  const audioStyle = {
    height: "160px",
    width: "100%",
    // backgroundColor: "red",
  };
  const handleSwitchContent = (value) => {
    switch (true) {
      case value?.endsWith(".png"):
      case value?.endsWith(".jpeg"):
      case value?.endsWith(".jpg"):
        return <img src={value} style={{ borderRadius: "8px" }} height={160} width='100%' />;
      case value?.endsWith(".mp3"):
      case value?.endsWith(".mpeg"):
        return <audio style={audioStyle} src={value} controls></audio>;
      case value?.endsWith(".mp4"):
        return <video width='100%' height='160' controls style={{ borderRadius: "8px" }} src={value}></video>;
      // return <iframe height={160} src={value} alt='' width='100%' style={{ borderRadius: "8px" }}></iframe>;
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
              // allow='autoplay; encrypted-media'
              // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              // allowfullscreen
              width='100%'
              height='160px'
              style={{ borderRadius: "8px" }}
            ></iframe>
            {/* </div> */}
          </div>
          // </figure>
        );

      default:
        return <p>Unsupported file </p>;
    }
  };
  const handleSwitchContent2 = (value) => {
    switch (true) {
      case value?.endsWith(".png"):
      case value?.endsWith(".jpeg"):
      case value?.endsWith(".jpg"):
        return <img src={value} style={{ borderRadius: "8px" }} height={224} width='100%' />;
      case value?.endsWith(".mp3"):
      case value?.endsWith(".mpeg"):
        return <audio style={audioStyle} src={value} controls></audio>;
      case value?.endsWith(".mp4"):
        return <video width='100%' height='240' controls style={{ borderRadius: "8px" }} src={value}></video>;
      // return <iframe height={224} src={value} alt='' width='100%' style={{ borderRadius: "8px" }}></iframe>;
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
              // allow='autoplay; encrypted-media'
              // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              // allowfullscreen
              width='100%'
              height='240px'
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
      {dataLoading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
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
                height: { xl: "23%", xxl: "20%", lg: "25%" },
                paddingTop: "1%",
                paddingBottom: "3%",
                borderBottom: "2px solid ##F8FAFC",
              }}
            >
              <Grid container sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <Typography variant='wpf_h4_Bold'>{responses?.courseChapter?.name}</Typography>
              </Grid>
              <Grid container sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <Box
                  sx={{
                    border: "2px solid #E2E8F0",
                    borderRadius: "8px",
                    backgroundColor: "neutral.N000",
                    padding: "10px",
                    width: "100%",
                    mt: "8px",
                  }}
                >
                  <Typography
                    variant='wpf_h7_medium'
                    sx={{
                      mb: 0,
                      textTransform: "uppercase",
                      color: "#FFAB00",
                    }}
                  >
                    Reviewer Submission Feedback
                  </Typography>
                  <PdTextField
                    disabled={user.role === "admin" || user.role === "trainer" ? responses?.reviewer : true}
                    fullWidth
                    placeholder={user.role === "admin" || user.role === "trainer" ? "Write your thoughts..." : ""}
                    value={reviewerSubmissionFeedback}
                    onChange={(e) => handleReviewerSubmissionFeedback(e)}
                  />
                </Box>
              </Grid>
            </Box>
            <Box
              sx={{
                height: { xl: "77%", xxl: "80%", lg: "75%" },
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
                {quizQuestions.length &&
                  quizQuestions.map((item, i) => (
                    <>
                      <Box>
                        <Box
                          key={i}
                          sx={{
                            border: "2px solid #E2E8F0",
                            borderRadius: "8px",
                            mb: "50px",
                            backgroundColor: isLightTheme ? "#F1F5F9" : "",
                          }}
                        >
                          <Grid container>
                            <Grid
                              xs={9}
                              sx={{
                                paddingLeft: "2%",
                                paddingRight: "2%",
                                paddingTop: "1%",
                              }}
                            >
                              <Typography variant='wpf_p2_semiBold' sx={{ color: "primary.B300" }}>
                                Q{i + 1}. {item.question.questionText} ?
                              </Typography>
                            </Grid>
                            <Grid
                              xs={3}
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                // paddingLeft: '8%',
                                paddingRight: "2%",
                                // paddingBottom: "1%",
                                paddingTop: "1%",
                              }}
                            >
                              {item.questionStatus === "accepted" || item.questionStatus === "rejected" ? (
                                <>
                                  <Typography
                                    variant='wpf_h7_semiBold'
                                    sx={{
                                      color:
                                        item.questionStatus === "accepted"
                                          ? "#36B37E"
                                          : item.questionStatus === "pending"
                                          ? "#FFAB00"
                                          : "#FF4757",
                                    }}
                                  >
                                    {" "}
                                    {capitalizeFirstLetter(item.questionStatus)}
                                  </Typography>
                                </>
                              ) : (
                                <>
                                  {user.role === "admin" || user.role === "reviewer" ? (
                                    <>
                                      {item.isTextFieldEnabled && (
                                        <RadioGroup
                                          row
                                          aria-labelledby='demo-row-radio-buttons-group-label'
                                          name='row-radio-buttons-group'
                                          onChange={(e) => handleQuizResultTextField(e.target.value, item._id)}
                                        >
                                          <FormControlLabel
                                            value='accepted'
                                            control={<Radio />}
                                            label={
                                              <Typography variant='wpf_h7_semiBold' sx={{ color: "#36B37E" }}>
                                                Accept
                                              </Typography>
                                            }
                                          />
                                          <FormControlLabel
                                            sx={{ color: "#FF4757" }}
                                            value='rejected'
                                            control={<Radio />}
                                            label={
                                              <Typography variant='wpf_h7_semiBold' sx={{ color: "#FF4757" }}>
                                                Reject
                                              </Typography>
                                            }
                                          />
                                        </RadioGroup>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <Typography
                                        variant='wpf_h7_semiBold'
                                        sx={{
                                          color: item.questionStatus === "accepted" ? "#36B37E" : "#FF4757",
                                        }}
                                      >
                                        Pending
                                        {/* {capitalizeFirstLetter(item.questionStatus)} */}
                                      </Typography>
                                    </>
                                  )}
                                </>
                              )}
                            </Grid>
                          </Grid>
                          {item.questionType === "imageAndOptions" ? (
                            <>
                              <Grid container>
                                <Grid xs={6} sx={{ paddingLeft: "2%", paddingTop: "2%" }}>
                                  {item.possibleAnswers.map((posibleAnswer, i) => (
                                    <Grid key={i} xs={12}>
                                      <FormControlLabel
                                        key={i}
                                        onChange={() => handleQuizResult(i, item._id)}
                                        value={i}
                                        control={
                                          <Radio
                                            sx={{ cursor: "default" }}
                                            checked={item.userGivenCorrectAnswerIndex === i}
                                          />
                                        }
                                        label={
                                          <Typography
                                            variant='wpf_h7_semiBold'
                                            sx={{ color: item.correctAnswerIndex === i ? "#36B37E" : "grey.600" }}
                                          >
                                            {posibleAnswer}
                                          </Typography>
                                        }
                                      />
                                    </Grid>
                                  ))}
                                </Grid>

                                <Grid
                                  xs={6}
                                  sx={{
                                    paddingLeft: "2%",
                                    paddingRight: "2%",
                                    // paddingBottom: "1%",
                                    paddingTop: "1%",
                                  }}
                                >
                                  {handleSwitchContent2(item.question.questionImage)}
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              {" "}
                              <RadioGroup
                              //  value={value}
                              >
                                <Grid container sx={{ paddingLeft: "2%", paddingBottom: "2%", paddingTop: "15px" }}>
                                  {item.possibleAnswers.map((posibleAnswer, i) => (
                                    <>
                                      {item.questionType === "imageInOptions" ? (
                                        <>
                                          <Grid item xs={3} sx={{ paddingRight: "2%", borderRadius: "8px" }}>
                                            <Box
                                              sx={{
                                                border: "1px solid #E2E8F0",
                                                borderRadius: "8px",
                                              }}
                                            >
                                              {/* <Grid item> */}
                                              {handleSwitchContent(posibleAnswer)}

                                              <Box
                                                sx={{
                                                  backgroundColor: "neutral.N000",
                                                  paddingLeft: "5%",
                                                  borderRadius: "8px",
                                                }}
                                              >
                                                <FormControlLabel
                                                  key={i}
                                                  onChange={() => handleQuizResult(i, item._id)}
                                                  value={i}
                                                  control={
                                                    <Radio
                                                      sx={{ cursor: "default" }}
                                                      checked={item.userGivenCorrectAnswerIndex === i}
                                                    />
                                                  }
                                                  label={
                                                    <Typography
                                                      variant='wpf_h7_semiBold'
                                                      sx={{
                                                        color: item.correctAnswerIndex === i ? "#36B37E" : "grey.600",
                                                      }}
                                                    >
                                                      {i === 0
                                                        ? "Option A"
                                                        : i === 1
                                                        ? "Option B"
                                                        : i === 2
                                                        ? "Option C"
                                                        : "Option D"}
                                                    </Typography>
                                                  }
                                                />
                                              </Box>
                                            </Box>
                                            {/* </Grid> */}
                                          </Grid>
                                        </>
                                      ) : (
                                        <>
                                          <Grid xs={12}>
                                            <FormControlLabel
                                              key={i}
                                              value={i}
                                              control={
                                                <Radio
                                                  sx={{ cursor: "default" }}
                                                  checked={item.userGivenCorrectAnswerIndex === i}
                                                />
                                              }
                                              label={
                                                <Typography
                                                  variant='wpf_h7_semiBold'
                                                  sx={{ color: item.correctAnswerIndex === i ? "#36B37E" : "grey.600" }}
                                                >
                                                  {posibleAnswer}
                                                </Typography>
                                              }
                                            />
                                          </Grid>
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
                                    borderTop: "2px solid #E2E8F0",
                                    // borderRadius: "8px",
                                    backgroundColor: "neutral.N000",
                                    padding: "20px",
                                  }}
                                >
                                  <Typography
                                    variant='wpf_h7_medium'
                                    sx={{
                                      mb: 0,
                                      textTransform: "uppercase",
                                      // color: "#64748B",
                                      color: "neutral.N300",
                                    }}
                                  >
                                    {user.role === "admin" || user.role === "trainer"
                                      ? "Annotator Feedback"
                                      : "  Given Text"}
                                  </Typography>
                                  <PdTextField fullWidth disabled defaultValue={item.userGivenText} />
                                </Box>
                              </>
                            )}
                          </Grid>
                          <Grid item xs={12}>
                            <>
                              <Box
                                sx={{
                                  borderTop: "2px solid #E2E8F0",
                                  // borderRadius: "8px",
                                  backgroundColor: "#fff",
                                  padding: "20px",
                                  backgroundColor: "",
                                }}
                              >
                                <Typography
                                  variant='wpf_h7_medium'
                                  sx={{
                                    mb: 0,
                                    textTransform: "uppercase",
                                    color: "#FFAB00",
                                  }}
                                >
                                  Reviewer Feedback
                                </Typography>
                                <PdTextField
                                  disabled={
                                    user.role === "admin" || user.role === "trainer" ? responses?.reviewer : true
                                  }
                                  fullWidth
                                  // variant='outlined'
                                  placeholder={
                                    user.role === "admin" || user.role === "trainer" ? "Write your thoughts..." : ""
                                  }
                                  defaultValue={item.reviewerFeedback}
                                  onChange={(e) => handleQuizResultTextField(e.target.value, item._id, false)}
                                />
                              </Box>
                            </>
                          </Grid>
                          {/* )} */}
                        </Box>
                      </Box>
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
              {user.role === "trainer" || user.role === "admin" ? (
                <>
                  {!responses?.reviewer && (
                    <Button
                      disabled={isLoading}
                      sx={{
                        borderRadius: "8px",
                        width: "150px",
                        backgroundColor: "#2D58FF",
                        color: "#FFFFFF",
                        "&:hover": {
                          // backgroundColor: "#FF9A45",
                          backgroundColor: "#244EF5",
                          // color: '#1D1D1D',
                        },
                      }}
                      onClick={handleQuizSubmit}
                      // onClick={handleQuizEdit}

                      variant='contained'
                    >
                      Submit Review
                    </Button>
                  )}
                </>
              ) : (
                <></>
              )}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default QuizReviewPage;
