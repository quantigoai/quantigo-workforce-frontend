import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const DetailsItem = ({ Item1Title, Item1, Item2Title, Item2 }) => {
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={6} sx={{ borderRight: "1px solid #E6ECF5", padding: "15px" }}>
            <Typography variant="wf_h6_light" sx={{ color: "#091E42", opacity: "0.7" }}>
              {Item1Title}
            </Typography>
            <br />
            <Typography variant="wf_h5_bold" sx={{ color: "#091E42", fontWeight: "500" }}>
              {Item1}
            </Typography>
          </Grid>
          <Grid xs={6} sx={{ padding: "1%" }}>
            <Typography variant="wf_h6_light" sx={{ color: "#091E42", opacity: "0.7" }}>
              {Item2Title}
            </Typography>
            <br />
            <Typography variant="wf_h5_bold" sx={{ color: "#091E42", fontWeight: "500" }}>
              {Item2}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItem;
