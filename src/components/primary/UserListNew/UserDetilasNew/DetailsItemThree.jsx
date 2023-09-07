import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const DetailsItemThree = ({
  Item1Title,
  Item1,
  Item2Title,
  Item2,
  Item3Title,
  Item3,
}) => {
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "2%" }}>
            <Typography variant="caption" sx={{ color: "#7B98BA" }}>
              {Item1Title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", color: "#091E42" }}>
              <b>{Item1}</b>
            </Typography>
          </Grid>

          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "2%" }}>
            <Typography sx={{ color: "#7B98BA" }} variant="caption">
              {Item2Title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", color: "#091E42" }}>
              <b>{Item2}</b>
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ padding: "2%" }}>
            <Typography sx={{ color: "#7B98BA" }} variant="caption">
              {Item3Title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", color: "#091E42" }}>
              <b> {Item3}</b>
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItemThree;
