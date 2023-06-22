import {Grid, TextField} from "@mui/material";
import React from "react";

const ChapterName = ({ courseChapter={},register }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          fullWidth
          sx={{ backgroundColor: "#FFFFFF" }}
          name="name"
          label="Chapter Title"
          defaultValue={courseChapter && courseChapter.title}
          {...register("title", { required: true })}></TextField>
      </Grid>
    </>
  );
};

export default ChapterName;
