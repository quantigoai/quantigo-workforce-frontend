import {Box} from "@mui/material";
import React from "react";
import DashboardCardIndex from "./DashboardCardIndex";

const DashboardIndex = () => {
  return (
    <>
      <Box
        sx={{
          mb: "2%",
        }}
      >
        <DashboardCardIndex />
      </Box>
    </>
  );
};

export default DashboardIndex;
