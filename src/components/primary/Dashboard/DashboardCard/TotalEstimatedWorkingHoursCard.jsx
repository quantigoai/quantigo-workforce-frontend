/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Dashboard/DashboardCard/TotalEstimatedWorkingHoursCard.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 27th 2023, 2:12:33 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import iconPendding from "../../../../assets/images/pendingRequest.svg";
const TotalEstimatedWorkingHoursCard = () => {
  const {
    user: { estimatedPaymentForProjects, role, totalPaidAmount },
  } = useSelector((state) => state.user);
  const [estimatedWorkingHours, setEstimatedWorkingHours] = React.useState(0);
  
    useEffect(() => {
    if (estimatedPaymentForProjects) {
      const totalHours = estimatedPaymentForProjects.reduce((acc, curr) => {
        return acc + curr.estimatedWorkingHours;
      }, 0);
      setEstimatedWorkingHours(totalHours);
    }
  }, [estimatedPaymentForProjects]);
    
  return (
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
            Total Estimated Working Hours
          </Typography>
        </Grid>
        <Grid container sx={{ paddingTop: "4%" }}>
          <Grid item xs={8}>
            <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
              {estimatedWorkingHours}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TotalEstimatedWorkingHoursCard;
