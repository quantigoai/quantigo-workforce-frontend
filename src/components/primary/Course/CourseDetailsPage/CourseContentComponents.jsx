import { Button, Grid, Paper, Typography } from "@mui/material";
import parse from "html-react-parser";
import React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAChapterById } from "../../../../features/slice/courseSlice";
import { getAQuizById } from "../../../../features/slice/quizSlice";

const CourseContentComponents = ({ quizId }) => {
  const { course, courseChapter } = useSelector((state) => state.course);

  const { user } = useSelector((state) => state.user);
  const { courseChapters } = useSelector(
    (state) => state.course.courseChapters
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const handleQuizStart = () => {
    if (courseChapter.quiz.id) {
      dispatch(getAQuizById(courseChapter.quiz.id));
      // TODO Need to refactor this code to show quiz
      navigate("/quiz");
    } else {
      alert.show("Quiz not found", { type: "error" });
    }
    // navigate("/show-quiz");
  };

  const handleCreateQuiz = () => {
    navigate("/create-quiz");
  };

  const handleEditChapter = () => {
    navigate(`/update-chapter/${courseChapter._id}`);
  };
  const handleDeleteChapter = () => {
    dispatch(deleteAChapterById(courseChapter._id)).then((action) => {
      if (action.payload.status === 200) {
        navigate("/course");
        alert.show("Chapter Deleted Successfully", { type: "success" });
      }
    });
  };

  return (
    <>
      <Paper elevation={0} sx={{ width: "100%" }}>
        {courseChapters &&
          courseChapters.map((dummyCourseChapter) =>
            courseChapter._id === dummyCourseChapter._id ? (
              <Grid
                key={dummyCourseChapter._id}
                container
                sx={{
                  overflowX: "hidden",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                  height: "900px",
                }}>
                {/* <Typography> {courseChapter._id}</Typography> */}
                <Grid
                  xs={12}
                  sx={{
                    paddingLeft: "3%",
                    paddingRight: "3%",
                  }}>
                  <Typography>
                    {dummyCourseChapter.content &&
                      parse(dummyCourseChapter.content)}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <></>
            )
          )}
        <Grid
          container
          gap={2}
          sx={{
            justifyContent: "right",
            paddingRight: "3%",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}>
          {user.role === "trainer" || user.role === "admin" ? (
            <>
              {" "}
              <Button
                onClick={() => handleDeleteChapter()}
                variant="outlined"
                sx={{
                  border: "1px solid #2D58FF",
                  borderRadius: "2px",
                }}>
                Delete Chapter
              </Button>
              <Button
                onClick={() => handleEditChapter()}
                variant="outlined"
                sx={{
                  border: "1px solid #2D58FF",
                  borderRadius: "2px",
                  width: "128px",
                }}>
                Edit Chapter
              </Button>
              <Button
                onClick={() => handleCreateQuiz()}
                variant="outlined"
                sx={{
                  border: "1px solid #2D58FF",
                  borderRadius: "2px",
                  width: "128px",
                }}>
                Create Quiz
              </Button>
            </>
          ) : (
            <></>
          )}

          <Button
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
            onClick={() => handleQuizStart()}
            variant="contained">
            {user.role === "trainer" || user.role === "admin"
              ? "Show Quiz"
              : "Start Quiz"}
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default CourseContentComponents;
