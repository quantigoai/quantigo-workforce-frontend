import {Grid, TextField} from "@mui/material";
import React from "react";

const EstimatedTimeToRead = ({ courseChapter, register }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          fullWidth
          type="number"
          sx={{ backgroundColor: "#FFFFFF" }}
          name="estimatedTimeToRead"
          label="Estimated Time To Read (Minutes)"
          defaultValue={courseChapter && courseChapter.estimatedTimeToRead}
          {...register("estimatedTimeToRead")}
          InputProps={{
            inputProps: { min: 0 },
          }}></TextField>
      </Grid>
    </>
  );
};

export default EstimatedTimeToRead;
