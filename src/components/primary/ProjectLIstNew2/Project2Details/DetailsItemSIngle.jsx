import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const DetailsItemSIngle = ({ Item1Title, Item1, Item2Title, Item2, Item3Title, Item3 }) => {
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "20px" }}>
            <Typography variant="wf_h6_light" sx={{ color: "#091E42", opacity: "0.7" }}>
              {Item1Title}
            </Typography>
            <br />
            <Typography variant="wf_h5_bold" sx={{ color: "#091E42", fontWeight: "500" }}>
              {Item1}
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "20px" }}>
            <Typography variant="wf_h6_light" sx={{ color: "#091E42", opacity: "0.7" }}>
              {Item2Title}
            </Typography>
            <br />
            <Typography variant="wf_h5_bold" sx={{ color: "#091E42", fontWeight: "500" }}>
              {Item2}
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ padding: "20px" }}>
            <Typography variant="wf_h6_light" sx={{ color: "#091E42", opacity: "0.7" }}>
              {Item3Title}
            </Typography>
            <br />
            <Typography variant="wf_h5_bold" sx={{ color: "#091E42", fontWeight: "500" }}>
              {Item3}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItemSIngle;
