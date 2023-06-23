import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const ExpiredJobStatus = ({ jobstatus }) => {
  return (
    <>
      <Box
        variant="filled"
        sx={{
          width: "100%",
          height: "50px",
          background: "rgba(250, 147, 53, 0.14)",
          borderRadius: "100px",
        }}>
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingTop: "8%",
          }}>
          <Typography
            sx={{
              color: "#FF7803",
              justifyContent: "center",
            }}>
            {capitalizeFirstLetter(jobstatus)}
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default ExpiredJobStatus;
