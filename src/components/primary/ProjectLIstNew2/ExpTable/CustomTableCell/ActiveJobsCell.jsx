import { Typography } from "@mui/material";
import React from "react";

const ActiveJobsCell = ({ data }) => {
  return (
    <>
      <Typography variant="wpf_p4_regular" color="neutral.700">
        {data.length}
      </Typography>
    </>
  );
};

export default ActiveJobsCell;
