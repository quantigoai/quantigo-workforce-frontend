import {Grid, Paper, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import iconPendding from "../../../../assets/images/dashboardIcon/TotalWorkingHourIcon.svg";

const TotalWorkingHour = () => {
  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{
            padding: "0%",
            width: "100%",
            height: "100px",
            borderRadius: "8px",
          }}
        >
          <Box sx={{ padding: "6%", position: "relative" }}>
            <Grid container sx={{ paddingTop: "0%" }}>
              <Grid item xs={3.5}>
                <img src={iconPendding} />
              </Grid>
              <Grid item xs={8.5}>
                <Grid container>
                <Typography variant={"wpf_p4_medium"} sx={{ color: "neutral.N300" }}>
                   Total Working Hour
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "4%" }}>
                  <Grid item xs={8}>
                  <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
                       <b> 0</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default TotalWorkingHour;
