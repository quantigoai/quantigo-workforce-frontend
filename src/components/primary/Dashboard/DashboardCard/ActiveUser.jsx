import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import iconPendding from "../../../../assets/images/dashboardIcon/activeAnnotator.svg";

const ActiveUser = () => {
  const { totalCountData } = useSelector((state) => state.dashboard);

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
          }}>
          <Box sx={{ padding: "4%", position: "relative" }}>
            <Grid container sx={{ paddingTop: "3%" }}>
              <Grid item xs={3}>
                <img src={iconPendding} />
              </Grid>
              <Grid item xs={9}>
                <Grid container>
                  <Typography sx={{ color: "#3C4D6B" }}>
                    Active Annotators
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "4%" }}>
                  <Grid item xs={8}>
                    <Typography sx={{ color: "#091E42" }} variant="h5">
                      <b> {totalCountData.activeAnnotators}</b>
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

export default ActiveUser;
