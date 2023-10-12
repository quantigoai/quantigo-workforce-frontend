import {Grid, TextField} from "@mui/material";
import React from "react";

const ChapterDescription = ({ courseChapter = {}, register }) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant="filled"
        fullWidth
        sx={{ backgroundColor: "#FFFFFF" }}
        name="description"
        label="Chapter Description"
        defaultValue={courseChapter && courseChapter.description}
        {...register("description", { required: true })}></TextField>
    </Grid>
  );
};

export default ChapterDescription;
