/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/CourseNew/ChapterHeader.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 13th 2023, 10:47:31 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

const ChapterHeader = () => {
  const { courseChapters, courseChapter, course } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  // const [handleChapterClick] = useOutletContext();
  return (
    <>
      <Box>
        <Paper sx={{ padding: "0.5%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={12}>
              <FormControl variant='filled' sx={{ m: 1, minWidth: "90%" }}>
                <InputLabel id='demo-simple-select-filled-label'>Chapters</InputLabel>
                <Select
                  labelId='demo-simple-select-filled-label'
                  id='demo-simple-select-filled'
                  value={courseChapter._id}
                >
                  {courseChapters.map((chapter, index) => (
                    <MenuItem
                      key={chapter._id}
                      value={chapter._id}
                      // onClick={() => handleChapterClick(chapter, index)}
                    >
                      {chapter.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={8}>
              {user.role === "admin" || user.role === "trainer" ? (
                <></>
              ) : (
                <>
                  {" "}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "blue",
                    }}
                  >
                    {course.progress}%
                    <LinearProgress
                      value={course.progress}
                      variant="determinate"
                      sx={{
                        height: "20px",
                        borderRadius: "5px",
                      }}
                    />
                  </Typography>
                </>
              )}
            </Grid> */}
          </Box>
        </Paper>
      </Box>
      <br />
    </>
  );
};

export default ChapterHeader;
