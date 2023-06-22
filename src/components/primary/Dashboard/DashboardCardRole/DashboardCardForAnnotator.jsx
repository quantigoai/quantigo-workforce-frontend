import React from "react";
import TotalWorkingHour from "../DashboardCard/TotalWorkingHour";
import {Grid} from "@mui/material";
import TotalJobs from "../DashboardCard/TotalJobs";
import ActiveJobsCard from "../DashboardCard/ActiveJobsCard";
import TotalCompletedJobs from "../DashboardCard/TotalCompletedJobs";
import AvailableJobsForUser from "../DashboardCard/AvailableJobsForUser";
import TotalCompletedCourse from "../DashboardCard/TotalCompletedCourse";

const DashboardCardForAnnotator = () => {
  return (
    <>
      <Grid item xs={4} sx={{ paddingRight: "2%" }}>
        <TotalJobs />
      </Grid>
      <Grid item xs={4} sx={{ paddingRight: "2%" }}>
        <ActiveJobsCard />
      </Grid>
      <Grid item xs={4} sx={{ paddingRight: "0%" }}>
        <TotalWorkingHour />
      </Grid>
      <Grid item xs={4} sx={{ paddingTop: "2%", paddingRight: "2%" }}>
        <TotalCompletedJobs />
      </Grid>
      <Grid item xs={4} sx={{ paddingTop: "2%", paddingRight: "2%" }}>
        <AvailableJobsForUser />
      </Grid>
      <Grid item xs={4} sx={{ paddingTop: "2%", paddingRight: "0%" }}>
        <TotalCompletedCourse />
      </Grid>
    </>
  );
};

export default DashboardCardForAnnotator;
