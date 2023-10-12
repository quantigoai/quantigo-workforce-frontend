import {Grid, TextField} from "@mui/material";
import React from "react";

const ChapterNoFiledForUpdate = ({ chapterNo }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          disabled
          variant="filled"
          fullWidth
          sx={{ backgroundColor: "#FFFFFF" }}
          name="chapterNo"
          label="Chapter No"
          defaultValue={chapterNo}
        ></TextField>
      </Grid>
    </>
  );
};

export default ChapterNoFiledForUpdate;
