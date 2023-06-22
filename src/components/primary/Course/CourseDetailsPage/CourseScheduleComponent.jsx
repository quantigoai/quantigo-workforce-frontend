import {Grid, Paper, Typography} from "@mui/material";
import React from "react";

const CourseScheduleComponent = () => {
  return (
    <>
      <Paper elevation={0} sx={{ width: "100%" }}>
        <Grid container sx={{ paddingLeft: "5%", paddingTop: "5%" }}>
          <Grid container sx={{ borderEnd: "89px " }}>
            <Typography variant="h6" style={{ color: "#090080" }}>
              Schedule
            </Typography>
          </Grid>
          <Grid container>
            <Typography>Start date,</Typography>
          </Grid>
          <Grid container>
            <Typography>End date</Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ paddingLeft: "5%", paddingTop: "5%" }}>
          <Grid xs={12}>
            <Typography variant="h6" style={{ color: "#090080" }}>
              Upcoming
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>Remote Work </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>managing Remote work</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CourseScheduleComponent;
