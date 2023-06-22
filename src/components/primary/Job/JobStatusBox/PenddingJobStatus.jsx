import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const PenddingJobStatus = ({ jobstatus }) => {
  return (
    <>
      <Box
        variant="filled"
        sx={{
          width: "100%",
          height: "50px",
          background: "rgba(216, 81, 75, 0.12)",
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
              color: "#D8514B",
              justifyContent: "center",
            }}>
            {capitalizeFirstLetter(jobstatus)}
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default PenddingJobStatus;
