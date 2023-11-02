/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Dashboard/DashboardCard/TotalProjectDrawerCard.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 2:11:35 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import iconPendding from "../../../../assets/images/pendingRequest.svg";
const TotalProjectDrawerCard = () => {
  const {
    totalCountData: { totalOngoingProjectDrawers },
  } = useSelector((state) => state.dashboard);

  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "neutral.N100",
        }}
      >
          <Grid item xs={12} xl={4} lg={5} md={5} sm={5}>
          <img src={iconPendding} />
        </Grid>
        <Grid item xs={12} xl={8} lg={7} md={7} sm={7}>
          <Grid container>
            <Typography variant={"wpf_p4_medium"} sx={{ color: "neutral.N300" }}>
              Total Ongoing Projects
            </Typography>
          </Grid>
          <Grid container sx={{ paddingTop: "4%" }}>
            <Grid item xs={8}>
              <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
                {totalOngoingProjectDrawers}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TotalProjectDrawerCard;
