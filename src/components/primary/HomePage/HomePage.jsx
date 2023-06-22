import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import logo from "../../../assets/images/logoBlue.png";


// TODO Remove this file
const HomePage = () => {
  return (
    <>
      <Box>
        <Grid sx={{ paddingTop: "15%", color: "#007bff" }}>
          <Typography variant="h3">
            Earn money working from comfort of your home
          </Typography>
        </Grid>
        <Grid sx={{ paddingTop: "5%", color: "#007bff" }}>
          <img src={logo} />
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
