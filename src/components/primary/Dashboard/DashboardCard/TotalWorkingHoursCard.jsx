/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Dashboard/DashboardCard/TotalWorkingHoursCard.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 2:12:01 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Grid, Typography } from "@mui/material";
import React from "react";
import iconPendding from "../../../../assets/images/pendingRequest.svg";
import { useSelector } from "react-redux";
const TotalWorkingHoursCard = () => {
     const {
       user: {  totalWorkingHours },
     } = useSelector((state) => state.user);
  return (
    <Grid
      container
      sx={{
        height: "100%",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "neutral.N000",
      }}
    >
      <Grid
        item
        xs={3.5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={iconPendding} />
      </Grid>
      <Grid item xs={8.5}>
        <Grid container>
          <Typography variant={"wpf_p4_medium"} sx={{ color: "neutral.N300" }}>
            Total Working Hours
          </Typography>
        </Grid>
        <Grid container sx={{ paddingTop: "4%" }}>
          <Grid item xs={8}>
            <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
              {totalWorkingHours}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TotalWorkingHoursCard;
