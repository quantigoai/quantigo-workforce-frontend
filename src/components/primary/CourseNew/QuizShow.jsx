/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/QuizShow.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 3:06:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../customHooks/useToaster";
import { manuallySetCourseChapterResult } from "../../../features/slice/courseSlice";
import { submitQuizById } from "../../../features/slice/quizSlice";
import { updateUserCompletedCourse } from "../../../features/slice/userSlice";

const QuizShow = () => {
  const { quiz, isLoading } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [data, setData] = React.useState({});

  const toast = useToaster();
  const { course } = useSelector((state) => state.course);

  const handleQuizResult = (possibleAnswer, id) => {
    const x = {};
    x[id] = possibleAnswer;
    setData((prev) => Object.assign(prev, x));
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
        toast.trigger("Quiz Submitted", "success");
        navigate(`/course-details/${course._id}/quiz-result`);
        dispatch(manuallySetCourseChapterResult(action.payload.data.isPreviouslyAttempted));
        dispatch(updateUserCompletedCourse(action.payload.data.user));
      } else {
        toast.trigger("Quiz can not submit", "error");
      }
    });
  };

  return (
    <>
      <Paper elevation={0} sx={{ width: "100%" }}>
        <Grid
          container
          sx={{
            overflowX: "hidden",
            overflowY: "scroll",
            scrollbarWidth: "none",
            // height: "900px",
          }}
        >
          <Grid container xs={12} sx={{ padding: "2%", justifyContent: "center" }}>
            <Typography variant="h5" sx={{ color: "#090080" }}>
              {" "}
              {quiz.name}
            </Typography>
          </Grid>
          <Grid container sx={{ padding: "2%" }}>
            <Typography variant="h5" sx={{ color: "#090080" }}>
              {" "}
              Quiz Instructions
            </Typography>
          </Grid>

          {Object.keys(quiz).length &&
            quiz?.questionAndAnswer.map((item, i) => (
              <>
                <Grid
                  key={i}
                  xs={12}
                  sx={{
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    paddingBottom: "1%",
                    paddingTop: "1%",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#090080" }}>
                    Q{i + 1}. {item.question} ?
                  </Typography>
                </Grid>
                <Grid xs={12} sx={{ paddingLeft: "2%" }}>
                  <RadioGroup
                  //  value={value}
                  >
                    {item.possibleAnswers.map((posibleAnswer, i) => (
                      <>
                        <FormControlLabel
                          key={i}
                          onChange={() => handleQuizResult(posibleAnswer, item._id)}
                          value={posibleAnswer}
                          control={<Radio />}
                          label={posibleAnswer}
                        />
                      </>
                    ))}
                  </RadioGroup>
                </Grid>
              </>
            ))}
        </Grid>

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
              {" "}
              <Button
                disabled={isLoading}
                sx={{
                  borderRadius: "2px",
                  width: "128px",
                  backgroundColor: "#2D58FF",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#FF9A45",
                    color: "#1D1D1D",
                  },
                }}
                onClick={() => handleQuizEdit()}
                variant="contained"
              >
                Edit Quiz
              </Button>
            </>
          ) : (
            <></>
          )}
          {user.role === "trainer" || user.role === "admin" ? (
            <></>
          ) : (
            <>
              <Button
                disabled={isLoading}
                sx={{
                  borderRadius: "2px",
                  width: "128px",
                  backgroundColor: "#2D58FF",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#FF9A45",
                    color: "#1D1D1D",
                  },
                }}
                onClick={() => handleQuizSubmit()}
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
