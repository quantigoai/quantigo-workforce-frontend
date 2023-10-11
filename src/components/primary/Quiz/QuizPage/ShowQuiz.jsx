import { Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useToaster from "../../../../customHooks/useToaster";
import { submitQuizById } from "../../../../features/slice/quizSlice";

const ShowQuiz = () => {
  const { quiz, isLoading } = useSelector((state) => state.quiz);
  const { user } = useSelector((state) => state.user);
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
   

  const toast = useToaster();
  const handleQuizResult = (possibleAnswer, id) => {
    const x = {};
    x[id] = possibleAnswer;
    setData((prev) => Object.assign(prev, x));
  };

  const handleQuizSubmit = () => {
    const bulkData = {
      data,
      id: quiz._id,
    };
    dispatch(submitQuizById(bulkData)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger("Quiz Submitted", "success"
        navigate("/quiz-result");
      } else {
        toast.trigger("Do not submitted quiz", "error");
      }
    });
  };

  const handleQuizEdit = () => {
    navigate("/edit-quiz");
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
          <Grid container xs={12} sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
            <Typography variant="body2" sx={{ color: "#1D1D1D" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Pellentesque eget faucibus in eu tellus pharetra justo commodo.
              Vestibulum eget cum eu pellentesque vel. Etiam in nunc laoreet tristique sed elementum lobortis purus ac.
              Scelerisque lorem donec integer fringilla vestibulum. Mus hendrerit fringilla leo sollicitudin.
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
                    {item.possibleAnswers.map((posibleAnswer) => (
                      <>
                        <FormControlLabel
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
        </Grid>
      </Paper>
    </>
  );
};

export default ShowQuiz;
