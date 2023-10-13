/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/CouseDrawer.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, March 7th 2023, 2:08:32 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import AddIcon from "@mui/icons-material/Add";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import SingleChapterNew from "../Course/SingleChapterNew";

const CourseDrawerNew = ({ handleChapterClick }) => {
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
          <Grid
            item
            xs={12}
            sx={{
              paddingLeft: "10%",
              paddingTop: "3%",
              paddingBottom: "3%",
              borderBottom: "1px solid #EBEDF5",
            }}>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid item xs={7}>
                <Grid xs={12}>
                  <Typography variant="16px">
                    <b>All Chapters</b>
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography sx={{ color: "#969CAF" }} variant="caption">
                    6 Chapters , 4 hrs 32 min
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  disabled={isLoading}
                  type="submit"
                  sx={{
                    width: "80%",
                    height: "28px",
                    backgroundColor: "#2D58FF",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#FF9A45",
                      color: "#1D1D1D",
                    },
                    borderRadius: "32px",
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      justifyContent: "center",
                    }}>
                    <AddIcon />
                    create
                  </Box>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* If there are chapters under this course */}
          {courseChapters?.length &&
            courseChapters.map((courseChapter, index) => (
              <Grid container key={index} sx={{ padding: "2%" }}>
                <Button
                  fullWidth
                  key={courseChapter._id}
                  sx={{
                    borderRadius: "6px",
                    height: "56px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 154, 69, 0.1)",
                    },
                    backgroundColor:
                      activeChapterIndex === index && "rgba(45, 88, 255, 0.04)",
                    // color: activeChapterIndex === index && "#2D58FF",
                  }}
                  onClick={() => handleChapterClick(courseChapter, index)}>
                  <SingleChapterNew
                    courseChapter={courseChapter}
                    index={index}
                  />
                </Button>
              </Grid>
            ))}
          <br />
        </Paper>
        {user.role === "trainer" || user.role === "admin" ? (
          <>
            <Grid container>
              <Grid
                item
                sx={{ paddingTop: "4%", justifyContent: "right" }}
                xs={12}>
                <Box>
                  <Button
                    // variant="contained"
                    variant="text"
                    disabled={isLoading}
                    type="submit"
                    fullWidth
                    sx={{
                      paddingLeft: "5%",
                      justifyContent: "left",
                      // width: "100%",
                      height: "45px",
                      // backgroundColor: "#2D58FF",
                      color: "#2D58FF",
                      "&:hover": {
                        backgroundColor: "#FF9A45",
                        color: "#1D1D1D",
                      },
                      borderRadius: "2px",
                    }}
                    onClick={() => handleCreateChapter(course._id)}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                      }}>
                      <AddIcon />
                      Create a new Chapter
                    </Box>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default CourseDrawerNew;
