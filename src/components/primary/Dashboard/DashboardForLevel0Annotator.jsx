import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCountData } from "../../../features/slice/dashboardSlice";

const DashboardForLevel0Annotator = () => {
  const paperstyle = { padding: "3%", width: "80%", height: 400, borderRadius: 10, margin: "10px auto" };
  const teamicondiv = { paddingLeft: "5%", paddingTop: "2%" };
  const teamicondiv1 = { paddingLeft: "48%", paddingTop: "2%" };
  const dispatch = useDispatch();
  const { totalCountData } = useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(getTotalCountData());
  }, []);
  return (
    <>
      <Grid container style={teamicondiv}>
        <Grid item xs={6}>
          <Box style={{ padding: "0px", paddingLeft: "0%" }}>
            <Paper elevation={2} style={paperstyle}>
              <Typography variant="h4">Active Job</Typography>
              <Typography variant="h4">{totalCountData.activeJobs}</Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ padding: "0px", paddingLeft: "0%" }}>
            <Paper elevation={2} style={paperstyle}>
              <Typography variant="h4">Available Job</Typography>
              <Typography variant="h4">{totalCountData.availableJobs}</Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardForLevel0Annotator;
