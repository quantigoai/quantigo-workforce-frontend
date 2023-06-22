/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/QuizField.jsx/QuizName.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 12:20:14 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Grid, TextField} from "@mui/material";
import React from "react";

const QuizName = ({ register, defaultValue = "" }) => {
  return (
    <>
      <Grid
        item
        xs={6}
        sx={{
          paddingLeft: "2%",
          paddingRight: "2%",
          paddingTop: "1%",
        }}
      >
        <TextField
          variant="filled"
          fullWidth
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
          defaultValue={defaultValue}
          name="name"
          label="Quiz Name"
          {...register("name", { required: true })}
          autoComplete="off"
        ></TextField>
      </Grid>
    </>
  );
};

export default QuizName;
