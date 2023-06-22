import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
const paperstyle = {
  backgroundColor: "#FFFFFF",
  padding: "3%",
  width: "92%",
  height: "100%",
  borderRadius: "2px",
};

const SettingUpAccount = () => {
  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            // justifyContent: "center",
            paddingLeft: "0%",
            paddingBottom: "2%",
          }}>
          <Typography variant="caption" sx={{ color: "#090080" }}>
            To initiate your onboarding process with QAI Workforce, please open
            your preferred web browser and enter the following URL in the
            address bar: https://qaiworkforce.netlify.app/ The homepage of the
            platform, which acts as the starting point for accessing all of its
            features and functionalities, will be displayed after the website
            has fully loaded. The login page will appear.
          </Typography>
        </Grid>
      </Box>
      <Box>
        <Paper elevation={0} style={paperstyle}>
          <Grid container></Grid>
        </Paper>
      </Box>
    </>
  );
};

export default SettingUpAccount;
