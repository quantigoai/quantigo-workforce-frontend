import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NorthIcon from "@mui/icons-material/North";
import { useSelector } from "react-redux";

const OnGoingProject = () => {
  const { totalCountData } = useSelector((state) => state.dashboard);
  const { onGoingProjects } = totalCountData;
  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{ padding: "0%", width: "100%", height: "100px" }}
        >
          <Box sx={{ padding: "4%" }}>
            <Grid container>
              <Typography sx={{ color: "#969CAF" }}>
                Ongoing Projects
              </Typography>
            </Grid>
            <Grid container sx={{ paddingTop: "4%" }}>
              <Grid item xs={8}>
                <Typography sx={{ color: "##1D1D1D" }} variant="h5">
                  {onGoingProjects || 0}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default OnGoingProject;
