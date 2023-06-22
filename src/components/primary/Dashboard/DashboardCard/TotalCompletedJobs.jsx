import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NorthIcon from "@mui/icons-material/North";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getAllAssignedJob } from "../../../../features/slice/jobSlice";

const TotalCompletedJobs = () => {
  const { totalCountData } = useSelector((state) => state.dashboard);
  // const { assignedJob } = useSelector((state) => state.job);
  // const dispatch = useDispatch();
  // const [totalJob, setTotalJob] = useState(0);
  // const JobLength = assignedJob.length;
  // useEffect(() => {
  //   dispatch(getAllAssignedJob());
  //   assignedJob.map((job, i) => {
  //     if (job.status === "completed") {
  //       setTotalJob(i + 1);
  //     }
  //   });
  // }, []);
  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{ padding: "0%", width: "100%", height: "100px" }}>
          <Box sx={{ padding: "4%" }}>
            <Grid container>
              <Typography sx={{ color: "#969CAF" }}>
                My Completed Jobs
              </Typography>
            </Grid>
            <Grid container sx={{ paddingTop: "4%" }}>
              <Grid item xs={8}>
                <Typography sx={{ color: "##1D1D1D" }} variant="h5">
                  {totalCountData.requestedUsersCompletedJobs}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default TotalCompletedJobs;
