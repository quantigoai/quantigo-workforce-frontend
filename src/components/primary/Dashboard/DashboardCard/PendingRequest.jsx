import {Grid, Paper, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {useSelector} from "react-redux";
import iconPendding from "../../../../assets/images/pendingRequest.svg";

const PendingRequest = () => {
  const { totalCountData } = useSelector((state) => state.dashboard);
  return (
    <>
      {/* <Grid container> */}
        <Paper
          elevation={0}
          sx={{
            padding: "0%",
            width: "100%",
            height: "100px",
            // display  :"flex",
            borderRadius: "8px",
            // backgroundColor:"blue",
            // justifyContent:"center"
          }}>
          <Box sx={{ padding: "8%", backgroundColor: "" }}>
            <Grid container sx={{ paddingTop: "0%", backgroundColor: "" }}>
              <Grid item xs={12} xl={4} lg={5} md={5} sm={5}>
                <img src={iconPendding} />
              </Grid>
              <Grid item xs={12} xl={8} lg={7} md={7} sm={7}>
                <Grid container>
                  <Typography variant={"wpf_p4_medium"} sx={{ color: "neutral.N300" }}>
                    Pending Request
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "4%" }}>
                  <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
                    {totalCountData.pendingUsers}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      {/* </Grid> */}
    </>
  );
};

export default PendingRequest;
