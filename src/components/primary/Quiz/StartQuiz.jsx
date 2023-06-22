/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/StartQuiz.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, January 3rd 2023, 12:01:41 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAQuizById,
  submitQuizById,
} from "../../../features/slice/quizSlice";

const StartQuiz = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(getAQuizById(id));
    }
  }, []);

  const onSubmit = (data) => {
    const bulkData = {
      id: quiz._id,
      data,
    };
    dispatch(submitQuizById(bulkData)).then((res) => {
      navigate("/quizresult");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(quiz).length && (
          <Box sx={{ textAlign: "left" }}>
            <Grid container>
              <Grid item xs={5}>
                <Typography variant="h3">{quiz.name}</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h4">Course: {quiz.course.name}</Typography>
              </Grid>
              <br />
              <br />
              <br />
              {quiz.questionAndAnswer.map((question, index) => {
                return (
                  <>
                    <br />
                    <Grid container key={question.id}>
                      <Grid item xs={12}>
                        <Typography variant="h6">
                          <span style={{ color: "blue" }}>
                            Question ({index + 1}):
                          </span>{" "}
                          {question.question}
                        </Typography>
                      </Grid>
                      <br />
                      <br />
                      <Grid container>
                        {question.possibleAnswers.map((pa, i) => {
                          return (
                            <Grid item xs={3} lg={3} key={pa}>
                              <Typography key={pa}>
                                <span style={{ color: "brown" }}>
                                  Options({i + 1})&nbsp;:&nbsp;
                                </span>
                                {pa}
                              </Typography>
                            </Grid>
                          );
                        })}
                      </Grid>
                      <br />
                      <br />
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Select Answer
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Select Answer"
                            defaultValue=""
                            {...register(`${question._id}`)}>
                            {Object.keys(question.possibleAnswers).map(
                              (answer) => {
                                return (
                                  <MenuItem
                                    key={answer}
                                    value={
                                      question.possibleAnswers[answer] || "none"
                                    }>
                                    {question.possibleAnswers[answer]}
                                  </MenuItem>
                                );
                              }
                            )}
                            <MenuItem value={"none"}>
                              <em>None</em>
                            </MenuItem>
                          </Select>
                        </FormControl>
                        <br />
                        <br />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
              <br />
            </Grid>
          </Box>
        )}

        <Grid container justifyContent="center">
          <Grid container xs={4}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginLeft: "auto" }}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  navigate(-1);
                }}
                sx={{ marginLeft: "auto" }}
                startIcon={<ArrowBackIcon />}>
                Back
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default StartQuiz;
