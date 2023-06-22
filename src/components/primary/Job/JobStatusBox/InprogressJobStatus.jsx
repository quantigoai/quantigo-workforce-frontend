import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const InprogressJobStatus = ({ jobstatus }) => {
  return (
    <>
      <Box
        variant="filled"
        sx={{
          width: "100%",
          height: "50px",
          background: "rgba(45, 88, 255, 0.1)",
          borderRadius: "100px",
        }}>
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingTop: "10%",
          }}>
          <Typography
            sx={{
              color: "#2D58FF",
              justifyContent: "center",
            }}>
            {capitalizeFirstLetter(jobstatus)}
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default InprogressJobStatus;
