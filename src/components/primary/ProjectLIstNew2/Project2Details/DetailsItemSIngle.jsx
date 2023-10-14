import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DetailsItemSIngle = ({ Item1Title, Item1, Item2Title, Item2, Item3Title, Item3 }) => {
  const { isLightTheme } = useSelector((user) => user.theme);
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "20px" }}>
            <Typography
              variant="wpf_h8_regular"
              sx={{ color: isLightTheme ? "#091E42" : "white", opacity: isLightTheme ? "0.7" : "1" }}
            >
              {Item1Title}
            </Typography>
            <br />
            <Typography variant="wpf_p3_medium_2" sx={{ color: isLightTheme ? "#091E42" : "white", fontWeight: "500" }}>
              {Item1}
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "20px" }}>
            <Typography
              variant="wpf_h8_regular"
              sx={{ color: isLightTheme ? "#091E42" : "white", opacity: isLightTheme ? "0.7" : "1" }}
            >
              {Item2Title}
            </Typography>
            <br />
            <Typography variant="wpf_p3_medium_2" sx={{ color: isLightTheme ? "#091E42" : "white", fontWeight: "500" }}>
              {Item2}
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ padding: "20px" }}>
            <Typography
              variant="wpf_h8_regular"
              sx={{ color: isLightTheme ? "#091E42" : "white", opacity: isLightTheme ? "0.7" : "1" }}
            >
              {Item3Title}
            </Typography>
            <br />
            <Typography variant="wpf_p3_medium_2" sx={{ color: isLightTheme ? "#091E42" : "white", fontWeight: "500" }}>
              {Item3}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItemSIngle;
