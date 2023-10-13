/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/CustomTableCell/BloodGroupCell.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 6th 2023, 2:17:28 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {Typography} from "@mui/material";
import React from "react";

const BloodGroupCell = ({ data }) => {
  const formatBloodGroup = (data) => {
    switch (true) {
      case data === "(A+)":
        return "A+";
      case data === "(A-)":
        return "A-";
      case data === "(B+)":
        return "B+";
      case data === "(B-)":
        return "B-";
      case data === "(AB+)":
        return "AB+";
      case data === "(AB-)":
        return "AB-";
      case data === "(O+)":
        return "O+";
      case data === "(O-)":
        return "O-";
      default:
        return "N/A";
    }
  };
  return (
    <>
      <Typography variant="wpf_p4_regular" color="neutral.700">
        {formatBloodGroup(data)}
      </Typography>
    </>
  );
};

export default BloodGroupCell;
