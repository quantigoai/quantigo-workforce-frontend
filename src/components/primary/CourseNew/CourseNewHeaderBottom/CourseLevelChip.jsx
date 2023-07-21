import { Grid, Typography } from "@mui/material";
import React from "react";
import levelImage from "../../../../assets/images/Frame 2.svg";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";

const basicStyle = {
  width: "100%",
  height: "23px",
  background: "#A93439",
  borderRadius: "100px",
};
const advanceStyle = {
  width: "100%",
  height: "23px",
  background: "#4A2D8B ",
  borderRadius: "100px",
};
const beginnerStyle = {
  width: "100%",
  height: "23px",
  background: "#82BD40",
  borderRadius: "100px",
};
const intermediateStyle = {
  width: "100%",
  height: "23px",
  background: "#EB6651",
  borderRadius: "100px",
};
const CourseLevelChip = ({ level }) => {
  
  let style = {};

  switch (level) {
    case "basic":
      style = basicStyle;
      break;
    case "beginner":
      style = beginnerStyle;
      break;
    case "intermediate":
      style = intermediateStyle;
      break;
    case "advance":
      style = advanceStyle;
      break;
    default:
      style = beginnerStyle;
      break;
  }
  return (
    <>
      <Grid container>
        <Grid item xs={4} sx={{ paddingTop: "3%" }}>
          <img src={levelImage} />
        </Grid>

        <Grid item xs={7} sx={{}}>
          <Grid xs={12}>
            <Typography sx={{ color: "#969CAF" }} variant="caption">
              LEVEL
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>
              <b>{capitalizeFirstLetter(level)}</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseLevelChip;
