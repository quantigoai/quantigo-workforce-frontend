/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CouseDrawer.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:08:32 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, Paper } from "@mui/material";
import React from "react";
import SingleChapter from "../Course/SingleChapter";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CourseDrawer = ({ handleChapterClick }) => {
  const { courseChapters } = useSelector((state) => state.course);
  const { activeChapterIndex } = useSelector((state) => state.activePath);
  const { user } = useSelector((state) => state.user);
  const { course, isLoading } = useSelector((state) => state.course);
  const navigate = useNavigate();

  const handleCreateChapter = (id) => {
    navigate(`/create-chapter/${id}`);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper elevation={0} sx={{ paddingTop: "0%" }}>
          {/* TODO Handle this smartly */}
          {/* If there are no chapters under this course */}
          {!courseChapters && <p>No Chapters found for this course</p>}

          {/* If there are chapters under this course */}
          {courseChapters?.length &&
            courseChapters.map((courseChapter, index) => (
              <Grid  container key={index} sx={{ paddingLeft: "0%" }}>
                <Button
                  fullWidth
                  key={courseChapter._id}
                  sx={{
                    height: "56px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 154, 69, 0.1)",
                    },
                    backgroundColor:
                      activeChapterIndex === index && "rgba(255, 154, 69, 0.4)",
                  }}
                  onClick={() => handleChapterClick(courseChapter, index)}
                >
                  <SingleChapter courseChapter={courseChapter} />
                </Button>
              </Grid>
            ))}
          <br />
          {user.role === "trainer" || user.role === "admin" ? (
            <>
              <Grid container>
                <Grid item xs={12}>
                  <Box>
                    <Button
                      variant="contained"
                      disabled={isLoading}
                      type="submit"
                      fullWidth
                      sx={{
                        // width: "100%",
                        height: "45px",
                        backgroundColor: "#2D58FF",
                        color: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "#FF9A45",
                          color: "#1D1D1D",
                        },
                        borderRadius: "2px",
                      }}
                      onClick={() => handleCreateChapter(course._id)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          justifyContent: "center",
                        }}
                      >
                        <AddIcon />
                        Create Chapter
                      </Box>
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default CourseDrawer;
