/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/QuizField.jsx/Duration.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 12:16:34 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Grid, TextField} from "@mui/material";
import React from "react";

const Duration = ({ register, defaultValue = "" }) => {
  return (
    <>
      <Grid
        item
        xs={6}
        sx={{
          paddingTop: "1%",

          paddingRight: "2%",
          paddingBottom: "1%",
        }}
      >
        <TextField
          variant="filled"
          fullWidth
          defaultValue={defaultValue}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}
          name="duration"
          type={"number"}
          label="Duration (Minutes)"
          {...register("duration", { required: true })}
        ></TextField>
      </Grid>
    </>
  );
};

export default Duration;
