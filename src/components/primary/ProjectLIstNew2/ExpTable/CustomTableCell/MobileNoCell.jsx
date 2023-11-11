/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ExpTable/CustomTableCell/MobileNoCell.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, October 6th 2023, 2:38:20 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Typography} from "@mui/material";
import React from "react";

const MobileNoCell = ({ data }) => {
  const formatPhoneNumber = (phoneNumberString) => {
    if (phoneNumberString.length > 11) {
      return phoneNumberString;
    } else if (phoneNumberString.length === 11) {
      const firstTwoString = phoneNumberString?.slice(0, 2);
      if (firstTwoString !== "01") {
        return `invalid`;
      } else {
        return phoneNumberString;
      }
    } else if (phoneNumberString.length === 10) {
      const firstString = phoneNumberString[0];
      if (firstString !== "0") {
        return `0${phoneNumberString}`;
      }
    } else {
      return phoneNumberString;
    }
  };
  return (
    <>
      <Typography variant="wpf_p4_regular" color="neutral.700">
        {data ? formatPhoneNumber(data) : data}
      </Typography>
    </>
  );
};

export default MobileNoCell;
