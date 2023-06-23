/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/CourseDetailsPage/CourseIntroBox.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 20th 2023, 12:50:28 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, Grid, LinearProgress, Paper, Typography} from "@mui/material";
import React from "react";

const CourseIntroBox = ({ course, value }) => {
  return (
    <>
      <Box>
        <Paper elevation={0} sx={{ width: "100%", height: "300px" }}>
          <Grid container>
            <Grid item xs={12} sx={{ padding: "3%" }}>
              <Typography
                variant="h5"
                sx={{
                  paddingTop: "2%",
                  paddingLeft: "0%",
                  color: "#090080",
                  // fontSize: "28px",
                }}
              >
                {course.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ paddingLeft: "4%" }}>
              <Typography
                // variant="caption"
                sx={{
                  paddingTop: "2%",
                  paddingLeft: "0%",
                  color: "#969CAF",
                  fontSize: "12px",
                }}
              >
                {course.description}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                paddingLeft: "4%",
                paddingRight: "4%",
                paddingTop: "30%",
                bottom: "0px",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <span
                  style={{
                    fontSize: "25px",
                    color: "#2D58FF",
                    fontWeight: 500,
                  }}
                >
                  {value}%
                </span>
                <span
                  style={{
                    color: "#969CAF",
                  }}
                >
                  &nbsp; Completed
                </span>
                <LinearProgress
                  sx={{
                    color: "#2D58FF",
                    backgroundColor: "#969CAF",
                    height: "7px",
                    borderRadius: "5px",
                  }}
                  variant="determinate"
                  value={value}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default CourseIntroBox;
