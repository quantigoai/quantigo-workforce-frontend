import {Grid, Typography} from "@mui/material";
import React from "react";
import categoryIcon from "../../../../assets/images/categorysvg.svg";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const CourseCategoryChip = ({ category }) => {
 
  return (
    <>
      <Grid container>
        <Grid xs={2} sx={{ paddingTop: "1%" }}>
          <img src={categoryIcon} />
        </Grid>

        <Grid container xs={6} sx={{ paddingLeft: "8%" }}>
          <Grid xs={12}>
            <Typography sx={{ color: "#969CAF" }} variant="caption">
              CATEGORY
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>
              <b>{capitalizeFirstLetter(category)}</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseCategoryChip;
