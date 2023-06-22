import { Grid, TextField } from "@mui/material";
import React from "react";

const LiveSessionLink = ({ course, register }) => {
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
          name="liveSessionLink"
          label="Live Session Link"
          defaultValue={course && course.liveSessionLink}
          {...register("liveSessionLink")}></TextField>
      </Grid>
    </>
  );
};

export default LiveSessionLink;
