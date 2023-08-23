import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const DetailsItem = ({ Item1Title, Item1, Item2Title, Item2 }) => {
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={6} sx={{ borderRight: "1px solid #E6ECF5", padding: "2%" }}>
            <Typography variant="caption" sx={{ color: "#7B98BA" }}>
              {Item1Title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", color: "#091E42" }}>
              {Item1}
            </Typography>
          </Grid>
          <Grid xs={6} sx={{ padding: "2%" }}>
            <Typography sx={{ color: "#7B98BA" }} variant="caption">
              {Item2Title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", color: "#091E42" }}>
              {Item2}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItem;
