import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import iconPendding from "../../../../assets/images/dashboardIcon/ApproveRe.svg";

const ApprovedRequest = () => {
  const dispatch = useDispatch();
  const { totalCountData } = useSelector((state) => state.dashboard);
  const { users } = useSelector((state) => state.user);

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
          <Box sx={{ padding: "6%", position: "relative" }}>
            <Grid container sx={{ paddingTop: "0%" }}>
              <Grid item xs={12} xl={4} lg={5} md={5} sm={5}>
                <img src={iconPendding} />
              </Grid>
              <Grid item xs={12} xl={8} lg={7} md={7} sm={7}>
                <Grid container>
                  <Typography variant={"wpf_p4_medium"} sx={{ color: "neutral.N300" }}>
                    Approved Request
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "4%" }}>
                  <Grid item xs={8}>
                    <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
                      <b> {totalCountData.activeUsers}</b>
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

export default ApprovedRequest;
