/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/QuizField.jsx/ChapterName.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 12:23:43 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Grid, TextField} from "@mui/material";
import React from "react";

const ChapterName = ({ courseChapter, defaultValue = "" }) => {
  return (
    <>
      <Grid
        item
        xs={6}
        sx={{
          paddingRight: "2%",
          paddingTop: "1%",
          paddingBottom: "1%",
        }}
      >
        <TextField
          disabled
          variant="filled"
          fullWidth
          label="Course Chapter Name"
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
          defaultValue={defaultValue || courseChapter.title}
          autoComplete="off"
        ></TextField>
      </Grid>
    </>
  );
};

export default ChapterName;
