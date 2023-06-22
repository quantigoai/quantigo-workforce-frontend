import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const CompleteJobStatus = ({ jobstatus }) => {
  return (
    <>
      <Box
        variant="filled"
        sx={{
          width: "100%",
          height: "50px",
          background: "rgba(0, 166, 113, 0.12)",
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
              color: "#00A671",
              justifyContent: "center",
            }}>
            {capitalizeFirstLetter(jobstatus)}
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default CompleteJobStatus;
