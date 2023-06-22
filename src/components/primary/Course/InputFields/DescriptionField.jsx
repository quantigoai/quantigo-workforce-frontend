/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/DescriptionField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:19:28 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Grid, TextField} from "@mui/material";
import React from "react";

const DescriptionField = ({ course = {}, register }) => {
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
            height: "56px",
          }}
          name="description"
          label="Course description"
          defaultValue={course && course.description}
          {...register("description", { required: true })}></TextField>
      </Grid>
    </>
  );
};

export default DescriptionField;
