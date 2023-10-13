import {Grid, Stack, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";

const DetailsItemThree = ({ Item1Title, Item1, Item2Title, Item2, Item3Title, Item3 }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "2%" }}>
            <Typography variant="wf_h6_light" sx={{ color: isLightTheme ? "#7B98BA" : "#fff" }}>
              {Item1Title}
            </Typography>
            <br />
            <Typography
              variant="wf_h5_bold"
              sx={{
                color: isLightTheme ? "#091E42" : "#fff",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {Item1}
            </Typography>
          </Grid>

          <Grid xs={4} sx={{ borderRight: "1px solid #E6ECF5", padding: "2%" }}>
            <Typography sx={{ color: isLightTheme ? "#7B98BA" : "#fff" }} variant="wf_h6_light">
              {Item2Title}
            </Typography>
            <br />
            <Typography variant="wf_h5_bold" sx={{ color: isLightTheme ? "#091E42" : "#fff" }}>
              {Item2}
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ padding: "2%" }}>
            <Typography sx={{ color: isLightTheme ? "#7B98BA" : "#fff" }} variant="wf_h6_light">
              {Item3Title}
            </Typography>
            <br />
            <Typography variant="wf_h5_bold" sx={{ color: isLightTheme ? "#091E42" : "#fff" }}>
              {Item3}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default DetailsItemThree;
