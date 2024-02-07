/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/ChapterContent.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:55:47 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, Grid, Paper } from "@mui/material";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import ChapterDeleteModal from "../Course/CourseDetailsPage/ChapterDeleteModal";
import ChapterHeader from "./ChapterHeader";

const ChapterContent = ({ handleQuizStart, handleCreateQuiz, handleEditChapter }) => {
  const { user } = useSelector((state) => state.user);
  const { courseChapter } = useSelector((state) => state.course);

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={3} sx={{ paddingRight: "1%" }}>
            {" "}
            <ChapterHeader />
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={0} sx={{ width: "100%" }}>
              {courseChapter ? (
                <Grid
                  container
                  sx={{
                    height: "57vh",
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
                  {/* <Typography> {courseChapter._id}</Typography> */}
                  <Grid
                    xs={12}
                    sx={{
                      paddingLeft: "3%",
                      paddingRight: "3%",
                    }}
                  >
                    {courseChapter.content && parse(courseChapter.content)}
                  </Grid>
                </Grid>
              ) : (
                <></>
              )}
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
                    <ChapterDeleteModal />

                    <Button
                      onClick={() => handleEditChapter(courseChapter._id)}
                      variant='outlined'
                      sx={{
                        border: "1px solid #2D58FF",
                        borderRadius: "2px",
                        width: "128px",
                      }}
                    >
                      Edit Chapter
                    </Button>
                    <Button
                      onClick={() => handleCreateQuiz()}
                      variant='outlined'
                      sx={{
                        border: "1px solid #2D58FF",
                        borderRadius: "2px",
                        width: "128px",
                      }}
                    >
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
                  onClick={() => handleQuizStart(courseChapter?.quiz?.id || null)}
                  variant='contained'
                >
                  {user.role === "trainer" || user.role === "admin" ? "Show Quiz" : "Start Quiz"}
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChapterContent;
