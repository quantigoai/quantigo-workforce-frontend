import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import NorthIcon from "@mui/icons-material/North";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const InActiveRequest = () => {
  const dispatch = useDispatch();
  const { totalCountData } = useSelector((state) => state.dashboard);

  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{ padding: "0%", width: "100%", height: "100px" }}
        >
          <Box sx={{ padding: "4%" }}>
            <Grid container>
              <Typography sx={{ color: "#969CAF" }}>Inactive Annotators</Typography>
            </Grid>
            <Grid container sx={{ paddingTop: "4%" }}>
              <Grid item xs={8}>
                <Typography sx={{ color: "##1D1D1D" }} variant="h5">
                  {totalCountData.inActiveAnnotators}
                </Typography>
              </Grid>
              {/* <Grid
                container
                item
                xs={4}
                sx={{ justifyContent: "right", paddingTop: "2%" }}
              >
                <Typography sx={{ color: "#2D58FF" }} variant="body2">
                  {" "}
                  + {activeUser}%
                </Typography>
                <NorthIcon sx={{ color: "#2D58FF", fontSize: "small" }} />
              </Grid> */}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default InActiveRequest;
