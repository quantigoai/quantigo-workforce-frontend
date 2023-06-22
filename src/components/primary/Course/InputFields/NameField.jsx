/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/NameField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:17:30 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Grid, TextField } from "@mui/material";
import React from "react";

const NameField = ({ course = {}, register, nameValidation }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          fullWidth
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
            // height: "56px",
          }}
          name="name"
          label="Course Name"
          defaultValue={course && course.name}
          onChange={nameValidation}
          // {...register("name", { required: true })}
        ></TextField>
      </Grid>
    </>
  );
};

export default NameField;
