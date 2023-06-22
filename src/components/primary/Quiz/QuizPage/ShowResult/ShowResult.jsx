import {Button, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setActiveChapterIndex} from "../../../../../features/slice/activePathSlice";
import {manuallySetCourseChapter} from "../../../../../features/slice/courseSlice";

const ShowResult = () => {
  const navigate = useNavigate();
  const { result } = useSelector((state) => state.quiz);
  const handleReAttempt = () => {
    navigate(`/course-details/${course._id}/show-quiz`);
  };
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const { courseChapters, course } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const handleNextChapter = () => {
    if (activeChapterIndex === courseChapters.length - 1) {
      navigate("/course");
    } else {
      dispatch(manuallySetCourseChapter(activeChapterIndex + 1));
      dispatch(setActiveChapterIndex(activeChapterIndex + 1));
      navigate(`/course-details/${course._id}/content`);
    }
  };
  return (
    <>
      <Paper elevation={0} sx={{ width: "100%" }}>
        <Grid container sx={{}}>
          <Grid
            container
            xs={12}
            sx={{ padding: "2%", justifyContent: "left" }}>
            <Typography variant="h5" sx={{ color: "#090080" }}>
              Quiz Result
            </Typography>
          </Grid>

          <Grid
            container
            xs={12}
            spacing={1}
            sx={{
              display: "flex",
              paddingLeft: "3%",
              paddingTop: "3%",
              paddingRight: "2%",
            }}>
            <Grid xs={4} sx={{ paddingRight: "3%", justifyContent: "center" }}>
              <Paper
                elevation={0}
                sx={{
                  background: "#F8F8F8",
                  borderRadius: "8px",
                  height: "120px",
                  justifyContent: "center",
                }}>
                <Grid
                  container
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "5%",
                  }}>
                  <Typography variant="h6" sx={{ color: "#969CAF" }}>
                    {" "}
                    Attempt / Average Score
                  </Typography>
                </Grid>
                <Grid
                  container
                  xs={12}
                  sx={{
                    justifyContent: "center",
                    paddingLeft: "0%",
                  }}>
                  <Typography variant="h5" sx={{ color: "#969CAF" }}>
                    {result?.isPreviouslyAttempted?.attemptTaken} /{" "}
                    {result?.isPreviouslyAttempted?.scoreAverage}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>

            <Grid xs={4} sx={{ paddingRight: "3%" }}>
              {" "}
              <Paper
                elevation={0}
                sx={{
                  background: "#F8F8F8",
                  borderRadius: "8px",
                  height: "120px",
                }}>
                <Grid
                  container
                  xs={12}
                  sx={{
                    justifyContent: "center",
                    paddingTop: "5%",
                  }}>
                  <Typography variant="h5" sx={{ color: "#969CAF" }}>
                    Current Score
                  </Typography>
                </Grid>
                <Grid container sx={{ justifyContent: "center" }}>
                  <Typography variant="h5" sx={{ color: "#969CAF" }}>
                    {result?.isPreviouslyAttempted?.score}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid xs={4}>
              {" "}
              <Paper
                elevation={0}
                sx={{
                  background: "#F8F8F8",
                  borderRadius: "8px",
                  height: "120px",
                }}>
                <Grid
                  container
                  xs={12}
                  sx={{
                    justifyContent: "center",
                    paddingTop: "5%",
                  }}>
                  <Typography variant="h5" sx={{ color: "#969CAF" }}>
                    {" "}
                    Status
                  </Typography>
                </Grid>
                <Grid container sx={{ justifyContent: "center" }}>
                  {" "}
                  {result?.isPreviouslyAttempted?.score >= 70 ? (
                    <Typography variant="h4" sx={{ color: "#00A671" }}>
                      {" "}
                      Passed
                    </Typography>
                  ) : (
                    <Typography variant="h4" sx={{ color: "#A93439" }}>
                      {" "}
                      Failed
                    </Typography>
                  )}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          gap={2}
          sx={{
            justifyContent: "right",
            paddingRight: "3%",
            paddingTop: "30%",
            paddingBottom: "2%",
          }}>
          {/* <Button
            variant="outlined"
            sx={{
              border: "1px solid #2D58FF",
              borderRadius: "2px",
              width: "128px",
            }}>
            Back
          </Button> */}
          {result?.isPreviouslyAttempted?.score >= 70 ? (
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
              onClick={handleNextChapter}
              variant="contained">
              Next
            </Button>
          ) : (
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
              onClick={() => handleReAttempt()}
              variant="contained">
              Re-Attempt
            </Button>
          )}
        </Grid>
      </Paper>
    </>
  );
};

export default ShowResult;
