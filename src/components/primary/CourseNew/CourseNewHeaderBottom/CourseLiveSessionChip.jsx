import {Grid, Typography} from "@mui/material";
import React from "react";
import LiveIcon from "../../../../assets/images/LiveIcon.svg";
import TakenTimeAndDate from "../../../shared/CountDown/TakenTimeAndDate";

const CourseLiveSessionChip = ({ course }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={1} sx={{ paddingTop: "1%" }}>
          <img src={LiveIcon} />
        </Grid>

        <Grid item xs={11} sx={{ paddingLeft: "8%" }}>
          <Grid xs={12}>
            <Typography sx={{ color: "#969CAF" }} variant="caption">
              Live Session Time
            </Typography>
          </Grid>
          <Grid xs={12}>
            <TakenTimeAndDate takenAt={course?.liveSessionStartedAt} />
            {/* <Typography>Live</Typography> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseLiveSessionChip;
