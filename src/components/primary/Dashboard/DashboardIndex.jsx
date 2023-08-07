import {Box, Grid} from "@mui/material";
import React from "react";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import DashboardCardIndex from "./DashboardCardIndex";

const DashboardIndex = () => {
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          mb: "2%",
        }}>
        <Grid
          container
          sx={{
            paddingBottom: "0%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}>
          <CommonHeader
            title="Dashboard"
            // description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            // isLoading={isLoading}
            customButton="dashboard"
          />
        </Grid>
      </Box> */}
      <Box
        sx={{
          // display: "flex",
          mb: "2%",
        }}>
        <DashboardCardIndex />
      </Box>
    </>
  );
};

export default DashboardIndex;
