import {Grid, TextField} from "@mui/material";
import React from "react";

const CourseNameField = ({ courseName }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          disabled
          variant="filled"
          fullWidth
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Course Name"
          defaultValue={courseName}></TextField>
      </Grid>
    </>
  );
};

export default CourseNameField;
