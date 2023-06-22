import React from "react";
import levelImage from "../../../../assets/images/Frame 2.svg";

import categoryIcon from "../../../../assets/images/categorysvg.svg";
import {Grid, Typography} from "@mui/material";

const CourseNewHeaderBottom = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={2} sx={{ borderRight: "1px solid #EBEDF5" }}>
          <Grid container>
            <Grid xs={2} sx={{ paddingTop: "6%" }}>
              <img src={levelImage} />
            </Grid>

            <Grid container xs={6} sx={{ paddingLeft: "8%" }}>
              <Grid xs={12}>
                <Typography sx={{ color: "#969CAF" }}>LEVEL</Typography>
              </Grid>
              <Grid xs={12}>
                <Typography>Basic</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ paddingLeft: "3%", borderRight: "1px solid #EBEDF5" }}>
          <Grid container>
            <Grid xs={2} sx={{ paddingTop: "6%" }}>
              <img src={categoryIcon} />
            </Grid>

            <Grid container xs={6} sx={{ paddingLeft: "8%" }}>
              <Grid xs={12}>
                <Typography sx={{ color: "#969CAF" }}>CATEGORY</Typography>
              </Grid>
              <Grid xs={12}>
                <Typography>Image</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sx={{ paddingLeft: "3%" }}>
          <Grid container>
            <Grid xs={2} sx={{ paddingTop: "5%" }}>
              <img src={levelImage} />
            </Grid>

            <Grid container xs={6} sx={{ paddingLeft: "8%" }}>
              <Grid xs={12}>
                <Typography sx={{ color: "#969CAF" }}>Skills</Typography>
              </Grid>
              <Grid xs={12}>
                <Typography>Basic</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseNewHeaderBottom;
