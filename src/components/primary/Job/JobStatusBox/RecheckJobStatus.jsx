import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const RecheckJobStatus = ({ jobstatus }) => {
  return (
    <>
      <Box
        variant="filled"
        sx={{
          width: "100%",
          height: "50px",
          background: "rgba(9, 0, 128, 0.1)",
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
              color: "#090080",
              justifyContent: "center",
            }}>
            {capitalizeFirstLetter(jobstatus)}
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default RecheckJobStatus;
