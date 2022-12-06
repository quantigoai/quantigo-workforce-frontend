import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCourses} from "../../features/slice/courseSlice";
import {getAQuizById} from "../../features/slice/quizSlice";
import "./Quiz.css";
import UpdateQuiz from "./UpdateQuiz/UpdateQuiz";


export const QuizShow = () => {
  const [value1, setValue1] = React.useState("ShowQuiz");

  const [quizId, setQuizId] = useState();
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.course);
  const { questionAndAnswer } = useSelector((state) => state.quiz.quiz);
  const { quiz } = useSelector((state) => state.quiz);

  useEffect(() => {
    // dispatch(getAllQuiz());
    dispatch(getAllCourses());
  }, []);

  // course id
  const handleChangeCourse = (e) => {
    const quizId = e.target.value;
    if (quizId) {
      dispatch(getAQuizById(quizId));
    }
  };
  const handleChangeTag = (event) => {
    setValue1(event.target.value);
    setQuizId(quiz._id);
  };


  // setQuizId(quiz._id)

  const paperstyle = {
    padding: "0px 0px",
    width: 1200,
    height: "100%",
    borderRadius: 10,
    margin: "10px auto",
  };
  return (
    <>
      <Box sx={{ px: "3%", py: "1%" }} style={{ width: 1300 }}>
        <Typography variant="h4" sx={{ mb: "2%" }}>
          Quiz
        </Typography>

        <Grid container xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">course name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Course"
              onChange={(e) => handleChangeCourse(e)}
            >
              {courses.map((course) => (
                <MenuItem key={course._id} value={course?.quiz?.id || "empty"}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid container>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value1}
            onChange={handleChangeTag}
          >
            <FormControlLabel
              value="ShowQuiz"
              control={<Radio />}
              label="Show Quiz"
            />
            <FormControlLabel
              value="editQuiz"
              control={<Radio />}
              label="Edit Quiz"
            />
          </RadioGroup>
        </Grid>
        {questionAndAnswer ? (
          <>
            {value1 === "ShowQuiz" ? (
              <Grid>
                {questionAndAnswer ? (
                  <>
                    {questionAndAnswer.map((item) => (
                      <>
                        <Grid
                          container
                          style={{ paddingLeft: "4%", paddingTop: "3%" }}
                        >
                          <Paper elevation={2} style={paperstyle}>
                            <Grid
                              container
                              xs={12}
                              style={{
                                paddingLeft: "2%",
                                paddingTop: "3%",
                                paddingBottom: "2%",
                              }}
                            >
                              <Typography variant="h4">
                                Question: {item.question}
                              </Typography>
                            </Grid>

                            <Grid container>
                              {item.possibleAnswers.map((posibleAnswer, i) => (
                                <Grid xs={3}>
                                  <Typography variant="h5" key={i}>
                                    PossibleAnswers ({i + 1}):
                                  </Typography>
                                  <Typography variant="h5">
                                    {posibleAnswer}
                                  </Typography>
                                </Grid>
                              ))}
                            </Grid>
                            <Grid
                              container
                              xs={12}
                              style={{ paddingLeft: "4%", paddingTop: "2%" }}
                            >
                              <Typography variant="h5">
                                Correct Answer : {item.correctAnswer}
                              </Typography>
                            </Grid>
                          </Paper>
                        </Grid>
                        <br></br>
                      </>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </Grid>
            ) : (
              <UpdateQuiz quizId={quizId} />
            )}
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};
