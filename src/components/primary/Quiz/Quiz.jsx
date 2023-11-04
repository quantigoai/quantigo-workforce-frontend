/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/Quiz.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 10:33:04 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
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
import {getAllCourses} from "../../../features/slice/courseSlice";
import {getAQuizById} from "../../../features/slice/quizSlice";
import UpdateQuiz from "./UpdateQuiz";

const paperstyle = {
  padding: "20px 20px",
  width: 1230,
  height: "100%",
  borderRadius: 10,
  margin: "0px auto",
};
const Quiz = () => {
  const [value1, setValue1] = React.useState("ShowQuiz");

  const [quizId, setQuizId] = useState("");
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.course);
  const { questionAndAnswer } = useSelector((state) => state.quiz.quiz);
  const { quiz } = useSelector((state) => state.quiz);

  useEffect(() => {
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

  return (
    <>
      <Box sx={{ px: "3%", py: "1%" }} style={{ width: 1300 }}>
        <Typography variant="h4" sx={{ mb: "2%" }}>
          Quiz List
        </Typography>

        <Grid container>
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
            <FormControlLabel value="ShowQuiz" control={<Radio />} label="Show Quiz" />
            <FormControlLabel value="editQuiz" control={<Radio />} label="Edit Quiz" />
          </RadioGroup>
        </Grid>
      </Box>
      {questionAndAnswer ? (
        <>
          {value1 === "ShowQuiz" ? (
            <Box>
              {questionAndAnswer ? (
                <>
                  {questionAndAnswer.map((item, i) => (
                    <>
                      <Grid key={i} container style={{ paddingX: "0%", paddingY: "2%" }}>
                        <Paper elevation={3} style={paperstyle}>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              textAlign: "left",
                              paddingX: "2%",
                              paddingY: "3%",
                            }}
                          >
                            <Typography variant="h5">
                              Question: &nbsp;
                              <Typography variant="h5" sx={{ display: "inline", color: "blue" }}>
                                {item.question}
                              </Typography>
                            </Typography>
                          </Grid>

                          <Grid
                            container
                            sx={{
                              textAlign: "left",
                              paddingX: "2%",
                            }}
                          >
                            {item.possibleAnswers.map((possibleAnswer, i) => (
                              <Grid item xs={3} key={i}>
                                <Typography variant="h5">
                                  Option ({i + 1}): &nbsp;
                                  <Typography sx={{ display: "inline", color: "purple" }} variant="h5">
                                    {possibleAnswer}
                                  </Typography>
                                </Typography>
                              </Grid>
                            ))}
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sx={{
                              paddingX: "2%",
                              paddingTop: "2%",
                              textAlign: "left",
                            }}
                          >
                            <Typography variant="h5">
                              Correct Answer : &nbsp;
                              <Typography sx={{ display: "inline", color: "green.800" }} variant="h5">
                                {item.correctAnswer}
                              </Typography>
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
            </Box>
          ) : (
            <UpdateQuiz quizId={quizId} />
          )}
        </>
      ) : (
        <></>
      )}
      {/* </Box> */}
    </>
  );
};

export default Quiz;
