/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/ServerSync/MiniCard.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 30th 2023, 1:02:16 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, Grid, Paper, Typography} from "@mui/material";
import React from "react";

const MiniCard = ({ item, count }) => {
  const decideName = (title) => {
    switch (title) {
      case "teamCreateCount":
        return "Team Created";
      case "teamUpdateCount":
        return "Team Updated";
      case "workspaceCreateCount":
        return "Workspace Created";
      case "workspaceUpdateCount":
        return "Workspace Updated";
      case "projectCreateCount":
        return "Project Created";
      case "projectUpdateCount":
        return "Project Updated";
      case "datasetCreateCount":
        return "Dataset Created";
      case "datasetUpdateCount":
        return "Dataset Updated";
      default:
        break;
    }
  };

  return (
    <>
      <Grid item xs={3}>
        <Box
          sx={{
            gap: 1,
            p: 1,
            m: 1,
          }}
        >
          <Grid container>
            <Paper
              elevation={0}
              sx={{ padding: "0%", width: "100%", height: "140px" }}
            >
              <Box sx={{ padding: "4%" }}>
                <Grid container>
                  <Typography sx={{ color: "#969CAF" }}>
                    {decideName(item)}
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "4%" }}>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ color: "##1D1D1D" }}
                      variant="h5"
                    ></Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={4}
                    sx={{ justifyContent: "center", paddingTop: "2%" }}
                  >
                    <Typography sx={{ color: "#2D58FF" }} variant="h3">
                      {count}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default MiniCard;
