import {Grid} from "@mui/material";
import React from "react";
import TotalJobs from "../DashboardCard/TotalJobs";
import ActiveJobsCard from "../DashboardCard/ActiveJobsCard";
import TotalAnnotator from "../DashboardCard/TotalAnnotator";
import OnGoingProject from "../DashboardCard/OnGoingProject";
import ActiveUser from "../DashboardCard/ActiveUser";
import InActiveRequest from "../DashboardCard/InActiveRequest";

const DashboardCardforDM = () => {
  return (
    <>
      <Grid item xs={4} sx={{ paddingRight: "2%" }}>
        <TotalJobs />
      </Grid>
      <Grid item xs={4} sx={{ paddingRight: "2%" }}>
        <ActiveJobsCard />
      </Grid>
      <Grid item xs={4}>
        <TotalAnnotator />
      </Grid>
      <Grid item xs={4} sx={{ paddingTop: "2%", paddingRight: "2%" }}>
        <OnGoingProject />
      </Grid>
      <Grid item xs={4} sx={{ paddingTop: "2%", paddingRight: "2%" }}>
        <ActiveUser />
      </Grid>
      <Grid item xs={4} sx={{ paddingTop: "2%" }}>
        <InActiveRequest />
      </Grid>
    </>
  );
};

export default DashboardCardforDM;
