/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/SingleChapter.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 20th 2023, 1:47:49 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Chip, Grid, Typography } from "@mui/material";
import React from "react";
import iconButton from "../../../assets/images/Vector (1).png";

const SingleChapter = ({ courseChapter }) => {
  const Style80 = {
    background: "#82BD40",
    color: "#FFFFFF",
    FontSize: "12px",
    width : "100%"
    
  };
  const Style75 = {
    background: "#4A2D8B ",
    color: "#FFFFFF",
    FontSize: "12px",
    width : "100%"
  };
  const Style70 = {
    background: "#EB6651 ",
    color: "#FFFFFF",
    FontSize: "12px",
    width : "100%"
  };

  const scoreStyle = (score) => {
    let style = {};
    if (score >= 80) {
      style = Style80;
    } else if (score >= 75) {
      style = Style75;
    } else if (score >= 70) {
      style = Style70;
    } else {
      style = Style70;
    }
    return style;
  };

  return (
    <>
      <Grid container>
        <Grid item xs={8} sx={{ display: "flex" }}>
          <Typography sx={{ color: "#090080" }}>
            {courseChapter.title}
          </Typography>
        </Grid>
        {courseChapter.score !== undefined && (
          <Grid item xs={4}>
            {/* <Chip
              label={`score : ${courseChapter.score}`}
              sx={scoreStyle(courseChapter.score)}
            ></Chip> */}
            <Chip
              label={`Avg: ${courseChapter.scoreAverage}`}
              sx={scoreStyle(courseChapter.scoreAverage)}
            ></Chip>
          </Grid>
        )}
      </Grid>

      <Grid item xs={2} sx={{ justifyContent: "right" }}>
        <img src={iconButton} />
      </Grid>
    </>
  );
};

export default SingleChapter;
