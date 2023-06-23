import {Grid, Paper, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {useSelector} from "react-redux";

const TotalAnnotator = () => {
  const { totalCountData } = useSelector((state) => state.dashboard);
  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{ padding: "0%", width: "100%", height: "100px" }}>
          <Box sx={{ padding: "4%" }}>
            <Grid container>
              <Typography sx={{ color: "#969CAF" }}  >
                Total Annotators
              </Typography>
            </Grid>
            <Grid container sx={{ paddingTop: "4%" }}>
              <Grid item xs={8}>
                <Typography sx={{ color: "##1D1D1D" }} variant="h5">
                  {totalCountData.level_0_annotator +
                    totalCountData.level_1_annotator +
                    totalCountData.level_2_annotator +
                    totalCountData.level_3_annotator || 0}
                </Typography>
              </Grid>
              {/* <Grid
                container
                item
                xs={4}
                sx={{ justifyContent: "right", paddingTop: "2%" }}>
                <Typography sx={{ color: "#2D58FF" }} variant="body2">
                  +
                  {totalCountData.level_0_annotator +
                    totalCountData.level_1_annotator +
                    totalCountData.level_2_annotator +
                    totalCountData.level_3_annotator}
                  %
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

export default TotalAnnotator;
