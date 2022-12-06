import {Box, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCourses} from "../../features/slice/courseSlice";
import {getAllQuiz, getAQuizById} from "../../features/slice/quizSlice";
import "./Quiz.css";

export const Quiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const { quizs } = useSelector((state) => state.quiz);
  const { courses } = useSelector((state) => state.course);
  const { questionAndAnswer } = useSelector((state) => state.quiz.quiz);
  const [courseId, setCourseId] = useState("");
  useEffect(() => {
    dispatch(getAllQuiz());
    dispatch(getAllCourses())
  }, []);


  const questions = [
    {
      text: "Which of the following process helps in Image enhancement?",
      options: [
        { id: 0, text: "Digital Image Processing", isCorrect: false },
        { id: 1, text: "Analog Image Processing", isCorrect: false },
        { id: 2, text: "Both a and b", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: " Which of the following is an example of Digital Image Processing?",
      options: [
        { id: 0, text: "Computer Graphics", isCorrect: false },
        { id: 1, text: "Pixels", isCorrect: false },
        { id: 2, text: "Camera Mechanism", isCorrect: false },
        { id: 3, text: "All of the mentioned", isCorrect: true },
      ],
    },
    {
      text: "Which of the following image processing approaches is the fastest, most accurate, and flexible?",
      options: [
        { id: 0, text: "Photographic ", isCorrect: true },
        { id: 1, text: "Electronic", isCorrect: false },
        { id: 2, text: "Digital", isCorrect: false },
        { id: 3, text: "Optical", isCorrect: false },
      ],
    },
    {
      text: "___________ determines the quality of a digital image.",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: false },
        { id: 2, text: "Texas", isCorrect: true },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is the abbreviation of JPEG?",
      options: [
        { id: 0, text: "Joint Photographic Experts Group", isCorrect: true },
        { id: 1, text: " Joint Photographs Expansion Group", isCorrect: false },
        { id: 2, text: "Joint Photographic Expanded Group", isCorrect: false },
        { id: 3, text: " Joint Photographic Expansion Group", isCorrect: false },
      ],
    },
    {
      text: "___________ determines the quality of a digital image.",
      options: [
        { id: 0, text: " The discrete gray levels", isCorrect: false },
        { id: 1, text: "The number of samples", isCorrect: false },
        { id: 2, text: "discrete gray levels & number of samples", isCorrect: true },
        { id: 3, text: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      text: "Which of the following process helps in Image enhancement?",
      options: [
        { id: 0, text: "Digital Image Processing", isCorrect: false },
        { id: 1, text: "Analog Image Processing", isCorrect: false },
        { id: 2, text: "Both a and b", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Suppose we have a grayscale image, with most of the values of pixels being same. What can we use to compress the size of image?",
      options: [
        { id: 0, text: "Encode the pixels with same values in a dictionary", isCorrect: true },
        { id: 1, text: "Encode the sequence of values of pixels", isCorrect: false },
        { id: 2, text: "No compression can be done", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: " Given an image with only 2 pixels and 3 possible values for each pixel, what is the number of possible image histograms that can be formed?",
      options: [
        { id: 0, text: "3", isCorrect: false },
        { id: 1, text: "6", isCorrect: false },
        { id: 2, text: "12", isCorrect: false },
        { id: 3, text: "9", isCorrect: true },
      ],
    },
    {
      text: "Which of the following methods is used as a model fitting method for edge detection?",
      options: [
        { id: 0, text: "SIFT", isCorrect: false },
        { id: 1, text: "Difference of Gaussian detector", isCorrect: false },
        { id: 2, text: "RANSAC", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };


  // course id
  const handleChangeCourse = (e) => {
    const quizId = e.target.value;

    dispatch(getAQuizById(quizId))

  }



  return (
    <Box>
      <Grid container>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Course Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Course"
            onChange={(e) => handleChangeCourse(e)}
          >
            {courses.map((course) => (

              <MenuItem
                key={course._id}
                value={course?.quiz?.id || "empty"}
              >
                {course.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {questionAndAnswer ? 
      <Grid>
      <h1 >Quiz</h1>

      <h2>Score: {score}</h2>
      {showResults ? (

        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Again</button>
        </div>
      ) : (

        <div className="question-card">

          <h2>
            Question: {currentQuestion + 1} out of {questionAndAnswer.length}
          </h2>
          <h3 className="question-text">{questionAndAnswer?.question}</h3>


          <ul>
            {questionAndAnswer.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.correctAnswer)}
                >
                  {option?.possibleAnswers}
                </li>
              );
            })}
          </ul>
        </div>
      
      )}
      </Grid> :<></>}
    </Box>
  )
}
