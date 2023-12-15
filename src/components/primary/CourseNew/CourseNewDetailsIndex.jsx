import { Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAChapterById, enrollACourse } from "../../../features/slice/courseSlice";
import { updateUserEnrollCourse } from "../../../features/slice/userSlice";
import { getAQuizById } from "../../../features/slice/quizSlice";
import editCourseIcon from "../../../assets/images/edit.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import useToaster from "../../../customHooks/useToaster";
import CourseDeleteModal from "../Course/CourseDetailsPage/CourseDeleteModal";
import ChapterDeleteModal from "./ChapterDeleteModal";

const ButtonStyle = styled(Button)({
  border: "8px",
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const CourseNewDetailsIndex = () => {
  const dispatch = useDispatch();
  const { course, courseChapter, courseChapters } = useSelector((state) => state.course);

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toast = useToaster();
  const handleEditChapter = () => {
    navigate(`/update-chapter/${courseChapter._id}`);
  };
  const handleEditQuiz = () => {
    dispatch(getAQuizById(courseChapter.quiz.id)).then((action) => {
      console.log(action);
      if (action.payload.status === 200) {
        navigate(`/update-quiz/${courseChapter._id}`);
      }
    });
  };
  const handleStart = (id) => {
    navigate(`/course-details/${id}/content`);
    if (
      user.role === "level_0_annotator" ||
      user.role === "level_1_annotator" ||
      user.role === "level_2_annotator" ||
      user.role === "level_3_annotator" ||
      user.role === "reviewer"
    ) {
      !user.enrolledCourses.includes(courseChapter.rootCourse._id) &&
        dispatch(enrollACourse(courseChapter.rootCourse._id)).then((action) => {
          dispatch(updateUserEnrollCourse(action.payload.data._id));
        });
    }
  };
  const handleDeleteChapter = () => {
    dispatch(deleteAChapterById(courseChapter._id)).then((action) => {
      if (action.payload.status === 200) {
        toast.trigger("Chapter Deleted Successfully", "success");
      }
    });
  };
  const paperStyle = {
    // padding: "1%",
    height: "100%",
  };
  return (
    <>
      <Paper elevation={0} sx={{ paperStyle }}>
        <Box sx={{ position: "" }}>
          <Box sx={{ height: "100%", position: "" }}>
            <Box sx={{ height: "8%", backgroundColor: "" }}>
              <Box sx={{ paddingLeft: "2%", borderBottom: "1px solid #EBEDF5" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "Center" }}>
                  <Box i>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1D1D1D" }}>
                      {courseChapter?.title}
                    </Typography>
                  </Box>
                  <Box>
                    {courseChapters && (
                      <>
                        <Button
                          sx={{
                            borderRadius: "2px",
                          }}
                          onClick={() => handleEditChapter()}
                          // onClick={() => handleNavigation(customButton)}
                        >
                          <img src={editCourseIcon} />
                        </Button>
                        {/* <Button
                          sx={{
                            borderRadius: "2px",
                          }}
                          onClick={() => handleDeleteChapter()}
                        >
                          <img src={deleteIcon} />
                        </Button> */}
                        <ChapterDeleteModal courseChapter={courseChapter} />
                      </>
                    )}
                  </Box>
                </Box>
                <Grid item xs={12}>
                  {" "}
                  <Typography variant="caption" sx={{ fontWeight: "bold", color: "#969CAF" }}>
                    7 min read
                  </Typography>
                </Grid>
              </Box>
            </Box>
            <Box
              sx={{
                height: "92%",
                // backgroundColor: "rgba(69, 88, 123, 0.567);",
              }}
            >
              <Box
                sx={{
                  // backgroundColor: "rgba(69, 88, 123, 0.567);",
                  py: "0%",
                  height: "60vh",
                  overflow: "auto",
                  // scrollbarWidth: "thin",
                  // "&::-webkit-scrollbar": {
                  //   width: "0.4em",
                  // },
                  // "&::-webkit-scrollbar-track": {
                  //   background: "#f1f1f1",
                  // },
                  // "&::-webkit-scrollbar-thumb": {
                  //   backgroundColor: "#888",
                  // },
                  // "&::-webkit-scrollbar-thumb:hover": {
                  //   background: "#555",
                  // },
                }}
              >
                <Grid container>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D1D1D" }}>
                    OverView
                  </Typography>
                </Grid>
                <Typography sx={{}} variant="body1">
                  {courseChapter?.description}
                </Typography>
                <Box sx={{ py: "2%", textAlign: "left" }}>
                  {courseChapters?.length &&
                    (user.role === "trainer" || user.role === "admin" ? (
                      <>
                        {" "}
                        <ButtonStyle variant="contained" onClick={() => handleStart(courseChapter._id)}>
                          View Chapter
                        </ButtonStyle>
                      </>
                    ) : (
                      <>
                        <ButtonStyle variant="contained" onClick={() => handleStart(courseChapter._id)}>
                          GET STARTED
                        </ButtonStyle>
                      </>
                    ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default CourseNewDetailsIndex;
