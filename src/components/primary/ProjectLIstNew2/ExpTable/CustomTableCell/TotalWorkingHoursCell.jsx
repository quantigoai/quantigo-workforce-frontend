/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/CustomTableCell/TotalWorkingHoursCell.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 6th 2023, 2:34:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Typography } from "@mui/material";
import React from "react";

const TotalWorkingHoursCell = ({ data }) => {
  return (
    <>
      <Typography variant="wpf_p4_regular" color="neutral.700">
        {data?.toFixed(2)}
      </Typography>
    </>
  );
};

export default TotalWorkingHoursCell;
